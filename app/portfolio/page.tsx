import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { projects } from '../lib/projects-data'; // Importando os dados centralizados
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

// Componente para as tags de tecnologia
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
              {projects.map((project) => (
                // Envolvendo o Card com o Link para a página de detalhe
                <Link href={`/portfolio/${project.slug}`} key={project.slug} legacyBehavior>
                  <a className="block h-full transition-transform duration-300 ease-in-out hover:scale-105">
                    <Card className="flex flex-col group overflow-hidden h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{project.title}</CardTitle>
                          <project.icon className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors duration-300 flex-shrink-0 ml-4" />
                        </div>
                        <p className="text-sm text-primary font-semibold">{project.client} - {project.category}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-light/70 mb-4">{project.description}</p>
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
                  </a>
                </Link>
              ))}
              {/* Card de "Em Breve" */}
              <Card className="flex flex-col group overflow-hidden border-dashed border-white/20 hover:border-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>Novos Desafios</CardTitle>
                      <Sparkles className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors duration-300 flex-shrink-0 ml-4" />
                    </div>
                    <p className="text-sm text-primary font-semibold">Inovação Contínua</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center justify-center">
                    <div className="text-center text-light/50">
                      <p className="font-semibold">Mais projetos em breve...</p>
                      <p className="text-xs mt-1">Estamos sempre a explorar novas tecnologias e a trabalhar em soluções inovadoras.</p>
                    </div>
                  </CardContent>
              </Card>

            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
