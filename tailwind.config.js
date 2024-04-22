/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        gray: {
          "100": "#fffefe",
          "200": "#757575",
        },
        lightpink: "#ffaec9",
        mistyrose: {
          "100": "#ffdfe9",
          "200": "rgba(255, 223, 233, 0.47)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "30xl": "49px",
        xl: "20px",
        "55xl": "74px",
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      xl: "20px",
      "6xl": "25px",
      "9xl": "28px",
      "29xl": "48px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
