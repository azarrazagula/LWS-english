import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
import { TranslationPracticeItem } from '../../../types';

interface PracticeCenterSlideProps {
  translationPractice: TranslationPracticeItem[];
  currentQIndex: number;
  userInputs: string[];
  checkedState: boolean[];
  correctState: boolean[];
  showHint: boolean;
  onInputChange: (val: string) => void;
  onCheckTranslation: () => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onResetPractice: () => void;
  onToggleHint: () => void;
}

export const PracticeCenterSlide: React.FC<PracticeCenterSlideProps> = ({
  translationPractice,
  currentQIndex,
  userInputs,
  checkedState,
  correctState,
  showHint,
  onInputChange,
  onCheckTranslation,
  onNextQuestion,
  onPrevQuestion,
  onResetPractice,
  onToggleHint,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Practice Center</span>
            <h2 className="text-xl font-black text-white">✍️ Translating Sentences</h2>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-white/5 px-3 py-1 rounded-full">
          Sentence {currentQIndex + 1} of {translationPractice.length}
        </span>
      </div>

      <h3 className="text-base font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
        தமிழை ஆங்கிலமாக மாற்று (Translate Tamil into English)
      </h3>

      <div className="glass-panel rounded-2xl p-5 border border-white/5 bg-slate-900/30">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Tamil Sentence</span>
        <span className="text-lg font-extrabold text-amber-400 font-content">
          {translationPractice[currentQIndex]?.question}
        </span>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          disabled={checkedState[currentQIndex]}
          value={userInputs[currentQIndex] || ''}
          onChange={(e) => onInputChange(e.target.value)}
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
                  <span>Incorrect. Correct: <strong className="text-white">&quot;{translationPractice[currentQIndex]?.answer}&quot;</strong> (No star awarded for this sentence).</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onToggleHint}
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrevQuestion}
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
                disabled={!userInputs[currentQIndex] || userInputs[currentQIndex].trim() === ''}
                onClick={onCheckTranslation}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md animate-fade-in"
              >
                Check
              </button>
            ) : currentQIndex < translationPractice.length - 1 ? (
              <button
                type="button"
                onClick={onNextQuestion}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md animate-fade-in"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={onResetPractice}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-md cursor-pointer transition-all active:scale-95 flex items-center gap-1 animate-fade-in"
                title="Click to reset and practice again!"
              >
                Retry 🔄
              </button>
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
                <span>Target: <strong className="text-white">&quot;{translationPractice[currentQIndex]?.answer}&quot;</strong></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default PracticeCenterSlide;
