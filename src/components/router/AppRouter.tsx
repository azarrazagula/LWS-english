import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Lesson, Test } from '../../types';
import { Dashboard } from '../Dashboard';
import { BeginnerView } from '../beginner/BeginnerView';
import { IntermediateView } from '../intermediate/IntermediateView';
import { AdvancedView } from '../advanced/AdvancedView';
import { ExpertView } from '../expert/ExpertView';
import { TestView } from '../TestView';

/**
 * LWS-English: Screen Routing Component
 * Purpose: Manages conditional rendering of views (Dashboard, Lesson Levels, Milestone Tests)
 * based on current navigation screen and handles cross-component callback prop transfers.
 */

interface AppRouterProps {
  currentScreen: 'dashboard' | 'lesson' | 'test';
  activeLesson: Lesson | null;
  activeTest: Test | null;
  completedLessons: number[];
  testScores: Record<number, number>;
  lessonStars: Record<number, number>;
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
  onStartLesson: (lessonId: number) => void;
  onStartTest: (testId: number) => void;
  onCompleteLesson: (lessonId: number, stars: number) => void;
  onCompleteTest: (testId: number, score: number) => void;
  onBackToDashboard: () => void;
}

export const AppRouter: React.FC<AppRouterProps> = ({
  currentScreen,
  activeLesson,
  activeTest,
  completedLessons,
  testScores,
  lessonStars,
  selectedLevel,
  onSelectLevel,
  onStartLesson,
  onStartTest,
  onCompleteLesson,
  onCompleteTest,
  onBackToDashboard,
}) => {
  return (
    <main className="relative z-10">
      <AnimatePresence mode="wait">
        {/* Dashboard View */}
        {currentScreen === 'dashboard' && (
          <motion.div
            key="dashboard-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard
              completedLessons={completedLessons}
              testScores={testScores}
              lessonStars={lessonStars}
              selectedLevel={selectedLevel}
              onSelectLevel={onSelectLevel}
              onStartLesson={onStartLesson}
              onStartTest={onStartTest}
            />
          </motion.div>
        )}

        {/* Level Specific Lesson Views */}
        {currentScreen === 'lesson' && activeLesson && (
          <motion.div
            key="lesson-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            {activeLesson.level === 'beginner' && (
              <BeginnerView
                lesson={activeLesson}
                onComplete={onCompleteLesson}
                onBack={onBackToDashboard}
              />
            )}
            {activeLesson.level === 'intermediate' && (
              <IntermediateView
                lesson={activeLesson}
                onComplete={onCompleteLesson}
                onBack={onBackToDashboard}
              />
            )}
            {activeLesson.level === 'advanced' && (
              <AdvancedView
                lesson={activeLesson}
                onComplete={onCompleteLesson}
                onBack={onBackToDashboard}
              />
            )}
            {activeLesson.level === 'expert' && (
              <ExpertView
                lesson={activeLesson}
                onComplete={onCompleteLesson}
                onBack={onBackToDashboard}
              />
            )}
          </motion.div>
        )}

        {/* Milestone Test Assessment View */}
        {currentScreen === 'test' && activeTest && (
          <motion.div
            key="test-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            <TestView
              test={activeTest}
              onComplete={onCompleteTest}
              onBack={onBackToDashboard}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
export default AppRouter;
