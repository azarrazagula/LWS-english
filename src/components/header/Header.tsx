import React from 'react';
import { RefreshCw } from 'lucide-react';

/**
 * LWS-English: Global Header Component
 * Purpose: Renders the logo, main title, responsive subtitle, 
 * "100% Client side" badge, "Test Mode" badge, and "Reset Progress" action button.
 */

interface HeaderProps {
  onResetProgress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onResetProgress }) => {
  return (
    <header className="relative z-10 border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Slogan */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-xl text-white shadow-lg select-none">
            L
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-white">
              LWS ENGLISH
            </span>
            <span className="text-[10px] uppercase text-indigo-400 font-bold block leading-none tracking-widest font-content mt-0.5">
              Learn with Smile 😊
            </span>
          </div>
        </div>

        {/* Action Widgets and Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* 100% CSR Branding Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-extrabold shadow-[0_0_10px_rgba(59,130,246,0.15)] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            100% Client side
          </div>

          {/* Test Mode Branding Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[10px] font-extrabold shadow-[0_0_10px_rgba(245,158,11,0.15)] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Test Mode 🧪
          </div>

          {/* Reset Progress Button */}
          <button
            onClick={onResetProgress}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/5 transition-all uppercase tracking-wider active:scale-95"
            title="Reset Progress"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Progress
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
