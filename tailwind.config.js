/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-white': '#F8FAFC',
        'soft-gray': '#64748B',
      },
    },
  },
  plugins: [],
};