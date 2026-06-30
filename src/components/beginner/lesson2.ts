import { Lesson } from '../../types';

export const lesson2: Omit<Lesson, 'level'> = {
  "id": 2,
  "englishWord": "Am",
  "tamilMeaning": "இருக்கிறேன்",
  "englishExplanation": "'Am' என்பது 'I' உடன் மட்டுமே நிகழ்காலத்தில் பயன்படுத்தப்படும்.",
  "sentences": [
    {
      "english": "I am happy.",
      "tamil": "நான் மகிழ்ச்சியாக இருக்கிறேன்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "am",
          "meaning": "இருக்கிறேன்"
        },
        {
          "word": "happy",
          "meaning": "மகிழ்ச்சியாக"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am happy today.",
    "I am at home.",
    "I am a doctor."
  ],
  "translationPractice": [
    {
      "question": "நான் மகிழ்ச்சியாக இருக்கிறேன்",
      "type": "tamil-to-english",
      "answer": "I am happy"
    },
    {
      "question": "நான் கோபமாக இருக்கிறேன்",
      "type": "tamil-to-english",
      "answer": "I am angry"
    },
    {
      "question": "நான் இங்கே இருக்கிறேன்",
      "type": "tamil-to-english",
      "answer": "I am here"
    }
  ],
  "rule": "Rule: 'Am' is only used with 'I' in present tense. Tamil-il 'இருக்கிறேன்' என்று பொருள்."
};
