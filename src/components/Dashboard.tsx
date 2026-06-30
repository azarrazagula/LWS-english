import React from 'react';
import { motion } from 'framer-motion';
import { Play, Check, Star, Award, BookOpen, MessageSquare, Zap } from 'lucide-react';
import { Level } from '../types';
import { lessons } from '../data/lessons';

/**
 * LWS-English: Landing Dashboard Component
 * Purpose: Displays the overall learning stats (progress percentage, completed count), 
 * interactive level select navigation, and the core 5-column serpentine learning pathway map.
 * Renders lesson progression nodes and milestone test stars with active/unlocked states.
 */

interface DashboardProps {
  completedLessons: number[];
  testScores: Record<number, number>;
  lessonStars: Record<number, number>;
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
  onStartLesson: (lessonId: number) => void;
  onStartTest: (testId: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  completedLessons,
  testScores,
  lessonStars,
  selectedLevel,
  onSelectLevel,
  onStartLesson,
  onStartTest,
}) => {
  // 1. Level Offsets: Beginners start at 0, Intermediates at 30, Advanced at 60, Experts at 90.
  const levelOffsets = {
    beginner: 0,
    intermediate: 30,
    advanced: 60,
    expert: 90,
  };

  const levelOffset = levelOffsets[selectedLevel];
  const totalLessonsInLevel = 30;

  // 2. Statistics: calculate count and percentage of completed lessons in the current level
  const levelCompletedCount = completedLessons.filter(
    id => id > levelOffset && id <= levelOffset + totalLessonsInLevel
  ).length;
  const levelProgressPercent = Math.round((levelCompletedCount / totalLessonsInLevel) * 100);

  // 3. Current active lesson: finds the first uncompleted lesson in the level (to show dynamic active ring)
  let currentActiveLessonId = levelOffset + 1;
  for (let i = 1; i <= totalLessonsInLevel; i++) {
    const id = levelOffset + i;
    if (!completedLessons.includes(id)) {
      currentActiveLessonId = id;
      break;
    }
  }

  // 4. Dynamic Encouragements: custom messages tailored to student's current learning status
  const getEncouragement = () => {
    if (completedLessons.length === 0) {
      return {
        emoji: "👶✨",
        title: "Welcome Student!",
        subtitle: "Namma zero-la irundhu baby steps eduthu arambikaporom. Ready ah?",
      };
    }
    
    if (selectedLevel === 'beginner') {
      return {
        emoji: "🐣🌟",
        title: "Beginner Explorer!",
        subtitle: `Awesome student! Neenga ${levelCompletedCount} lessons complete பண்ணிட்டிங்க. Keep going!`,
      };
    } else if (selectedLevel === 'intermediate') {
      return {
        emoji: "🗣️🚀",
        title: "Sentence builder!",
        subtitle: "Neenga office conversation-a seekirama pesaporiga. Keep practicing daily!",
      };
    } else if (selectedLevel === 'advanced') {
      return {
        emoji: "💻📝",
        title: "Writing & Intro Pro!",
        subtitle: "Self-introductions and Email replies ready path. You are doing fantastic!",
      };
    } else {
      return {
        emoji: "🎓🔥",
        title: "Interview Conqueror!",
        subtitle: "Almost there! Expert level-la complete fluent candidate ah fly aagaporiga!",
      };
    }
  };

  const encourage = getEncouragement();

  // 5. Pathway Grid Math: Compiles 6 rows of 5 nodes = 30 nodes. 
  // Reverses odd-indexed rows visually to create a winding horizontal board-game flow.
  const rows = Array.from({ length: 6 }, (_, rowIndex) => {
    const start = levelOffset + rowIndex * 5;
    const items = Array.from({ length: 5 }, (_, i) => start + i + 1);
    return rowIndex % 2 === 1 ? items.reverse() : items;
  });

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
      {/* Top Banner with Encouragement */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center md:justify-between gap-6 gradient-border-card"
      >
        <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
          <span className="text-6xl select-none animate-bounce">{encourage.emoji}</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              {encourage.title}
            </h1>
            <p className="text-slate-300 mt-2 font-content text-sm md:text-base font-light">
              {encourage.subtitle}
            </p>
          </div>
        </div>

        {/* Progress Display */}
        <div className="flex flex-col items-center justify-center glass-panel rounded-xl px-6 py-4 border border-white/5 w-full md:w-auto">
          <div className="flex items-center justify-between w-full gap-8 mb-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Level Progress</span>
            <span className="text-sm font-bold text-amber-400">{levelProgressPercent}%</span>
          </div>
          <div className="w-48 bg-slate-800/80 h-3 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${levelProgressPercent}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 rounded-full"
            />
          </div>
          <div className="text-[11px] text-slate-400 mt-2 font-content">
            {levelCompletedCount} of 30 lessons completed
          </div>
        </div>
      </motion.div>

      {/* Level Navigation Tabs - All Unlocked for Testing */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {(['beginner', 'intermediate', 'advanced', 'expert'] as Level[]).map((lvl, index) => {
          const isActive = selectedLevel === lvl;
          const label = lvl.toUpperCase();
          const icons = [BookOpen, MessageSquare, Award, Star];
          const IconComp = icons[index];

          return (
            <button
              key={lvl}
              onClick={() => onSelectLevel(lvl)}
              className={`relative flex items-center justify-center gap-3 px-5 py-4 rounded-xl font-bold transition-all duration-300 border ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                  : 'glass-panel text-slate-300 border-white/5 hover:bg-white/5'
              }`}
            >
              <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
              <span className="text-sm tracking-wide">{label}</span>
            </button>
          );
        })}
      </div>

      {/* The Serpentine Graduation Pathway Map */}
      <div className="glass-panel rounded-3xl p-4 md:p-8 border border-white/5 relative overflow-hidden bg-slate-950/20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-transparent to-pink-950/5 pointer-events-none" />

        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            Learning Pathway Map
          </h2>
          <p className="text-xs font-content text-slate-400 mt-1">
            Click the active nodes or Assessment Stars to complete your journey. (All unlocked for testing)
          </p>
        </div>

        {/* Responsive Serpentine Winding Grid (5 Columns) for all viewports */}
        <div className="max-w-4xl mx-auto relative py-6">
          <div className="flex flex-col gap-y-10 sm:gap-y-12 lg:gap-y-16 max-w-4xl mx-auto relative">
            {rows.map((rowItems, rowIndex) => (
              <div 
                key={rowIndex} 
                className="flex w-full relative"
              >
                {rowItems.map((lessonId, colIndex) => {
                  const isCompleted = completedLessons.includes(lessonId);
                  const isAssessmentStar = lessonId % 10 === 0;
                  const isCurrent = lessonId === currentActiveLessonId;
                  const hasScore = testScores[lessonId] !== undefined;
                  const starsEarned = lessonStars[lessonId] || 0;

                  const lessonObj = lessons.find(l => l.id === lessonId);
                  const label = lessonObj ? lessonObj.englishWord : `#${lessonId}`;

                  const isEvenRow = rowIndex % 2 === 0;
                  
                  // Connector logic
                  let connectorElement = null;
                  
                  if (colIndex < 4) {
                    // Horizontal line goes left-to-right (Col i to Col i+1)
                    connectorElement = (
                      <div className="absolute h-[2px] bg-slate-800 pointer-events-none z-0 left-1/2 w-full top-1/2 -translate-y-1/2" />
                    );
                  } else if (rowIndex < 5) {
                    // Last node of row connects vertically down to next row
                    // If even row, vertical line goes down from Col 4
                    // If odd row, vertical line goes down from Col 0
                    const showVertical = (isEvenRow && colIndex === 4) || (!isEvenRow && colIndex === 0);
                    if (showVertical) {
                      connectorElement = (
                        <div className="absolute w-[2px] bg-slate-800 pointer-events-none z-0 top-1/2 left-1/2 -translate-x-1/2 h-[88px] sm:h-[112px] lg:h-[144px]" />
                      );
                    }
                  }

                  return (
                    <div key={lessonId} className="w-[20%] flex flex-col items-center relative group">
                      {/* Connection line */}
                      {connectorElement}

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (isAssessmentStar) onStartTest(lessonId);
                          else onStartLesson(lessonId);
                        }}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300 ${
                          isAssessmentStar
                            ? isCompleted || hasScore
                              ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] border-2 border-yellow-300'
                              : 'bg-amber-600/30 border border-amber-500/50 text-amber-300 hover:bg-amber-500/30'
                            : isCompleted
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                            : isCurrent
                            ? 'bg-indigo-600 text-white border-2 border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                            : 'bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-900/30'
                        }`}
                      >
                        {isCurrent && <span className="absolute inset-0 rounded-full animate-ping border border-indigo-400 opacity-60 pointer-events-none" />}
                        {isAssessmentStar ? (
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                        ) : isCompleted ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[3px]" />
                        ) : (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-current stroke-none" />
                        )}

                        <span className="absolute -top-6 text-[8px] sm:text-[9px] lg:text-[10px] text-slate-400 font-bold whitespace-nowrap bg-slate-950/80 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/5">
                          {isAssessmentStar ? 'Test' : `L${lessonId}`}
                        </span>
                      </motion.button>

                      {/* Word text and stars under node */}
                      {!isAssessmentStar ? (
                        <div className="mt-2 text-center w-full px-1">
                          <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-slate-200 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                            {label}
                          </span>
                          
                          {/* 3-Star rewards display */}
                          <div className="flex justify-center gap-0.5 mt-1">
                            {[1, 2, 3].map((starIdx) => (
                              <Star 
                                key={starIdx} 
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 ${
                                  starIdx <= starsEarned 
                                    ? 'text-amber-400 fill-amber-400' 
                                    : 'text-slate-800'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        hasScore && (
                          <span className="absolute -bottom-6 text-[8px] sm:text-[9px] lg:text-[10px] text-amber-400 font-black whitespace-nowrap bg-slate-950/80 px-2 py-0.5 rounded-full border border-amber-400/20">
                            {testScores[lessonId]}/100
                          </span>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
