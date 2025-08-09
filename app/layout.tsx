import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/TooltipProvider";
import { ThemeProvider } from "./components/ThemeProvider";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body 
        className={`${leagueSpartan.variable} font-sans bg-light-bg dark:bg-dark transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TooltipProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
