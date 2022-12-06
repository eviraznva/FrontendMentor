/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            // Backgrounds

            "main-bg": "#3a4764",
            "toggle-bg": "#232c43",
            "screen-bg": "#182034",

            // Keys

            "dark-blue-key-bg": "#637097",
            "dark-blue-key-sb": "#404e72",
            "red-bg": "#d03f2f",
            "red-key-sb": "#93261a",
            "Light-grayish-orange-key-bg": "#eae3dc",
            "grayish-orange-key-bg": "#b4a597",

            // Text

            "very-dark-grayish-blue-text": "#444b5a",
            "Very-dark-blue-text": "#00FFFFFF",
            "header-text": "#fff",
          },
        },
      },
    }),
  ],
};
