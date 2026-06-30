import { Lesson } from '../../types';

const detailedExpert: Omit<Lesson, 'level'>[] = [
  {
    id: 91,
    englishWord: "Interview Introduction",
    tamilMeaning: "நேர்காணல் சுய அறிமுகம்",
    englishExplanation: "வேலை நேர்காணலில் உங்கள் சுய அறிமுகம் 90 நொடிகளுக்குள் இருக்க வேண்டும்; திறன்களை முன்னிலைப்படுத்த வேண்டும்.",
    sentences: [
      { english: "Thank you for giving me this opportunity.", tamil: "எனக்கு இந்த வாய்ப்பை வழங்கியதற்கு நன்றி.", breakdown: [{ word: "Thank you", meaning: "நன்றி" }, { word: "for giving me", meaning: "எனக்கு வழங்கியதற்கு" }, { word: "this opportunity", meaning: "இந்த வாய்ப்பை" }] }
    ],
    speakingPractice: ["Thank you for giving me this opportunity.", "I have three years of experience.", "I look forward to this role."],
    translationPractice: [
      { question: "எனக்கு இந்த வாய்ப்பை வழங்கியதற்கு நன்றி", type: "tamil-to-english", answer: "Thank you for giving me this opportunity" },
      { question: "எனக்கு மூன்று வருட அனுபவம் உள்ளது", type: "tamil-to-english", answer: "I have three years of experience" },
      { question: "நான் இந்த பதவிக்காக ஆவலுடன் இருக்கிறேன்", type: "tamil-to-english", answer: "I look forward to this role" }
    ],
    rule: "Rule: Keep your interview introduction under 90 seconds. Focus on achievements."
  },
  {
    id: 92,
    englishWord: "HR Strengths Question",
    tamilMeaning: "பலங்கள் என்ன?",
    englishExplanation: "உங்களது திறமைகளை/பலங்களை கூறும்போது ஒரு நிஜ உதாரணத்தோடு விவரிக்க வேண்டும்.",
    sentences: [
      { english: "I am a quick learner.", tamil: "நான் விரைவாகக் கற்றுக்கொள்பவன்.", breakdown: [{ word: "I am", meaning: "நான்" }, { word: "a quick learner", meaning: "விரைவாகக் கற்றுக்கொள்பவன்" }] }
    ],
    speakingPractice: ["I am a quick learner.", "I work well in a team.", "I can solve problems easily."],
    translationPractice: [
      { question: "நான் விரைவாகக் கற்றுக்கொள்பவன்", type: "tamil-to-english", answer: "I am a quick learner" },
      { question: "நான் குழுவில் நன்றாக வேலை செய்வேன்", type: "tamil-to-english", answer: "I work well in a team" },
      { question: "என்னால் எளிதில் பிரச்சனைகளை தீர்க்க முடியும்", type: "tamil-to-english", answer: "I can solve problems easily" }
    ],
    rule: "Rule: When talking about strengths, give a real life example of how you used them."
  }
];

// Generate remaining expert lessons (93-120)
const generatedExpert: Omit<Lesson, 'level'>[] = Array.from({ length: 28 }, (_, idx) => {
  const id = 93 + idx;
  const topics = [
    "Weaknesses", "Why Hire You", "Why Leave Last Job", "Meeting Speech", "Salary Negotiation",
    "Feedback Handling", "Leadership Talk", "Customer Complaint", "Project Showcase", "Conflict Resolution",
    "Performance Review", "Client Call", "Corporate Email", "Office Presentation", "Decision Making",
    "Problem Analysis", "Time Management", "Team Leadership", "Goal Alignment", "Networking Tips",
    "Public Speech", "Corporate Etiquette", "Resume Discussion", "Technical Interview", "Group Discussion",
    "Confidence Building", "Final Mock Interview", "Graduation Pitch"
  ];
  const meanings = [
    "பலவீனங்கள்", "ஏன் உங்களை எடுக்க வேண்டும்", "முந்தைய வேலையை விட்டதற்கான காரணம்", "கூட்ட பேச்சு", "சம்பள பேச்சுவார்த்தை",
    "பின்னூட்டம் கையாளுதல்", "தலைமைத்துவ பேச்சு", "வாடிக்கையாளர் புகார்", "திட்ட விளக்கக்காட்சி", "மோதல் தீர்வு",
    "செயல்திறன் ஆய்வு", "கிளையண்ட் அழைப்பு", "கார்ப்பரேட் மின்னஞ்சல்", "அலுவலக விளக்கக்காட்சி", "முடிவெடுத்தல்",
    "பிரச்சனை பகுப்பாய்வு", "நேர மேலாண்மை", "குழு தலைமை", "இலக்கு சீரமைப்பு", "நெட்வொர்க்கிங் குறிப்புகள்",
    "பொது மேடை பேச்சு", "கார்ப்பரேட் நெறிமுறைகள்", "ரெஸ்யூம் விவாதம்", "தொழில்நுட்ப நேர்காணல்", "குழு விவாதம்",
    "தன்னம்பிக்கை வளர்த்தல்", "இறுதி மாதிரி நேர்காணல்", "பட்டமளிப்பு பேச்சு"
  ];

  const word = topics[idx];
  const meaning = meanings[idx];

  return {
    id,
    englishWord: word,
    tamilMeaning: meaning,
    englishExplanation: `Expert பாடம் ${id}: வேலை நேர்காணலில் '${word}' என்ற தலைப்பில் நேர்த்தியாக பேச பழகுவோம்.`,
    sentences: [
      { english: `I can present my ideas on ${word.toLowerCase()} effectively.`, tamil: `என்னால் ${meaning} குறித்த என் கருத்துக்களை திறம்பட முன்வைக்க முடியும்.`, breakdown: [{ word: "I can", meaning: "என்னால் முடியும்" }, { word: "present", meaning: "முன்வைக்க" }] }
    ],
    speakingPractice: [`Discussing ${word} is important.`, `I can handle ${word} professionally.`, `Interview practice is fun.`],
    translationPractice: [
      { question: `நான் என் ${meaning} விவரிக்கிறேன்`, type: "tamil-to-english", answer: `I explain my ${word.toLowerCase()}` },
      { question: `எனக்கு ${meaning} பிடிக்கும்`, type: "tamil-to-english", answer: `I like ${word.toLowerCase()}` },
      { question: `இது என் ${meaning} கருத்து`, type: "tamil-to-english", answer: `This is my ${word.toLowerCase()} opinion` }
    ],
    rule: `Rule: High-level corporate fluency standard for job interviews on topic '${word}'.`
  };
});

export const expertLessons: Lesson[] = [...detailedExpert, ...generatedExpert].map(l => ({
  ...l,
  level: 'expert'
}));
