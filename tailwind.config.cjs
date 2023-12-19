/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: '"Nunito Sans Variable"',
      },
      boxShadow: {
        card: "0px 5px 8px 1px #64748b",
      },
      backgroundImage: {
        forest:
          'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url("/forest.jpg")',
      },
      colors: {
        carrot: "#f59627",
        banana: "#dec06f",
        leaf: "#1e400b",
        rock: "#576663",
        beet: "#72394d",
        salsify: "#282828",
        parsnip: "#f1ebe5",
      },
    },
  },
  plugins: [],
};
