import { Lesson } from '../../types';

export const lesson3: Omit<Lesson, 'level'> = {
  "id": 3,
  "englishWord": "You",
  "tamilMeaning": "நீ / நீங்கள்",
  "englishExplanation": "'You' என்பது ஒருத்தரையும் குறிக்கும், பலரையும் குறிக்கும். இதன் பக்கத்தில் 'are' அல்லது 'were' வர வேண்டும்.",
  "sentences": [
    {
      "english": "You are good.",
      "tamil": "நீங்கள் நல்லவர்.",
      "breakdown": [
        {
          "word": "You",
          "meaning": "நீங்கள்"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறீர்கள்"
        },
        {
          "word": "good",
          "meaning": "நல்லவராக"
        }
      ]
    }
  ],
  "speakingPractice": [
    "You are good.",
    "You are learning.",
    "You are my friend."
  ],
  "translationPractice": [
    {
      "question": "நீங்கள் நல்லவர்",
      "type": "tamil-to-english",
      "answer": "You are good"
    },
    {
      "question": "நீங்கள் ஒரு மருத்துவர்",
      "type": "tamil-to-english",
      "answer": "You are a doctor"
    },
    {
      "question": "நீங்கள் இங்கே இருக்கிறீர்கள்",
      "type": "tamil-to-english",
      "answer": "You are here"
    }
  ],
  "rule": "Rule: 'You' can mean singular (நீ) or plural (நீங்கள்). It always takes plural verbs like 'are'."
};
