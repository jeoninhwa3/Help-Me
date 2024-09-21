import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray300: "#D5D6D8",
        gray500: "#95989D",
        gray600: "#76797F",
        gray800: "#404145",
        gray900: "#27282A",
        primary600: "#F5637C",
        backgroundInfo: "#1E87FF",
        backgroundError: "#E52030 ",
      },
      borderColor: {
        gray100: "#F1F2F2",
        gray200: "#E4E5E7",
        gray300: "#D5D6D8",
        gray400: "#B7B9BD",
        gray600: "#76797F",
        primary500: "#FF7A85",
        secondary600: "#49BA43",
      },
      backgroundColor: {
        gray100: "#F1F2F2",
        gray200: "#e4e5e7",
        pramary100: "#FFF6F2",
        pramary500: "#FF7A85",
        pramary600: "#F5637C",
        default: "#F8FAF8",
      },
      minHeight: {
        "main-height": "calc(100vh - 188px)",
      },
      boxShadow: {
        "primary-btn": "0px 8px 16px 0px rgba(255, 122, 133, 0.40)",
        "header-line": "0px 1px 1px 0px rgba(39, 40, 42, 0.05);",
        "header-floating": "0px 2px 4px 0px rgba(39, 40, 42, 0.10);",
      },
    },
  },
  plugins: [],
};
export default config;
