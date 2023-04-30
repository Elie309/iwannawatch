module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // variants: {
  //   extend: {
  //     // Define any custom variants you are using
  //     variantName: ['responsive', 'hover', 'focus'],
  //   },
  // },
  theme: {
    extend: {
      screens: {
        "xs": "320px",
      },
    },
  },
  plugins: [],
}
