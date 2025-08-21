import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';
import { AnimatedSection } from '../app/components/ui/AnimatedSection';
import { CtaSection } from '../app/components/sections/CtaSection';
import { ScrollingPortfolio } from '../app/components/sections/ScrollingPortfolio';

export default function HomePage() {
  return (
    <div className="bg-dark">
      <Navbar />
      <main>
        <HeroSection />

        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>

        {/* Adicionando a nova vitrine de portfólio em scroll */}
        <AnimatedSection>
          <ScrollingPortfolio />
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
