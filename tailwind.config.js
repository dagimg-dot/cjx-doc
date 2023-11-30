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
        consolas: {
          fontFamily: "Consolas",
          fontStyle: "normal",
          fontWeight: "normal",
          fontDisplay: "swap",
          src: "url('./src/assets/fonts/Consolas.ttf') format('truetype')",
        },
      },
      backgroundImage: {
        bodyGradient:
          "linear-gradient(180deg, rgb(10, 10, 12) 19.72%, rgb(11, 11, 53) 100%)",
      },
      colors: {
        "custom-pink": "#D49E9E",
        "custom-white": "#27272A",
        "bash-white": "#E4E4E7",
        "header-white": "#BCBCBC",
        "header-black": "rgba(217, 217, 217, 0.00)",
        "black-border": "#1F1F20",
      },
    },
    screens: {
      maxx: { max: "1210px" },
      mimd: { max: "1110px" },
      maxmd: { max: "961px" },
      minmd: { max: "891px" },
      smd: { max: "792px" },
      maxsm: { max: "656px" },
      mdsm: { max: "616px" },
      smx: { max: "460px" },
      sms: { max: "334px" },
    },
  },
  plugins: [],
};
