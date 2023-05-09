/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#264653",
        whitesmoke: {
          "100": "#f0f0f0",
          "200": "#ededed",
        },
        gray: {
          "100": "#787878",
          "200": "rgba(120, 120, 120, 0.99)",
        },
        darkorchid: "#df4ef6",
        blueviolet: {
          "100": "#7b03f3",
          "200": "rgba(122, 0, 243, 0.99)",
        },
        tomato: "#ff453a",
        limegreen: "#4cc900",
        lightgray: "#cbcbcb",
      },
      fontFamily: {
        "charlie-display": "'Charlie Display'",
      },
      borderRadius: {
        "8xs": "5px",
        "6xs-9": "6.9px",
        "3xl": "22px",
        "8xl-6": "27.6px",
        "base-9": "16.9px",
        "12xs": "1px",
        "24xl-1": "43.1px",
        "7xl-4": "26.4px",
        "14xl-9": "33.9px",
        "3xs": "10px",
        "6xl-1": "25.1px",
        mini: "15px",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
      "mid-1": "17.1px",
      smi: "13px",
      xl: "20px",
      "5xl": "24px",
      "3xs": "10px",
      "3xl": "22px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
