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
        small: "0px 6px 28px rgba(0, 0, 0, 0.16)",
      },
    },
    screens: {
      mobile: "280px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      md: "768px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      xxl: "1536px",

      xxxl: "1921px",
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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

          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
          login: "#6358DC",
          profile: "#858A89",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],

};
