import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { LazyParticleBackground } from "./components/ui/LazyParticleBackground";
import { TooltipProvider } from "./components/ui/TooltipProvider";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Script from "next/script";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-league-spartan",
  display: "swap", // Melhora a performance de carregamento
  preload: true,
});

export const metadata: Metadata = {
  title: "HRTech Automation Systems | Desenvolvimento de Software & Consultoria Tecnológica",
  description: "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica. Transforme sua operação ou sua casa com nossa expertise em tecnologia.",
  icons: {
    icon: "/images/logo-roxo.png",
  },
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
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HRTech Automation Systems",
              "url": "https://hrtechnologies.com.br",
              "logo": "https://hrtechnologies.com.br/images/logo-roxo.png",
              "sameAs": [
                "https://github.com/hrtech-systems",
                "https://www.linkedin.com/company/hrtech-automation-systems"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5511999999999",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"]
              },
              "description": "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica."
            })
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans bg-transparent text-light`}>
        <LazyParticleBackground />
        {children}
        <WhatsAppButton />
        <TooltipProvider />
      </body>
    </html>
  );
}
