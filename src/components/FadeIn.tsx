"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}


export default function FadeIn({
  children,
  duration = 0.8,
  delay = 0,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}



interface FadeInLeftProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export function FadeInLeft({
  children,
  duration = 0.7,
  delay = 0,
}: FadeInLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

