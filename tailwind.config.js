module.exports = {
  purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
        192: "48rem",
      },
    },
    truncate: {
      lines: {
        1: "1",
        2: "2",
        3: "3",
      },
    },
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-truncate-multiline")(),
  ],
};
