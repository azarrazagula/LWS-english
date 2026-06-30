export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface BreakdownItem {
  word: string;
  meaning: string;
}

export interface SentenceItem {
  english: string;
  tamil: string;
  breakdown: BreakdownItem[];
}

export interface TranslationPracticeItem {
  question: string;
  type: 'tamil-to-english' | 'english-to-tamil';
  answer: string;
}

export interface Lesson {
  id: number;
  level: Level;
  englishWord: string;
  tamilMeaning: string;
  englishExplanation: string; // word by word translation in tamil text
  sentences: SentenceItem[];
  speakingPractice: string[];
  translationPractice: TranslationPracticeItem[]; // updated: must contain 3 items
  rule: string;
}

export interface Progress {
  completedLessons: number[]; // ids of completed lessons
  testScores: Record<number, number>; // test index (e.g. 10, 20) -> score (0-100)
  lessonStars: Record<number, number>; // lessonId -> stars earned (0 to 3)
  selectedLevel: Level;
}

export type TestPart = 1 | 2 | 3 | 4 | 5;

export interface TestQuestion {
  id: number;
  part: TestPart;
  questionText: string;
  options?: string[]; // for part 1 multiple choice
  answer: string;
  prompt?: string; // e.g. "Go"
}

export interface Test {
  id: number; // e.g. 10, 20
  title: string;
  questions: TestQuestion[];
}
