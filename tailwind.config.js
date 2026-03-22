/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0a0f1c',
          card: '#111827',
          border: '#1f2937'
        },
        brand: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4'
        }
      }
    },
  },
  plugins: [],
}
