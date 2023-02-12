/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: 'hsl(var(--color-black) / <alpha-value>)',
      blue: 'hsl(var(--color-blue) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)'
    },
    extend: {},
  },
  plugins: [],
};
