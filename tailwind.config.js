/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: '#7C3AED',
        brandGreen: '#22C55E',
        ink: '#0B0B14',
        inkLight: '#F8FAFC',
        inkMuted: '#CBD5E1',
        inkBorder: '#334155',
      },
    },
  },
  plugins: [],
}
