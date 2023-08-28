

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        primaryColor: "rgb(79, 70, 229)",
        primaryColorDark: "rgb(99, 102, 241)",
        grayColor: "rgb(75, 85, 99)",
        grayColorDark: "rgb(156, 163, 175)"
      },
    },
  },
  plugins: [],
}