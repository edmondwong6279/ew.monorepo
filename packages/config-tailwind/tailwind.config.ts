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
        "off-white-translucent": "rgba(237,237,237,0.3)",
        "off-white-translucent-2": "rgba(250,250,250,0.5)",
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
        sm: "0.875rem",
        base: "1rem",
        xl: "1.25rem",
        "3xl": "5rem",
        "4xl": "8rem",
        "5xl": "10rem",
      },
      backgroundImage: {
        noise:
          "url('https://res.cloudinary.com/dtawgkgnl/image/upload/portfolio/images/noise_u27g39.png')",
      },
      dropShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        red: "0px 0px 10px rgba(255, 0, 0, 1)",
      },

      backgroundPosition: {
        start: "100%",
        end: "0 100%",
      },
      animation: {
        "spin-slow":
          "spin-and-scale 6.5s ease-in-out infinite, blur-pulse 4.5s ease-in-out infinite",
        "spin-medium": "spin-and-scale 2s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "bg-spin": "bg-spin 3s ease-in-out infinite",
      },
      keyframes: {
        "bg-spin": {
          "0%": { "background-position": "100%" },
          "50%": { "background-position": "0 100%" },
          "100%": { "background-position": "100%" },
        },
        "spin-and-scale": {
          "0%": { transform: "rotate(0deg) scale(2)" },
          "50%": { transform: "rotate(170deg) scale(2)" },
          "100%": { transform: "rotate(360deg) scale(2)" },
        },
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
