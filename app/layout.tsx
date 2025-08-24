import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { LazyParticleBackground } from "./components/ui/LazyParticleBackground";
import { TooltipProvider } from "./components/ui/TooltipProvider";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-league-spartan",
  display: "swap", // Melhora a performance de carregamento
  preload: true,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={`${leagueSpartan.variable} font-sans bg-transparent text-light`}>
        <LazyParticleBackground />
        {children}
        <TooltipProvider />
      </body>
    </html>
  );
}
