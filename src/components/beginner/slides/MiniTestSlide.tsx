import React from 'react';
import { GraduationCap, Check, X, RefreshCw } from 'lucide-react';

interface MiniTestSlideProps {
  vocabularies: { word: string; meaning: string }[];
  shuffledMeanings: string[];
  matchingAnswers: Record<number, string>;
  matchingChecked: boolean;
  matchingCorrectState: Record<number, boolean>;
  isMatchTestDone: boolean;
  onMatchSelect: (wordIdx: number, selectedMeaning: string) => void;
  onCheckMatchingAnswers: () => void;
  onResetMatchingQuiz: () => void;
}

export const MiniTestSlide: React.FC<MiniTestSlideProps> = ({
  vocabularies,
  shuffledMeanings,
  matchingAnswers,
  matchingChecked,
  matchingCorrectState,
  isMatchTestDone,
  onMatchSelect,
  onCheckMatchingAnswers,
  onResetMatchingQuiz,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Vocabulary Test</span>
            <h2 className="text-xl font-black text-white">📝 Mini Test: Match Meanings</h2>
          </div>
        </div>
        {matchingChecked && (
          <button 
            onClick={onResetMatchingQuiz}
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Quiz
          </button>
        )}
      </div>

      <p className="text-xs text-slate-400 font-content mb-4 leading-relaxed">
        பொருந்தும் தமிழ் அர்த்தத்தை தேர்வு செய்க (Match each English word to its correct Tamil meaning):
      </p>

      <div className="space-y-3.5">
        {vocabularies.map((v, idx) => {
          const isCorrect = matchingCorrectState[idx];
          return (
            <div 
              key={idx} 
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border transition-all duration-300 ${
                matchingChecked 
                  ? isCorrect 
                    ? 'bg-emerald-950/20 border-emerald-500/20' 
                    : 'bg-rose-950/20 border-rose-500/20'
                  : 'glass-panel border-white/5 bg-slate-900/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide">{idx + 1}. {v.word}</span>
              </div>

              <div className="flex items-center gap-3">
                <select
                  disabled={matchingChecked}
                  value={matchingAnswers[idx] || ''}
                  onChange={(e) => onMatchSelect(idx, e.target.value)}
                  className="bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 focus:outline-none focus:border-indigo-500 transition-all font-content min-w-[200px]"
                >
                  <option value="">Choose meaning...</option>
                  {shuffledMeanings.map((m, mIdx) => (
                    <option key={mIdx} value={m}>{m}</option>
                  ))}
                </select>

                {matchingChecked && (
                  isCorrect ? (
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      <span className="text-[10px] font-bold text-emerald-400 font-content">({v.meaning})</span>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!matchingChecked ? (
        <button
          disabled={Object.keys(matchingAnswers).length < vocabularies.length}
          onClick={onCheckMatchingAnswers}
          className="w-full mt-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-md transition-all"
        >
          Check Answers
        </button>
      ) : (
        <div className={`p-4 rounded-xl text-xs font-semibold text-center border mt-4 ${
          isMatchTestDone
            ? 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400'
            : 'bg-rose-950/40 border-rose-500/20 text-rose-400'
        }`}>
          {isMatchTestDone 
            ? 'Excellent! All vocabulary matched correctly! 🎉' 
            : 'Some answers are incorrect. Review the corrections above and click Next slide!'}
        </div>
      )}
    </div>
  );
};
export default MiniTestSlide;
