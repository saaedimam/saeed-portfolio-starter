"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      className={clsx(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
