import { Lesson } from '../../types';

export const lesson10: Omit<Lesson, 'level'> = {
  "id": 10,
  "englishWord": "They",
  "tamilMeaning": "அவர்கள் / அவைகள்",
  "englishExplanation": "அவர்கள் அல்லது அவைகள் என்று பன்மையில் கூற 'They' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "They are playing.",
      "tamil": "அவர்கள் விளையாடுகிறார்கள்.",
      "breakdown": [
        {
          "word": "They",
          "meaning": "அவர்கள்"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறார்கள்"
        },
        {
          "word": "playing",
          "meaning": "விளையாடிக்கொண்டு"
        }
      ]
    }
  ],
  "speakingPractice": [
    "They are playing.",
    "They speak well.",
    "They are busy."
  ],
  "translationPractice": [
    {
      "question": "அவர்கள் விளையாடுகிறார்கள்",
      "type": "tamil-to-english",
      "answer": "They are playing"
    },
    {
      "question": "அவர்கள் நன்றாகப் பேசுகிறார்கள்",
      "type": "tamil-to-english",
      "answer": "They speak well"
    },
    {
      "question": "அவர்கள் பிஸியாக இருக்கிறார்கள்",
      "type": "tamil-to-english",
      "answer": "They are busy"
    }
  ],
  "rule": "Rule: 'They' refers to third person plural (people or things). Takes plural verbs."
};
