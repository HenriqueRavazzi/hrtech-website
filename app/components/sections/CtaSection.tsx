import Link from "next/link";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <div className="w-full py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <div className="bg-dark/60 backdrop-blur-md border-white/10 rounded-lg p-8 lg:p-12 shadow-2xl shadow-accent/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cta-title">
            Vamos Transformar a Sua Ideia em Realidade
          </h2>
          <p className="text-lg text-light/80 mb-8 max-w-2xl mx-auto cta-description">
            Seja um projeto de software, uma necessidade de automação ou um desafio de arquitetura, estamos prontos para ouvir e ajudar a construir a solução ideal para você.
          </p>
          <Button asChild size="lg" variant="contact">
            <Link href="/contact">Fale Comigo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
