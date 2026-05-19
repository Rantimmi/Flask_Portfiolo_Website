/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    borderRadius: {
      lg: "2rem",
      full: "9999px",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      textUnderlineOffset: {
        3: "16px",
      },
      colors: {
        midLightGrey: "#555555",
        lightGrey: "hsl(0, 0%, 33%)",
        darkGray: "#353535",
        dullWhite: "rgb(250, 250, 250)",
      },
    },
  },
  plugins: [],
};
