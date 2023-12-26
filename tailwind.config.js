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
        "button-hover": "#ffc915",
        "body-background": "#e1e1e1",
        "logo-text-background": "#78c9ec33",
        "overlay":"rgba(0, 0, 0, 0.5)"
      },
      fontFamily: {
        Inter: ['Inter'],
      }
    },
    plugins: [],
  },
};
