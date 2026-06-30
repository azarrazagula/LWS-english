import { Lesson } from '../../types';

export const lesson3: Omit<Lesson, 'level'> = {
  "id": 3,
  "englishWord": "You",
  "tamilMeaning": "நீ / நீங்கள்",
  "englishExplanation": "'You' என்பது ஒருத்தரையும் குறிக்கும், பலரையும் குறிக்கும். இதன் பக்கத்தில் 'are' அல்லது 'were' வர வேண்டும்.",
  "vocabularies": [
    {
      "word": "You",
      "meaning": "நீ / நீங்கள்"
    },
    {
      "word": "are",
      "meaning": "இருக்கிறாய் / இருக்கிறீர்கள்"
    },
    {
      "word": "good",
      "meaning": "நல்லது / நல்லவர்"
    },
    {
      "word": "friend",
      "meaning": "நண்பன்"
    },
    {
      "word": "teacher",
      "meaning": "ஆசிரியர்"
    }
  ],
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
    "You are my friend.",
    "You are a teacher.",
    "Are you my friend?",
    "Are you a good teacher?"
  ],
  "translationPractice": [
    {
      "question": "நீங்கள் நல்லவர்.",
      "type": "tamil-to-english",
      "answer": "You are good"
    },
    {
      "question": "நீங்கள் என் நண்பன்.",
      "type": "tamil-to-english",
      "answer": "You are my friend"
    },
    {
      "question": "நீங்கள் ஒரு ஆசிரியர்.",
      "type": "tamil-to-english",
      "answer": "You are a teacher"
    },
    {
      "question": "நீ என் நண்பனா?",
      "type": "tamil-to-english",
      "answer": "Are you my friend"
    },
    {
      "question": "நீங்கள் ஒரு நல்ல ஆசிரியரா?",
      "type": "tamil-to-english",
      "answer": "Are you a good teacher"
    }
  ],
  "rule": "Rule: 'You' can mean singular (நீ) or plural (நீங்கள்). It always takes plural verbs like 'are'."
};
