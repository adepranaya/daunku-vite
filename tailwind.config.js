module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D34A6A",
        primary1: {
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
        primary2: {
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
        "periwinkle-gray": {
          DEFAULT: "#C1D0E4",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FAFBFD",
          400: "#DDE6F0",
          500: "#C1D0E4",
          600: "#9AB2D3",
          700: "#7395C2",
          800: "#4D77B0",
          900: "#3C5D89",
        },
        accent: "#FFF3EC",
        dark1: '#566270',
        dark: "#283444",
      },
      fontFamily: {
        sans: ["Work Sans", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
