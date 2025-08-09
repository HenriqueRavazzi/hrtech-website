import Link from 'next/link';
import { Button } from '../ui/Button';
import { H1, Lead } from '../ui/Typography';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="container relative z-10 mx-auto max-w-4xl text-center px-4">
        <H1 className="text-shadow-lg dark:text-shadow-none">
          Tecnologia que Simplifica. Automação que Liberta.
        </H1>
        <Lead className="my-8">
          Nós acreditamos na união do cotidiano à tecnologia. Na otimização de processos que te presenteia com mais segurança, conforto e foco para o que realmente importa. Viver de maneira inteligente é o que separa o bom do extraordinário. Bem-vindo à HRTech Automation Systems.
        </Lead>
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
