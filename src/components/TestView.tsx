import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, ChevronRight, RefreshCw, Star } from 'lucide-react';
import { Test } from '../types';
import confetti from 'canvas-confetti';

interface TestViewProps {
  test: Test;
  onComplete: (testId: number, score: number) => void;
  onBack: () => void;
}

export const TestView: React.FC<TestViewProps> = ({
  test,
  onComplete,
  onBack,
}) => {
  // Current active part index (1 to 5)
  const [activePart, setActivePart] = useState<number>(1);
  // User answers map: questionId -> answer string
  const [answers, setAnswers] = useState<Record<number, string>>({});
  // Test evaluation states
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Filter questions for the active part
  const partQuestions = test.questions.filter(q => q.part === activePart);

  const handleSelectOption = (questionId: number, val: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: val }));
  };

  const handleInputChange = (questionId: number, val: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: val }));
  };

  const handleNextPart = () => {
    if (activePart < 5) {
      setActivePart(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPart = () => {
    if (activePart > 1) {
      setActivePart(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Grade Evaluation
  const evaluateTest = () => {
    let earnedScore = 0;
    const evaluated: Record<number, boolean> = {};

    test.questions.forEach(q => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ");
      const correctAnswer = q.answer.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ");

      let isCorrect = false;

      if (q.part === 5 && q.answer === 'custom') {
        // Creative prompt: must contain the target word (e.g. "go")
        const promptWord = (q.prompt || '').toLowerCase().trim();
        isCorrect = userAnswer.includes(promptWord) && userAnswer.length > promptWord.length + 3; // basic sentence check
      } else {
        isCorrect = userAnswer === correctAnswer;
      }

      evaluated[q.id] = isCorrect;
      if (isCorrect) {
        earnedScore += 2; // Each question is 2 marks
      }
    });

    setScore(earnedScore);
    setIsSubmitted(true);

    // Confetti Spray for Perfect Score
    if (earnedScore === 100) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Check if current part is fully answered
  const isPartComplete = partQuestions.every(q => answers[q.id] !== undefined && answers[q.id].trim() !== '');

  // Grading Details
  const getGradeDetails = () => {
    if (score === 100) {
      return {
        grade: "EXCELLENT / VERY GOOD 🌟🏆",
        text: "Brilliant! Perfect Score! You are a superstar!",
        color: "text-amber-400",
        bg: "bg-amber-400/5 border-amber-400/20",
        stars: 3,
      };
    } else if (score >= 80) {
      return {
        grade: "GOOD 👍⭐",
        text: "Great job student! You are doing awesome!",
        color: "text-indigo-400",
        bg: "bg-indigo-400/5 border-indigo-400/20",
        stars: 2,
      };
    } else if (score >= 70) {
      return {
        grade: "AVERAGE / PASS 😊",
        text: "Good try student! You passed the test! Keep practicing to score higher!",
        color: "text-emerald-400",
        bg: "bg-emerald-400/5 border-emerald-500/20",
        stars: 1,
      };
    } else {
      return {
        grade: "NEEDS PRACTICE 📚",
        text: "Don't worry student! Oru dharava practice pannunga, you can do it!",
        color: "text-rose-400",
        bg: "bg-rose-400/5 border-rose-500/20",
        stars: 0,
      };
    }
  };

  const grade = getGradeDetails();

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
      {/* Back button */}
      {!isSubmitted && (
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Cancel Test
        </button>
      )}

      {/* Main Container */}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="test-questions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Header / Parts Nav */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-gradient-to-r from-slate-900/60 to-slate-950/60">
              <span className="text-xs font-black uppercase text-amber-400 tracking-widest">Assessment Center</span>
              <h1 className="text-2xl font-black text-white mt-1">{test.title}</h1>
              
              {/* Part indicators */}
              <div className="grid grid-cols-5 gap-2 mt-6">
                {[1, 2, 3, 4, 5].map((part) => (
                  <div key={part} className="space-y-2">
                    <div className={`h-2 rounded-full transition-all duration-300 ${
                      part < activePart 
                        ? 'bg-emerald-500' 
                        : part === activePart 
                        ? 'bg-amber-400' 
                        : 'bg-slate-800'
                    }`} />
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block text-center">Part {part}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Part Explanations */}
            <div className="glass-panel rounded-xl p-4 border border-indigo-500/10 bg-indigo-500/5 text-sm font-semibold text-indigo-300">
              {activePart === 1 && "💡 Part 1: Tamil Meaning - English வார்த்தைக்கு சரியான தமிழ் அர்த்தத்தை தேர்ந்தெடுக்கவும்."}
              {activePart === 2 && "💡 Part 2: English to Tamil - ஆங்கில வாக்கியத்தை படித்து அதற்கான தமிழ் மொழிபெயர்ப்பை எழுதவும்."}
              {activePart === 3 && "💡 Part 3: Tamil to English - தமிழ் வாக்கியத்தை படித்து அதற்கான ஆங்கில மொழிபெயர்ப்பை எழுதவும்."}
              {activePart === 4 && "💡 Part 4: Fill in the Blanks - வாக்கியத்தில் விடுபட்ட சரியான ஆங்கில வார்த்தையை எழுதவும்."}
              {activePart === 5 && "💡 Part 5: Creative Writing - கேட்கப்பட்ட வார்த்தையைப் பயன்படுத்தி சொந்தமாக ஒரு வாக்கியத்தை எழுதவும்."}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {partQuestions.map((q, idx) => {
                const questionNumber = (activePart - 1) * 10 + idx + 1;
                return (
                  <div key={q.id} className="glass-panel rounded-2xl p-6 border border-white/5 bg-slate-950/20">
                    <div className="flex gap-4 items-start">
                      <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {questionNumber}
                      </span>
                      <div className="flex-grow space-y-4">
                        <p className="text-base font-bold text-white tracking-wide">{q.questionText}</p>
                        
                        {/* Render Input types based on Parts */}
                        {q.part === 1 && q.options ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {q.options.map((opt) => {
                              const isSelected = answers[q.id] === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleSelectOption(q.id, opt)}
                                  className={`px-4 py-3 rounded-xl font-bold text-sm text-left border transition-all ${
                                    isSelected 
                                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-md' 
                                      : 'glass-panel text-slate-300 border-white/5 hover:bg-white/5'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={answers[q.id] || ''}
                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                            placeholder={
                              q.part === 5 
                                ? `Write a sentence containing "${q.prompt}"...` 
                                : "Type your translation / answer here..."
                            }
                            className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-semibold font-interface text-sm"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={handlePrevPart}
                disabled={activePart === 1}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  activePart === 1
                    ? 'opacity-40 text-slate-600 cursor-not-allowed'
                    : 'glass-panel border-white/5 text-slate-300 hover:bg-white/5'
                }`}
              >
                Previous Part
              </button>

              {activePart < 5 ? (
                <button
                  type="button"
                  onClick={handleNextPart}
                  disabled={!isPartComplete}
                  className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                    isPartComplete
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Next Part
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={evaluateTest}
                  disabled={!isPartComplete}
                  className={`px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                    isPartComplete
                      ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 text-white hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Submit Test & Score
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          /* SCORE CARD PAGE */
          <motion.div
            key="test-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8 text-center"
          >
            <div className={`glass-panel rounded-3xl p-8 md:p-12 border ${grade.bg} relative overflow-hidden max-w-2xl mx-auto`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl" />
              
              <Award className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
              
              <h1 className="text-xl text-slate-400 uppercase tracking-widest font-black mt-4">Assessment Results</h1>
              <h2 className="text-3xl font-black text-white mt-1">{test.title}</h2>
              
              {/* Stars display */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`w-10 h-10 ${
                      idx < grade.stars 
                        ? 'text-amber-400 fill-current animate-bounce' 
                        : 'text-slate-800'
                    }`} 
                  />
                ))}
              </div>

              {/* Marks text */}
              <div className="my-8">
                <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold block">Total Marks</span>
                <span className="text-7xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {score} / 100
                </span>
                <div className={`text-lg font-black uppercase tracking-wider mt-3 ${grade.color}`}>
                  {grade.grade}
                </div>
              </div>

              {/* Supporting feedback */}
              <p className="text-slate-300 max-w-md mx-auto text-sm md:text-base font-content font-light leading-relaxed">
                {grade.text}
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                {score < 70 ? (
                  <button
                    onClick={() => {
                      setAnswers({});
                      setIsSubmitted(false);
                      setActivePart(1);
                    }}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md"
                  >
                    <RefreshCw className="w-4 h-4" /> Try Again
                  </button>
                ) : (
                  <button
                    onClick={() => onComplete(test.id, score)}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    Close Test & Unlock Next Level
                  </button>
                )}
                
                <button
                  onClick={onBack}
                  className="px-6 py-3 rounded-xl glass-panel border-white/5 hover:bg-white/5 text-slate-300 font-bold text-sm transition-all"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default TestView;
