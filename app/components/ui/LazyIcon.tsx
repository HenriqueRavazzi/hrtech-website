"use client";

import React, { Suspense } from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Função para obter ícone
const getIcon = (iconName: string): React.ComponentType<LucideProps> => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[iconName];
  return IconComponent || LucideIcons.AlertCircle;
};

interface LazyIconProps extends LucideProps {
  name: string;
  fallback?: React.ComponentType<LucideProps>;
}

export function LazyIcon({ name, fallback, ...props }: LazyIconProps) {
  const IconComponent = getIcon(name);
  
  const FallbackIcon = fallback || (() => (
    <div 
      className={`inline-block bg-gray-300 rounded ${props.className}`}
      style={{ width: props.size || 24, height: props.size || 24 }}
    />
  ));

  return (
    <Suspense fallback={<FallbackIcon {...props} />}>
      <IconComponent {...props} />
    </Suspense>
  );
}

// Hook para precarregar ícones específicos (simplificado)
export function usePreloadIcons(iconNames: string[]) {
  const preloadIcons = async () => {
    // Ícones já estão carregados estaticamente, não precisa precarregar
    console.log(`Icons ${iconNames.join(', ')} are ready to use`);
  };

  return preloadIcons;
}