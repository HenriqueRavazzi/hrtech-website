import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-league-spartan",
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
      {/* Aplicando a classe da fonte e o novo fundo animado */}
      <body className={`${leagueSpartan.variable} font-sans animated-gradient text-light`}>
        {children}
      </body>
    </html>
  );
}
