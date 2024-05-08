/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      5: "-.6rem",
    },
    fontFamily: {
      aileron: ["aileron", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      times: ["Times New Roman Condensed"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "loop-scroll-optics": {
          to: { transform: "translateX(calc(-100% - 8.5rem))" },
        },

        "loop-scroll-companies": {
          to: { transform: "translateX(calc(-100% - 6.5rem))" },
        },
      },
      animation: {
        "loop-scroll-optics": "loop-scroll-optics 15s linear infinite",
        "loop-scroll-companies": "loop-scroll-companies 15s linear infinite",
        "loop-paused": "animation-play-state: paused",
      },
    },
  },
  plugins: [],
};
