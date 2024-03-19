/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        black: "#000",
        gray: {
          "100": "#1d1d1b",
          "200": "#060606",
        },
        darkslategray: {
          "100": "#383838",
          "200": "#0b3051",
        },
        white: "#fff",
        lightgray: "#d5d5d5",
        darkgray: "#a69999",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        manrope: "Manrope",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
