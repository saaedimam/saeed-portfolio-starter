/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-sora)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: "#0B1F3A",
        charcoal: "#22272A",
        teal: "#00A3B4",
        warm: "#E9ECEF"
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
