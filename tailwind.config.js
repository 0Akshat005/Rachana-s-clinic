/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: { 900: "var(--navy-900)", 800: "var(--navy-800)" }, gold: { 500: "var(--gold-500)", 600: "var(--gold-600)", 700: "var(--gold-700)" }, ivory: "var(--ivory)", sand: "var(--sand)", ink: "var(--ink)", muted: "var(--muted)", line: "var(--line)", whatsapp: "var(--whatsapp)" }, fontFamily: { display: ["Playfair Display", "serif"], sans: ["Inter", "sans-serif"], devanagari: ["Noto Sans Devanagari", "sans-serif"] }, boxShadow: { card: "0 8px 30px rgba(14,28,56,.08)" } } },
  plugins: []
};
