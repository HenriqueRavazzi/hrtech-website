import { cn } from "../../lib/utils";
import React from 'react';

// Componente para H1
export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-light-text dark:text-light",
        className
      )}
      {...props}
    />
  );
}

// Componente para H2
export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-light-text dark:text-light",
        className
      )}
      {...props}
    />
  );
}

// Componente para H3
export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight text-light-text dark:text-light",
          className
        )}
        {...props}
      />
    );
}

// Componente para Parágrafo (P)
export function P({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 text-light-text/80 dark:text-light/80", className)}
      {...props}
    />
  );
}

// Componente para Texto de Destaque (Lead)
export function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
      <p
        className={cn("text-xl text-light-text/90 dark:text-light/90", className)}
        {...props}
      />
    );
}

// Componente para Texto Mudo/Subtil (Muted)
export function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
      <p
        className={cn("text-sm text-light-text/60 dark:text-light/60", className)}
        {...props}
      />
    );
}
