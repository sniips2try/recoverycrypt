/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#22c55e", // Crypto Green
          accent: "#8b5cf6" // Solana Purple
        },
        dark: {
          bg: "#0b0e11", // Binance-like dark
          card: "#181a20",
          hover: "#2b3139",
          text: "#eaecef",
          muted: "#848e9c",
          border: "#2b3139"
        },
        trade: {
          buy: "#0ecb81",
          sell: "#f6465d"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
