"use client";

import { Tooltip } from 'react-tooltip';

// CORRIGIDO: Usando uma exportação nomeada
export function TooltipProvider() {
  return (
    <Tooltip 
      id="global-tooltip" 
      style={{ backgroundColor: "#00F5D4", color: "#121212", fontWeight: "bold", borderRadius: "6px" }}
      opacity={1}
    />
  );
}
