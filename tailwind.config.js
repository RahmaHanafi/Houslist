/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // content: {
  //   transform: (content) => content.replace(/taos:/g, ""),
  // },
  // safelist: [
  //   "!duration-[0ms]",
  //   "!delay-[0ms]",
  //   'html.js :where([class*="taos:"]:not(.taos-init))',
  // ],
  // variants: {
  //   animation: ["motion-safe"],
  //   extend: {
  //     // backgroundImage: {
  //     //   "home-bg":
  //     //     "url('https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?w=1060&t=st=1681413877~exp=1681414477~hmac=dc408e065982b464acfd39f4d43e7c6708f0ad31e72883311242311e574d2dda')",
  //     // },

  //     animation: {
  //       "spin-slow": "spin 3s linear infinite",
  //       wiggle: "wiggle 1s ease-in-out forwards",
  //     },
  //     keyframes: {
  //       wiggle: {
  //         "0%": { opacity: 0 },
  //         "100%": { opacity: 1 },
  //       },
  //       // rotation:{
  //       //   "0%": {transform:rotate(0deg)},
  //       //   "100%": {transform: rotate(359deg)}
  //       // }
  //     },
  //   },
  // },
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      // backgroundImage: {
      //   "home-bg":
      //     "url('https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?w=1060&t=st=1681413877~exp=1681414477~hmac=dc408e065982b464acfd39f4d43e7c6708f0ad31e72883311242311e574d2dda')",
      // },

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
