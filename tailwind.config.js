const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#e94560",
            secondary: "#8B5CF6",
            success: "#00C851",
            warning: "#ffd700",
            danger: "#e94560",
            background: "#ffffff",
            foreground: "#000000",
            content1: "#ffffff",
            content2: "#f4f4f5",
            content3: "#e4e4e7",
            content4: "#d4d4d8",
            default: "#ffffff",
            default50: "#fafafa",
            default100: "#f4f4f5",
            default200: "#e4e4e7",
            default300: "#d4d4d8",
            default400: "#a1a1aa",
            default500: "#71717a",
            default600: "#52525b",
            default700: "#3f3f46",
            default800: "#27272a",
            default900: "#18181b",
          },
        },
        dark: {
          colors: {
            primary: "#e94560",
            secondary: "#8B5CF6",
            success: "#00C851",
            warning: "#ffd700",
            danger: "#e94560",
            background: "#000000",
            foreground: "#ffffff",
            content1: "#000000",
            content2: "#0a0a0a",
            content3: "#1a1a1a",
            content4: "#2a2a2a",
            default: "#000000",
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
