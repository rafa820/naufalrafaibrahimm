/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#475569",
        purple: "#3730a3",
        dark: "#030712",
      },
    },
  },
  plugins: [],
};
