/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
      fontFace: {
        "consolas": {
          "fontFamily": "Consolas",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontDisplay": "swap",
          "src": "url('./src/fonts/Consolas.ttf') format('truetype')"
        },
      },
      backgroundImage: {
        "bodyGradient": "linear-gradient(180deg, rgb(10, 10, 12) 19.72%, rgb(11, 11, 53) 100%)",
      },
      colors:{
        "custom-pink":"#D49E9E",
        "custom-white":"#27272A",
        "bash-white":"#E4E4E7",
        "header-white":"#BCBCBC"
      }
    },
  },
  plugins: [],
}

