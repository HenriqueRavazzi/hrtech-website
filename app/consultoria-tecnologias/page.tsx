import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Target, TrendingUp, Shield, Users, Lightbulb, BarChart } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export default function ConsultoriaTecnologiasPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Consultoria de Tecnologias e Arquiteturas
            </h1>
            <Card className="bg-dark/60 backdrop-blur-md">
              <CardContent className="p-8">
                <p className="text-lg text-light/80">
                  Orientamos empresas na tomada de decisões estratégicas sobre tecnologia, 
                  arquitetura de sistemas e transformação digital. Nossa experiência em 
                  projetos de grande escala garante soluções eficientes e sustentáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4 mb-16">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center">Áreas de Consultoria</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Estratégia Tecnológica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Definição de roadmaps tecnológicos alinhados aos objetivos de negócio, 
                    avaliação de tecnologias emergentes e planejamento de investimentos em TI.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Arquitetura de Sistemas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Design de arquiteturas escaláveis, seguras e resilientes. 
                    Modernização de sistemas legados e migração para arquiteturas em nuvem.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Transformação Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Acompanhamento completo na jornada de digitalização, 
                    desde a análise de processos até a implementação de novas tecnologias.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <BarChart className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Otimização de Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Análise e otimização de sistemas existentes, identificação de gargalos 
                    e implementação de melhorias de performance e eficiência.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Gestão de Equipes Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Estruturação de times de desenvolvimento, definição de processos 
                    e metodologias, mentoria técnica e liderança de projetos complexos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Inovação e Pesquisa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/70">
                    Identificação de oportunidades de inovação, prototipagem de soluções 
                    e avaliação de viabilidade técnica de novos projetos.
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
                <CardTitle className="text-3xl font-bold text-primary text-center">Experiência Comprovada</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Setor Energético</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-light/70">
                      <strong>ExxonMobil:</strong> Liderança técnica em aplicações .NET de grande escala, 
                      otimização de performance e implementação de arquiteturas robustas.
                    </p>
                    <p className="text-light/70">
                      Experiência em sistemas críticos com alta disponibilidade e 
                      requisitos rigorosos de segurança e compliance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Infraestrutura e DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-light/70">
                      <strong>Grupo Inlog:</strong> Especialização em DevOps, gerenciamento de 
                      infraestrutura em nuvem e automação de processos de deploy.
                    </p>
                    <p className="text-light/70">
                      Implementação de pipelines CI/CD, monitoramento de aplicações 
                      e otimização de custos em cloud.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Automação Industrial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-light/70">
                      <strong>Renault:</strong> Otimização de processos industriais, 
                      integração de sistemas de controle e automação de linhas de produção.
                    </p>
                    <p className="text-light/70">
                      Experiência prática em chão de fábrica, entendendo as necessidades 
                      reais da indústria e os desafios de implementação.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-light">Soluções Corporativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-light/70">
                      <strong>KIS Solutions, Neuvye, LOC Solutions:</strong> Desenvolvimento 
                      de soluções personalizadas para diferentes segmentos de mercado.
                    </p>
                    <p className="text-light/70">
                      Adaptação de tecnologias às necessidades específicas de cada cliente, 
                      garantindo ROI e sustentabilidade das soluções.
                    </p>
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
                  Nossa Metodologia de Consultoria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">1. Diagnóstico Técnico</h3>
                    <p className="text-light/70">
                      Análise profunda da infraestrutura atual, identificação de pontos 
                      de melhoria e mapeamento de riscos tecnológicos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">2. Estratégia Personalizada</h3>
                    <p className="text-light/70">
                      Desenvolvimento de roadmap tecnológico alinhado aos objetivos 
                      de negócio e recursos disponíveis.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">3. Implementação Guiada</h3>
                    <p className="text-light/70">
                      Acompanhamento hands-on durante a execução, garantindo que 
                      as recomendações sejam implementadas corretamente.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">4. Monitoramento Contínuo</h3>
                    <p className="text-light/70">
                      Avaliação periódica dos resultados e ajustes estratégicos 
                      para garantir o sucesso a longo prazo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}