import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'mentorShadow': '0px 4px 20px rgba(110, 127, 185, 0.1)',
      },
      inset: {
        '54%': '54%',
        '40%': '40%',
      },
      colors: {
        primary: "#7828ff",
        secondary: "#2d6ad5",
        bodyBg: "#000000",
        darkmode: "#140028",
        tablebg: "#140028",
        border: "#091945",
        lightblue: "#140028",
      },
      blur: {
        390: '390px',
        
      },
      backgroundImage: {
        "banner-image": "linear-gradient(90deg,#bd24df80,#2d6ade80 97.15%)",
        "simple-bg": "linear-gradient(90deg,rgba(189,36,223,.1),rgba(45,106,222,.1) 97.15%)",
        "arrow-bg": "url('/images/simple/arrow-bg.png')",
        "newsletter": "url('/images/newsletter/hands.svg')",
      },
    },
  },
  plugins: [heroui()],
};
export default config;
