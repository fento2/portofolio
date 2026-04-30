"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  hash?: string;
}

interface Data {
  items: TimelineItem[];
}

/* Generate a deterministic fake hash from title */
function fakeHash(title: string) {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) & 0xffffffff;
  return Math.abs(h).toString(16).padStart(7, "0").slice(0, 7);
}

export default function Timeline({ items }: Data) {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="font-mono w-full space-y-4">
      {items.map((item, index) => {
        const hash = fakeHash(item.title + item.company);
        const isOpen = expanded === index;

        return (
          <div
            key={index}
            className="rounded-sm overflow-hidden cursor-pointer"
            style={{
              border: `1px solid ${isOpen ? "rgba(0,255,156,0.3)" : "rgba(0,255,156,0.12)"}`,
              background: "rgba(5,5,7,0.85)",
              boxShadow: isOpen ? "0 0 20px rgba(0,255,156,0.06)" : "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onClick={() => setExpanded(isOpen ? null : index)}
          >
            {/* Commit header */}
            <div className="px-5 py-4 space-y-1">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-sm"
                      style={{
                        background: "rgba(0,255,156,0.1)",
                        color: "#00ff9c",
                        animation: "neon-pulse 3s ease-in-out infinite",
                      }}
                    >
                      commit {hash}
                    </span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-sm"
                      style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}
                    >
                      HEAD → career, origin/main
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "#71717a" }}>
                    Author: Fendry Tonrate
                  </p>
                  <p className="text-xs" style={{ color: "#71717a" }}>
                    Date: &nbsp; {item.duration}
                  </p>
                </div>
                <span
                  className="text-xs mt-1 shrink-0 transition-transform duration-300"
                  style={{
                    color: "#71717a",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  ▶
                </span>
              </div>

              <div className="pl-2 pt-1">
                <p
                  className="text-sm font-bold"
                  style={{ color: "#e4e4e7" }}
                >
                  {`feat: ${item.title} @ ${item.company}`}
                </p>
              </div>
            </div>

            {/* Expandable body */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-5 pb-5 pt-2 text-[13px] space-y-2"
                    style={{ borderTop: "1px solid rgba(0,255,156,0.08)" }}
                  >
                    <p style={{ color: "#71717a" }} className="mb-1">
                      diff --git a/career b/career
                    </p>
                    <div
                      className="pl-4 border-l-2 space-y-1 text-justify leading-relaxed"
                      style={{ borderColor: "rgba(0,255,156,0.3)", color: "#e4e4e7" }}
                    >
                      {item.description.split(". ").filter(Boolean).map((sentence, i) => (
                        <p key={i}>
                          <span style={{ color: "#00ff9c" }}>+ </span>
                          {sentence.trim()}{sentence.endsWith(".") ? "" : "."}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
