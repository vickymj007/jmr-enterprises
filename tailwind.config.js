/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      desktop:"420px"
    },
    fontFamily:{
      poppins:["Poppins","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}