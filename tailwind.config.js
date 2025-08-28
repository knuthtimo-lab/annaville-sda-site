
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E0F14",
        primaryHover: "#B10E14", 
        primaryDeep: "#5D0B0E",
        surface: "#FFFFFF",
        sand: "#F5F1EC",
        ink: "#1B1F23",
        muted: "#5A6675",
        focus: "#1F6FEB"
      },
      fontFamily: {
        body: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        heading: ["Crimson Text", "ui-serif", "Georgia", "serif"]
      },
      fontSize: {
        h1: ["40px", { lineHeight: "1.45" }],
        h2: ["28px", { lineHeight: "1.45" }],
        h3: ["20px", { lineHeight: "1.45" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.45" }]
      },
      spacing: {
        '4': '4px',
        '8': '8px', 
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px'
      },
      borderRadius: { 
        xl: "12px",
        pill: "9999px"
      },
      boxShadow: { 
        card: "0 4px 12px rgba(0,0,0,0.06)" 
      }
    }
  },
  plugins: []
}
