import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import { HeroSection } from '../app/components/sections/HeroSection';
import { Button } from '../app/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card';
import { Code2, Network, Home } from 'lucide-react';
import Link from 'next/link';

function ServicesSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-dark text-light">
      <div className="container mx-auto max-w-5xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Soluções Pensadas para o Seu Desafio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-left">
            <CardHeader>
              <Home className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Automação Residencial Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Transformamos a sua casa num ambiente conectado, seguro e eficiente que trabalha para você.</p>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Code2 className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Desenvolvimento de Software Sob Medida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Criamos aplicações web e mobile que se adaptam perfeitamente às necessidades do seu negócio.</p>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Network className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Consultoria de Tecnologia e Arquitetura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Desenhamos arquiteturas de software robustas e estratégias DevOps para o futuro da sua empresa.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Componente para a seção Sobre (Breve)
function AboutSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-dark/95 text-light">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Da Engenharia ao Software. Da Indústria à sua Casa.</h2>
        <p className="text-lg text-light/80 mb-8">
          Sou Henrique Ravazzi, o fundador da HRTech. Minha jornada começou na engenharia de automação, no chão de fábrica, e evoluiu para a arquitetura de software em nuvem. Essa visão única, que conecta o hardware ao software, o físico ao digital, me permite criar soluções completas e verdadeiramente integradas para qualquer desafio.
        </p>
        <Button asChild variant="outline">
          <Link href="/about">Conheça a nossa história</Link>
        </Button>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <div className="bg-dark">
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
