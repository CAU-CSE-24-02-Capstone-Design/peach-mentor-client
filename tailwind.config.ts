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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
};
export default config;
