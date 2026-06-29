import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { Level, Lesson, Test } from './types';
import { lessons, assessments } from './data/lessons';
import { LuminousBg } from './components/LuminousBg';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { TestView } from './components/TestView';

export const App: React.FC = () => {
  // Navigation & progression state
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'lesson' | 'test'>('dashboard');
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [testScores, setTestScores] = useState<Record<number, number>>({});
  
  // Active lesson/test objects
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeTest, setActiveTest] = useState<Test | null>(null);

  // Load progress on initial render
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('lws_completed_lessons');
      const savedScores = localStorage.getItem('lws_test_scores');
      const savedLevel = localStorage.getItem('lws_selected_level');

      if (savedCompleted) setCompletedLessons(JSON.parse(savedCompleted));
      if (savedScores) setTestScores(JSON.parse(savedScores));
      if (savedLevel) setSelectedLevel(savedLevel as Level);
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    }
  }, []);

  // Handlers for starting and completing sections
  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    localStorage.setItem('lws_selected_level', level);
  };

  const handleStartLesson = (lessonId: number) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      setActiveLesson(lesson);
      setCurrentScreen('lesson');
      window.scrollTo(0, 0);
    }
  };

  const handleStartTest = (testId: number) => {
    const test = assessments.find(t => t.id === testId);
    if (test) {
      // Structure questions to match active lessons
      setActiveTest(test);
      setCurrentScreen('test');
      window.scrollTo(0, 0);
    }
  };

  const handleCompleteLesson = (lessonId: number) => {
    const updated = [...completedLessons];
    if (!updated.includes(lessonId)) {
      updated.push(lessonId);
    }
    setCompletedLessons(updated);
    localStorage.setItem('lws_completed_lessons', JSON.stringify(updated));
    
    // Unset active and go back
    setActiveLesson(null);
    setCurrentScreen('dashboard');
    window.scrollTo(0, 0);
  };

  const handleCompleteTest = (testId: number, score: number) => {
    // Save score
    const updatedScores = { ...testScores, [testId]: score };
    setTestScores(updatedScores);
    localStorage.setItem('lws_test_scores', JSON.stringify(updatedScores));

    // Mark test itself as completed so progress advances
    const updatedCompleted = [...completedLessons];
    if (!updatedCompleted.includes(testId)) {
      updatedCompleted.push(testId);
    }
    setCompletedLessons(updatedCompleted);
    localStorage.setItem('lws_completed_lessons', JSON.stringify(updatedCompleted));

    setActiveTest(null);
    setCurrentScreen('dashboard');
    window.scrollTo(0, 0);
  };

  // Reset progress option
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your lessons progress and test scores?")) {
      setCompletedLessons([]);
      setTestScores({});
      setSelectedLevel('beginner');
      localStorage.removeItem('lws_completed_lessons');
      localStorage.removeItem('lws_test_scores');
      localStorage.removeItem('lws_selected_level');
      setCurrentScreen('dashboard');
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-interface overflow-hidden pb-16">
      {/* Dynamic Animated Luminous Background */}
      <LuminousBg />

      {/* Header Panel */}
      <header className="relative z-10 border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-xl text-white shadow-lg">
              L
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white">LWS ENGLISH</span>
              <span className="text-[10px] uppercase text-indigo-400 font-bold block leading-none tracking-widest font-content mt-0.5">Learn with Smile 😊</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleResetProgress}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/5 transition-all uppercase tracking-wider"
              title="Reset Progress"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Progress
            </button>
          </div>
        </div>
      </header>

      {/* Main Screen Router */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentScreen === 'dashboard' && (
            <motion.div
              key="dashboard-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Dashboard
                completedLessons={completedLessons}
                testScores={testScores}
                selectedLevel={selectedLevel}
                onSelectLevel={handleSelectLevel}
                onStartLesson={handleStartLesson}
                onStartTest={handleStartTest}
              />
            </motion.div>
          )}

          {currentScreen === 'lesson' && activeLesson && (
            <motion.div
              key="lesson-screen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <LessonView
                lesson={activeLesson}
                onComplete={handleCompleteLesson}
                onBack={() => setCurrentScreen('dashboard')}
              />
            </motion.div>
          )}

          {currentScreen === 'test' && activeTest && (
            <motion.div
              key="test-screen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <TestView
                test={activeTest}
                onComplete={handleCompleteTest}
                onBack={() => setCurrentScreen('dashboard')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
export default App;
