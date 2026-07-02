import React from 'react';
import { Award, Smile } from 'lucide-react';

interface HomeworkSlideProps {
  speakingPractice: string[];
  earnedStars: number;
  onComplete: () => void;
}

export const HomeworkSlide: React.FC<HomeworkSlideProps> = ({
  speakingPractice,
  earnedStars,
  onComplete,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center">
          <Award className="w-5 h-5 animate-bounce" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Homework & Complete</span>
          <h2 className="text-xl font-black text-white">📚 Today's Homework</h2>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-5 border border-white/5 bg-slate-900/30 space-y-4">
        <p className="text-sm font-bold text-amber-400 font-content">
          இந்த 5 வாக்கியங்களையும் குறைந்தது 5 முறை சத்தமாக வாசியுங்கள் (Read these 5 sentences out loud 5 times):
        </p>
        <ul className="space-y-2 text-sm text-slate-300 font-semibold pl-4 list-disc">
          {speakingPractice.map((phrase, idx) => (
            <li key={idx} className="tracking-wide">{phrase}</li>
          ))}
        </ul>
      </div>

      {/* Stars and Score Summary */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
        <div className="text-center sm:text-left">
          <span className="text-[10px] uppercase text-indigo-400 font-extrabold tracking-wider block">Estimated Lesson Reward</span>
          <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
            {[1, 2, 3].map((star) => (
              <Smile 
                key={star} 
                className={`w-6 h-6 transition-all duration-300 ${
                  star <= earnedStars ? 'text-amber-400 fill-amber-400 scale-110' : 'text-slate-700'
                }`} 
              />
            ))}
          </div>
        </div>

        <button
          onClick={onComplete}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-1.5"
        >
          <Smile className="w-4.5 h-4.5" />
          Complete & Show Stars!
        </button>
      </div>
    </div>
  );
};
export default HomeworkSlide;
