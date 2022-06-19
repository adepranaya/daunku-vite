module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D34A6A",
        "primary1": {
          DEFAULT: "#2AF598",
          50: "#D9FDED",
          100: "#C6FCE3",
          200: "#9FFAD1",
          300: "#78F9BE",
          400: "#51F7AB",
          500: "#2AF598",
          600: "#0ADD7C",
          700: "#08A75E",
          800: "#057140",
          900: "#033C22",
        },
        "primary2": {
          DEFAULT: "#009EFD",
          50: "#B6E3FF",
          100: "#A1DCFF",
          200: "#78CCFF",
          300: "#50BDFF",
          400: "#27AEFF",
          500: "#009EFD",
          600: "#007BC5",
          700: "#00588D",
          800: "#003555",
          900: "#00121D",
        },
        accent: "#FFF3EC",
        dark: "#423144",
      },
      fontFamily: {
        sans: ["Work Sans", "Sans-serif"],
        heading: ["Josefin Sans", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
