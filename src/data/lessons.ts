import { Lesson, Test } from '../types';
import { beginnerLessons, beginnerAssessments } from '../components/beginner/lessons';
import { intermediateLessons, intermediateAssessments } from '../components/intermediate/lessons';
import { advancedLessons, advancedAssessments } from '../components/advanced/lessons';
import { expertLessons, expertAssessments } from '../components/expert/lessons';

/**
 * LWS-English: Global Lessons Database & Assessments Compiler
 * File Path: src/data/lessons.ts
 * 
 * Purpose / Work of this file:
 * 1. Global Lessons Aggregator:
 *    Combines all 120 lessons from individual level folders (Beginner, Intermediate, 
 *    Advanced, Expert) into a single, flat 'lessons' array to support global indexing.
 * 
 * 2. Assessments Aggregator:
 *    Combines all 12 static milestone assessments (Tests 10 to 120) from individual level 
 *    folders into a single flat 'assessments' array used by TestView.tsx.
 */

// Aggregate all section lessons
export const lessons: Lesson[] = [
  ...beginnerLessons,
  ...intermediateLessons,
  ...advancedLessons,
  ...expertLessons
];

// Combine all level-specific static assessments
export const assessments: Test[] = [
  ...beginnerAssessments,
  ...intermediateAssessments,
  ...advancedAssessments,
  ...expertAssessments
];
