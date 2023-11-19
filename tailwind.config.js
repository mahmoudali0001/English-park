/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        mainColor: "#fe9353",
      },
      colors: {
        mainColor: "#fe9353",
        Primary: "#0d6efd",
      },
      fontFamily: {
        headerSpecialFont: " 'Ephesis', cursive",
      },
    },
  },
  plugins: [],
};
