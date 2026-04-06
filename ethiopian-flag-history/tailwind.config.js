/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'ethio-green': '#078930',
        'ethio-yellow': '#FCD116',
        'ethio-red': '#DA121A',
        'emblem-blue': '#0F47AF',
        'dark-charcoal': '#1F2937',
        'off-white': '#F9FAFB',
      },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], 
          serif: ['Playfair Display', 'serif'], 
        }
    },
  },
  plugins: [],
}