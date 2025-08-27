"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type ServiceItem = {
  href: string;
  label: string;
};

const serviceItems: ServiceItem[] = [
  { href: "/automacao-residencial", label: "Automação Residencial" },
  { href: "/desenvolvimento-software", label: "Desenvolvimento de Sistemas" },
  { href: "/consultoria-tecnologias", label: "Consultoria de Tecnologia" },
];

export function ServicesDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="group inline-flex items-center gap-1 font-medium tracking-wider text-light/70 outline-none transition-colors hover:text-purple-400 focus:text-purple-400 font-sans text-base"
          aria-label="Serviços"
        >
          Serviços
          <ChevronDown
            className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[220px] overflow-hidden rounded-md border border-purple-900/50 bg-black/95 p-1 shadow-md backdrop-blur-sm animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1"
          sideOffset={5}
        >
          {serviceItems.map((item) => (
            <DropdownMenu.Item
              key={item.href}
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-purple-900/50 hover:text-light focus:bg-purple-900/50 focus:text-light data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-sans"
            >
              <Link href={item.href} className="flex w-full">
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}