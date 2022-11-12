/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "assets/js/*.js", "./content/**/*.md"],
  darkMode: "class",
  theme: {
    gridTemplateAreas: {
      mobile: [
        "header header header",
        "main main main",
        "footer footer footer",
      ],
      desktop: [
        "header header header",
        "sidebar main main",
        "footer footer footer",
      ],
    },
    extend: {
      gridTemplateColumns: {
        layout: "0.7fr 2.3fr 1fr",
      },
      gridTemplateRows: {
        layout: "0.2fr 2.6fr 0.2fr",
      },
      height: {
        13: "52px",
        18: "66px",
      },

      colors: {
        manuscript: {
          white: "#dcd3bf",
          tan: "#d0c4a9",
        },
        heraldic: {
          silver: "#f6f6f6",
          gold: "#f1ba51",
          red: "#bc2e2e",
          blue: {
            DEFAULT: "#0d6793",
            bright: "#1393d1",
          },
          black: "#333333",
          purple: "#8f3f6a",
          green: "#3f933e",
          murrey: "#a42c45",
          sanguine: "#a52f2d",
          tenne: "#bf7532",
        },
      },

      fontFamily: {
        alegreya: ["Alegreya", 'serif'],
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
