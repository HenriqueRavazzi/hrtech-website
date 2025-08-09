import Link from 'next/link';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-dark text-light">
      {/* Opcional: Adicionar um efeito de gradiente ou imagem de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark opacity-50"></div>
      
      <div className="container relative z-10 mx-auto max-w-4xl text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Tecnologia que Simplifica. Automação que Liberta.
        </h1>
        <p className="text-lg md:text-xl text-light/80 mb-8">
          Nós acreditamos na união do cotidiano à tecnologia. Na otimização de processos que te presenteia com mais segurança, conforto e foco para o que realmente importa. Viver de maneira inteligente é o que separa o bom do extraordinário. Bem-vindo à HRTech Automation Systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/services">Nossos Serviços</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Fale com um Especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
