/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Uses the device/browser setting
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#38b6ff",
        "secondary-color": "#8c52ff",
      },
    },
  },
  plugins: [],
};

// 8c52ff
