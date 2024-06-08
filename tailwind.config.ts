import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: "#e5e5e5",
        "active-nav": "#00000014",
        "gray-dark-light": "#222c",
        "gray-dark": "#222",
        primary: "#8a162a",
        price: "#fa6338",
      },
      backgroundImage: {
        "prouduct-price-mask":
          "linear-gradient(180deg,transparent,rgba(0,0,0,.6))",
        "super-product-price-bg":
          "linear-gradient(95deg,#ff3f3f 9.75%,#ff995f 95.91%)",
      },
      colors: {
        "gray-dark": "#222",
        "gray-light": "#666",
        tangerine: "#c44a01",
        maroon: "#A4003B",
        price: "#fa6338",
        orange: "#f36d78",
        gray: "#767676",
        primary: "#8a162a",
        error: "#d53333",
      },
      borderColor: {
        "gray-dark": "#222",
        "gray-light": "#ccc",
        price: "#fa6338",
        light: "#e5e5e5",
        primary: "#8a162a",
      },
      boxShadow: {
        header: "0 2px 12px 0 rgba(0,0,0,.04)",
      },
    },
    screens: {
      ...defaultTheme.screens,
      desktop: { min: "1440px", max: "1920px" },
    },
  },
  plugins: [],
};
export default config;
