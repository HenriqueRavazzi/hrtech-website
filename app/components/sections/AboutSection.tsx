import Link from 'next/link';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function AboutSection() {
  return (
    <section className="w-full py-20 lg:py-32 text-light">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <Card className="bg-dark/60 backdrop-blur-md border-white/10 p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inovação que Conecta Tecnologia e Vida</h2>
          <p className="text-lg text-light/80 mb-8">
            A HRTech nasceu da visão de que a tecnologia deve simplificar e enriquecer nossas vidas. Combinamos expertise em automação industrial, desenvolvimento de software e arquitetura de sistemas para criar soluções que transformam desafios complexos em experiências intuitivas e eficientes.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">Conheça a nossa história</Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}
