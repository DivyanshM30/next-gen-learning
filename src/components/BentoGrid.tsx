"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full auto-rows-[160px]"
    >
      {children}
    </motion.div>
  );
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
};

export function BentoItem({ children, className }: BentoItemProps) {
  return (
    <motion.article
      variants={item}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`relative group rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-primary/10 transition-shadow ${className}`}
    >
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      {/* Content wrapper to ensure z-index is above the glow */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.article>
  );
}
