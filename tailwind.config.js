/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1aa5ff",
      secondary: "#696c71",
      white: "#ffffff",
    },

    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        proHero:
          "linear-gradient(0deg, rgb(0, 0, 0, 0.625), rgb(0, 0, 0, 0.625)), url('./assets/proHero.jpg')",
        whyPro:
          "linear-gradient(0deg, rgb(0, 0, 0, 0.9), rgb(0, 0, 0, 0.9)), url('./assets/about.jpg')",
        about: "url('./assets/about.jpg')",
      },
    },
  },
  plugins: [],
};
