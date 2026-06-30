import { Lesson } from '../../types';

export const lesson33: Omit<Lesson, 'level'> = {
  "id": 33,
  "englishWord": "Because",
  "tamilMeaning": "ஏனின்றால்",
  "englishExplanation": "ஒரு செயலின் காரணத்தை விளக்கும்போது 'Because' பயன்படுத்த வேண்டும்.",
  "sentences": [
    {
      "english": "I am late because of rain.",
      "tamil": "மழை பெய்ததால் எனக்கு நேரமாகிவிட்டது.",
      "breakdown": [
        {
          "word": "I am late",
          "meaning": "எனக்கு நேரமாகிவிட்டது"
        },
        {
          "word": "because of",
          "meaning": "காரணத்தினால்"
        },
        {
          "word": "rain",
          "meaning": "மழை"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am late because of rain.",
    "I study because I want to learn.",
    "He ran because he was late."
  ],
  "translationPractice": [
    {
      "question": "மழை பெய்ததால் எனக்கு நேரமாகிவிட்டது",
      "type": "tamil-to-english",
      "answer": "I am late because of rain"
    },
    {
      "question": "நான் தாமதம் ஏனென்றால் நான் தூங்கினேன்",
      "type": "tamil-to-english",
      "answer": "I am late because I slept"
    },
    {
      "question": "அவன் ஓடினான் ஏனென்றால் அவனுக்கு நேரமாகிவிட்டது",
      "type": "tamil-to-english",
      "answer": "He ran because he was late"
    }
  ],
  "rule": "Rule: 'Because' introduces a clause giving a reason."
};
