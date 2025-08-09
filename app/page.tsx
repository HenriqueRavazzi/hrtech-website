import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';
import { AnimatedSection } from '../app/components/ui/AnimatedSection';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />

        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
