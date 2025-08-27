import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ParticleBackground } from "./components/ui/ParticleBackground";
import { TooltipProvider } from "./components/ui/TooltipProvider";
import WhatsAppButton from "./components/ui/WhatsAppButton";

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
      <body className={`${leagueSpartan.variable} font-sans bg-transparent text-light`}>
        <ParticleBackground />
        {children}
        <WhatsAppButton />
        <TooltipProvider />
      </body>
    </html>
  );
}
