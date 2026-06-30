import { Lesson } from '../../types';

export const lesson20: Omit<Lesson, 'level'> = {
  "id": 20,
  "englishWord": "From",
  "tamilMeaning": "இருந்து",
  "englishExplanation": "Beginner பாடம் 20: 'From' என்ற வார்த்தையை வாக்கியத்தில் பயன்படுத்தும் முறையை கற்போம்.",
  "sentences": [
    {
      "english": "I am from Chennai.",
      "tamil": "நான் சென்னையிலிருந்து வருகிறேன்.",
      "breakdown": [
        {
          "word": "From",
          "meaning": "இருந்து"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am from Chennai.",
    "This is from India.",
    "He came from office.",
    "She came from home.",
    "Are you from India?"
  ],
  "translationPractice": [
    {
      "question": "நான் சென்னையிலிருந்து வருகிறேன்.",
      "type": "tamil-to-english",
      "answer": "I am from Chennai"
    },
    {
      "question": "இது இந்தியாவிலிருந்து வந்தது.",
      "type": "tamil-to-english",
      "answer": "This is from India"
    },
    {
      "question": "அவன் அலுவலகத்திலிருந்து வந்தான்.",
      "type": "tamil-to-english",
      "answer": "He came from office"
    },
    {
      "question": "அவள் வீட்டிலிருந்து வந்தாள்.",
      "type": "tamil-to-english",
      "answer": "She came from home"
    },
    {
      "question": "நீங்கள் இந்தியாவைச் சேர்ந்தவரா?",
      "type": "tamil-to-english",
      "answer": "Are you from India"
    }
  ],
  "rule": "Rule: Standard grammar focus for beginner word 'From'.",
  "vocabularies": [
    {
      "word": "From",
      "meaning": "இருந்து"
    },
    {
      "word": "chennai",
      "meaning": "சென்னை"
    },
    {
      "word": "india",
      "meaning": "இந்தியா"
    },
    {
      "word": "office",
      "meaning": "அலுவலகம்"
    },
    {
      "word": "home",
      "meaning": "வீடு"
    }
  ]
};
