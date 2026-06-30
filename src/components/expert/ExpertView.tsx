import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, CheckCircle2, Smile, AlertCircle } from 'lucide-react';
import { Lesson } from '../../types';

/**
 * LWS-English: Expert Level Lesson View Component
 * Purpose: Renders expert level lessons (L91 to L120). Focuses on mock interview preparations,
 * advanced speech composition, speaking practice, and a 3-sentence translation system 
 * where users earn stars for correct translations.
 */

interface LessonViewProps {
  lesson: Lesson;
  onComplete: (lessonId: number, stars: number) => void;
  onBack: () => void;
}

export const ExpertView: React.FC<LessonViewProps> = ({
  lesson,
  onComplete,
  onBack,
}) => {
  // state: tracks how many times the user read the phrase out loud (target is 5)
  const [speakCount, setSpeakCount] = useState<number>(0);
  
  // state: tracks the index (0, 1, or 2) of the current active sentence in Practice Center
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  // state: stores the user's text inputs for all 3 translation questions
  const [userInputs, setUserInputs] = useState<string[]>(['', '', '']);
  // state: flags whether each of the 3 questions has been checked
  const [checkedState, setCheckedState] = useState<boolean[]>([false, false, false]);
  // state: tracks if each of the 3 checked answers is correct (determines stars earned)
  const [correctState, setCorrectState] = useState<boolean[]>([false, false, false]);
  // state: controls whether the correct answer hint is displayed
  const [showHint, setShowHint] = useState<boolean>(false);

  /**
   * Action: Normalizes and checks the user's input against the correct target translation.
   * Strips out punctuation and whitespace to allow flexible, user-friendly checking.
   */
  const checkTranslation = () => {
    const qIndex = currentQIndex;
    const cleanUser = userInputs[qIndex].trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ");
    const correctTarget = lesson.translationPractice[qIndex]?.answer.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ") || "";

    const isMatch = cleanUser === correctTarget;
    
    // Updates correctness state
    setCorrectState(prev => {
      const next = [...prev];
      next[qIndex] = isMatch;
      return next;
    });

    // Marks this specific question index as checked
    setCheckedState(prev => {
      const next = [...prev];
      next[qIndex] = true;
      return next;
    });
  };

  // Handles updating the text input for the current active question
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

  // Navigates to the next question in the Practice Center
  const handleNextQuestion = () => {
    if (currentQIndex < 2) {
      setCurrentQIndex(prev => prev + 1);
      setShowHint(false);
    }
  };

  // Navigates to the previous question in the Practice Center
  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prev => prev - 1);
      setShowHint(false);
    }
  };

  // Increments read count when user taps the read out loud bubbles
  const handleNextSpeak = () => {
    if (speakCount < 5) {
      setSpeakCount(prev => prev + 1);
    }
  };

  // Progression checks:
  const isStep1Done = true; // Reviewing word meanings is read-only
  const isStep2Done = speakCount >= 5; // Must speak 5 times
  const isStep3Done = checkedState.every(Boolean); // All 3 translation questions must be checked
  const canFinish = isStep1Done && isStep2Done && isStep3Done;

  // Star calculation: 1 star for each question answered correctly on submit
  const earnedStars = correctState.filter(Boolean).length;

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

      {/* Lesson Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-6 mb-8 border border-white/5 bg-gradient-to-r from-slate-900/60 to-slate-950/60"
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <span className="text-xs font-black uppercase text-indigo-400 tracking-widest">Expert Lesson {lesson.id}</span>
            <h1 className="text-3xl font-extrabold mt-1">Learning Word: <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{lesson.englishWord}</span></h1>
          </div>
          <Smile className="w-10 h-10 text-amber-400 animate-bounce" />
        </div>
      </motion.div>

      {/* Step Components Container */}
      <div className="space-y-8">
        
        {/* STEP 1: Main Word Meanings and Sentence Breakdown */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl" />
          
          <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-6 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">1</span>
            Word Meaning & Breakdowns
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="text-center md:text-left">
              <span className="text-xs text-slate-500 uppercase tracking-widest">English Word</span>
              <div className="text-5xl md:text-6xl font-black text-white mt-1">{lesson.englishWord}</div>
            </div>
            
            <div className="text-2xl text-slate-600 font-bold hidden md:block">➔</div>
            
            <div className="text-center md:text-right">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Tamil Meaning</span>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mt-1">{lesson.tamilMeaning}</div>
            </div>
          </div>

          {/* Breakdown cards for easy syllable learning */}
          <div className="mt-8 space-y-6">
            <h3 className="text-sm font-semibold text-slate-300">How to use in a sentence:</h3>
            {lesson.sentences.map((sent, sIdx) => (
              <div key={sIdx} className="glass-panel rounded-2xl p-5 border border-white/5 bg-slate-950/20 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">{sIdx === 0 ? 'A' : 'B'}</div>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white tracking-wide">{sent.english}</p>
                    <p className="text-sm md:text-base text-amber-400/90 font-content mt-1">{sent.tamil}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-3 font-semibold">Word-by-Word Breakdown:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sent.breakdown.map((item, bIdx) => (
                      <div key={bIdx} className="glass-panel rounded-xl px-3 py-2 border border-white/5 bg-slate-900/40 text-center">
                        <div className="text-sm font-bold text-indigo-300">{item.word}</div>
                        <div className="text-[11px] text-slate-400 font-content mt-0.5">{item.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* STEP 2: Today's Word List Recap */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/20"
        >
          <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">2</span>
            Today Learn Recap
          </h2>
          <div className="flex flex-wrap gap-3">
            <div className="glass-panel rounded-xl px-4 py-2 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 flex items-center gap-2 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              {lesson.englishWord} : {lesson.tamilMeaning}
            </div>
            {lesson.sentences.map((sent, idx) => (
              <div key={idx} className="glass-panel rounded-xl px-4 py-2 border border-white/5 text-slate-300 text-xs font-content">
                {sent.english}
              </div>
            ))}
          </div>
        </motion.section>

        {/* STEP 3: Speaking Practice (Self Guided) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`glass-panel rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
            isStep2Done ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/5'
          }`}
        >
          <div className="flex justify-between items-start gap-4 mb-4">
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">3</span>
              Speaking Practice
            </h2>
            {isStep2Done && (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wide bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" /> Ready!
              </span>
            )}
          </div>

          <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
            சத்தமாக 5 முறை படிக்கவும் (Read out loud 5 times!)
          </h3>

          <div className="space-y-3 mb-6">
            {lesson.speakingPractice.map((phrase, pIdx) => (
              <div key={pIdx} className="glass-panel rounded-xl p-4 border border-white/5 bg-slate-900/30 flex items-center justify-between">
                <span className="text-base font-bold text-white tracking-wide">{phrase}</span>
                <Volume2 className="w-5 h-5 text-indigo-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950/40 border border-white/5">
            <div>
              <p className="text-sm font-semibold text-slate-300">Tap below after each read:</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((bubble) => {
                  const isActive = bubble <= speakCount;
                  return (
                    <div 
                      key={bubble}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {bubble}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                disabled={isStep2Done}
                onClick={handleNextSpeak}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  isStep2Done 
                    ? 'bg-emerald-600 text-white cursor-default' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                }`}
              >
                {isStep2Done ? "Done!" : "Read"}
              </button>
            </div>
          </div>
        </motion.section>

        {/* STEP 4: Translate Practice (3 Sentences) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`glass-panel rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
            isStep3Done ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/5'
          }`}
        >
          <div className="flex justify-between items-start gap-4 mb-4">
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">4</span>
              Practice Center
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-white/5 px-3 py-1 rounded-full">
                Sentence {currentQIndex + 1} of 3
              </span>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
            தமிழ் வாக்கியத்தை ஆங்கிலமாக மாற்று (Translate Tamil into English)
          </h3>

          <div className="glass-panel rounded-2xl p-5 border border-white/5 bg-slate-900/30 mb-5">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Tamil Input Sentence</span>
            <span className="text-lg font-extrabold text-amber-400 font-content">
              {lesson.translationPractice[currentQIndex]?.question}
            </span>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              disabled={checkedState[currentQIndex]}
              value={userInputs[currentQIndex]}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Type your English translation here..."
              className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-semibold text-sm"
            />

            <AnimatePresence mode="wait">
              {checkedState[currentQIndex] && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-2 p-4 rounded-xl border text-sm font-semibold ${
                    correctState[currentQIndex] 
                      ? 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400' 
                      : 'bg-rose-950/40 border-rose-500/20 text-rose-400'
                  }`}
                >
                  {correctState[currentQIndex] ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Excellent! Sentence {currentQIndex + 1} is Correct! 🎉</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Incorrect. Correct: <strong className="text-white">&quot;{lesson.translationPractice[currentQIndex]?.answer}&quot;</strong> (No star awarded for this sentence).</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setShowHint(prev => !prev)}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentQIndex === 0}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border ${
                    currentQIndex === 0 
                      ? 'opacity-40 text-slate-600 border-white/5' 
                      : 'glass-panel text-slate-300 border-white/5 hover:bg-white/5'
                  }`}
                >
                  Prev
                </button>

                {!checkedState[currentQIndex] ? (
                  <button
                    type="button"
                    disabled={userInputs[currentQIndex].trim() === ''}
                    onClick={checkTranslation}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md"
                  >
                    Check
                  </button>
                ) : currentQIndex < 2 ? (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md"
                  >
                    Next
                  </button>
                ) : (
                  <div className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 text-white cursor-default">
                    Finished!
                  </div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-400 mt-2">
                    <span>Target: <strong className="text-white">&quot;{lesson.translationPractice[currentQIndex]?.answer}&quot;</strong></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* STEP 5: Lesson Summary & Grammar Rule */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/20"
        >
          <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">5</span>
            Lesson Summary & Rule
          </h2>
          
          <div className="glass-panel rounded-2xl p-5 border border-indigo-500/20 bg-indigo-500/5">
            <h3 className="font-bold text-indigo-300 flex items-center gap-2 text-base">
              💡 Mind-ல் வைக்க வேண்டிய Rule (Main Rule)
            </h3>
            <p className="text-sm font-content text-slate-200 mt-2 leading-relaxed font-light">
              {lesson.rule}
            </p>
          </div>
        </motion.section>

        {/* Complete & Finish Session button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-6 flex justify-end"
        >
          <button
            onClick={() => {
              if (canFinish) {
                onComplete(lesson.id, earnedStars);
              }
            }}
            disabled={!canFinish}
            className={`px-8 py-4 rounded-2xl font-black text-base shadow-lg transition-all duration-300 flex items-center gap-2 ${
              canFinish
                ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Smile className="w-5 h-5" />
            Complete & Show stars!
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default ExpertView;
