import type { Config } from "tailwindcss";
import textShadow from 'tailwindcss-textshadow';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E17EB", // Roxo
        accent: "#00F5D4",  // Ciano Vibrante
        dark: "#121212",
        light: "#FFFFFF",
        secondary: '#F3F4F6',
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", "sans-serif"],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)' },
          'to': { transform: 'translateY(0)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        'scroll-up': `scroll-up 40s linear infinite`,
      },
      textShadow: {
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    textShadow
  ],
};
export default config;
