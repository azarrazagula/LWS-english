import React, { useState, useEffect } from "react";
import { Level, Lesson, Test } from "./types";
import { lessons, assessments } from "./data/lessons";
import { LuminousBg } from "./components/LuminousBg";
import { Header } from "./components/header/Header";
import { AppRouter } from "./components/router/AppRouter";

/**
 * LWS-English: Main Application Entry Point
 * Purpose: Manages global states (completed lessons, test scores, stars, selected level),
 * persists user progress in localStorage, and mounts layout components (Header, Background, AppRouter).
 */

export const App: React.FC = () => {
  // Navigation & progression state
  const [currentScreen, setCurrentScreen] = useState<
    "dashboard" | "lesson" | "test"
  >("dashboard");
  const [selectedLevel, setSelectedLevel] = useState<Level>("beginner");
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [testScores, setTestScores] = useState<Record<number, number>>({});
  const [lessonStars, setLessonStars] = useState<Record<number, number>>({});

  // Active lesson/test objects
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeTest, setActiveTest] = useState<Test | null>(null);

  // Load progress on initial render
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem("lws_completed_lessons");
      const savedScores = localStorage.getItem("lws_test_scores");
      const savedStars = localStorage.getItem("lws_lesson_stars");
      const savedLevel = localStorage.getItem("lws_selected_level");

      if (savedCompleted) setCompletedLessons(JSON.parse(savedCompleted));
      if (savedScores) setTestScores(JSON.parse(savedScores));
      if (savedStars) setLessonStars(JSON.parse(savedStars));
      if (savedLevel) setSelectedLevel(savedLevel as Level);
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    }
  }, []);

  // Handlers for starting and completing sections
  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    localStorage.setItem("lws_selected_level", level);
  };

  const handleStartLesson = (lessonId: number) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (lesson) {
      setActiveLesson(lesson);
      setCurrentScreen("lesson");
      window.scrollTo(0, 0);
    }
  };

  const handleStartTest = (testId: number) => {
    const test = assessments.find((t) => t.id === testId);
    if (test) {
      setActiveTest(test);
      setCurrentScreen("test");
      window.scrollTo(0, 0);
    }
  };

  const handleCompleteLesson = (lessonId: number, stars: number) => {
    const updatedLessons = [...completedLessons];
    if (!updatedLessons.includes(lessonId)) {
      updatedLessons.push(lessonId);
    }
    setCompletedLessons(updatedLessons);
    localStorage.setItem(
      "lws_completed_lessons",
      JSON.stringify(updatedLessons),
    );

    const updatedStars = { ...lessonStars, [lessonId]: stars };
    setLessonStars(updatedStars);
    localStorage.setItem("lws_lesson_stars", JSON.stringify(updatedStars));

    // Unset active and go back
    setActiveLesson(null);
    setCurrentScreen("dashboard");
    window.scrollTo(0, 0);
  };

  const handleCompleteTest = (testId: number, score: number) => {
    const updatedScores = { ...testScores, [testId]: score };
    setTestScores(updatedScores);
    localStorage.setItem("lws_test_scores", JSON.stringify(updatedScores));

    // Mark test itself as completed so progress advances
    const updatedCompleted = [...completedLessons];
    if (!updatedCompleted.includes(testId)) {
      updatedCompleted.push(testId);
    }
    setCompletedLessons(updatedCompleted);
    localStorage.setItem(
      "lws_completed_lessons",
      JSON.stringify(updatedCompleted),
    );

    setActiveTest(null);
    setCurrentScreen("dashboard");
    window.scrollTo(0, 0);
  };

  // Reset progress option
  const handleResetProgress = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all your lessons progress and test scores?",
      )
    ) {
      setCompletedLessons([]);
      setTestScores({});
      setLessonStars({});
      setSelectedLevel("beginner");
      localStorage.removeItem("lws_completed_lessons");
      localStorage.removeItem("lws_test_scores");
      localStorage.removeItem("lws_lesson_stars");
      localStorage.removeItem("lws_selected_level");
      setCurrentScreen("dashboard");
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-interface overflow-hidden pb-16">
      {/* Dynamic Animated Luminous Background */}
      <LuminousBg />

      {/* Header Panel */}
      <Header onResetProgress={handleResetProgress} />

      {/* Screen Router */}
      <AppRouter
        currentScreen={currentScreen}
        activeLesson={activeLesson}
        activeTest={activeTest}
        completedLessons={completedLessons}
        testScores={testScores}
        lessonStars={lessonStars}
        selectedLevel={selectedLevel}
        onSelectLevel={handleSelectLevel}
        onStartLesson={handleStartLesson}
        onStartTest={handleStartTest}
        onCompleteLesson={handleCompleteLesson}
        onCompleteTest={handleCompleteTest}
        onBackToDashboard={() => setCurrentScreen("dashboard")}
      />
    </div>
  );
};
export default App;
