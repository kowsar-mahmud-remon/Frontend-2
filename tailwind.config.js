/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FB641B",
          // primary: "#1b2857fb",
          // secondary: "#FFC000",
          secondary: "#707070",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",

          // info: "#98A8DD",
          info: "#F4F4F4",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
          login: "#6358DC",
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],

          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
          "login": "#6358DC",
          "profile": "#858A89"

        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
}