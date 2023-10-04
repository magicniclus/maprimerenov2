/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        house: "url('/images/background/background_house.png')",
      },
      fontFamily: {
        lato: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2186EB",
        secondaty: "#03449E",
        dark: "#3E4C59",
        light: "#E6F6FF",
        green: "#39B136",
      },
      backgroundImage: (theme) => ({
        "bg-landing": "url('/images/bg/bg-landing.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
