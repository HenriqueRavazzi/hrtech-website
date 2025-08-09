import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Mail } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { H1, Lead } from '../components/ui/Typography';

export default function ContactPage() {
  return (
    <div className="bg-light-bg dark:bg-dark">
      <Navbar />
      <main className="pt-16">
        <AnimatedSection className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center py-20">
          <div className="container mx-auto max-w-2xl text-center px-4">
            <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
            <H1 className="mb-4 text-shadow-lg dark:text-shadow-none">
              Vamos Construir Algo Incrível Juntos
            </H1>
            <Lead className="mb-12">
              Tem uma ideia, um desafio ou um projeto em mente? Preencha o formulário abaixo e vamos conversar.
            </Lead>
            <div className="text-left">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
