module.exports = {
  purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
