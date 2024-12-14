/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      smd: "650px",
      md: "970px",
      lg: "1024px",
      xl: "1186px",
      xxl: "1538px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [flowbite],
};
