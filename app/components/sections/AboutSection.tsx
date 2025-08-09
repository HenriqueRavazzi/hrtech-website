import Link from 'next/link';
import { Button } from '../ui/Button';
import { H2, P } from '../ui/Typography';

export function AboutSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <H2 className="mb-6">Da Engenharia ao Software. Da Indústria à sua Casa.</H2>
        <P className="text-lg mb-8">
          Sou Henrique Ravazzi, o fundador da HRTech. Minha jornada começou na engenharia de automação, no chão de fábrica, e evoluiu para a arquitetura de software em nuvem. Essa visão única, que conecta o hardware ao software, o físico ao digital, me permite criar soluções completas e verdadeiramente integradas para qualquer desafio.
        </P>
        <Button asChild variant="outline">
          <Link href="/about">Conheça a nossa história</Link>
        </Button>
      </div>
    </section>
  );
}
