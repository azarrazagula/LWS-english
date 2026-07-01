import React from 'react';
import { GraduationCap } from 'lucide-react';

interface IntroSlideProps {
  lessonId: number;
  onStart: () => void;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ lessonId, onStart }) => {
  return (
    <div className="text-center py-10 space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-4xl text-white shadow-xl mx-auto animate-pulse">
        <GraduationCap className="w-10 h-10" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-black uppercase text-indigo-400 tracking-widest block">Beginner Lesson {lessonId}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Learning Center 📚</h1>
        <p className="text-sm md:text-base text-slate-400 font-content max-w-md mx-auto leading-relaxed mt-2">
          இன்று 5 புதிய ஆங்கில வார்த்தைகளை எளிய முறையில் வாக்கியங்களுடன் கற்போம்!
        </p>
      </div>
      <button
        onClick={onStart}
        className="px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all active:scale-95"
      >
        Start Lesson ➔
      </button>
    </div>
  );
};
export default IntroSlide;
