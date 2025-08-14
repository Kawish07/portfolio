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
        neon: '#ff1744', // Red accent
        darkblue: '#0a192f', // Deep dark blue
        mate: '#1e293b', // Mate theme
        glass: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(10,25,47,0.2)',
        neon: '0 0 20px #ff1744',
      },
    },
  },
  plugins: [],
};
