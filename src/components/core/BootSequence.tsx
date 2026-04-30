"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "INITIALIZING FENSTACK OS v1.0.4...", delay: 0 },
  { text: "LOADING KERNEL MODULES......... [OK]", delay: 200 },
  { text: "MOUNTING /dev/portfolio ......... [OK]", delay: 400 },
  { text: "CHECKING DEPENDENCIES ........... [OK]", delay: 600 },
  { text: "STARTING INTERFACE .............. [OK]", delay: 800 },
  { text: "WELCOME, TRAVELLER.", delay: 1000 },
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
        }, line.delay)
      );
    });

    timers.push(
      setTimeout(() => {
        setDone(true);
        setTimeout(onDone, 400);
      }, 1400)
    );

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[99990] flex flex-col justify-center items-start px-8 md:px-24"
          style={{ background: "#050507" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="font-mono space-y-1">
            <p className="text-[#00ff9c] text-xs md:text-sm mb-4 tracking-[0.3em] uppercase">
              fenStack OS
            </p>
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-xs md:text-sm"
                style={{
                  color: line.text.includes("[OK]") ? "#00ff9c" : "#71717a",
                  opacity: visibleLines.includes(i) ? 1 : 0,
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.2 }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
