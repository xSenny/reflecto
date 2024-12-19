/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ECEDEF',
        'background': '#0D1117',
        'primary': '#174E9C',
        'secondary': '#25477B',
        'accent': '#2D70D6',
      },
    },
  },
  plugins: [],
}