import { Lesson } from '../../types';

export const lesson31: Omit<Lesson, 'level'> = {
  "id": 31,
  "englishWord": "And",
  "tamilMeaning": "மற்றும்",
  "englishExplanation": "ஒரே வகையான இரண்டு சொற்களையோ சொற்றொடர்களையோ இணைக்க 'And' பயன்படும்.",
  "sentences": [
    {
      "english": "Apple and orange.",
      "tamil": "ஆப்பிள் மற்றும் ஆரஞ்சு.",
      "breakdown": [
        {
          "word": "Apple",
          "meaning": "ஆப்பிள்"
        },
        {
          "word": "and",
          "meaning": "மற்றும்"
        },
        {
          "word": "orange",
          "meaning": "ஆரஞ்சு"
        }
      ]
    }
  ],
  "speakingPractice": [
    "Apple and orange.",
    "You and me.",
    "We read and write."
  ],
  "translationPractice": [
    {
      "question": "ஆப்பிள் மற்றும் ஆரஞ்சு",
      "type": "tamil-to-english",
      "answer": "Apple and orange"
    },
    {
      "question": "பேனா மற்றும் காகிதம்",
      "type": "tamil-to-english",
      "answer": "Pen and paper"
    },
    {
      "question": "நீயும் நானும்",
      "type": "tamil-to-english",
      "answer": "You and me"
    }
  ],
  "rule": "Rule: 'And' connects two words, phrases, or clauses of similar status."
};
