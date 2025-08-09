import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/TooltipProvider";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
      <body className={`${leagueSpartan.variable} font-sans animated-gradient`}>
        {children}
        <TooltipProvider />
      </body>
    </html>
  );
}
