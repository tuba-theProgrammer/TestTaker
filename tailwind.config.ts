import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add 'Inter' as a custom font family
        sans: ['Inter', 'sans-serif'], // Override default sans-serif with 'Inter'
      },
      colors: {
        buttonColor:{
          500:'#7f56d9',
        },
        buttonHover:{
          500:'#6941c6',
          400:'#53389e'
        },
        headingColor:{
          500:'#6941c6' 
        },
        textColor:{
          500: '#475467',
        },
        inputFieldColor:{
          500:'#d0d5dd',   

        },
        labelColor:{
          500:'#6941c6'
        },
      }
    },
  },
  plugins: [],
};
export default config;
