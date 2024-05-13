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
      },
      backgroundImage: {
        "prouduct-price-mask":
          "linear-gradient(180deg,transparent,rgba(0,0,0,.6))",
      },
      colors: {
        "gray-dark": "#222",
        "gray-light": "#666",
        tangerine: "#c44a01",
        maroon: "#A4003B",
      },
      borderColor: {
        "gray-dark": "#222",
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
