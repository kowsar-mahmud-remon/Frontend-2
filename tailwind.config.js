/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'small': '0px 6px 28px rgba(0, 0, 0, 0.16)',
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#026C51",
          // primary: "#1b2857fb",
          // secondary: "#FFC000",
          secondary: "#707070",
          accent: "#686868",
          // accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",

          // info: "#98A8DD",
          info: "#F4F4F4",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#F4253F",
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