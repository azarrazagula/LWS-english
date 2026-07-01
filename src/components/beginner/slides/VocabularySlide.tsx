import React from 'react';
import { SentenceItem } from '../../../types';

interface VocabularySlideProps {
  vocabIdx: number;
  vocab: { word: string; meaning: string };
  sentenceItem: SentenceItem;
}

export const VocabularySlide: React.FC<VocabularySlideProps> = ({
  vocabIdx,
  vocab,
  sentenceItem,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Card Title Header */}
      <div className="flex justify-between items-center pb-4 border-b border-white/5">
        <div>
          <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest block">Vocabulary Word {vocabIdx + 1} of 5</span>
          <h2 className="text-3xl font-black text-white mt-1">{vocab.word}</h2>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">Tamil Meaning</span>
          <span className="text-xl font-extrabold text-amber-400 block mt-1 font-content">{vocab.meaning}</span>
        </div>
      </div>

      {/* Example Box */}
      <div className="glass-panel rounded-2xl p-5 border border-white/5 bg-slate-900/30 space-y-2">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Example Sentence</span>
        <p className="text-lg md:text-xl font-extrabold text-white tracking-wide border-l-2 border-indigo-500 pl-3 py-1">
          {sentenceItem.english}
        </p>
        <p className="text-sm md:text-base text-amber-400/90 font-content pl-3">
          {sentenceItem.tamil}
        </p>
      </div>

      {/* Word-by-Word Breakdown list */}
      <div className="space-y-3">
        <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Word-by-Word Breakdown:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sentenceItem.breakdown.map((item, bIdx) => (
            <div key={bIdx} className="glass-panel rounded-xl px-4 py-3 border border-white/5 bg-slate-900/50 text-center shadow-sm hover:border-indigo-500/20 transition-all duration-300">
              <div className="text-sm font-bold text-indigo-300">{item.word}</div>
              <div className="text-[11px] text-slate-400 font-content mt-0.5">{item.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VocabularySlide;
