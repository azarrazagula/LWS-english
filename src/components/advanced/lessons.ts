import { Lesson } from '../../types';

const detailedAdvanced: Omit<Lesson, 'level'>[] = [
  {
    id: 61,
    englishWord: "Self-Introduction Intro",
    tamilMeaning: "பெயர் மற்றும் அறிமுகம்",
    englishExplanation: "சுய அறிமுகத்தை எப்போதும் வாழ்த்துடன் தொடங்கி, பெயரைத் தெளிவாகக் கூற வேண்டும்.",
    sentences: [
      { english: "Hello, my name is Kumar.", tamil: "வணக்கம், என் பெயர் குமார்.", breakdown: [{ word: "Hello", meaning: "வணக்கம்" }, { word: "my name is", meaning: "என் பெயர்" }, { word: "Kumar", meaning: "குமார்" }] }
    ],
    speakingPractice: ["Hello, my name is Kumar.", "I am an engineer.", "I live in Chennai."],
    translationPractice: [
      { question: "வணக்கம், என் பெயர் குமார்", type: "tamil-to-english", answer: "Hello my name is Kumar" },
      { question: "நான் சென்னையில் வசிக்கிறேன்", type: "tamil-to-english", answer: "I live in Chennai" },
      { question: "வணக்கம், என் பெயர் பிரியா", type: "tamil-to-english", answer: "Hello my name is Priya" }
    ],
    rule: "Rule: Start your self-introduction by greeting the other person and stating your name clearly."
  },
  {
    id: 62,
    englishWord: "My Family Details",
    tamilMeaning: "குடும்ப விவரங்கள்",
    englishExplanation: "குடும்பத்தைப் பற்றி சுருக்கமாகக் கூற 'nuclear family' (சின்ன குடும்பம்) அல்லது 'joint family' (கூட்டுக் குடும்பம்) என்று கூறலாம்.",
    sentences: [
      { english: "I live in a small family.", tamil: "நான் ஒரு சிறிய குடும்பத்தில் வசிக்கிறேன்.", breakdown: [{ word: "I live", meaning: "நான் வசிக்கிறேன்" }, { word: "in a small family", meaning: "ஒரு சிறிய குடும்பத்தில்" }] }
    ],
    speakingPractice: ["I live in a small family.", "There are four members in my family.", "I have one sister."],
    translationPractice: [
      { question: "நான் ஒரு சிறிய குடும்பத்தில் வசிக்கிறேன்", type: "tamil-to-english", answer: "I live in a small family" },
      { question: "என் குடும்பத்தில் நான்கு பேர் உள்ளனர்", type: "tamil-to-english", answer: "There are four members in my family" },
      { question: "எனக்கு ஒரு சகோதரி இருக்கிறாள்", type: "tamil-to-english", answer: "I have one sister" }
    ],
    rule: "Rule: In self-introduction, mention family structure simply using terms like 'nuclear' or 'joint' family."
  }
];

// Generate remaining advanced lessons (63-90)
const generatedAdvanced: Omit<Lesson, 'level'>[] = Array.from({ length: 28 }, (_, idx) => {
  const id = 63 + idx;
  const topics = [
    "Education", "Hobbies", "Work Experience", "Leave Email", "Client Email", "Professional Chat",
    "Storytelling Base", "Goal Setting", "Past Memories", "Daily Schedule", "Project Plan",
    "Opinion Sharing", "Feedback Reply", "Meeting Notes", "Report Writing", "Status Update",
    "Team Building", "Problem Solving", "Suggestion Mail", "Clarification Email", "Event Planning",
    "Presentation Prep", "Self Analysis", "Weakness Discuss", "Strength Discuss", "Future Vision",
    "Client Call", "Closing Session"
  ];
  const meanings = [
    "கல்வி", "பொழுதுபோக்கு", "வேலை அனுபவம்", "விடுமுறை மின்னஞ்சல்", "கிளையண்ட் மின்னஞ்சல்", "அரட்டை செய்தி",
    "கதை சொல்லல்", "இலக்கு அமைப்பு", "கடந்தகால நினைவுகள்", "தினசரி அட்டவணை", "திட்ட வரைபடம்",
    "கருத்து பகிர்வு", "பின்னூட்ட பதில்", "கூட்ட குறிப்புகள்", "அறிக்கை தயாரித்தல்", "வேலை நிலை அறிக்கை",
    "குழு உருவாக்கம்", "பிரச்சனை தீர்த்தல்", "ஆலோசனை அஞ்சல்", "விளக்க அஞ்சல்", "நிகழ்ச்சி திட்டமிடல்",
    "விளக்கக்காட்சி தயாரிப்பு", "சுய பகுப்பாய்வு", "பலவீனம் விவாதம்", "பலம் விவாதம்", "எதிர்கால பார்வை",
    "கிளையண்ட் அழைப்பு", "முடிவு அமர்வு"
  ];

  const word = topics[idx];
  const meaning = meanings[idx];

  return {
    id,
    englishWord: word,
    tamilMeaning: meaning,
    englishExplanation: `Advanced பாடம் ${id}: '${word}' என்ற தலைப்பில் மின்னஞ்சல் எழுத மற்றும் பேச பழகுவோம்.`,
    sentences: [
      { english: `I am writing to discuss the ${word.toLowerCase()} plan.`, tamil: `நான் ${meaning} திட்டத்தைப் பற்றி விவாதிக்க எழுதுகிறேன்.`, breakdown: [{ word: "I am writing", meaning: "நான் எழுதுகிறேன்" }, { word: "to discuss", meaning: "விவாதிக்க" }] }
    ],
    speakingPractice: [`Let's write a professional email about ${word}.`, `I will practice this advanced topic.`, `Fluent typing is my target.`],
    translationPractice: [
      { question: `நான் ${meaning} எழுதுகிறேன்`, type: "tamil-to-english", answer: `I am writing ${word.toLowerCase()}` },
      { question: `தயவுசெய்து ${meaning} சரிபார்க்கவும்`, type: "tamil-to-english", answer: `Please check the ${word.toLowerCase()}` },
      { question: `இது எனது ${meaning} திட்டம்`, type: "tamil-to-english", answer: `This is my ${word.toLowerCase()} plan` }
    ],
    rule: `Rule: Advanced corporate writing tone for '${word}' correspondence.`
  };
});

export const advancedLessons: Lesson[] = [...detailedAdvanced, ...generatedAdvanced].map(l => ({
  ...l,
  level: 'advanced'
}));
