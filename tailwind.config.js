/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-black": "#1d1d28",
        "primary-bg-darkslategray": "#3d3d55",
        "primary-text-thistle": "#e6c3c3",
        "secondary-text-silver": "#bbbbc2",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
