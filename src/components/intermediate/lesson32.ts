import { Lesson } from '../../types';

export const lesson32: Omit<Lesson, 'level'> = {
  "id": 32,
  "englishWord": "But",
  "tamilMeaning": "ஆனால்",
  "englishExplanation": "இரு முரண்பாடான கருத்துக்களை இணைக்கும்போது 'But' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "I tried but failed.",
      "tamil": "நான் முயற்சி செய்தேன் ஆனால் தோல்வியடைந்தேன்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "tried",
          "meaning": "முயற்சி செய்தேன்"
        },
        {
          "word": "but",
          "meaning": "ஆனால்"
        },
        {
          "word": "failed",
          "meaning": "தோல்வியடைந்தேன்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I tried but failed.",
    "He is small but strong.",
    "It is cheap but good."
  ],
  "translationPractice": [
    {
      "question": "நான் முயற்சி செய்தேன் ஆனால் தோல்வியடைந்தேன்",
      "type": "tamil-to-english",
      "answer": "I tried but failed"
    },
    {
      "question": "அவன் சிறியவன் ஆனால் பலசாலி",
      "type": "tamil-to-english",
      "answer": "He is small but strong"
    },
    {
      "question": "அது மலிவானது ஆனால் நல்லது",
      "type": "tamil-to-english",
      "answer": "It is cheap but good"
    }
  ],
  "rule": "Rule: 'But' connects clauses representing contrasting ideas."
};
