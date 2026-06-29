/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fef3c7', // warm amber-50
          dark: '#0f172a',  // slate-900
          accent: '#f59e0b', // amber-500
          glow1: '#6366f1',  // indigo-500
          glow2: '#a855f7',  // purple-500
          glow3: '#ec4899',  // pink-500
        }
      },
      fontFamily: {
        interface: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        content: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
      },
      animation: {
        'luminous-drift-1': 'drift1 20s infinite ease-in-out alternate',
        'luminous-drift-2': 'drift2 25s infinite ease-in-out alternate',
        'luminous-drift-3': 'drift3 30s infinite ease-in-out alternate',
      },
      keyframes: {
        drift1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(100px, 80px) scale(1.2)' },
          '100%': { transform: 'translate(-50px, 150px) scale(0.9)' },
        },
        drift2: {
          '0%': { transform: 'translate(0px, 0px) scale(1.1)' },
          '50%': { transform: 'translate(-120px, 120px) scale(0.8)' },
          '100%': { transform: 'translate(80px, -50px) scale(1.3)' },
        },
        drift3: {
          '0%': { transform: 'translate(0px, 0px) scale(0.9)' },
          '50%': { transform: 'translate(150px, -100px) scale(1.2)' },
          '100%': { transform: 'translate(-80px, 80px) scale(1.1)' },
        },
      }
    },
  },
  plugins: [],
}
