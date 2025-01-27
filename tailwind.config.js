/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Outfit", "sans-serif"], // Add 'Outfit' as a custom font
        anton: ["Anton", "sans-serif"], // Add 'Anton' as a custom font
        oswald: ["Oswald", "sans-serif"], // Add 'Anton' as a custom font
      },
    },
  },
  plugins: [],
};
