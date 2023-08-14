/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1195FF",
      black: "#292929",
      dblack: "#1E1E1E",
      dgray: "#555555",
      lgray: "#DEDEDE",
      pwhite: "#FFFFFF",
      dblue: "#1E2746",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
