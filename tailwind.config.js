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
        // Light mode (smooth green)
        bg: '#F4FBF7',
        fg: '#0E2A22',
        primary: {
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        accent: '#00A3B4',
        panel: '#FFFFFF',
        
        // Dark mode (dark-greenish)
        'dark-bg': '#0C1A16',
        'dark-fg': '#E6F4EE',
        'dark-panel': '#0F231C',
        
        // Legacy colors for compatibility
        navy: "#0B1F3A",
        charcoal: "#22272A",
        teal: "#00A3B4",
        warm: "#E9ECEF"
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        'green-glow': "0 0 20px rgba(22, 163, 74, 0.3)"
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
