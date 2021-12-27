module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary-color))",
        secondary: "rgb(var(--secondary-color))",
      },
      textColor: {
        inverted: "var(--text-color-inverted)",
        muted: "var(--text-color-muted)",
      },
      backgroundColor: {
        primary: ({ opacityValue }) => {
          if (opacityValue) {
            return `rgba(var(--primary-color), ${opacityValue})`;
          }
          return `rgb(var(--primary-color))`;
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
    },
  },
  plugins: [],
};
