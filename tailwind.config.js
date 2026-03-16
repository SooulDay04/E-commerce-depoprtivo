/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sportixNeon: '#39ff14', // Tu verde neón característico
      },
    },
  },
  plugins: [],
}