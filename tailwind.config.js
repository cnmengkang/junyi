/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "rgba(217, 227, 241, 1)",
        footer: "rgba(59, 59, 59, 1)",
      },
    },
  },
  plugins: [],
};
