/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bodyGradient": "linear-gradient(133deg, rgb(10, 10, 12) 19.72%, rgb(11, 11, 53) 100%)",
      },
      colors:{
        "custom-pink":"#D49E9E",
      }
    },
  },
  plugins: [],
}

