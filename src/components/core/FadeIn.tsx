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




interface SectionDividerProps {
  delay?: number;
}

export  function SectionDivider({ delay = 0 }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="origin-center h-[2px] bg-cyan-400/50 rounded-full my-12 mx-auto shadow-cyan-500/20 shadow-md"
    />
  );
}
