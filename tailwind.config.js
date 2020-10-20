module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        96: "24rem",
        128: "32rem",
        192: "48rem",
      },
    },
    truncate: {
      lines: {
        2: "2",
        3: "3",
        5: "5",
      },
    },
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-truncate-multiline")()],
};
