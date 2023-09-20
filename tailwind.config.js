/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "text-normal": "Inter",
      },
      backgroundImage: {
        "white-blue": "linear-gradient(180deg, #2500FF 35%, #f1f1f1 35%)",
      },
    },
  },
  plugins: [],
};
