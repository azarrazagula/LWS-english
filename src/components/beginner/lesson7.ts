import { Lesson } from '../../types';

export const lesson7: Omit<Lesson, 'level'> = {
  "id": 7,
  "englishWord": "It",
  "tamilMeaning": "அது",
  "englishExplanation": "மிருகங்கள், பொருட்கள் அல்லது உயிரற்றவற்றுக்கு 'It' பயன்படும்.",
  "sentences": [
    {
      "english": "It is a book.",
      "tamil": "அது ஒரு புத்தகம்.",
      "breakdown": [
        {
          "word": "It",
          "meaning": "அது"
        },
        {
          "word": "is",
          "meaning": "இருக்கிறது"
        },
        {
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "book",
          "meaning": "புத்தகம்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "It is a book.",
    "It is raining.",
    "It is very big."
  ],
  "translationPractice": [
    {
      "question": "அது ஒரு புத்தகம்",
      "type": "tamil-to-english",
      "answer": "It is a book"
    },
    {
      "question": "அது ஒரு பேனா",
      "type": "tamil-to-english",
      "answer": "It is a pen"
    },
    {
      "question": "அது ஒரு மேசை",
      "type": "tamil-to-english",
      "answer": "It is a table"
    }
  ],
  "rule": "Rule: 'It' is used for animals, things, or non-living objects."
};
