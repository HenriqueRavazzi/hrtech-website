"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const serviceItems = [
  { href: "/automacao-residencial", label: "Automação Residencial" },
  { href: "/desenvolvimento-software", label: "Desenvolvimento de Sistemas" },
  { href: "/consultoria-tecnologias", label: "Consultoria de Tecnologia" },
];

export function MobileServicesDropdown({ onItemClick }: { onItemClick?: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-md py-3 text-center text-base font-medium tracking-wider text-light/80 transition-colors hover:bg-purple-900/50 hover:text-light focus:bg-purple-900/50 focus:text-light focus:outline-none font-sans"
        aria-expanded={isOpen}
      >
        <span className="mx-auto flex items-center gap-1">
          Serviços
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <div className="mt-1 flex flex-col space-y-1 pl-4">
          {serviceItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full rounded-md py-2 pl-2 text-center text-sm font-medium text-light/70 transition-colors hover:bg-purple-900/30 hover:text-light font-sans"
              onClick={handleItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}