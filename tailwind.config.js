/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  important: true,
  theme: {
    extend: {
      colors: {
        primary1: "rgb(73, 94, 87)",
        primary2: "rgb(244, 206, 20)",
        secondary1: "rgb(238, 153, 114)",
        secondary2: "rgb(251, 218, 187)",
        Highlight1: "rgb(237, 239, 238)",
        Highlight2: "rgb(51, 51, 51)",

      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
      },
      border: {
        border1: "border-width: 16px",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
