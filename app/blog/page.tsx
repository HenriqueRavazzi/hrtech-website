import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Briefcase } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | HRTech Automation Systems",
  description: "Acompanhe nosso blog para ficar por dentro das últimas novidades em automação residencial, desenvolvimento de software e tendências tecnológicas.",
  keywords: ["blog", "artigos", "novidades", "tecnologia", "automação", "desenvolvimento de software", "tendências", "inovação"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | HRTech Automation Systems",
    description: "Acompanhe nosso blog para ficar por dentro das últimas novidades em automação residencial, desenvolvimento de software e tendências tecnológicas.",
    url: "/blog",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <main className="pt-16">
        <section className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center">
          <div className="container mx-auto max-w-4xl text-center px-4 py-20">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Os Nossos Projetos
            </h1>
            <p className="text-lg md:text-xl text-light/80">
              Aqui, em breve, poderá ver os estudos de caso detalhados dos nossos projetos de automação e software. Fique atento!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
