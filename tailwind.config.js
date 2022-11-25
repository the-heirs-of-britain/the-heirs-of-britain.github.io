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
        "sidebar header header",
        "sidebar main main",
        "sidebar footer footer",
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
          silver: "#fafafa",
          gold: "#ffe066",
          red: "#d7374a",
          blue: "#377cd7",
          black: "#333333",
          purple: "#522d5b",
          green: "#26c061",
          murrey: "#85185b",
          sanguine: "#b63a3a",
          tenne: "#c77f19",
        },
      },

      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
        "dropcaps > p:first-of-type::first-letter": {
          css: {
            "@apply text-6xl lg:text-7xl float-left pr-1 -ml-[0.15rem] text-stone-900 dark:text-stone-100":
              "",
          },
        },
      }),
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
