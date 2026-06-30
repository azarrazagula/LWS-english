import { Lesson } from '../../types';

export const lesson8: Omit<Lesson, 'level'> = {
  "id": 8,
  "englishWord": "Is",
  "tamilMeaning": "இருக்கிறான் / இருக்கிறாள் / இருக்கிறது",
  "englishExplanation": "ஒருமை பெயர்களுடன் (He, She, It) நிகழ்காலத்தில் 'Is' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "He is happy.",
      "tamil": "அவன் மகிழ்ச்சியாக இருக்கிறான்.",
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
          "word": "happy",
          "meaning": "மகிழ்ச்சியாக"
        }
      ]
    }
  ],
  "speakingPractice": [
    "He is happy.",
    "She is late.",
    "It is cold."
  ],
  "translationPractice": [
    {
      "question": "அவன் மகிழ்ச்சியாக இருக்கிறான்",
      "type": "tamil-to-english",
      "answer": "He is happy"
    },
    {
      "question": "அவள் தாமதமாக வருகிறாள்",
      "type": "tamil-to-english",
      "answer": "She is late"
    },
    {
      "question": "அது குளிர்ச்சியாக இருக்கிறது",
      "type": "tamil-to-english",
      "answer": "It is cold"
    }
  ],
  "rule": "Rule: 'Is' is used with singular pronouns (He, She, It) in present tense."
};
