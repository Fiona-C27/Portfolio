/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1320px",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgb(85, 0, 150)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'dm': ["DM Sans"],
      },
      colors:{
        primary: "#44054F",
        secondary: "#8D3C89",
        lightyellow: "#FFD078",
      },
    },
  },
  plugins: [],
}