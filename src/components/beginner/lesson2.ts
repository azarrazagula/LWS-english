import { Lesson } from '../../types';

export const lesson2: Omit<Lesson, 'level'> = {
  "id": 2,
  "englishWord": "Am",
  "tamilMeaning": "இருக்கிறேன்",
  "englishExplanation": "'Am' என்பது 'I' உடன் மட்டுமே நிகழ்காலத்தில் பயன்படுத்தப்படும்.",
  "vocabularies": [
    {
      "word": "am",
      "meaning": "இருக்கிறேன்"
    },
    {
      "word": "happy",
      "meaning": "மகிழ்ச்சியாக"
    },
    {
      "word": "today",
      "meaning": "இன்று"
    },
    {
      "word": "here",
      "meaning": "இங்கே"
    },
    {
      "word": "doctor",
      "meaning": "மருத்துவர்"
    }
  ],
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
    },
    {
      "english": "Am I happy here?",
      "tamil": "நான் இங்கே மகிழ்ச்சியாக இருக்கிறேனா?",
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
          "word": "happy",
          "meaning": "மகிழ்ச்சியாக"
        },
        {
          "word": "here",
          "meaning": "இங்கே"
        }
      ]
    },
    {
      "english": "I am happy today.",
      "tamil": "நான் இன்று மகிழ்ச்சியாக இருக்கிறேன்.",
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
        },
        {
          "word": "today",
          "meaning": "இன்று"
        }
      ]
    },
    {
      "english": "I am here.",
      "tamil": "நான் இங்கே இருக்கிறேன்.",
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
          "word": "here",
          "meaning": "இங்கே"
        }
      ]
    },
    {
      "english": "I am a doctor.",
      "tamil": "நான் ஒரு மருத்துவர்.",
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
          "word": "doctor",
          "meaning": "மருத்துவர்"
        }
      ]
    }
  ],
  "speakingPractice": [
    "I am happy.",
    "I am happy today.",
    "I am here.",
    "I am a doctor.",
    "Am I happy here?"
  ],
  "translationPractice": [
    {
      "question": "நான் மகிழ்ச்சியாக இருக்கிறேன்.",
      "type": "tamil-to-english",
      "answer": "I am happy"
    },
    {
      "question": "நான் இன்று மகிழ்ச்சியாக இருக்கிறேன்.",
      "type": "tamil-to-english",
      "answer": "I am happy today"
    },
    {
      "question": "நான் இங்கே இருக்கிறேன்.",
      "type": "tamil-to-english",
      "answer": "I am here"
    },
    {
      "question": "நான் ஒரு மருத்துவர்.",
      "type": "tamil-to-english",
      "answer": "I am a doctor"
    },
    {
      "question": "நான் இங்கே மகிழ்ச்சியாக இருக்கிறேனா?",
      "type": "tamil-to-english",
      "answer": "Am I happy here"
    }
  ],
  "rule": "Rule: 'Am' is only used with 'I' in present tense. Tamil-il 'இருக்கிறேன்' என்று பொருள்."
};
