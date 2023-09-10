import { red } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          /* background: "#03222b", // or DEFAULT
          foreground: "#ddf6fd",
          primary: {
            //... 50 to 900
            foreground: "#fff",
            DEFAULT: "#90e0f9",
          }, */
        }
      }
    }
  })],

}

