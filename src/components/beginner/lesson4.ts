import { Lesson } from '../../types';

export const lesson4: Omit<Lesson, 'level'> = {
  "id": 4,
  "englishWord": "Are",
  "tamilMeaning": "இருக்கிறாய் / இருக்கிறீர்கள்",
  "englishExplanation": "பன்மை பெயர்களுடன் (You, We, They) நிகழ்காலத்தில் 'Are' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "We are teachers.",
      "tamil": "நாங்கள் ஆசிரியர்களாக இருக்கிறோம்.",
      "breakdown": [
        {
          "word": "We",
          "meaning": "நாங்கள்"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறோம்"
        },
        {
          "word": "teachers",
          "meaning": "ஆசிரியர்கள்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "We are learning.",
    "They are happy.",
    "You are right."
  ],
  "translationPractice": [
    {
      "question": "நாங்கள் ஆசிரியர்கள்",
      "type": "tamil-to-english",
      "answer": "We are teachers"
    },
    {
      "question": "அவர்கள் மகிழ்ச்சியாக இருக்கிறார்கள்",
      "type": "tamil-to-english",
      "answer": "They are happy"
    },
    {
      "question": "நாங்கள் நண்பர்கள்",
      "type": "tamil-to-english",
      "answer": "We are friends"
    }
  ],
  "rule": "Rule: 'Are' is used with plural pronouns (You, We, They) in present tense."
};
