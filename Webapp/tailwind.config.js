/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "904px",
      xl: "1100px",
    },
    container: {
      center: true,
      padding: "0.1rem",
    },

    extend: {},
  },
  plugins: [],
};
