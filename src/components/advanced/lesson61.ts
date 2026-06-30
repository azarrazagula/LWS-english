import { Lesson } from '../../types';

export const lesson61: Omit<Lesson, 'level'> = {
  "id": 61,
  "englishWord": "Self-Introduction Intro",
  "tamilMeaning": "பெயர் மற்றும் அறிமுகம்",
  "englishExplanation": "சுய அறிமுகத்தை எப்போதும் வாழ்த்துடன் தொடங்கி, பெயரைத் தெளிவாகக் கூற வேண்டும்.",
  "sentences": [
    {
      "english": "Hello, my name is Kumar.",
      "tamil": "வணக்கம், என் பெயர் குமார்.",
      "breakdown": [
        {
          "word": "Hello",
          "meaning": "வணக்கம்"
        },
        {
          "word": "my name is",
          "meaning": "என் பெயர்"
        },
        {
          "word": "Kumar",
          "meaning": "குமார்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "Hello, my name is Kumar.",
    "I am an engineer.",
    "I live in Chennai."
  ],
  "translationPractice": [
    {
      "question": "வணக்கம், என் பெயர் குமார்",
      "type": "tamil-to-english",
      "answer": "Hello my name is Kumar"
    },
    {
      "question": "நான் சென்னையில் வசிக்கிறேன்",
      "type": "tamil-to-english",
      "answer": "I live in Chennai"
    },
    {
      "question": "வணக்கம், என் பெயர் பிரியா",
      "type": "tamil-to-english",
      "answer": "Hello my name is Priya"
    }
  ],
  "rule": "Rule: Start your self-introduction by greeting the other person and stating your name clearly."
};
