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
        accent: '#6366f1',
        'accent-violet': '#7c3aed',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

