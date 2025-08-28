import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Home, Smartphone, Shield, Zap, Thermometer, Camera } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automação Residencial | HRTech Automation Systems",
  description: "Transforme sua casa em um ambiente inteligente com nossas soluções de automação residencial. Iluminação, segurança, climatização e entretenimento integrados para máximo conforto e eficiência.",
  keywords: ["automação residencial", "casa inteligente", "smart home", "iluminação inteligente", "segurança residencial", "climatização automatizada", "controle por voz", "eficiência energética"],
  alternates: {
    canonical: "/automacao-residencial",
  },
  openGraph: {
    title: "Automação Residencial | HRTech Automation Systems",
    description: "Transforme sua casa em um ambiente inteligente com nossas soluções de automação residencial. Iluminação, segurança, climatização e entretenimento integrados.",
    url: "/automacao-residencial",
    type: "website",
  },
};

export default function AutomacaoResidencialPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Automação Residencial
            </h1>
            <Card className="bg-dark/60 backdrop-blur-md">
              <CardContent className="p-8">
                <p className="text-lg text-light/80">
                  Transforme sua casa em um ambiente inteligente, seguro e eficiente. 
                  Nossa automação residencial integra tecnologia de ponta com design elegante, 
                  proporcionando conforto e praticidade no seu dia a dia.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4 mb-16">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center">Nossos Serviços</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Iluminação Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Controle total da iluminação com ajustes automáticos de intensidade, 
                    temperatura de cor e programação personalizada para cada ambiente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Thermometer className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Climatização Automatizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Sistema de ar-condicionado e aquecimento com controle inteligente, 
                    otimizando o conforto térmico e reduzindo o consumo energético.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Camera className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Segurança Integrada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Câmeras de segurança, sensores de movimento, alarmes e controle de acesso 
                    integrados em uma única plataforma de monitoramento.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Controle por App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Aplicativo personalizado para controlar todos os sistemas da casa 
                    remotamente, com interface intuitiva e notificações em tempo real.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Gestão Energética</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Monitoramento e otimização do consumo energético com relatórios 
                    detalhados e automações para reduzir custos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Integração Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Todos os sistemas trabalham em harmonia, criando cenários 
                    personalizados que se adaptam à sua rotina e preferências.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-4xl px-4">
            <Card className="bg-dark/60 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center mb-6">
                  Por que escolher a HRTech?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">Tecnologia de Ponta</h3>
                    <p className="text-light/70">
                      Utilizamos os mais avançados protocolos de comunicação e dispositivos 
                      IoT para garantir máxima eficiência e confiabilidade.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">Projeto Personalizado</h3>
                    <p className="text-light/70">
                      Cada projeto é único, desenvolvido especificamente para atender 
                      às necessidades e estilo de vida de cada cliente.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">Suporte Técnico</h3>
                    <p className="text-light/70">
                      Oferecemos suporte técnico especializado e manutenção preventiva 
                      para garantir o funcionamento perfeito do sistema.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">Instalação Profissional</h3>
                    <p className="text-light/70">
                      Nossa equipe técnica realiza a instalação com mínima interferência 
                      na rotina da família, seguindo os mais altos padrões de qualidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl px-4 mt-16 text-center">
            <Card className="bg-dark/60 backdrop-blur-md border-white/10 p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Transforme sua casa em um ambiente inteligente</h3>
              <p className="text-light/70 mb-8">Entre em contato conosco para discutir suas necessidades de automação residencial e receber um orçamento personalizado.</p>
              <Button asChild className="px-8 py-6 text-lg" variant="contact">
                <Link href={`/contact?message=${encodeURIComponent("Olá, tenho interesse no serviço de automação residencial. Gostaria de discutir as possibilidades para minha casa e receber um orçamento detalhado.")}`}>
                  Entre em contato
                </Link>
              </Button>
            </Card>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}