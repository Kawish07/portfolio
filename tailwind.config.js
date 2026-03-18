module.exports = {
  content: [
    './index.html',
    './components/**/*.{js,jsx,ts,tsx}',
    './**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

