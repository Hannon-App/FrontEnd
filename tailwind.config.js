/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        E5E5E5: "#E5E5E5",
        "7FC9F4": "#7FC9F4",
        bgRed: "#A30D11",
        bgBtn: "#3C7ACA",
        subTitle: "#56576",
        'warning': '#FFC107',
        'primary' : '#0D6EFD',
        'info' : '#0DCAF0',
        'danger' : '#DC3545'
      },
      backgroundImage: {
        waveLogin: "url('/vector.svg')",
      },
    },
  },
  plugins: [],
};
