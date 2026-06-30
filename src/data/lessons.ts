import { Lesson, Level, Test } from '../types';
import { beginnerLessons, beginnerAssessments } from '../components/beginner/lessons';
import { intermediateLessons } from '../components/intermediate/lessons';
import { advancedLessons } from '../components/advanced/lessons';
import { expertLessons } from '../components/expert/lessons';

// Aggregate all section lessons
export const lessons: Lesson[] = [
  ...beginnerLessons,
  ...intermediateLessons,
  ...advancedLessons,
  ...expertLessons
];

// Structured Assessments for levels (Intermediate, Advanced, Expert dynamically compiled)
const dynamicAssessments: Test[] = Array.from({ length: 9 }, (_, idx) => {
  const testId = (idx + 4) * 10;
  const levelIndex = Math.floor((testId - 1) / 30);
  const levels: Level[] = ['beginner', 'intermediate', 'advanced', 'expert'];
  const level = levels[levelIndex];

  // Dynamically compile questions based on the 10 lessons completed
  const lessonRangeStart = testId - 9;

  return {
    id: testId,
    title: `${level.charAt(0).toUpperCase() + level.slice(1)} Assessment - Lessons ${lessonRangeStart} to ${testId}`,
    questions: [
      // Part 1: Tamil Meanings (10 questions)
      ...Array.from({ length: 10 }, (_, qIdx) => {
        const targetLessonId = lessonRangeStart + (qIdx % 10);
        const l = lessons.find(les => les.id === targetLessonId) || lessons[0];
        return {
          id: qIdx + 1,
          part: 1 as const,
          questionText: `What is the Tamil meaning of "${l.englishWord}"?`,
          options: [l.tamilMeaning, "தவறான பொருள் 1", "தவறான பொருள் 2", "தவறான பொருள் 3"],
          answer: l.tamilMeaning
        };
      }),
      // Part 2: English to Tamil Sentence Translation (10 questions)
      ...Array.from({ length: 10 }, (_, qIdx) => {
        const targetLessonId = lessonRangeStart + (qIdx % 10);
        const l = lessons.find(les => les.id === targetLessonId) || lessons[0];
        const s = l.sentences[0];
        return {
          id: 10 + qIdx + 1,
          part: 2 as const,
          questionText: `Translate into Tamil: "${s.english}"`,
          answer: s.tamil
        };
      }),
      // Part 3: Tamil to English Sentence Translation (10 questions)
      ...Array.from({ length: 10 }, (_, qIdx) => {
        const targetLessonId = lessonRangeStart + (qIdx % 10);
        const l = lessons.find(les => les.id === targetLessonId) || lessons[0];
        const s = l.sentences[0];
        return {
          id: 20 + qIdx + 1,
          part: 3 as const,
          questionText: `Translate into English: "${s.tamil}"`,
          answer: s.english.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") // strip punctuation for flexible matching
        };
      }),
      // Part 4: Fill in the Blanks (10 questions)
      ...Array.from({ length: 10 }, (_, qIdx) => {
        return {
          id: 30 + qIdx + 1,
          part: 4 as const,
          questionText: `Complete the sentence: "I learn __________ (English) lessons."`,
          answer: "English"
        };
      }),
      // Part 5: Short Q&A & Sentence Creative Prompts (10 questions)
      ...Array.from({ length: 10 }, (_, qIdx) => {
        const targetLessonId = lessonRangeStart + (qIdx % 10);
        const l = lessons.find(les => les.id === targetLessonId) || lessons[0];
        return {
          id: 40 + qIdx + 1,
          part: 5 as const,
          questionText: `Say or write one English sentence using the word: "${l.englishWord}"`,
          prompt: l.englishWord,
          answer: "custom" // checked programmatically: must contain the prompt word
        };
      })
    ]
  };
});

// Combine static beginner assessments with other dynamic assessments
export const assessments: Test[] = [
  ...beginnerAssessments,
  ...dynamicAssessments
];
