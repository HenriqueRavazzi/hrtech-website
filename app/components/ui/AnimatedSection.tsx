"use client";

import React, { Suspense, lazy } from "react";

// Lazy loading do framer-motion para melhor performance
const MotionSection = lazy(() => 
  import("framer-motion").then(mod => ({
    default: ({ children, className, ...props }: any) => (
      <mod.motion.section {...props} className={className}>
        {children}
      </mod.motion.section>
    )
  }))
);

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
