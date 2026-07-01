import React from 'react';
import { Volume2, CheckCircle2 } from 'lucide-react';

interface SpeakingPracticeSlideProps {
  speakingPractice: string[];
  speakCount: number;
  isStep2Done: boolean;
  onNextSpeak: () => void;
}

export const SpeakingPracticeSlide: React.FC<SpeakingPracticeSlideProps> = ({
  speakingPractice,
  speakCount,
  isStep2Done,
  onNextSpeak,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Speaking Practice</span>
            <h2 className="text-xl font-black text-white">🗣️ Read Out Loud</h2>
          </div>
        </div>
        {isStep2Done && (
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wide bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4" /> Ready!
          </span>
        )}
      </div>

      <h3 className="text-base font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
        சத்தமாக 5 முறை படிக்கவும் (Read out loud 5 times!)
      </h3>

      <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
        {speakingPractice.map((phrase, pIdx) => (
          <div key={pIdx} className="glass-panel rounded-xl p-3.5 border border-white/5 bg-slate-900/30 flex items-center justify-between">
            <span className="text-sm font-bold text-white tracking-wide">{phrase}</span>
            <Volume2 className="w-4.5 h-4.5 text-indigo-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5">
        <div>
          <p className="text-xs font-semibold text-slate-400">Tap below after each read:</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((bubble) => {
              const isActive = bubble <= speakCount;
              return (
                <div 
                  key={bubble}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
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
            onClick={onNextSpeak}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
              isStep2Done 
                ? 'bg-emerald-600 text-white cursor-default' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md active:scale-95'
            }`}
          >
            {isStep2Done ? "Done!" : "Read"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpeakingPracticeSlide;
