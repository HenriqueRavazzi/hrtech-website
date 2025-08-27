"use client";

import dynamic from "next/dynamic";

// Lazy loading do ParticleBackground para melhor performance
const ParticleBackground = dynamic(
  () => import("./ParticleBackground").then(mod => ({ default: mod.ParticleBackground })),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-dark -z-10" />
  }
);

export function LazyParticleBackground() {
  return <ParticleBackground />;
}