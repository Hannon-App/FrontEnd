/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        E5E5E5: '#E5E5E5',
        '7FC9F4': '#7FC9F4'
      },
      backgroundImage: {
        waveLogin : "url('/vector.svg')",
      }
    },
  },
  plugins: [],
}