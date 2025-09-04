/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'actay': ['Actay', 'sans-serif'],
    },
    screens: {
      "xs": "350px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1160px",
      "2xl": "1160px"
    },
    extend: {
      backgroundImage: {
        'section1': "url('/images/bg-1.png')",
        'footer': "url('/images/footer.png')",
      },
      colors: {
        primary: "#00234A",
      }
    },
  },
  plugins: [],
}