import { Lesson } from '../../types';

const detailedIntermediate: Omit<Lesson, 'level'>[] = [
  {
    id: 31,
    englishWord: "And",
    tamilMeaning: "மற்றும்",
    englishExplanation: "ஒரே வகையான இரண்டு சொற்களையோ சொற்றொடர்களையோ இணைக்க 'And' பயன்படும்.",
    sentences: [
      { english: "Apple and orange.", tamil: "ஆப்பிள் மற்றும் ஆரஞ்சு.", breakdown: [{ word: "Apple", meaning: "ஆப்பிள்" }, { word: "and", meaning: "மற்றும்" }, { word: "orange", meaning: "ஆரஞ்சு" }] }
    ],
    speakingPractice: ["Apple and orange.", "You and me.", "We read and write."],
    translationPractice: [
      { question: "ஆப்பிள் மற்றும் ஆரஞ்சு", type: "tamil-to-english", answer: "Apple and orange" },
      { question: "பேனா மற்றும் காகிதம்", type: "tamil-to-english", answer: "Pen and paper" },
      { question: "நீயும் நானும்", type: "tamil-to-english", answer: "You and me" }
    ],
    rule: "Rule: 'And' connects two words, phrases, or clauses of similar status."
  },
  {
    id: 32,
    englishWord: "But",
    tamilMeaning: "ஆனால்",
    englishExplanation: "இரு முரண்பாடான கருத்துக்களை இணைக்கும்போது 'But' பயன்படுத்த வேண்டும்.",
    sentences: [
      { english: "I tried but failed.", tamil: "நான் முயற்சி செய்தேன் ஆனால் தோல்வியடைந்தேன்.", breakdown: [{ word: "I", meaning: "நான்" }, { word: "tried", meaning: "முயற்சி செய்தேன்" }, { word: "but", meaning: "ஆனால்" }, { word: "failed", meaning: "தோல்வியடைந்தேன்" }] }
    ],
    speakingPractice: ["I tried but failed.", "He is small but strong.", "It is cheap but good."],
    translationPractice: [
      { question: "நான் முயற்சி செய்தேன் ஆனால் தோல்வியடைந்தேன்", type: "tamil-to-english", answer: "I tried but failed" },
      { question: "அவன் சிறியவன் ஆனால் பலசாலி", type: "tamil-to-english", answer: "He is small but strong" },
      { question: "அது மலிவானது ஆனால் நல்லது", type: "tamil-to-english", answer: "It is cheap but good" }
    ],
    rule: "Rule: 'But' connects clauses representing contrasting ideas."
  },
  {
    id: 33,
    englishWord: "Because",
    tamilMeaning: "ஏனென்றால்",
    englishExplanation: "ஒரு செயலின் காரணத்தை விளக்கும்போது 'Because' பயன்படுத்த வேண்டும்.",
    sentences: [
      { english: "I am late because of rain.", tamil: "மழை பெய்ததால் எனக்கு நேரமாகிவிட்டது.", breakdown: [{ word: "I am late", meaning: "எனக்கு நேரமாகிவிட்டது" }, { word: "because of", meaning: "காரணத்தினால்" }, { word: "rain", meaning: "மழை" }] }
    ],
    speakingPractice: ["I am late because of rain.", "I study because I want to learn.", "He ran because he was late."],
    translationPractice: [
      { question: "மழை பெய்ததால் எனக்கு நேரமாகிவிட்டது", type: "tamil-to-english", answer: "I am late because of rain" },
      { question: "நான் தாமதம் ஏனென்றால் நான் தூங்கினேன்", type: "tamil-to-english", answer: "I am late because I slept" },
      { question: "அவன் ஓடினான் ஏனென்றால் அவனுக்கு நேரமாகிவிட்டது", type: "tamil-to-english", answer: "He ran because he was late" }
    ],
    rule: "Rule: 'Because' introduces a clause giving a reason."
  }
];

// Generate remaining intermediate lessons (34-60)
const generatedIntermediate: Omit<Lesson, 'level'>[] = Array.from({ length: 27 }, (_, idx) => {
  const id = 34 + idx;
  const words = [
    "Or", "With", "Without", "For", "About", "What", "Who", "Where", "When", "Why",
    "How", "Colleague", "Help", "Leave", "Status", "Lunch", "Thanks", "Order",
    "Directions", "Call", "Greetings", "Shopping", "Time", "Weather", "Doctor", "Travel", "Family"
  ];
  const meanings = [
    "அல்லது", "உடன்", "இல்லாமல்", "அதற்காக", "பற்றி", "என்ன", "யார்", "எங்கே", "எப்போது", "ஏன்",
    "எப்படி", "உடன் பணிபுரிபவர்", "உதவி", "விடுமுறை", "வேலை நிலை", "மதிய உணவு", "நன்றி", "ஆர்டர்",
    "வழிமுறை", "அழைப்பு", "வாழ்த்துகள்", "ஷாப்பிங்", "நேரம்", "வானிலை", "மருத்துவர்", "பயணம்", "குடும்பம்"
  ];

  const word = words[idx];
  const meaning = meanings[idx];

  return {
    id,
    englishWord: word,
    tamilMeaning: meaning,
    englishExplanation: `Intermediate பாடம் ${id}: '${word}' என்ற வார்த்தையை வாக்கியத்தில் பயன்படுத்தும் முறையை கற்போம்.`,
    sentences: [
      { english: `I speak with my colleagues about ${word.toLowerCase()}.`, tamil: `நான் என் சக ஊழியர்களுடன் ${meaning} பற்றி பேசுகிறேன்.`, breakdown: [{ word: "I", meaning: "நான்" }, { word: "speak", meaning: "பேசுகிறேன்" }] }
    ],
    speakingPractice: [`How to use ${word}?`, `I understand ${word} now.`, `Let's practice intermediate ${word}.`],
    translationPractice: [
      { question: `நான் ${meaning} கேட்கிறேன்`, type: "tamil-to-english", answer: `I ask for ${word.toLowerCase()}` },
      { question: `அவன் ${meaning} சொல்கிறான்`, type: "tamil-to-english", answer: `He says ${word.toLowerCase()}` },
      { question: `தயவுசெய்து ${meaning} கொடுங்கள்`, type: "tamil-to-english", answer: `Please give ${word.toLowerCase()}` }
    ],
    rule: `Rule: Intermediate conversation standard for '${word}'.`
  };
});

export const intermediateLessons: Lesson[] = [...detailedIntermediate, ...generatedIntermediate].map(l => ({
  ...l,
  level: 'intermediate'
}));
