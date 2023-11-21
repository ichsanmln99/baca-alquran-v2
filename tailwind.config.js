const daisyuiThemes = require("daisyui/src/theming/themes");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      arabic: ["alqalam"],
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes.cupcake,
        },
      },
      {
        dark: {
          ...daisyuiThemes.business,
          primary: "#65c3c8",
          secondary: "#ef9fbc",
          accent: "#eeaf3a",
        },
      },
    ],
  },
};
