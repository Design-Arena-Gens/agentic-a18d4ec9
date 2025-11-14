import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 55%)",
        "radial-fade-2":
          "radial-gradient(circle at 80% 0%, rgba(147, 197, 253, 0.18) 0%, transparent 60%)",
        grid: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "soft-glow":
          "0 24px 80px -32px rgba(34, 197, 94, 0.28), inset 0 1px 0 rgba(255,255,255,0.04)",
        "neural-edge":
          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(15,23,42,0.4), 0 20px 45px -30px rgba(14, 165, 233, 0.45)",
      },
      keyframes: {
        "slow-pan": {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1.02)" },
          "50%": { transform: "translate3d(1%, 1%, 0) scale(1)" },
          "100%": { transform: "translate3d(-2%, -1%, 0) scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(3%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.65" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "wave-glow": {
          "0%": { transform: "translateX(-10%) scale(1)" },
          "50%": { transform: "translateX(10%) scale(1.05)" },
          "100%": { transform: "translateX(-10%) scale(1)" },
        },
      },
      animation: {
        "slow-pan": "slow-pan 18s ease-in-out infinite",
        float: "float 14s ease-in-out infinite",
        "pulse-soft": "pulse-soft 12s ease-in-out infinite",
        shimmer: "shimmer 5s ease-in-out infinite",
        "wave-glow": "wave-glow 24s ease-in-out infinite",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
