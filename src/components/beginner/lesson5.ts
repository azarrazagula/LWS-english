import { Lesson } from '../../types';

export const lesson5: Omit<Lesson, 'level'> = {
  "id": 5,
  "englishWord": "He",
  "tamilMeaning": "அவன் / இவர்",
  "englishExplanation": "ஆண்பாலைக் குறிக்க 'He' பயன்படும். இதன் பக்கத்தில் 'is' அல்லது 'was' வரும்.",
  "sentences": [
    {
      "english": "He is a doctor.",
      "tamil": "அவன் ஒரு மருத்துவர்.",
      "breakdown": [
        {
          "word": "He",
          "meaning": "அவன்"
        },
        {
          "word": "is",
          "meaning": "இருக்கிறான்"
        },
        {
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "doctor",
          "meaning": "மருத்துவர்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "He is a doctor.",
    "He is my brother.",
    "He works here."
  ],
  "translationPractice": [
    {
      "question": "அவன் ஒரு மருத்துவர்",
      "type": "tamil-to-english",
      "answer": "He is a doctor"
    },
    {
      "question": "அவன் நல்லவன்",
      "type": "tamil-to-english",
      "answer": "He is good"
    },
    {
      "question": "அவன் மகிழ்ச்சியாக இருக்கிறான்",
      "type": "tamil-to-english",
      "answer": "He is happy"
    }
  ],
  "rule": "Rule: 'He' refers to a male person. Takes singular verbs like 'is', 'was'."
};
