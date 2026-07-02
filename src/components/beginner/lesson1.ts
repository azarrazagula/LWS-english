import { Lesson } from '../../types';

export const lesson1: Omit<Lesson, 'level'> = {
  "id": 1,
  "englishWord": "I",
  "tamilMeaning": "நான்",
  "englishExplanation": "நான் என்று குறிப்பிடும்போது 'I' எப்போதும் Capital letter-ல் எழுதப்பட வேண்டும்.",
  "vocabularies": [
    {
      "word": "I",
      "meaning": "நான்"
    },
    {
      "word": "student",
      "meaning": "மாணவன்"
    },
    {
      "word": "learn",
      "meaning": "கற்கிறேன்"
    },
    {
      "word": "good",
      "meaning": "நல்ல"
    },
    {
      "word": "daily",
      "meaning": "தினமும்"
    }
  ],
  "sentences": [
    {
      "english": "I am a student.",
      "tamil": "நான் ஒரு மாணவன்.",
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
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "student",
          "meaning": "மாணவன்"
        }
      ]
    },
    {
      "english": "Am I a student?",
      "tamil": "நான் ஒரு மாணவனா?",
      "breakdown": [
        {
          "word": "Am",
          "meaning": "இருக்கிறேனா"
        },
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "student",
          "meaning": "மாணவன்"
        }
      ]
    },
    {
      "english": "I learn English.",
      "tamil": "நான் ஆங்கிலம் கற்கிறேன்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "learn",
          "meaning": "கற்கிறேன்"
        },
        {
          "word": "English",
          "meaning": "ஆங்கிலம்"
        }
      ]
    },
    {
      "english": "I am a good student.",
      "tamil": "நான் ஒரு நல்ல மாணவன்.",
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
          "word": "a",
          "meaning": "ஒரு"
        },
        {
          "word": "good",
          "meaning": "நல்ல"
        },
        {
          "word": "student",
          "meaning": "மாணவன்"
        }
      ]
    },
    {
      "english": "I learn daily.",
      "tamil": "நான் தினமும் கற்கிறேன்.",
      "breakdown": [
        {
          "word": "I",
          "meaning": "நான்"
        },
        {
          "word": "learn",
          "meaning": "கற்கிறேன்"
        },
        {
          "word": "daily",
          "meaning": "தினமும்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am a student.",
    "I learn English.",
    "I am a good student.",
    "I learn daily.",
    "Am I a student?"
  ],
  "translationPractice": [
    {
      "question": "நான் ஒரு மாணவன்.",
      "type": "tamil-to-english",
      "answer": "I am a student"
    },
    {
      "question": "நான் ஆங்கிலம் கற்கிறேன்.",
      "type": "tamil-to-english",
      "answer": "I learn English"
    },
    {
      "question": "நான் ஒரு நல்ல மாணவன்.",
      "type": "tamil-to-english",
      "answer": "I am a good student"
    },
    {
      "question": "நான் தினமும் கற்கிறேன்.",
      "type": "tamil-to-english",
      "answer": "I learn daily"
    },
    {
      "question": "நான் ஒரு மாணவனா?",
      "type": "tamil-to-english",
      "answer": "Am I a student"
    }
  ],
  "rule": "Rule: Always capitalize 'I' when talking about yourself in English. Tamil-il 'நான்' என்று பொருள்."
};
