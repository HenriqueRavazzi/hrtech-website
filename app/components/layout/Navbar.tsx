"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { ServicesDropdown } from "../ui/ServicesDropdown";
import { MobileServicesDropdown } from "../ui/MobileServicesDropdown";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-roxo.png"
            alt="HRTech Logo"
            width={72}
            height={40}
            className="bg-transparent"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="font-medium tracking-wider text-light/70 transition-colors hover:text-purple-400 focus:text-purple-400 focus:outline-none font-sans text-base">
            Sobre
          </Link>
          <ServicesDropdown />
          {/* <Link
            href="/orcamento"
            className="font-medium tracking-wider text-light/70 transition-colors hover:text-purple-400 focus:text-purple-400 focus:outline-none font-sans text-base">
            Orçamento
          </Link> */}
          <Link
            href="/contact"
            className="font-medium tracking-wider text-light/70 transition-colors hover:text-purple-400 focus:text-purple-400 focus:outline-none font-sans text-base">
            Contato
          </Link>
        </nav>

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
            <Link
              href="/about"
              className="w-full rounded-md py-3 text-center text-base font-medium tracking-wider text-light/80 transition-colors hover:bg-purple-900/50 hover:text-light focus:bg-purple-900/50 focus:text-light focus:outline-none font-sans">
              Sobre
            </Link>
            <MobileServicesDropdown onItemClick={() => setIsOpen(false)} />
            {/* <Link
              href="/orcamento"
              className="w-full rounded-md py-3 text-center text-base font-medium tracking-wider text-light/80 transition-colors hover:bg-purple-900/50 hover:text-light focus:bg-purple-900/50 focus:text-light focus:outline-none font-sans">
              Orçamento
            </Link> */}
            <Link
              href="/contact"
              className="w-full rounded-md py-3 text-center text-base font-medium tracking-wider text-light/80 transition-colors hover:bg-purple-900/50 hover:text-light focus:bg-purple-900/50 focus:text-light focus:outline-none font-sans">
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
