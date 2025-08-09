import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <main className="pt-16">
        <section className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center py-20">
          <div className="container mx-auto max-w-2xl text-center px-4">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Vamos Construir Algo Incrível Juntos
            </h1>
            <p className="text-lg md:text-xl text-light/80 mb-12">
              Tem uma ideia, um desafio ou um projeto em mente? Preencha o formulário abaixo e vamos conversar.
            </p>
            <div className="text-left">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
