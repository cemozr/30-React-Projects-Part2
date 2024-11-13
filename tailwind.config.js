/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#f3f3fc",
      primary: "#2e3fd7",
      primaryDark: "#2432ac",
      secondary: "#8893f1",
      secondaryLight: "#9fa8f3",
      accent: "#5465f7",
      txt: "#05060e",
    },
  },
  plugins: [],
};
