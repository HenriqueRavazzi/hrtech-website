import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';

export default function HomePage() {
  return (
    // O div principal não precisa mais de cor de fundo
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
