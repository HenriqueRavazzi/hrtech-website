import * as React from "react";
import Link from "next/link";
import { Code, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo e Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-light">HRTech</span>
            </Link>
            <p className="text-sm text-light/60 text-center md:text-left">
              © {new Date().getFullYear()} HRTech Automation Systems. <br/> Todos os direitos reservados.
            </p>
          </div>

          {/* Links e Social */}
          <div className="flex flex-col items-center md:items-end gap-6">
            {/* Links de Navegação */}
            <nav className="flex gap-6">
              <Link href="/about" className="text-sm text-light/80 hover:text-light">Sobre</Link>
              <Link href="/services" className="text-sm text-light/80 hover:text-light">Serviços</Link>
              <Link href="/contact" className="text-sm text-light/80 hover:text-light">Contato</Link>
            </nav>
            {/* Ícones de Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://github.com/HenriqueRavazzi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-light/80 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/henrique-ravazzi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-light/80 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
