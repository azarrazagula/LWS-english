import React from 'react';

export const LuminousBg: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full pointer-events-none select-none z-0 bg-[#070b15]">
      {/* Glow sphere 1 */}
      <div 
        className="glow-sphere bg-indigo-500 w-[500px] h-[500px] top-[-10%] left-[-10%] animate-luminous-drift-1" 
      />
      {/* Glow sphere 2 */}
      <div 
        className="glow-sphere bg-purple-500 w-[600px] h-[600px] bottom-[-20%] right-[-10%] animate-luminous-drift-2" 
      />
      {/* Glow sphere 3 */}
      <div 
        className="glow-sphere bg-pink-500 w-[450px] h-[450px] top-[40%] left-[60%] animate-luminous-drift-3" 
      />
      {/* Dark mesh texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#080c16]/70 to-[#03060f] opacity-80" />
    </div>
  );
};
export default LuminousBg;
