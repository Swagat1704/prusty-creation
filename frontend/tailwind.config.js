/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        primary: '#FF007F',
        white: '#ffffff',
        cyan: '#00FFFF',
        yellow: '#FFD700',
        blue: '#007BFF',
        // gray: '#333333',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
