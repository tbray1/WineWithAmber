module.exports = {
  purge: {
    enabled: false,
    content: ["index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": "'Dancing Script', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
