module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'], ,
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Puedes personalizar los temas aquí
  },
};
