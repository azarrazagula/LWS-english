import { Lesson } from '../../types';

export const lesson6: Omit<Lesson, 'level'> = {
  "id": 6,
  "englishWord": "She",
  "tamilMeaning": "அவள் / இவர் (பெண்)",
  "englishExplanation": "பெண்பாலைக் குறிக்க 'She' பயன்படும். இதன் பக்கத்தில் 'is' அல்லது 'was' வரும்.",
  "sentences": [
    {
      "english": "She is a teacher.",
      "tamil": "அவள் ஒரு ஆசிரியர்.",
      "breakdown": [
        {
          "word": "She",
          "meaning": "அவள்"
        },
        {
          "word": "is",
          "meaning": "இருக்கிறாள்"
        },
        {
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "teacher",
          "meaning": "ஆசிரியர்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "She is a teacher.",
    "She is my sister.",
    "She runs fast."
  ],
  "translationPractice": [
    {
      "question": "அவள் ஒரு ஆசிரியர்",
      "type": "tamil-to-english",
      "answer": "She is a teacher"
    },
    {
      "question": "அவள் ஒரு மருத்துவர்",
      "type": "tamil-to-english",
      "answer": "She is a doctor"
    },
    {
      "question": "அவள் இங்கே இருக்கிறாள்",
      "type": "tamil-to-english",
      "answer": "She is here"
    }
  ],
  "rule": "Rule: 'She' refers to a female person. Takes singular verbs."
};
