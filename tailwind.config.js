/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#141218",
      secondary: "#1D1B20"
    }
  },
};
export const plugins = [import("daisyui")];