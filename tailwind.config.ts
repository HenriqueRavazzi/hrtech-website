import type { Config } from "tailwindcss";
import textShadow from 'tailwindcss-textshadow';

const config: Config = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E17EB", 
        accent: "#00F5D4",  
        dark: "#121212",
        light: "#FFFFFF",
        // Adicionando cores para o modo claro
        "light-bg": "#F9FAFB",
        "light-text": "#1F2937",
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
        }
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
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
