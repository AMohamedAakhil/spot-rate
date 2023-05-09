/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}", "./src/js/*.{html, js}", "./src/components/*.{html,js}"],
  theme: {
    extend: {},
    height: {
      "10v": "10vh",
      "90v": "90vh"
    }
  },
  plugins:  [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },

}

