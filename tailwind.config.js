/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', // Enable dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        'blue-600': '#1E40AF',
        'pink-100': '#FFE4E6',
        'pink-300': '#FDB1B8',
        'pink-600': '#DB2777',
        'black': {
          DEFAULT: '#000000',
          '50': '#E5E5E5',
          '100': '#CCCCCC',
          '200': '#999999',
          '300': '#666666',
          '400': '#333333',
          '500': '#000000',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};

export default config;
