import Link from "next/link";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <div className="w-full py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <div className="bg-dark/60 backdrop-blur-md border-white/10 rounded-lg p-8 lg:p-12 shadow-2xl shadow-accent/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos transformar a sua ideia em realidade.
          </h2>
          <p className="text-lg text-light/80 mb-8 max-w-2xl mx-auto">
            Seja um projeto de software, uma necessidade de automação ou um desafio de arquitetura, estou pronto para ouvir e ajudar a construir a solução.
          </p>
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">Fale Comigo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
