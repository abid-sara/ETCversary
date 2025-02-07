/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Azonix", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      
    },
    colors: {
      blueCustom: " #021832",
      yellowCustom: "#FFDF00C2",
      redCustom: "#BB0000",
      white: "#FFFFFF", 
    },
  },
  plugins: [],
};
