/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        neon: {
          cyan: "#00f5ff",
          purple: "#a855f7"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.12)",
        softDark: "0 22px 65px rgba(0,0,0,0.7)",
        glowCyan: "0 0 30px rgba(0,245,255,0.55)",
        glowPurple: "0 0 30px rgba(168,85,247,0.55)"
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, rgba(0,245,255,0.25), transparent 55%)",
        "gradient-radial-purple":
          "radial-gradient(circle at bottom, rgba(168,85,247,0.3), transparent 55%)"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0.9)", opacity: "0.6" },
          "50%": { transform: "scale(1.1)", opacity: "1" }
        },
        "command-fade": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(6px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" }
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" }
        }
      },
      animation: {
        "pulse-soft": "pulse-soft 2.5s ease-out infinite",
        float: "float 4s ease-in-out infinite",
        sparkle: "sparkle 2.2s ease-in-out infinite",
        "command-fade": "command-fade 0.2s ease-out forwards",
        ripple: "ripple 0.6s ease-out",
        "ring-pulse": "pulse-soft 3s ease-out infinite"
      }
    }
  },
  plugins: []
};
