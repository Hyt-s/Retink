module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        comet: {
          50: "#f6f7f9",
          100: "#eeeff2",
          200: "#d4d7df",
          300: "#babfcc",
          400: "#868fa5",
          500: "#525F7F",
          600: "#4a5672",
          700: "#3e475f",
          800: "#31394c",
          900: "#282f3e",
        },
        "brick-red": {
          50: "#fdf5f6",
          100: "#faecee",
          200: "#f4ced4",
          300: "#edb1ba",
          400: "#df7786",
          500: "#d13c52",
          600: "#bc364a",
          700: "#9d2d3e",
          800: "#7d2431",
          900: "#661d28",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
