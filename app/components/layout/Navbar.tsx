"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-light">HRTech</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
            <Link href="/about" className="text-sm font-medium text-light/80 transition-colors hover:text-light">Sobre</Link>
            <Link href="/services" className="text-sm font-medium text-light/80 transition-colors hover:text-light">Serviços</Link>
            <Link href="/contact" className="text-sm font-medium text-light/80 transition-colors hover:text-light">Contato</Link>
        </nav>

        <div className="hidden md:block">
            <Button asChild variant="outline" size="sm">
                <Link href="/contact">Fale Conosco</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full rounded-md py-2 text-center text-base font-medium text-light/80 transition-colors hover:bg-white/10 hover:text-light"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="primary" className="w-full mt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Fale Conosco</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

const navLinks = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/services", label: "Serviços" },
    { href: "/contact", label: "Contato" },
  ];
