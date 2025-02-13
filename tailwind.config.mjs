/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Añade esta línea
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#020202",
        },
        primary: {},
        secondary: {},
        tertiary: {},
        quaternary: {},
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {},
      maxWidth: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",
      },
      maxHeight: {
        "1/10": "10vh",
        "2/10": "20vh",
        "3/10": "30vh",
        "4/10": "40vh",
        "5/10": "50vh",
        "6/10": "60vh",
        "7/10": "70vh",
        "8/10": "80vh",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        6: "2rem",
        7: "1rem",
      },
      borderColor: {
        black: "#000",
        blackRad: "rgba(0,0,0,0.8)",
        whiteRad: "rgba(242, 242, 242, 0.8)",
      },
      fontSize: {
        "2xs": ".5rem",
        "3xs": ".375rem",
      },
      aspectRatio: {
        "1/1": [1, 1], // Cuadrado
        "4/3": [4, 3],
        "3/2": [3, 2],
        "16/9": [16, 9],
        "16/10": [16, 10],
        "21/9": [21, 9],
        "5/7": [5, 7],
        "4/5": [4, 5],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
