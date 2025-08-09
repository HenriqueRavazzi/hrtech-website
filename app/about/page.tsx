import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { BrainCircuit, HeartHandshake, Shield } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ProfileImage } from '../components/ui/ProfileImage';
import { CtaSection } from '../components/sections/CtaSection';
import { H1, H2, H3, P } from '../components/ui/Typography';

export default function AboutPage() {
  return (
    <div className="bg-light-bg dark:bg-dark">
      <Navbar />
      <main className="pt-16">
        <AnimatedSection className="w-full py-20 lg:py-32">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <H1 className="font-light tracking-wide text-shadow-lg dark:text-shadow-none">
              Acreditamos que a melhor tecnologia é aquela que você não vê, apenas sente.
            </H1>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-20 lg:py-24">
          <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <ProfileImage />
            </div>
            <div className="md:col-span-3 space-y-6">
              <H2 className="text-accent tracking-wider">Minha Jornada</H2>
              <div className="space-y-4 text-lg">
                <P>Olá, eu sou Henrique Ravazzi. Minha paixão pela tecnologia não nasceu numa tela, mas no coração da indústria. Formado em Engenharia de Controle e Automação pela PUC-PR, meu primeiro grande desafio foi no chão de fábrica da Renault, otimizando processos e entendendo como sistemas complexos interagem no mundo real.</P>
                <P>Essa base sólida me levou ao universo do software, onde atuei em DevOps no Grupo Inlog, garantindo a estabilidade de infraestruturas em nuvem, e depois como desenvolvedor e líder técnico na ExxonMobil, construindo e aprimorando aplicações .NET de grande escala.</P>
                <P>A HRTech Automation Systems nasceu da união desses dois mundos. Da percepção de que a verdadeira inovação acontece quando entendemos a fundo tanto a engenharia por trás das coisas quanto o software que as controla.</P>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="w-full py-20 lg:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <H2 className="text-accent mb-6">A Missão da HRTech</H2>
                <div className="space-y-4 text-lg">
                    <P>Inspirada no universo urbano, minimalista e consciente, a HRTech nasce com uma premissa bem definida: inovar o cotidiano através da automação.</P>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-20 lg:py-24">
          <div className="container mx-auto max-w-5xl text-center px-4">
            <H2 className="text-accent mb-12">Nossos Valores</H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <BrainCircuit className="h-8 w-8 text-accent mb-4" />
                  <H3>Precisão Técnica</H3>
                </CardHeader>
                <CardContent><P>Somos complexos na técnica para sermos simples na entrega.</P></CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <HeartHandshake className="h-8 w-8 text-accent mb-4" />
                  <H3>Parceria Humana</H3>
                </CardHeader>
                <CardContent><P>Ouvimos com atenção e explicamos com paciência. O seu projeto é o nosso projeto.</P></CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-4" />
                  <H3>Inovação com Propósito</H3>
                </CardHeader>
                <CardContent><P>Não temos medo de enfrentar desafios complexos. Acreditamos na tecnologia como ferramenta.</P></CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
