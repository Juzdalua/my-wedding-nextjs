import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{tsx,ts}",
    "./src/components/**/*.{tsx,ts}",
    // "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif KR"', "serif"],
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
export default config;
