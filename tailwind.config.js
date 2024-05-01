/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Arial', 'san-serif']
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
