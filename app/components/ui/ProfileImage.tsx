"use client";

import Image from 'next/image';

export function ProfileImage() {
  return (
    <Image
      src="/henrique-ravazzi.jpg"
      alt="Foto de Henrique Ravazzi, fundador da HRTech"
      width={400}
      height={400}
      className="rounded-lg shadow-2xl shadow-accent/20 object-cover w-full h-auto"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; 
        target.src='https://placehold.co/400x400/121212/FFFFFF?text=Henrique+Ravazzi';
      }}
      priority
    />
  );
}
