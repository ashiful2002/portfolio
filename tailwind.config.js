/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2563EB',
        'secondary-color': '#166534',
      },
    },
  },
  plugins: [],
};
