/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#008ecc",
        white: "#fff",
        text: "#666666",
        heading: "#222222",
        "card-border": "#ededed",
        "searchbar-background": "#f3f9fb",
        "dropdown-border": "#ccc",
        "dropdowncontent-hover": "darkgray",
        "button-hover": "#ffc915",
        "card-shadow": "rgba(0, 0, 0, 0.1)",
        "body-background": "#e1e1e1",
        "logo-text-background": "#78c9ec33",
      },
    },
    plugins: [],
  },
};
