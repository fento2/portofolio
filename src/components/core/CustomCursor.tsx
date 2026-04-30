"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let mouseX = -100, mouseY = -100;
    let ringX  = -100, ringY  = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      ringRef.current?.classList.add("cursor-ring-grow");
    };
    const onLeaveInteractive = () => {
      ringRef.current?.classList.remove("cursor-ring-grow");
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-ring-grow { transform: scale(2) !important; border-color: #ff0080 !important; }
        @media (pointer: coarse) { .custom-cursor-dot, .custom-cursor-ring { display: none; } }
        @media (prefers-reduced-motion: reduce) { .custom-cursor-dot, .custom-cursor-ring { display: none; } }
      `}</style>

      {/* Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[99999] w-2 h-2 rounded-full"
        style={{
          background: "#00ff9c",
          boxShadow: "0 0 6px #00ff9c, 0 0 12px #00ff9c",
          willChange: "transform",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 z-[99998] w-8 h-8 rounded-full border transition-all duration-150"
        style={{
          borderColor: "#00ff9c",
          boxShadow: "0 0 8px rgba(0,255,156,0.4)",
          willChange: "transform",
        }}
      />
    </>
  );
}
