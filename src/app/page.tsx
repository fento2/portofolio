"use client";

import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import ExperiencePage from "./experience/page";
import { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import CyberBackground from "@/components/core/CyberBackground";
import { BsInstagram, BsSpotify } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import FadeIn, { FadeInLeft, SectionDivider } from "@/components/core/FadeIn";
import Footer from "@/components/core/Footer";
import Image from "next/image";
import Spotify from "@/components/core/Spotify";
import BootSequence from "@/components/core/BootSequence";
import { motion } from "framer-motion";

/* ── Terminal typing animation ─────────────────────────── */
const terminalLines = [
  { prompt: "$ whoami", output: "fendry_tonrate" },
  { prompt: "$ cat role.txt", output: "Full Stack Developer" },
  { prompt: "$ ls skills/", output: "React  Next.js  Node.js  TypeScript" },
  { prompt: "$ ./initialize_portfolio.sh", output: "[OK] Welcome to my system_" },
];

function TerminalWindow({ language }: { language: string }) {
  const [displayedLines, setDisplayedLines] = useState<
    { prompt: string; output: string; showOutput: boolean }[]
  >([]);
  const [currentLine, setCurrentLine]   = useState(0);
  const [promptText, setPromptText]     = useState("");
  const [phase, setPhase]               = useState<"prompt" | "output" | "pause">("prompt");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;
    const line = terminalLines[currentLine];

    if (phase === "prompt") {
      if (promptText.length < line.prompt.length) {
        const t = setTimeout(() => {
          setPromptText(line.prompt.slice(0, promptText.length + 1));
        }, 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("output"), 300);
        return () => clearTimeout(t);
      }
    }

    if (phase === "output") {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        if (updated.length <= currentLine) {
          updated.push({ prompt: line.prompt, output: "", showOutput: false });
        }
        return updated;
      });
      const t = setTimeout(() => setPhase("pause"), 200);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      setDisplayedLines((prev) =>
        prev.map((l, i) =>
          i === currentLine ? { ...l, showOutput: true } : l
        )
      );
      const t = setTimeout(() => {
        setCurrentLine((c) => c + 1);
        setPromptText("");
        setPhase("prompt");
      }, 600);
      return () => clearTimeout(t);
    }
  }, [currentLine, phase, promptText]);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [displayedLines, promptText]);

  const isLast = currentLine >= terminalLines.length;

  return (
    <div
      className="w-full max-w-lg font-mono text-sm rounded-md overflow-hidden"
      style={{
        background: "rgba(5,5,7,0.92)",
        border: "1px solid rgba(0,255,156,0.25)",
        boxShadow: "0 0 40px rgba(0,255,156,0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{ borderBottom: "1px solid rgba(0,255,156,0.12)", background: "rgba(10,10,20,0.9)" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff3e3e] shadow-[0_0_5px_#ff3e3e]" />
        <span className="w-3 h-3 rounded-full bg-[#ffb800] shadow-[0_0_5px_#ffb800]" />
        <span className="w-3 h-3 rounded-full bg-[#00ff9c] shadow-[0_0_5px_#00ff9c]" />
        <span className="text-[10px] ml-2 text-[#71717a] tracking-wider">
          portfolio.sh
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="p-5 space-y-2 min-h-[220px] max-h-[300px] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {displayedLines.map((l, i) => (
          <div key={i} className="space-y-0.5">
            <p style={{ color: "#00ff9c" }}>{l.prompt}</p>
            {l.showOutput && (
              <p
                style={{ color: l.output.startsWith("[OK]") ? "#00d4ff" : "#e4e4e7" }}
              >
                {l.output}
              </p>
            )}
          </div>
        ))}

        {!isLast && (
          <p style={{ color: "#00ff9c" }}>
            {promptText}
            <span
              style={{ animation: "cursor-blink 1s step-end infinite" }}
            >
              ▋
            </span>
          </p>
        )}

        {isLast && (
          <p style={{ color: "#71717a" }}>
            {language === "en"
              ? "// scroll down to explore"
              : "// gulir ke bawah untuk menjelajah"}
            <span
              style={{
                color: "#00ff9c",
                animation: "cursor-blink 1s step-end infinite",
                marginLeft: "2px",
              }}
            >
              ▋
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Avatar ─────────────────────────────────────────────── */
function CyberAvatar() {
  return (
    <div className="relative group">
      {/* Corner brackets */}
      <div className="absolute -top-3 -left-3 text-[#00d4ff] font-mono text-lg leading-none opacity-80">⌐</div>
      <div className="absolute -top-3 -right-3 text-[#00d4ff] font-mono text-lg leading-none opacity-80 scale-x-[-1]">⌐</div>
      <div className="absolute -bottom-3 -left-3 text-[#00d4ff] font-mono text-lg leading-none opacity-80 rotate-180 scale-x-[-1]">⌐</div>
      <div className="absolute -bottom-3 -right-3 text-[#00d4ff] font-mono text-lg leading-none opacity-80 rotate-180">⌐</div>

      <div
        className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          border: "1px solid rgba(0,212,255,0.5)",
          boxShadow: "0 0 20px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.08)",
        }}
      >
        <Image
          src="/avatar_personal.png"
          alt="Fendry Tonrate"
          fill
          className="object-cover"
          style={{ filter: "saturate(0.8) contrast(1.1)" }}
          priority
        />

        {/* Glitch overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,0,128,0.12) 0%, transparent 50%, rgba(0,212,255,0.12) 100%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Scanline overlay on image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
          }}
        />

        {/* Status bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-1.5 font-mono text-[9px] flex items-center gap-1.5"
          style={{ background: "rgba(5,5,7,0.85)", color: "#00ff9c" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]"
            style={{ animation: "neon-pulse 2s ease-in-out infinite" }}
          />
          STATUS: ONLINE
        </div>
      </div>
    </div>
  );
}

/* ── Sudo Easter Egg ──────────────────────────────────────── */
function useSudoEasterEgg() {
  const [show, setShow] = useState(false);
  const bufferRef = useRef("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      bufferRef.current = (bufferRef.current + e.key).slice(-4);
      if (bufferRef.current === "sudo") {
        setShow(true);
        setTimeout(() => setShow(false), 2500);
        bufferRef.current = "";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return show;
}

/* ── Main Page ───────────────────────────────────────────── */
export default function Home() {
  const { language } = useContext(LanguageContext);
  const [showMusic, setShowMusic] = useState(false);
  const [booted, setBooted] = useState(false);
  const sudoActive = useSudoEasterEgg();

  return (
    <>
      <BootSequence onDone={() => setBooted(true)} />

      {/* Sudo easter egg */}
      {sudoActive && (
        <motion.div
          className="fixed inset-0 z-[99980] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="font-mono text-center p-8"
            style={{
              color: "#00ff9c",
              textShadow: "0 0 20px #00ff9c",
              fontSize: "clamp(1rem, 3vw, 2rem)",
            }}
          >
            <p className="text-[#ff3e3e]">PASSWORD:</p>
            <p style={{ animation: "cursor-blink 0.3s step-end infinite" }}>
              ████████████
            </p>
            <p className="mt-4 text-[#00ff9c]">[ ACCESS GRANTED ]</p>
            <p className="text-sm mt-2" style={{ color: "#71717a" }}>
              Welcome, root.
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        className="min-h-screen relative overflow-x-hidden"
        style={{ background: "#0a0a0f" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <CyberBackground />
        </div>

        <div className="relative z-10">
          {/* ── HERO ───────────────────────────────────────────── */}
          <section
            id="Home"
            className="relative min-h-screen flex items-center justify-center px-4"
            style={{ paddingTop: "80px" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto py-12">

              {/* LEFT — Terminal window */}
              <div className="w-full lg:w-1/2 space-y-6">
                <FadeInLeft delay={0.1}>
                  <p
                    className="font-mono text-[10px] tracking-[0.35em] uppercase mb-3"
                    style={{ color: "#71717a" }}
                  >
                    — System Interface
                  </p>
                </FadeInLeft>

                <FadeInLeft delay={0.2}>
                  <TerminalWindow language={language} />
                </FadeInLeft>

                {/* Social links */}
                <FadeInLeft delay={0.4}>
                  <div className="flex gap-5 font-mono text-xs" style={{ color: "#71717a" }}>
                    <Link
                      href="https://github.com/fento2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#00ff9c]"
                    >
                      <FaGithub className="w-4 h-4" />
                      github
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#00d4ff]"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                      linkedin
                    </Link>
                    <Link
                      href="https://www.instagram.com/fendrytonrate/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#ff0080]"
                    >
                      <BsInstagram className="w-4 h-4" />
                      instagram
                    </Link>
                  </div>
                </FadeInLeft>

                {/* CTA buttons */}
                <FadeInLeft delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-3 font-mono text-sm">
                    <Link href="#projects">
                      <button
                        className="px-5 py-2.5 transition-all duration-200 group"
                        style={{
                          border: "1px solid rgba(0,255,156,0.4)",
                          color: "#00ff9c",
                          borderRadius: "3px",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,255,156,0.1)";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 12px rgba(0,255,156,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}
                      >
                        [ ./view_projects ]
                      </button>
                    </Link>
                    <Link href="#contact">
                      <button
                        className="px-5 py-2.5 transition-all duration-200"
                        style={{
                          border: "1px solid rgba(0,212,255,0.4)",
                          color: "#00d4ff",
                          borderRadius: "3px",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.08)";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 12px rgba(0,212,255,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}
                      >
                        [ ./contact_me ]
                      </button>
                    </Link>
                  </div>
                </FadeInLeft>
              </div>

              {/* RIGHT — Avatar */}
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center gap-4">
                  <CyberAvatar />
                  <p
                    className="font-mono text-[10px] tracking-[0.2em]"
                    style={{ color: "#71717a" }}
                  >
                    FENDRY_TONRATE.exe
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] flex flex-col items-center gap-1"
              style={{ color: "#71717a" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span>scroll down</span>
              <span style={{ color: "#00ff9c" }}>↓</span>
            </motion.div>
          </section>

          {/* ── SECTIONS ──────────────────────────────────────── */}
          <SectionDivider delay={0.1} />
          <FadeIn delay={0.1}>
            <section id="about" className="w-full text-white scroll-mt-16">
              <AboutPage />
            </section>
          </FadeIn>

          <SectionDivider delay={0.1} />
          <FadeIn delay={0.1}>
            <section id="experience" className="w-full text-white scroll-mt-16">
              <ExperiencePage />
            </section>
          </FadeIn>

          <SectionDivider delay={0.1} />
          <FadeIn delay={0.1}>
            <section id="projects" className="w-full text-white scroll-mt-16">
              <ProjectsPage />
            </section>
          </FadeIn>

          <SectionDivider delay={0.1} />
          <section id="contact" className="w-full text-white scroll-mt-16">
            <ContactPage />
          </section>
        </div>

        <Footer />

        {/* Spotify widget */}
        <div className="fixed bottom-4 right-4 z-50">
          {showMusic && (
            <div onMouseLeave={() => setShowMusic(false)}>
              <Spotify />
            </div>
          )}
        </div>
        {!showMusic && (
          <button
            className="fixed bottom-4 right-4 z-50 transition-colors duration-200"
            onClick={() => setShowMusic(true)}
            aria-label="Open Spotify"
            style={{ color: "#71717a" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#00ff9c")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#71717a")}
          >
            <BsSpotify className="w-7 h-7" />
          </button>
        )}
      </motion.div>
    </>
  );
}
