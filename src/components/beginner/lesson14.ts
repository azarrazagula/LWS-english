import { Lesson } from '../../types';

export const lesson14: Omit<Lesson, 'level'> = {
  "id": 14,
  "englishWord": "A",
  "tamilMeaning": "ஒரு",
  "englishExplanation": "Beginner பாடம் 14: 'A' என்ற வார்த்தையை வாக்கியத்தில் பயன்படுத்தும் முறையை கற்போம்.",
  "sentences": [
    {
      "english": "I have a dog.",
      "tamil": "என்னிடம் ஒரு நாய் இருக்கிறது.",
      "breakdown": [
        {
          "word": "A",
          "meaning": "ஒரு"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I have a dog.",
    "It is a cat.",
    "A pet is at home.",
    "He has a pet dog.",
    "Is it a cat?"
  ],
  "translationPractice": [
    {
      "question": "என்னிடம் ஒரு நாய் இருக்கிறது.",
      "type": "tamil-to-english",
      "answer": "I have a dog"
    },
    {
      "question": "அது ஒரு பூனை.",
      "type": "tamil-to-english",
      "answer": "It is a cat"
    },
    {
      "question": "ஒரு செல்லப்பிராணி வீட்டில் இருக்கிறது.",
      "type": "tamil-to-english",
      "answer": "A pet is at home"
    },
    {
      "question": "அவனிடம் ஒரு செல்ல நாய் இருக்கிறது.",
      "type": "tamil-to-english",
      "answer": "He has a pet dog"
    },
    {
      "question": "அது ஒரு பூனையா?",
      "type": "tamil-to-english",
      "answer": "Is it a cat"
    }
  ],
  "rule": "Rule: Standard grammar focus for beginner word 'A'.",
  "vocabularies": [
    {
      "word": "A",
      "meaning": "ஒரு"
    },
    {
      "word": "dog",
      "meaning": "நாய்"
    },
    {
      "word": "cat",
      "meaning": "பூனை"
    },
    {
      "word": "pet",
      "meaning": "செல்லப்பிராணி"
    },
    {
      "word": "home",
      "meaning": "வீடு"
    }
  ]
};
