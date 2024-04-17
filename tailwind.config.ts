import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": "var(--font-hanken-grotesk)",
      },
      colors: {
        light_blue: "#CAC9FF",
        very_light_blue: "#ECF2FF",
        dark_navy: "#303B59",
        red: "#FF5555",
        red_white: "#FFF6F6",
        green: "#00BB8F",
        green_white: "#F2FCF9",
        blue: "#1125D6",
        blue_white: "#F3F4Fd",
        yellow: "#FFB21E",
        yellow_white: "#FFFBF4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-1":
          "linear-gradient(to bottom, #7755FF 0%, #6943FF 0%, #2F2CE9 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
