"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">HRTech</span>
        </Link>
        
        <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-4 md:flex">
                <Link href="/about" className="text-sm font-medium text-light-text/80 dark:text-light/80 transition-colors hover:text-light-text dark:hover:text-light">Sobre</Link>
                <Link href="/services" className="text-sm font-medium text-light-text/80 dark:text-light/80 transition-colors hover:text-light-text dark:hover:text-light">Serviços</Link>
                <Link href="/contact" className="text-sm font-medium text-light-text/80 dark:text-light/80 transition-colors hover:text-light-text dark:hover:text-light">Contato</Link>
            </nav>

            <div className="hidden md:flex items-center gap-2">
                <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>
                <ThemeToggle />
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
      </div>
      {/* ... (Menu Mobile também precisará de ajustes de cor) ... */}
    </header>
  );
}
