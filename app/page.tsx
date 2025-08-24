import Link from 'next/link';
import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { ServicesSection } from '../app/components/sections/ServicesSection';
import { AboutSection } from '../app/components/sections/AboutSection';
import { AnimatedSection } from '../app/components/ui/AnimatedSection';
import { CtaSection } from '../app/components/sections/CtaSection';
import { SideProjectsPanelWithModal } from '../app/components/sections/SideProjectsPanel';
import { projects } from './lib/projects-data';
import { Card, CardTitle } from '../app/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-dark relative">
      <Navbar />
      
      {/* Layout principal com espaço para painel lateral */}
      <div className="relative min-h-screen">
        {/* Conteúdo principal */}
        <main className="lg:pr-96">
          <HeroSection />

          <AnimatedSection>
            <ServicesSection />
          </AnimatedSection>

          {/* Seção de projetos para mobile/tablet */}
          <div className="lg:hidden">
            <AnimatedSection>
              <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
                  <p className="text-lg text-light/80">Explore alguns dos desafios que já transformei em soluções.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {projects.slice(0, 4).map((project, index) => (
                    <Link href={`/portfolio/${project.slug}`} key={index} className="block">
                      <Card className="group hover:bg-primary/10 hover:border-primary transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <project.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <CardTitle className="text-lg font-semibold mb-2">{project.title}</CardTitle>
                              <p className="text-sm text-light/70 mb-3">{project.client}</p>
                              <p className="text-sm text-light/60 line-clamp-3">{project.description}</p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-light/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>

          <AnimatedSection>
            <CtaSection />
          </AnimatedSection>
        </main>
        
        {/* Painel lateral flutuante com projetos - apenas desktop */}
        <div className="hidden lg:block fixed top-24 right-6 bottom-40 w-72 z-40">
          <SideProjectsPanelWithModal />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
