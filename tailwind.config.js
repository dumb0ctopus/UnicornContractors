/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {},
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#0000FF",
        brandSecondary: "#00FFFF",
        neutralGrey: "#717171",
        gray900: "#18191F",
        headerBg: "#181818",
        footerBg: "#181818",
        headerTxt: "#4d4d4e",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
