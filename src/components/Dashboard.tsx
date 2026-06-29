import React from 'react';
import { motion } from 'framer-motion';
import { Play, Check, Lock, Star, Award, BookOpen, MessageSquare, Zap } from 'lucide-react';
import { Level } from '../types';
import { lessons } from '../data/lessons';

interface DashboardProps {
  completedLessons: number[];
  testScores: Record<number, number>;
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
  onStartLesson: (lessonId: number) => void;
  onStartTest: (testId: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  completedLessons,
  testScores,
  selectedLevel,
  onSelectLevel,
  onStartLesson,
  onStartTest,
}) => {
  // Define level offsets
  const levelOffsets = {
    beginner: 0,
    intermediate: 30,
    advanced: 60,
    expert: 90,
  };

  const levelOffset = levelOffsets[selectedLevel];
  const totalLessonsInLevel = 30;

  // Statistics calculations
  const levelCompletedCount = completedLessons.filter(
    id => id > levelOffset && id <= levelOffset + totalLessonsInLevel
  ).length;
  const levelProgressPercent = Math.round((levelCompletedCount / totalLessonsInLevel) * 100);

  // Get current active lesson ID in the level
  let currentActiveLessonId = levelOffset + 1;
  for (let i = 1; i <= totalLessonsInLevel; i++) {
    const id = levelOffset + i;
    if (!completedLessons.includes(id)) {
      currentActiveLessonId = id;
      break;
    }
  }

  // Encouragement messages based on level and progress
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

  // Winding serpentine path grid layout (6 rows of 5 nodes = 30 nodes)
  const rows = Array.from({ length: 6 }, (_, rowIndex) => {
    const start = levelOffset + rowIndex * 5;
    const items = Array.from({ length: 5 }, (_, i) => start + i + 1);
    // Reverse odd rows to create serpentine wind
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

      {/* Level Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {(['beginner', 'intermediate', 'advanced', 'expert'] as Level[]).map((lvl, index) => {
          const isActive = selectedLevel === lvl;
          const label = lvl.toUpperCase();
          const icons = [BookOpen, MessageSquare, Award, Star];
          const IconComp = icons[index];

          // Check if previous level is unlocked (at least 20 lessons completed of previous level)
          const isUnlocked = index === 0 || completedLessons.filter(
            id => id > (index - 1) * 30 && id <= index * 30
          ).length >= 25; // Unlock next level if 25/30 of previous are done

          return (
            <button
              key={lvl}
              disabled={!isUnlocked}
              onClick={() => onSelectLevel(lvl)}
              className={`relative flex items-center justify-center gap-3 px-5 py-4 rounded-xl font-bold transition-all duration-300 border ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                  : isUnlocked
                  ? 'glass-panel text-slate-300 border-white/5 hover:bg-white/5'
                  : 'bg-slate-900/40 text-slate-600 border-white/5 cursor-not-allowed'
              }`}
            >
              <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : isUnlocked ? 'text-indigo-400' : 'text-slate-700'}`} />
              <span className="text-sm tracking-wide">{label}</span>
              {!isUnlocked && (
                <Lock className="w-4 h-4 text-slate-700 absolute right-3" />
              )}
            </button>
          );
        })}
      </div>

      {/* The Serpentine Graduation Pathway Map */}
      <div className="glass-panel rounded-3xl p-8 border border-white/5 relative overflow-hidden bg-slate-950/20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-transparent to-pink-950/5 pointer-events-none" />

        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            Learning Pathway Map
          </h2>
          <p className="text-xs font-content text-slate-400 mt-1">
            Click the active nodes or Assessment Stars to complete your journey.
          </p>
        </div>

        {/* serpetine path rows */}
        <div className="flex flex-col gap-10 md:gap-14 max-w-lg md:max-w-3xl mx-auto relative">
          {rows.map((rowItems, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`flex justify-around items-center gap-2 md:gap-6 ${
                rowIndex % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {rowItems.map(lessonId => {
                const isCompleted = completedLessons.includes(lessonId);
                const isAssessmentStar = lessonId % 10 === 0;
                const isCurrent = lessonId === currentActiveLessonId;
                const isLocked = lessonId > currentActiveLessonId;
                const hasScore = testScores[lessonId] !== undefined;

                // Load lesson details
                const lessonObj = lessons.find(l => l.id === lessonId);
                const label = lessonObj ? lessonObj.englishWord : `#${lessonId}`;

                return (
                  <div key={lessonId} className="flex flex-col items-center relative group">
                    {/* Node Connection Line decoration (mobile offset connector) */}
                    <div className="absolute top-1/2 left-full w-full h-[2px] bg-slate-800 pointer-events-none z-0 group-last:hidden hidden md:block" />

                    <motion.button
                      whileHover={!isLocked ? { scale: 1.15 } : {}}
                      whileTap={!isLocked ? { scale: 0.95 } : {}}
                      disabled={isLocked}
                      onClick={() => {
                        if (isAssessmentStar) {
                          onStartTest(lessonId);
                        } else {
                          onStartLesson(lessonId);
                        }
                      }}
                      className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300 ${
                        isAssessmentStar
                          ? isCompleted || hasScore
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] border-2 border-yellow-300'
                            : isCurrent
                            ? 'bg-amber-600 text-white animate-pulse border-2 border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                            : 'bg-slate-900 border border-slate-700 text-slate-500 cursor-not-allowed'
                          : isCompleted
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                          : isCurrent
                          ? 'bg-indigo-600 text-white border-2 border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.5)] ring-4 ring-indigo-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {/* Pulse Ring for active node */}
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-full animate-ping border border-indigo-400 opacity-60" />
                      )}

                      {/* Icon based on status */}
                      {isAssessmentStar ? (
                        <Star className={`w-6 h-6 md:w-8 md:h-8 ${isCompleted || hasScore ? 'fill-current' : ''}`} />
                      ) : isCompleted ? (
                        <Check className="w-5 h-5 md:w-7 md:h-7 stroke-[3px]" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4 md:w-6 md:h-6 opacity-40" />
                      ) : (
                        <Play className="w-5 h-5 md:w-6 md:h-6 fill-current stroke-none" />
                      )}

                      {/* Floating tag for lesson number */}
                      <span className="absolute -top-6 text-[10px] md:text-xs text-slate-400 font-content font-bold whitespace-nowrap bg-slate-950/70 border border-white/5 px-2 py-0.5 rounded-full">
                        {isAssessmentStar ? 'Test' : `L${lessonId}`}
                      </span>

                      {/* Star Score text overlay */}
                      {isAssessmentStar && hasScore && (
                        <span className="absolute -bottom-6 text-[10px] text-amber-400 font-black whitespace-nowrap bg-slate-950/80 px-2 py-0.5 rounded-full border border-amber-400/20">
                          {testScores[lessonId]}/100
                        </span>
                      )}
                    </motion.button>

                    {/* Word Tag beneath non-assessment nodes */}
                    {!isAssessmentStar && (
                      <span className={`text-[10px] md:text-sm mt-3 font-semibold text-center whitespace-nowrap transition-colors max-w-[80px] overflow-hidden text-ellipsis ${
                        isLocked ? 'text-slate-600' : isCurrent ? 'text-indigo-300 font-bold' : 'text-slate-300'
                      }`}>
                        {label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
