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
  metadataBase: new URL('https://hrtechnologies.com.br'),
  title: "HRTech Automation Systems | Desenvolvimento de Software & Consultoria Tecnológica",
  description: "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica. Transforme sua operação ou sua casa com nossa expertise em tecnologia.",
  keywords: ["desenvolvimento de software", "automação residencial", "consultoria tecnológica", "sistemas personalizados", "automação empresarial", "tecnologia", "inovação", "software sob medida", "integração de sistemas", "casa inteligente"],
  authors: [{ name: "HRTech Automation Systems", url: "https://hrtechnologies.com.br" }],
  creator: "HRTech Automation Systems",
  publisher: "HRTech Automation Systems",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/logo-roxo.png",
    apple: "/images/logo-roxo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hrtechnologies.com.br",
    title: "HRTech Automation Systems | Desenvolvimento de Software & Consultoria Tecnológica",
    description: "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica.",
    siteName: "HRTech Automation Systems",
    images: [
      {
        url: "https://hrtechnologies.com.br/images/logo-roxo.png",
        width: 800,
        height: 600,
        alt: "HRTech Automation Systems Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRTech Automation Systems | Desenvolvimento de Software & Consultoria Tecnológica",
    description: "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica.",
    images: ["https://hrtechnologies.com.br/images/logo-roxo.png"],
    creator: "@hrtechsystems",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "/",
    languages: {
      'pt-BR': "/",
      'en-US': "/en",
    },
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
