import { Lesson } from '../../types';

export const lesson7: Omit<Lesson, 'level'> = {
  "id": 7,
  "englishWord": "It",
  "tamilMeaning": "அது",
  "englishExplanation": "மிருகங்கள், பொருட்கள் அல்லது உயிரற்றவற்றுக்கு 'It' பயன்படும்.",
  "vocabularies": [
    {
      "word": "It",
      "meaning": "அது"
    },
    {
      "word": "is",
      "meaning": "இருக்கிறது"
    },
    {
      "word": "book",
      "meaning": "புத்தகம்"
    },
    {
      "word": "raining",
      "meaning": "மழை பெய்கிறது"
    },
    {
      "word": "big",
      "meaning": "பெரியது"
    }
  ],
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
    "It is very big.",
    "Is it a book?",
    "Is it raining today?"
  ],
  "translationPractice": [
    {
      "question": "அது ஒரு புத்தகம்.",
      "type": "tamil-to-english",
      "answer": "It is a book"
    },
    {
      "question": "மழை பெய்து கொண்டிருக்கிறது.",
      "type": "tamil-to-english",
      "answer": "It is raining"
    },
    {
      "question": "அது மிகவும் பெரியது.",
      "type": "tamil-to-english",
      "answer": "It is very big"
    },
    {
      "question": "அது ஒரு புத்தகமா?",
      "type": "tamil-to-english",
      "answer": "Is it a book"
    },
    {
      "question": "இன்று மழை பெய்கிறதா?",
      "type": "tamil-to-english",
      "answer": "Is it raining today"
    }
  ],
  "rule": "Rule: 'It' is used for animals, things, or non-living objects."
};
