import type { Metadata } from "next";
import { League_Spartan } from "next/font/google"; // Importando a fonte
import "./globals.css";

// Configuração da fonte
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"], // Carregando pesos regular e bold
  variable: "--font-league-spartan", // Definindo uma variável CSS
});

export const metadata: Metadata = {
  title: "HRTech Automation Systems",
  description: "Uma nova experiência em tecnologia e automação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Aplicando a classe da fonte na tag body */}
      <body className={`${leagueSpartan.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
