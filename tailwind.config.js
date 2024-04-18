/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    backgroundImage: {
      footerBg:
        "linear-gradient(to top, #133A5Ecf, #133A5Ecf), url('https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out forwards",
        fadeInLeft: "fadeInLeft 0.7s  linear",
        fadeInRight: "fadeInRight 0.7s  linear",
        // transformY: "1s all eas"
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(-40px)",
          },
        },
        // rotation:{
        //   "0%": {transform:rotate(0deg)},
        //   "100%": {transform: rotate(359deg)}
        // }
      },
    },
  },
  // variants: {
  //   animation: ["motion-safe"],
  // },
  plugins: [require("daisyui"), require("taos/plugin")],
};
