/** @type{import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-start": "#574AE8",
        "purple-end": "",
      },
    },
  },
  plugins: [],
};

// gradientColorStops:
//   primary: "linear-gradient(90deg, #574AE8 0%, #3EA1DB 100%)",
