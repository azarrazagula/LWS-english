import React from 'react';
import { BookOpen } from 'lucide-react';

interface RuleSlideProps {
  rule: string;
}

export const RuleSlide: React.FC<RuleSlideProps> = ({ rule }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Lesson Rule</span>
          <h2 className="text-xl font-black text-white">💡 இன்றைய முக்கிய விதி (Key Rule)</h2>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-6 border border-indigo-500/20 bg-indigo-500/5">
        <p className="text-base font-content text-slate-200 leading-relaxed">
          {rule}
        </p>
      </div>
    </div>
  );
};
export default RuleSlide;
