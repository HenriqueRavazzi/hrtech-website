"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";

// Componente simplificado sem lazy loading para evitar problemas de tipagem
const MotionSection = motion.section;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  return (
    <Suspense fallback={<section className={className}>{children}</section>}>
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </MotionSection>
    </Suspense>
  );
};
