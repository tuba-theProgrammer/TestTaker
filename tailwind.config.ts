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
          500:'#33a1fd',
        },
        buttonHover:{
          500:'#2176ff',
        
        },
        headingColor:{
          500:'#2176ff' 
        },
        textColor:{
          500: '#475467',
        },
        inputFieldColor:{
          500:'#d0d5dd',   

        },
      
      }
    },
  },
  plugins: [],
};
export default config;
