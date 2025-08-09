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
        primary: "#5E17EB", // Roxo principal
        dark: "#121212",    // Um preto um pouco mais suave que o #000
        light: "#FFFFFF",   // Branco
        secondary: '#F3F4F6', // Um cinza claro para fundos
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
