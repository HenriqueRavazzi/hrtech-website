import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Layers, GitBranch, Construction } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const projects = [
  {
    title: "Liderança Técnica - Plataforma de Talentos",
    client: "ExxonMobil",
    category: "Desenvolvimento de Software",
    icon: GitBranch,
    description: "Desenvolvimento de uma plataforma interna complexa, similar a um 'LinkedIn corporativo', para a gestão e o desenvolvimento de talentos dentro da empresa.",
    role: "Liderei a equipa de back-end, sendo responsável pela arquitetura da solução e pelo desenvolvimento dos principais serviços e APIs da plataforma.",
    technologies: ["C# (.NET)", "SQL Server", "Microsserviços", "React", "Angular"],
  },
  {
    title: "Plataforma de Leilões Online",
    client: "KIS Solutions",
    category: "Desenvolvimento Full-Stack",
    icon: GitBranch,
    description: "Construção e manutenção de uma plataforma de leilões online de alta disponibilidade, com aplicações web e mobile (iOS/Android).",
    role: "Atuei como desenvolvedor full-stack, liderando iniciativas de arquitetura, desenvolvendo a API principal em Java Spring Boot e atuando no front-end com React.",
    technologies: ["Java (Spring Boot)", "React", "React Native", "SQL", "AWS"],
  },
  {
    title: "Ecossistema Digital Farmacêutico",
    client: "Neuvye Farmacêutica",
    category: "Consultoria e Integração",
    icon: Layers,
    description: "Prestação de consultoria contínua e manutenção do ecossistema digital da empresa, garantindo a operação e a integração de múltiplas plataformas.",
    role: "Fui responsável pela gestão do site em WordPress, manutenção do e-commerce na plataforma Tray e criação de fluxos de trabalho automatizados no Pipefy.",
    technologies: ["WordPress", "Tray Commerce", "Pipefy", "PHP", "JavaScript"],
  },
  {
    title: "HRTech Home Hub",
    client: "HRTech (Projeto Próprio)",
    category: "Automação & IoT",
    icon: Construction,
    description: "Criação de um sistema completo de automação residencial para centralizar o controlo de múltiplos dispositivos IoT numa única interface.",
    role: "Desenvolvi o aplicativo mobile em Flutter, configurei o servidor gateway em um Raspberry Pi com Python (FastAPI) e implementei a comunicação via MQTT.",
    technologies: ["Flutter", "Python (FastAPI)", "MQTT", "Raspberry Pi"],
  },
  {
    title: "Gerador de Propostas Inteligente",
    client: "HRTech (Projeto Próprio)",
    category: "Desenvolvimento SaaS",
    icon: GitBranch,
    description: "Desenvolvimento de um produto de software (SaaS) para freelancers, que permite a criação e o envio de propostas comerciais de forma rápida e automatizada.",
    role: "Arquitetei e desenvolvi a solução completa, incluindo a API RESTful em Node.js com autenticação JWT, a geração de PDFs e a interface reativa com React.",
    technologies: ["Node.js", "React", "PostgreSQL", "Prisma", "JWT"],
  },
  {
    title: "Engenharia de Plataformas e DevOps",
    client: "Grupo Inlog",
    category: "DevOps & Cloud",
    icon: Layers,
    description: "Atuação focada em garantir a estabilidade, a segurança e a agilidade da infraestrutura em nuvem para as aplicações da empresa.",
    role: "Fui responsável pela criação e manutenção de pipelines de CI/CD na Azure DevOps e pela implementação de práticas de Infraestrutura como Código (IaC).",
    technologies: ["Azure", "Azure DevOps", "CI/CD", "IaC", "Docker"],
  },
];

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-primary/20 text-primary text-xs font-bold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-dark">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfólio de Projetos</h1>
            <p className="text-lg text-light/80 mb-16">
              Uma seleção de desafios que transformei em soluções eficientes e robustas.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col group overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                      <project.icon className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-primary font-semibold">{project.client} - {project.category}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-light/70 mb-4">{project.description}</p>
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-bold mb-2">Minha Atuação:</h4>
                      <p className="text-xs text-light/70">{project.role}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full">
                      <h4 className="text-sm font-bold mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap">
                        {project.technologies.map(tech => <TechBadge key={tech}>{tech}</TechBadge>)}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
