import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray-1': '#878787',
      'off-white': '#ededed',
      'pink-1': '#efdada',
      'pink-2': '#f77373',
      'purple-1': '#a193f5',
      'purple-2': '#8379c3',
      'accent-blue': '#2f14d7',
      'accent-red': '#d37373',

    }
  },
  plugins: [],
};
export default config;
