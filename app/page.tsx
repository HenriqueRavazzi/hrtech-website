import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-dark text-light p-8">
      <div className="text-center">
        {/* Logo estilizado como texto */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
          HRTech
        </h1>
        <p className="text-lg md:text-xl text-secondary">
          Uma nova experiência em tecnologia e automação está a caminho.
        </p>
      </div>
    </main>
  );
}
