/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#fffbf3",
      },
      margin: {
        "350px": "350px",
      },
    },
  },
  plugins: [],
};
