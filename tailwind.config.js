/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: "#1e2130",
          alt: "#171923",
          hover: "#1b1e2e",
        },
        ink: "#0f172a",
        borderSoft: "rgba(255, 255, 255, 0.08)",
        edge: "#2e303a",
        azul: "#38bdf8",
        indigoAccent: "#818cf8",
        morado: "#c084fc",
        slate: {
          soft: "#94a3b8",
          mid: "#cbd5e1",
        },
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.35) 0 10px 25px -5px, rgba(0, 0, 0, 0.2) 0 8px 10px -6px",
        "card-hover": "0 10px 30px rgba(56, 189, 248, 0.15)",
        "button-hover": "0 8px 22px rgba(56, 189, 248, 0.35)",
        avatar: "0 4px 12px rgba(56, 189, 248, 0.35)",
      },
    },
  },
  plugins: [],
}
