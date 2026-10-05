import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./atelier/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        gold: "#c9a227",
        ivory: "#f5f0e8",
        ash: "#a39a8c",
        panel: "#161412",
      },
      fontFamily: {
        display: ["Cormorant", "Georgia", "serif"],
        body: ["Montserrat", "system-ui", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%,100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
        rise: "rise 0.7s ease forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
