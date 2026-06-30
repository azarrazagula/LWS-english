import { Lesson } from '../../types';

export const lesson1: Omit<Lesson, 'level'> = {
  "id": 1,
  "englishWord": "I",
  "tamilMeaning": "நான்",
  "englishExplanation": "நான் என்று குறிப்பிடும்போது 'I' எப்போதும் Capital letter-ல் எழுதப்பட வேண்டும்.",
  "sentences": [
    {
      "english": "I am a student.",
      "tamil": "நான் ஒரு மாணவன்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "am",
          "meaning": "இருக்கிறேன்"
        },
        {
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "student",
          "meaning": "மாணவன்"
        }
      ]
    },
    {
      "english": "I can read.",
      "tamil": "என்னால் படிக்க முடியும்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "can",
          "meaning": "முடியும்"
        },
        {
          "word": "read",
          "meaning": "படிக்க"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am a student.",
    "I can read English.",
    "I am learning English."
  ],
  "translationPractice": [
    {
      "question": "நான் ஒரு மாணவன்",
      "type": "tamil-to-english",
      "answer": "I am a student"
    },
    {
      "question": "நான் ஒரு மருத்துவர்",
      "type": "tamil-to-english",
      "answer": "I am a doctor"
    },
    {
      "question": "நான் ஒரு ஆசிரியர்",
      "type": "tamil-to-english",
      "answer": "I am a teacher"
    }
  ],
  "rule": "Rule: Always capitalize 'I' when talking about yourself in English. Tamil-il 'நான்' என்று பொருள்."
};
