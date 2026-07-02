import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Lesson } from '../../types';

// Import modular slide components
import IntroSlide from './slides/IntroSlide';
import VocabularySlide from './slides/VocabularySlide';
import RuleSlide from './slides/RuleSlide';
import MiniTestSlide from './slides/MiniTestSlide';
import PracticeCenterSlide from './slides/PracticeCenterSlide';
import SpeakingPracticeSlide from './slides/SpeakingPracticeSlide';
import HomeworkSlide from './slides/HomeworkSlide';

/**
 * LWS-English: Beginner Level Slide-Based Learning Center
 * Purpose: Orchestrates the 11-slide beginner course player.
 * Delegating slide-specific UI rendering to modular sub-components.
 */

interface LessonViewProps {
  lesson: Lesson;
  onComplete: (lessonId: number, stars: number) => void;
  onBack: () => void;
}

const shuffleArray = (array: string[]): string[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const BeginnerView: React.FC<LessonViewProps> = ({
  lesson,
  onComplete,
  onBack,
}) => {
  // Navigation: 11 Slides (0 to 10)
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Today's vocabulary shuffles (for matching quiz options)
  const [shuffledMeanings, setShuffledMeanings] = useState<string[]>([]);
  
  // Speaking practice state
  const [speakCount, setSpeakCount] = useState<number>(0);

  // Mini Test matching quiz states
  const [matchingAnswers, setMatchingAnswers] = useState<Record<number, string>>({});
  const [matchingChecked, setMatchingChecked] = useState<boolean>(false);
  const [matchingCorrectState, setMatchingCorrectState] = useState<Record<number, boolean>>({});

  // Practice Center states
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [correctState, setCorrectState] = useState<boolean[]>([]);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Initialize and Reset states dynamically when lesson changes
  useEffect(() => {
    setActiveSlide(0);
    setSpeakCount(0);
    setMatchingAnswers({});
    setMatchingChecked(false);
    setMatchingCorrectState({});
    
    const questionsLength = lesson.translationPractice.length;
    setCurrentQIndex(0);
    setUserInputs(Array(questionsLength).fill(''));
    setCheckedState(Array(questionsLength).fill(false));
    setCorrectState(Array(questionsLength).fill(false));
    setShowHint(false);

    if (lesson.vocabularies) {
      setShuffledMeanings(shuffleArray(lesson.vocabularies.map(v => v.meaning)));
    }
  }, [lesson.id, lesson.translationPractice.length, lesson.vocabularies]);

  // Actions for Match Test
  const handleMatchSelect = (wordIdx: number, selectedMeaning: string) => {
    setMatchingAnswers(prev => ({ ...prev, [wordIdx]: selectedMeaning }));
    setMatchingChecked(false);
  };

  const checkMatchingAnswers = () => {
    if (!lesson.vocabularies) return;
    const correctMap: Record<number, boolean> = {};
    lesson.vocabularies.forEach((v, idx) => {
      correctMap[idx] = matchingAnswers[idx] === v.meaning;
    });
    setMatchingCorrectState(correctMap);
    setMatchingChecked(true);
  };

  const resetMatchingQuiz = () => {
    setMatchingAnswers({});
    setMatchingChecked(false);
    setMatchingCorrectState({});
  };

  // Actions for Translation Practice
  const checkTranslation = () => {
    const qIndex = currentQIndex;
    const cleanUser = (userInputs[qIndex] || '').trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ");
    const correctTarget = lesson.translationPractice[qIndex]?.answer.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ") || "";

    const isMatch = cleanUser === correctTarget;
    
    setCorrectState(prev => {
      const next = [...prev];
      next[qIndex] = isMatch;
      return next;
    });

    setCheckedState(prev => {
      const next = [...prev];
      next[qIndex] = true;
      return next;
    });
  };

  const handleInputChange = (val: string) => {
    setUserInputs(prev => {
      const next = [...prev];
      next[currentQIndex] = val;
      return next;
    });
    setCheckedState(prev => {
      const next = [...prev];
      next[currentQIndex] = false;
      return next;
    });
  };

  const handleNextQuestion = () => {
    if (currentQIndex < lesson.translationPractice.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setShowHint(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prev => prev - 1);
      setShowHint(false);
    }
  };

  const handleResetPractice = () => {
    setUserInputs(Array(lesson.translationPractice.length).fill(''));
    setCheckedState(Array(lesson.translationPractice.length).fill(false));
    setCorrectState(Array(lesson.translationPractice.length).fill(false));
    setCurrentQIndex(0);
    setShowHint(false);
  };

  // Actions for Speaking Practice
  const handleNextSpeak = () => {
    if (speakCount < 5) {
      setSpeakCount(prev => prev + 1);
    }
  };

  // Progression checks
  const isStep2Done = speakCount >= 5;
  const isMatchTestDone = matchingChecked && Object.values(matchingCorrectState).every(Boolean);
  
  // Stars calculation (maps correct count to 1-3 stars)
  const correctCount = correctState.filter(Boolean).length;
  let earnedStars = 0;
  if (correctCount === lesson.translationPractice.length) {
    earnedStars = 3;
  } else if (correctCount >= Math.ceil(lesson.translationPractice.length / 2)) {
    earnedStars = 2;
  } else if (correctCount > 0) {
    earnedStars = 1;
  }

  // Slide deck metadata
  const totalSlides = 11;
  const progressPercent = activeSlide === 0 ? 0 : Math.round((activeSlide / (totalSlides - 1)) * 100);

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
      {/* Back button to return to dashboard */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-semibold uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      {/* Progress track bar */}
      <div className="w-full bg-slate-900 border border-white/5 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Slide Deck Container */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/20 shadow-2xl relative overflow-hidden"
          >
            {/* Soft decorative glow background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

            {/* SLIDE 0: Lesson Intro */}
            {activeSlide === 0 && (
              <IntroSlide lessonId={lesson.id} onStart={() => setActiveSlide(1)} />
            )}

            {/* SLIDES 1 to 5: Vocabulary Cards */}
            {activeSlide >= 1 && activeSlide <= 5 && (() => {
              const vocabIdx = activeSlide - 1;
              const vocab = lesson.vocabularies?.[vocabIdx];
              const sentenceItem = lesson.sentences?.[vocabIdx];
              if (!vocab || !sentenceItem) return <div>No vocabulary found</div>;
              return (
                <VocabularySlide 
                  vocabIdx={vocabIdx} 
                  vocab={vocab} 
                  sentenceItem={sentenceItem} 
                />
              );
            })()}

            {/* SLIDE 6: Grammar Rule */}
            {activeSlide === 6 && (
              <RuleSlide rule={lesson.rule} />
            )}

            {/* SLIDE 7: Mini Test (Interactive Match) */}
            {activeSlide === 7 && (
              <MiniTestSlide
                vocabularies={lesson.vocabularies || []}
                shuffledMeanings={shuffledMeanings}
                matchingAnswers={matchingAnswers}
                matchingChecked={matchingChecked}
                matchingCorrectState={matchingCorrectState}
                isMatchTestDone={isMatchTestDone}
                onMatchSelect={handleMatchSelect}
                onCheckMatchingAnswers={checkMatchingAnswers}
                onResetMatchingQuiz={resetMatchingQuiz}
              />
            )}

            {/* SLIDE 8: Practice Center */}
            {activeSlide === 8 && (
              <PracticeCenterSlide
                translationPractice={lesson.translationPractice}
                currentQIndex={currentQIndex}
                userInputs={userInputs}
                checkedState={checkedState}
                correctState={correctState}
                showHint={showHint}
                onInputChange={handleInputChange}
                onCheckTranslation={checkTranslation}
                onNextQuestion={handleNextQuestion}
                onPrevQuestion={handlePrevQuestion}
                onResetPractice={handleResetPractice}
                onToggleHint={() => setShowHint(prev => !prev)}
              />
            )}

            {/* SLIDE 9: Speaking Practice */}
            {activeSlide === 9 && (
              <SpeakingPracticeSlide
                speakingPractice={lesson.speakingPractice}
                speakCount={speakCount}
                isStep2Done={isStep2Done}
                onNextSpeak={handleNextSpeak}
              />
            )}

            {/* SLIDE 10: Homework & Finish */}
            {activeSlide === 10 && (
              <HomeworkSlide
                speakingPractice={lesson.speakingPractice}
                earnedStars={earnedStars}
                onComplete={() => onComplete(lesson.id, earnedStars)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons Bar */}
      {activeSlide > 0 && (
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
            disabled={activeSlide === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
              activeSlide === 0
                ? 'opacity-40 text-slate-600 border-white/5 cursor-not-allowed'
                : 'glass-panel text-slate-300 border-white/5 hover:bg-white/5 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Prev Slide
          </button>

          <span className="text-xs font-extrabold text-slate-400 tracking-wider">
            Slide {activeSlide} / {totalSlides - 1}
          </span>

          <button
            onClick={() => setActiveSlide(prev => Math.min(totalSlides - 1, prev + 1))}
            disabled={activeSlide === totalSlides - 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeSlide === totalSlides - 1
                ? 'opacity-40 text-slate-600 border-white/5 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md active:scale-95'
            }`}
          >
            Next Slide
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
export default BeginnerView;
