import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "var(--color-accent)",
          light:   "var(--color-accent-light)",
          glow:    "var(--color-accent-glow)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          1:       "var(--color-surface-1)",
          2:       "var(--color-surface-2)",
          3:       "var(--color-surface-3)",
          border:  "var(--color-surface-border)",
        },
        foreground: "var(--color-text)",
      },
      animation: {
        "fade-up":      "fadeUp 0.6s ease forwards",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1.1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 20px #10B98133" },
          "50%":     { boxShadow: "0 0 40px #10B98166" },
        },
        cursorBlink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
