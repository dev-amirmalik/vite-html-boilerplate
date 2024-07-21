/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "427px", min: "320px" },
      md: [{ min: "428px", max: "767px" }],
      lg: { min: "768px", max: "1023px" },
      xl: { min: "1024px", max: "1199px" },
      "2xl": { min: "1200px", max: "1439px" },
    },
    extend: {
      screens: {
        "3xl": { min: "1440px", max: "1919px" },
        "4xl": { min: "1920px" },
      },
      colors: {
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
        "joy-purple": "#3B4688",
        "joy-white": "#FFFDF7",
        "joy-background": "#F5F5F5",
        "joy-red": "#DE4966",
      },
      container: {
        center: true,
      },
    },
    fontFamily: {
      grotesk: ["Grotesk Remix", "sans-serif"],
      karla: ["karla", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
