import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          110: "#212126",
          100: "#34343D",
          90: "#464653",
          80: "#595969",
          70: "#6C6C7F",
          60: "#808093",
          50: "#9696A6",
          40: "#ACACB9",
          30: "#C2C2CB",
          20: "#D8D8DE",
          15: "#E3E3E8",
          10: "#EEEFF1",
          "05": "#F9F9FA",
          "00": "#FFFFFF",
        },
        primary: {
          90: "#00325C",
          80: "#004985",
          70: "#005FAD",
          60: "#0076D6",
          50: "#008CFF",
          40: "#299EFF",
          30: "#5CB5FF",
          20: "#85C8FF",
          10: "#ADDAFF",
          "00": "#D6EDFF",
        },
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", ...defaultTheme.fontFamily.sans],
        "paperlogy-heading": [
          "Paperlogy-Bold",
          ...defaultTheme.fontFamily.sans,
        ],
        "paperlogy-title": [
          "Paperlogy-Medium",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        "3xl": ["24px", "150%"],
        "2xl": ["22px", "150%"],
        xl: ["20px", "150%"],
        lg: ["18px", "150%"],
        md: ["16px", "150%"],
        sm: ["14px", "150%"],
      },
    },
  },
  plugins: [],
};
export default config;
