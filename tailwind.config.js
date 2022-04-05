module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
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
        "white": "#FFF",
        "blue": "#4285F4"
      }
    },
    fontSize: {
      'xs': '.77rem',
      'sm': '.847rem',
      'base': '.920rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '9xl': '6.5rem',
    },
  },
  plugins: [],
}