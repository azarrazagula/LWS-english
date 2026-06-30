import { Lesson } from '../../types';

export const lesson9: Omit<Lesson, 'level'> = {
  "id": 9,
  "englishWord": "We",
  "tamilMeaning": "நாங்கள் / நாம்",
  "englishExplanation": "நாங்கள் அல்லது நாம் என பன்மையில் கூறும்போது 'We' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "We are friends.",
      "tamil": "நாங்கள் நண்பர்கள்.",
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
          "word": "friends",
          "meaning": "நண்பர்கள்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "We are friends.",
    "We go together.",
    "We live here."
  ],
  "translationPractice": [
    {
      "question": "நாங்கள் நண்பர்கள்",
      "type": "tamil-to-english",
      "answer": "We are friends"
    },
    {
      "question": "நாங்கள் பள்ளிக்குச் செல்கிறோம்",
      "type": "tamil-to-english",
      "answer": "We go to school"
    },
    {
      "question": "நாங்கள் இங்கே வசிக்கிறோம்",
      "type": "tamil-to-english",
      "answer": "We live here"
    }
  ],
  "rule": "Rule: 'We' refers to first person plural. Takes plural verbs."
};
