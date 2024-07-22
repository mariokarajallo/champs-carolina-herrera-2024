module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Puedes personalizar los temas aquí
  },
};
