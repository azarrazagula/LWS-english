import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShaderAnimation } from './ShaderAnimation';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [startShader, setStartShader] = useState<boolean>(false);

  useEffect(() => {
    // 1. Display static 'Welcome Students' text with no card and no entrance animation for 1 second
    const bloomTimer = setTimeout(() => {
      setStartShader(true);
    }, 1000);

    // 2. Transition into landing page after shader animation burst (2.5s total)
    const exitTimer = setTimeout(() => {
      onEnter();
    }, 2500);

    return () => {
      clearTimeout(bloomTimer);
      clearTimeout(exitTimer);
    };
  }, [onEnter]);

  return (
    <div 
      onClick={onEnter}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black cursor-pointer select-none"
    >
      {/* Three.js Shader Animation Background - starts ONLY after 2 seconds */}
      {startShader && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <ShaderAnimation />
        </motion.div>
      )}

      {/* Pure text ONLY - Card container removed */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
          <span className={`bg-gradient-to-r from-amber-300 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 ${startShader ? 'brightness-125 scale-105 inline-block' : ''}`}>
            Welcome Students
          </span>
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
