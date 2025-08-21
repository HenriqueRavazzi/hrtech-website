import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { projects } from '../../lib/projects-data';
import { notFound } from 'next/navigation';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';
import { AnimatedSection } from '../../components/ui/AnimatedSection';

// Componente para as tags de tecnologia
function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-primary/20 text-primary text-xs font-bold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-dark">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl px-4">
            {/* Cabeçalho */}
            <div className="text-center mb-12">
              <p className="text-primary font-semibold mb-2">{project.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              <p className="text-lg text-light/70 mt-2">{project.client}</p>
            </div>

            {/* Conteúdo Principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Descrição */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Descrição do Projeto</h2>
                  <p className="text-light/80">{project.description}</p>
                </div>
                {/* Minha Atuação */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Minha Atuação</h2>
                  <p className="text-light/80">{project.role}</p>
                </div>
                {/* Concepção e Ideia */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Concepção e Ideia Central</h2>
                  <p className="text-light/80">{project.conception}</p>
                </div>
              </div>

              {/* Barra Lateral */}
              <aside className="space-y-8">
                {/* Tecnologias */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap">
                    {project.technologies.map(tech => <TechBadge key={tech}>{tech}</TechBadge>)}
                  </div>
                </div>
                {/* CTA */}
                <div className="bg-dark/50 border border-primary/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Tem um projeto similar?</h3>
                  <p className="text-light/70 mb-4 text-sm">Vamos conversar sobre como podemos aplicar estas soluções ao seu desafio.</p>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/contact?service=${encodeURIComponent(project.title)}`}>
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

// Função para gerar as páginas estáticas no momento do build (bom para SEO e performance)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
