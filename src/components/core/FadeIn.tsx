"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export default function FadeIn({ children, duration = 0.7, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, duration = 0.7, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

interface SectionDividerProps {
  delay?: number;
}

export function SectionDivider({ delay = 0 }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="origin-left my-16 mx-6 md:mx-20"
      style={{ position: "relative", height: "1px" }}
    >
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,156,0.5), rgba(0,212,255,0.5), transparent)",
          boxShadow: "0 0 8px rgba(0,255,156,0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "-5px",
          fontSize: "10px",
          color: "#00ff9c",
          letterSpacing: "0.3em",
          opacity: 0.6,
        }}
      >
        {`/* ── */`}
      </div>
    </motion.div>
  );
}
