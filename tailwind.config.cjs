/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'bg': '#141414',
        'grayText': '#8B8B8B',
        'dashBg': '#262626',
        'purple': '#8356C8',
        'bg-purple': '#32204a',
        'lineGray': '#282828',

      }
    },
  },
  plugins: [],
}
