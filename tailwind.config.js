/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black canvas, warmed very slightly so it reads as ink, not void.
        canvas: "#08080A",
        surface: "#0F0F13",
        elevated: "#16161B",
        hairline: "rgba(255, 255, 255, 0.07)",
        divider: "rgba(255, 255, 255, 0.12)",
        accent: {
          DEFAULT: "#FFB020",
          hover: "#FFC04D",
          soft: "rgba(255, 176, 32, 0.10)",
          edge: "rgba(255, 176, 32, 0.28)",
        },
        ink: {
          DEFAULT: "#F5F5F3", // 18.3:1 on canvas
          soft: "#A6A6AD", //  8.3:1 on canvas
          mute: "#82828C", //  5.3:1 on canvas — AA for the small mono labels
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-ring": "pulse-ring 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
