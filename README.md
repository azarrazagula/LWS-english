# 🎓 LWS-English — Spoken English Learning Web Application

> **Learn With Spoken English (LWS-English)** is a modern, interactive Spoken English learning platform designed specifically for Tamil speakers. Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Native WebGL Shaders**, it provides an engaging 10-slide step-by-step learning experience from Beginner to Advanced levels.

---

## 🌟 Highlights & Features

### 🎬 1. Cinematic WebGL Welcome Splash Screen
* **GLSL Fragment Shader**: Native WebGL shader background animation running custom cosmic fluid wave math.
* **Pure Text Entrance**: Clean 1-second hold displaying glowing gradient **"Welcome Students"** typography (`bg-gradient-to-r from-amber-300 via-pink-500 to-indigo-400`).
* **Dynamic Shader Burst**: At 1s, cosmic waves burst out dynamically behind the letters.
* **Seamless Screen Transition**: At 2.5s, smoothly dissolves into the main dashboard using Framer Motion (`AnimatePresence`) with a 16px backdrop blur and scale transition.

---

### 📚 2. Structured 30 Beginner Lessons
* **Tamil-to-English Pedagogy**: Teaches English grammar, daily spoken phrases, and vocabulary with clear Tamil translations.
* **100% 1-to-1 Index Matching**: Guaranteed alignment between vocabulary items and example sentences—every example sentence explicitly uses its corresponding vocabulary word.
* **Word-by-Word Breakdown**: Detailed breakdown mapping Tamil meanings directly to English words.
* **Interactive Translation Exercises**: Real-life Tamil-to-English translation practice questions for practical conversation skills.

---

### 🎴 3. 10-Slide Interactive Lesson Flow
1. **Slide 0 (Intro)**: Displays lesson goals, concept summary, and a single "Start Lesson" CTA button. Progress starts at `0%`.
2. **Slides 1 – 5 (Vocabulary & Sentence Mastery)**: Interactive flashcards with Web Speech API audio pronunciation, Tamil meanings, and word breakdowns.
3. **Slides 6 – 9 (Translation & Practice Quizzes)**: MCQ quizzes, fill-in-the-blanks, and Tamil-to-English translation exercises.
4. **Slide 10 (Homework & Mastery)**: Star rating evaluation, confetti celebration (`canvas-confetti`), and progress saving.
5. **Dynamic Control Bar**: Bottom navigation bar (`Back`, `Next Slide`, `Slide X / 10`) shows only when active slide > 0.

---

### 💾 4. Local Storage & Progress Persistence
* Automatically saves completed lessons, assessment test scores, star ratings, and selected level in `localStorage`.
* Includes a **Reset Progress** feature in the header to start fresh.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Framework** | React 18 (Vite) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS (Glassmorphism, Dark Mode) |
| **Animations** | Framer Motion & Native WebGL / GLSL Shaders |
| **Audio** | Web Speech API (`speechSynthesis`) |
| **Icons** | Lucide React |
| **Effects** | Canvas Confetti |

---

## 📂 Project Structure

```text
LWS-english/
├── src/
│   ├── components/
│   │   ├── animation/
│   │   │   ├── ShaderAnimation.tsx    # Native WebGL GLSL fragment shader
│   │   │   └── WelcomeScreen.tsx      # Cinematic 1s hold welcome splash
│   │   ├── beginner/
│   │   │   ├── slides/                # Slide components (Intro, Vocab, Quiz, Homework)
│   │   │   ├── BeginnerView.tsx       # 10-slide lesson player & controls
│   │   │   ├── lesson1.ts             # Lesson 1 dataset
│   │   │   ├── ...                    # Lessons 2 to 29
│   │   │   └── lesson30.ts            # Lesson 30 dataset
│   │   ├── header/
│   │   │   └── Header.tsx             # App header with progress reset
│   │   ├── router/
│   │   │   └── AppRouter.tsx          # Screen routing (Dashboard / Lesson / Test)
│   │   ├── ui/
│   │   │   └── shader-animation.tsx   # Shader UI re-export component
│   │   └── LuminousBg.tsx             # Animated ambient luminous background
│   ├── data/
│   │   └── lessons.ts                 # Aggregated lessons & assessments index
│   ├── types.ts                       # Core TypeScript interfaces
│   ├── App.tsx                        # Root app component with AnimatePresence
│   ├── main.tsx                       # Vite entry point
│   └── index.css                      # Global Tailwind CSS styles
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/azarrazagula/LWS-english.git
   cd LWS-english
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the URL shown in terminal).

---

## 🔨 Build & Production Verification

To verify TypeScript types and generate production build artifacts:

```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```

---

## 📝 License

This project is created for **Learn With Spoken English (LWS)**. All rights reserved.
