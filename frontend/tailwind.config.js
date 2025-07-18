/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        
        white: '#ffffff',
        cyan: '#00FFFF',
        sunshineYellow: '#FFD700',
        electricBlue: '#007BFF',
        // gray: '#333333',
        black: '#000000',
        vibrantOrange: '#FF6F20',
        brightPurple: '#C204E3',
        
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        vibrantOrange: '#FF6F20',
        brightPurple: '#C204E3',
      }),
    },
  },
  plugins: [],
};
