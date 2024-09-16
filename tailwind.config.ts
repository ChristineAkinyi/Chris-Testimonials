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
        customGreen: '#90BD31',
        customBlue: '#052049',
      },
      fontFamily: {
        nunito: ['Nunito Regular 400 at 48px'],        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // screens: {
      //   'im': {'min': '768px', 'max': '999px'},
      //   'nh': {'min': '1000px', 'max': '1279px'},
      //   'sd': {'min': '540px', 'max': '767px'},
      //   'sg': {'min': '412px', 'max': '915px'},
      //   'sgl': {'min': '360px', 'max' : '740px'},
      //   'ip': {'min': '430px', 'max': '500px'},
      //   'gf': { 'min': '280px', 'max': '653px'},
      // },
      screens: {
        'is': {'min': '375px', 'max': '539px'},
        'sd': {'min': '540px', 'max': '767px'},
        'im': {'min': '768px', 'max': '999px'},
        'nh': {'min': '1000px', 'max': '1279px'},
        'nhm':{'min': '1280px'},
      },
    },
  },
  plugins: [],
};
export default config;