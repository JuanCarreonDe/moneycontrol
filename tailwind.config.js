/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export const content = ["./src/**/*.{html,js,jsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      mainBg: "#141218",
      cardBg: "#1D1B20", 
      gray: "#4D4B51", //textos grises
      green: "#4CAF50",
      txtColor: "#E6E0E9"
    }
  },
};
export const plugins = [daisyui];