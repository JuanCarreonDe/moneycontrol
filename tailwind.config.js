/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export const content = ["./src/**/*.{html,js,jsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#141218",
      secondary: "#1D1B20",
      cardBg: "#1D1B20"
    }
  },
};
export const plugins = [daisyui];