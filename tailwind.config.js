const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Your existing custom colors
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
        highlight: '#e94560',
        gold: '#ffd700',
        'text-light': '#ffffff',
        'text-muted': '#6b7280',
        'highlight-color': '#e94560',
        'gold-color': '#ffd700',
        'gradient-accent': 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'circuit-flow': 'circuitFlow 3s ease-in-out infinite',
        'moon-glow': 'moonGlow 4s ease-in-out infinite alternate',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite alternate',
        'founder-glow': 'founderGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #E94560' },
          '100%': { boxShadow: '0 0 20px #E94560, 0 0 30px #E94560' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        circuitFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        moonGlow: {
          '0%': { filter: 'drop-shadow(0 0 5px #fff) brightness(1)' },
          '100%': { filter: 'drop-shadow(0 0 6px #fff) brightness(1.3)' },
        },
        starTwinkle: {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.1)' },
        },
        founderGlow: {
          '0%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: '0.8', transform: 'translate(-50%, -50%) scale(1.1)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#0a0a0a",
            secondary: "#1a1a1a",
            success: "#00C851",
            warning: "#FFD700",
            danger: "#E94560",
            background: "#ffffff",
            foreground: "#0a0a0a",
          },
        },
        dark: {
          colors: {
            primary: "#e94560", // Your brand red as primary
            secondary: "#8B5CF6", // Purple gradient color
            success: "#00C851",
            warning: "#ffd700", // Your gold color
            danger: "#e94560",
            background: "#000000", // Pure black like HeroUI Pro
            foreground: "#ffffff",
            content1: "#0a0a0a",
            content2: "#1a1a1a",
            content3: "#2a2a2a",
            content4: "#3a3a3a",
            default: "#0a0a0a",
            default50: "#000000",
            default100: "#0a0a0a",
            default200: "#1a1a1a",
            default300: "#2a2a2a",
            default400: "#3a3a3a",
            default500: "#4a4a4a",
            default600: "#5a5a5a",
            default700: "#6a6a6a",
            default800: "#7a7a7a",
            default900: "#8a8a8a",
          },
        },
      },
    }),
  ],
}
