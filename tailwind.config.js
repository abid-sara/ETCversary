/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Azonix", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      colors: {
        blueCustom: " #021832",
        yellowCustom: "#FFDF00C2",
        redCustom: "#BB0000",
        white: "rgb(255, 255, 255)",
        yellowLight: "rgb(216, 193, 23)",
        blueGray: "rgb(14, 33, 47)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
