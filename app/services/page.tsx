import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { CheckCircle2, Code2, Network, Home } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { CtaSection } from '../components/sections/CtaSection'; // Importando a CTA

const services = [
    {
        icon: Code2,
        title: "Desenvolvimento de software sob medida",
        headline: "A sua visão é única. O seu software também deveria ser.",
        description: "No mercado atual, soluções genéricas geram resultados genéricos. Na HRTech, não construímos apenas software; criamos a ferramenta exata que o seu negócio precisa para crescer. Seja uma aplicação web para otimizar os seus processos internos ou um aplicativo mobile para encantar os seus clientes, nós mergulhamos no seu desafio para desenhar, desenvolver e entregar uma solução sob medida, garantindo performance, escalabilidade e uma experiência de utilizador impecável.",
        includes: [
          "Aplicações Web e Mobile",
          "Desenvolvimento de APIs",
          "Integração de Sistemas",
          "Modernização de Legado",
        ],
      },
      {
        icon: Network,
        title: "Consultoria de tecnologia e arquitetura",
        headline: "O seu projeto está sendo construído sobre uma fundação sólida?",
        description: "As decisões tecnológicas tomadas hoje definem o sucesso ou o fracasso de amanhã. Atuamos como o seu parceiro estratégico, um arquiteto que garante que a sua 'construção' digital seja sólida. Ajudamos a sua empresa a escolher as tecnologias certas, a desenhar arquiteturas de software preparadas para o futuro (Cloud, DevOps, IaC) e a otimizar os seus custos operacionais, garantindo que o seu investimento em tecnologia traga o máximo retorno.",
        includes: [
          "Desenho de Arquitetura de Nuvem (Azure/AWS)",
          "Estratégia DevOps e CI/CD",
          "Otimização de Performance e Custos (FinOps)",
          "Mentoria Técnica para Equipas",
        ],
      },
      {
        icon: Home,
        title: "Automação residencial inteligente",
        headline: "Imagine uma casa que trabalha para ti.",
        description: "A verdadeira automação vai além de ligar uma luz pelo telemóvel. Trata-se de criar um ecossistema inteligente que se antecipa às suas necessidades. Imagine chegar em casa e a 'Cena Cinema' ser ativada com um toque: as luzes diminuem, as cortinas fecham e a climatização ajusta-se. Imagine sair para viajar e ter a certeza de que a sua casa está segura e a consumir o mínimo de energia. Nós projetamos e implementamos essa realidade, transformando a sua casa num ambiente conectado, seguro e eficiente.",
        includes: [
          "Projetos de Iluminação Inteligente",
          "Controlo de Climatização e Cortinas",
          "Sistemas de Segurança Integrados",
          "Redes Wi-Fi de Alta Performance",
        ],
      },
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <AnimatedSection className="w-full py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl text-center px-4">
            {/* Refinamento de tipografia */}
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-shadow-lg tracking-wide">
              Soluções de Tecnologia para Desafios Reais
            </h1>
            <p className="text-lg md:text-xl text-light/80 mt-4">
              Descubra como podemos ajudar a sua empresa a inovar ou a sua casa a tornar-se mais inteligente.
            </p>
          </div>
        </AnimatedSection>

        <div className="py-10">
          {services.map((service) => (
            <AnimatedSection key={service.title} className="w-full">
              <div className="container mx-auto max-w-5xl px-4 py-16">
                <div className="text-center mb-12">
                  <service.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary tracking-wider">{service.headline}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 text-light/80">
                    <h3 className="text-2xl font-semibold text-light">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div>
                    <Card className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20">
                      <CardHeader>
                        <CardTitle>O que está incluído:</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                              <span className="text-light/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
            <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
