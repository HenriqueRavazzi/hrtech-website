import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';
import { AnimatedSection } from '../app/components/ui/AnimatedSection';
import { CtaSection } from '../app/components/sections/CtaSection';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HRTech Automation Systems | Tecnologia que Simplifica, Automação que Liberta",
  description: "Soluções inovadoras de desenvolvimento de software, automação residencial e consultoria tecnológica para transformar sua empresa ou residência com tecnologia de ponta.",
  keywords: ["automação", "desenvolvimento de software", "consultoria tecnológica", "casa inteligente", "sistemas personalizados", "inovação tecnológica"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HRTech Automation Systems | Tecnologia que Simplifica, Automação que Liberta",
    description: "Soluções inovadoras de desenvolvimento de software, automação residencial e consultoria tecnológica para transformar sua empresa ou residência.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="bg-dark relative">
      <Script
        id="schema-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HRTech Automation Systems",
            "url": "https://hrtechnologies.com.br",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://hrtechnologies.com.br/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "HRTech Automation Systems | Desenvolvimento de Software & Consultoria Tecnológica",
            "description": "Soluções personalizadas de automação e desenvolvimento de software para empresas e pessoas que buscam inovação tecnológica.",
            "url": "https://hrtechnologies.com.br",
            "isPartOf": {
              "@type": "WebSite",
              "name": "HRTech Automation Systems",
              "url": "https://hrtechnologies.com.br"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".hero-title", ".hero-description"]
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "HRTech Automation Systems",
              "url": "https://hrtechnologies.com.br"
            }
          })
        }}
      />
      <Navbar />
      
      <main>
        <HeroSection />

        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>

        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}
