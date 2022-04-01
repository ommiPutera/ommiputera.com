module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#202124",
        "dark-gray": "#BCBCBC",
        "dark-gray-500": "#C4C4C4",
        "light-gray": "#FAFAFA",
        "light-gray-500": "#E8E8E8",
        "brown": "#BD9354",
        "white": "#FFFFF",
        "blue": "#4285F4"
      }
    },
  },
  plugins: [],
}