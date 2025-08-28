import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Code, Database, Cloud, Smartphone, Globe, Cog } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Desenvolvimento de Software | HRTech Automation Systems",
  description: "Soluções de software sob medida para empresas que buscam inovação. Desenvolvemos aplicações web, mobile, APIs e sistemas complexos que impulsionam o crescimento do seu negócio.",
  keywords: ["desenvolvimento de software", "aplicações web", "aplicativos mobile", "APIs", "sistemas personalizados", "integração de sistemas", "modernização de legado", "software sob medida"],
  alternates: {
    canonical: "/desenvolvimento-software",
  },
  openGraph: {
    title: "Desenvolvimento de Software | HRTech Automation Systems",
    description: "Soluções de software sob medida para empresas que buscam inovação. Desenvolvemos aplicações web, mobile, APIs e sistemas complexos.",
    url: "/desenvolvimento-software",
    type: "website",
  },
};

export default function DesenvolvimentoSoftwarePage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Desenvolvimento de Software
            </h1>
            <Card className="bg-dark/60 backdrop-blur-md">
              <CardContent className="p-8">
                <p className="text-lg text-light/80">
                  Criamos soluções de software sob medida para empresas que buscam inovação e eficiência. 
                  Desde aplicações web modernas até sistemas complexos de automação industrial, 
                  desenvolvemos tecnologia que impulsiona o crescimento do seu negócio.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4 mb-16">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center">Nossas Especialidades</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Aplicações Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Desenvolvimento de aplicações web modernas com React, Next.js e .NET, 
                    focando em performance, escalabilidade e experiência do usuário.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Database className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Sistemas Corporativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Soluções empresariais robustas para gestão de processos, 
                    integração de sistemas e automação de workflows corporativos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Cloud className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Infraestrutura em Nuvem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Implementação e gerenciamento de infraestrutura cloud com AWS, Azure, 
                    incluindo DevOps, CI/CD e monitoramento de aplicações.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Aplicativos Mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, 
                    com foco em usabilidade e integração com sistemas existentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Cog className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Automação Industrial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Sistemas de controle e monitoramento industrial, SCADA, 
                    integração com PLCs e otimização de processos produtivos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>APIs e Integrações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Desenvolvimento de APIs RESTful, microserviços e integrações 
                    entre sistemas legados e novas tecnologias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4 mb-16">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center">Tecnologias que Dominamos</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-light/70">• React.js & Next.js</p>
                    <p className="text-light/70">• TypeScript & JavaScript</p>
                    <p className="text-light/70">• Tailwind CSS & Styled Components</p>
                    <p className="text-light/70">• Progressive Web Apps (PWA)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-light/70">• .NET Core & C#</p>
                    <p className="text-light/70">• Node.js & Express</p>
                    <p className="text-light/70">• SQL Server & PostgreSQL</p>
                    <p className="text-light/70">• Redis & MongoDB</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">DevOps & Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-light/70">• AWS & Microsoft Azure</p>
                    <p className="text-light/70">• Docker & Kubernetes</p>
                    <p className="text-light/70">• GitHub Actions & Azure DevOps</p>
                    <p className="text-light/70">• Terraform & Infrastructure as Code</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Mobile & IoT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-light/70">• React Native & Flutter</p>
                    <p className="text-light/70">• Swift & Kotlin</p>
                    <p className="text-light/70">• Arduino & Raspberry Pi</p>
                    <p className="text-light/70">• MQTT & WebSocket</p>
                  </div>
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
                  Nosso Processo de Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">1. Análise e Planejamento</h3>
                    <p className="text-light/70">
                      Entendemos profundamente suas necessidades e objetivos para criar 
                      uma solução técnica alinhada com sua estratégia de negócio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">2. Arquitetura e Design</h3>
                    <p className="text-light/70">
                      Projetamos a arquitetura do sistema considerando escalabilidade, 
                      performance e manutenibilidade a longo prazo.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">3. Desenvolvimento Ágil</h3>
                    <p className="text-light/70">
                      Utilizamos metodologias ágeis com entregas incrementais, 
                      permitindo feedback contínuo e ajustes durante o desenvolvimento.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">4. Testes e Deploy</h3>
                    <p className="text-light/70">
                      Implementamos testes automatizados e processos de deploy contínuo 
                      para garantir qualidade e confiabilidade da solução.
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
              <h3 className="text-2xl font-bold text-primary mb-6">Pronto para iniciar seu projeto?</h3>
              <p className="text-light/70 mb-8">Entre em contato conosco para discutir suas necessidades de desenvolvimento de software e receber um orçamento personalizado.</p>
              <Button asChild className="px-8 py-6 text-lg" variant="contact">
                <Link href={`/contact?message=${encodeURIComponent("Olá, tenho interesse no serviço de desenvolvimento de software personalizado. Gostaria de discutir um projeto e receber um orçamento detalhado.")}`}>
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