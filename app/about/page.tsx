import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BrainCircuit, HeartHandshake, Shield } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <AnimatedSection className="w-full py-20 lg:py-32">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg">
              Acreditamos que a melhor tecnologia é aquela que você não vê, apenas sente.
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-accent">Minha Jornada</h2>
            </div>
            <div className="md:col-span-2 text-light/80 space-y-4 text-lg">
              <p>Olá, eu sou Henrique Ravazzi. Minha paixão pela tecnologia não nasceu numa tela, mas no coração da indústria...</p>
              <p>A HRTech Automation Systems nasceu da união desses dois mundos. Da percepção de que a verdadeira inovação acontece quando entendemos a fundo tanto a engenharia por trás das coisas quanto o software que as controla.</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="w-full py-20 lg:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-bold text-accent mb-6">A Missão da HRTech</h2>
                <div className="text-light/80 space-y-4 text-lg">
                    <p>Inspirada no universo urbano, minimalista e consciente, a HRTech nasce com uma premissa bem definida: inovar o cotidiano através da automação.</p>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-20 lg:py-24">
          <div className="container mx-auto max-w-5xl text-center px-4">
            <h2 className="text-3xl font-bold text-accent mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-left transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                <CardHeader>
                  <BrainCircuit className="h-8 w-8 text-accent mb-4" />
                  <CardTitle>Precisão Técnica</CardTitle>
                </CardHeader>
                <CardContent><p className="text-light/80">Somos complexos na técnica para sermos simples na entrega.</p></CardContent>
              </Card>
              <Card className="text-left transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                <CardHeader>
                  <HeartHandshake className="h-8 w-8 text-accent mb-4" />
                  <CardTitle>Parceria Humana</CardTitle>
                </CardHeader>
                <CardContent><p className="text-light/80">Ouvimos com atenção e explicamos com paciência. O seu projeto é o nosso projeto.</p></CardContent>
              </Card>
              <Card className="text-left transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-4" />
                  <CardTitle>Inovação com Propósito</CardTitle>
                </CardHeader>
                <CardContent><p className="text-light/80">Não temos medo de enfrentar desafios complexos. Acreditamos na tecnologia como ferramenta.</p></CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
