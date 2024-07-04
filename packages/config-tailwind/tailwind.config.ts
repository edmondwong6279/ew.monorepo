import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // TODO fill in brand colours here
        transparent: "transparent",
        current: "currentColor",
        gray: "#212121",
        "gray-1": "#878787",
        "off-white": "#ededed",
        "pink-1": "#efdada",
        "pink-2": "#f77373",
        "purple-1": "#a193f5",
        "purple-2": "#8379c3",
        "accent-blue": "#2f14d7",
        "accent-red": "#d37373",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        xl: "1.25rem",
        "3xl": "5rem",
        "4xl": "8rem",
        "5xl": "10rem",
      },
      lineHeight: {
        "3xl": "8rem",
      },
      backgroundImage: {
        noise:
          "url('https://res.cloudinary.com/dtawgkgnl/image/upload/portfolio/images/noise_u27g39.png')",
      },
      animation: {
        "spin-slow":
          "spin 6.5s ease-in-out infinite, blur-pulse 4.5s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(170deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "blur-pulse": {
          "0%": { filter: "blur(45px)" },
          "40%": { filter: "blur(70px)" },
          "100%": { filter: "blur(45px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
