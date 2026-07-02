import { Lesson } from '../../types';

export const lesson3: Omit<Lesson, 'level'> = {
  "id": 3,
  "englishWord": "You",
  "tamilMeaning": "நீ / நீங்கள்",
  "englishExplanation": "'You' என்பது ஒருமையையும் (நீ) பன்மையையும் (நீங்கள்) குறிக்கும். இதனுடன் எப்போதும் 'are' பயன்படுத்தப்படும்.",
  "vocabularies": [
    {
      "word": "You",
      "meaning": "நீ / நீங்கள்"
    },
    {
      "word": "happy",
      "meaning": "மகிழ்ச்சியாக"
    },
    {
      "word": "smart",
      "meaning": "புத்திசாலி"
    },
    {
      "word": "ready",
      "meaning": "தயார்"
    },
    {
      "word": "welcome",
      "meaning": "நல்வரவு / வரவேற்பு"
    }
  ],
  "sentences": [
    {
      "english": "You are a student.",
      "tamil": "நீ ஒரு மாணவன்.",
      "breakdown": [
        {
          "word": "You",
          "meaning": "நீ"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறாய்"
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
      "english": "You are happy.",
      "tamil": "நீ மகிழ்ச்சியாக இருக்கிறாய்.",
      "breakdown": [
        {
          "word": "You",
          "meaning": "நீ"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறாய்"
        },
        {
          "word": "happy",
          "meaning": "மகிழ்ச்சியாக"
        }
      ]
    },
    {
      "english": "You are smart.",
      "tamil": "நீ புத்திசாலியாக இருக்கிறாய்.",
      "breakdown": [
        {
          "word": "You",
          "meaning": "நீ"
        },
        {
          "word": "are",
          "meaning": "இருக்கிறாய்"
        },
        {
          "word": "smart",
          "meaning": "புத்திசாலியாக"
        }
      ]
    },
    {
      "english": "Are you ready?",
      "tamil": "நீ தயாராக இருக்கிறாயா?",
      "breakdown": [
        {
          "word": "Are",
          "meaning": "இருக்கிறாயா"
        },
        {
          "word": "you",
          "meaning": "நீ"
        },
        {
          "word": "ready",
          "meaning": "தயாராக"
        }
      ]
    },
    {
      "english": "You are welcome.",
      "tamil": "உங்களை அன்போடு வரவேற்கிறோம்.",
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
          "word": "welcome",
          "meaning": "நல்வரவு"
        }
      ]
    }
  ],
  "speakingPractice": [
    "You are a student.",
    "You are happy.",
    "You are smart.",
    "Are you ready?",
    "You are welcome."
  ],
  "translationPractice": [
    {
      "question": "நீ ஒரு மாணவன்.",
      "type": "tamil-to-english",
      "answer": "You are a student"
    },
    {
      "question": "நீ மகிழ்ச்சியாக இருக்கிறாய்.",
      "type": "tamil-to-english",
      "answer": "You are happy"
    },
    {
      "question": "நீ புத்திசாலியாக இருக்கிறாய்.",
      "type": "tamil-to-english",
      "answer": "You are smart"
    },
    {
      "question": "நீ தயாராக இருக்கிறாயா?",
      "type": "tamil-to-english",
      "answer": "Are you ready"
    },
    {
      "question": "உங்களை அன்போடு வரவேற்கிறோம்.",
      "type": "tamil-to-english",
      "answer": "You are welcome"
    }
  ],
  "rule": "Rule: 'You' refers to singular (நீ) or plural (நீங்கள்). It always pairs with plural verbs like 'are' or 'were' in English."
};
