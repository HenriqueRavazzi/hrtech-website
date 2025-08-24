"use client";

import { Suspense, lazy, ComponentType } from "react";
import { LucideProps } from "lucide-react";

interface LazyIconProps extends LucideProps {
  name: string;
  fallback?: ComponentType<LucideProps>;
}

// Cache para ícones já carregados
const iconCache = new Map<string, ComponentType<LucideProps>>();

export function LazyIcon({ name, fallback, ...props }: LazyIconProps) {
  // Verifica se o ícone já está no cache
  if (iconCache.has(name)) {
    const CachedIcon = iconCache.get(name)!;
    return <CachedIcon {...props} />;
  }

  // Carrega o ícone dinamicamente
  const DynamicIcon = lazy(async () => {
    try {
      const module = await import("lucide-react");
      const IconComponent = (module as any)[name];
      
      if (!IconComponent) {
        throw new Error(`Icon ${name} not found`);
      }
      
      // Adiciona ao cache
      iconCache.set(name, IconComponent);
      
      return { default: IconComponent };
    } catch (error) {
      console.warn(`Failed to load icon: ${name}`, error);
      // Retorna um ícone padrão em caso de erro
      const { Circle } = await import("lucide-react");
      return { default: Circle };
    }
  });

  const FallbackIcon = fallback || (() => (
    <div 
      className={`inline-block bg-gray-300 rounded ${props.className}`}
      style={{ width: props.size || 24, height: props.size || 24 }}
    />
  ));

  return (
    <Suspense fallback={<FallbackIcon {...props} />}>
      <DynamicIcon {...props} />
    </Suspense>
  );
}

// Hook para precarregar ícones específicos
export function usePreloadIcons(iconNames: string[]) {
  const preloadIcons = async () => {
    const promises = iconNames.map(async (name) => {
      if (!iconCache.has(name)) {
        try {
          const module = await import("lucide-react");
          const IconComponent = (module as any)[name];
          if (IconComponent) {
            iconCache.set(name, IconComponent);
          }
        } catch (error) {
          console.warn(`Failed to preload icon: ${name}`, error);
        }
      }
    });
    
    await Promise.all(promises);
  };

  return preloadIcons;
}