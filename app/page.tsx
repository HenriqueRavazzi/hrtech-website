import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';
import { AnimatedSection } from '../app/components/ui/AnimatedSection';
import { CtaSection } from '../app/components/sections/CtaSection';

export default function HomePage() {
  return (
    <div className="bg-dark relative">
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
