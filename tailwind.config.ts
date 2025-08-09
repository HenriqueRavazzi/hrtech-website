import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E17EB",
        dark: "#121212",
        light: "#FFFFFF",
        secondary: '#F3F4F6',
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", "sans-serif"],
      },
      // Adicionando keyframes e animação para o gradiente
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;
