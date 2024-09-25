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
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishBlue: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: ' hsl(185, 41%, 84%)',
        veryLightGrayishCyan: ' hsl(189, 41%, 97%)'
      },
    },
  },
  plugins: [],
};
export default config;
