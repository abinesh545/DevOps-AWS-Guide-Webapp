/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aws: {
          light: '#FF9900',
          dark: '#E47F00',
        },
        devops: {
          light: '#007ACC',
          dark: '#005C99',
        }
      }
    },
  },
  plugins: [],
}
