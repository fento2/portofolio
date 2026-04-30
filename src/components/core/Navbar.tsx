"use client";

import Logo from "./Logo";
import Link from "next/link";
import { LucideLanguages } from "lucide-react";
import { useContext, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const MenuNav = [
  { href: "#about",      label: "about",      cmd: "$ ./about"      },
  { href: "#experience", label: "experience", cmd: "$ ./experience" },
  { href: "#projects",   label: "projects",   cmd: "$ ./projects"   },
  { href: "#contact",    label: "contact",    cmd: "$ ./contact"    },
];

function Navbar() {
  const [openLangMenu, setOpenLangMenu] = useState(false);
  const [openSideNav, setOpenSideNav]   = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="font-mono">
      {/* ── Terminal window header bar ─────────────────────── */}
      <nav
        className="w-full fixed top-0 z-50"
        style={{
          background: "rgba(5,5,7,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,255,156,0.15)",
        }}
      >
        {/* Title bar with traffic-light dots */}
        <div
          className="flex items-center px-4 py-1.5 gap-2"
          style={{ borderBottom: "1px solid rgba(0,255,156,0.08)" }}
        >
          {/* Neon traffic lights */}
          <span className="w-3 h-3 rounded-full bg-[#ff3e3e] shadow-[0_0_6px_#ff3e3e]" />
          <span className="w-3 h-3 rounded-full bg-[#ffb800] shadow-[0_0_6px_#ffb800]" />
          <span className="w-3 h-3 rounded-full bg-[#00ff9c] shadow-[0_0_6px_#00ff9c]" />
          <span
            className="text-[10px] ml-2 tracking-[0.2em]"
            style={{ color: "#71717a" }}
          >
            fendry@portfolio:~
          </span>
        </div>

        {/* Main nav row */}
        <div className="flex items-center justify-between px-5 py-2.5">
          {/* Mobile hamburger */}
          {!openSideNav && (
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setOpenSideNav(true)}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-5 h-0.5"
                  style={{ background: "#00ff9c", boxShadow: "0 0 4px #00ff9c" }}
                />
              ))}
            </button>
          )}
          {openSideNav && <div className="w-7 md:hidden" />}

          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 text-sm tracking-wider">
            {MenuNav.map(({ href, cmd }) => (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className="transition-colors duration-200"
                  style={{ color: "#71717a" }}
                >
                  <span
                    className="group-hover:text-[#00ff9c] transition-colors duration-200"
                    style={{ color: "inherit" }}
                  >
                    {cmd}
                  </span>
                  {/* Animated underline */}
                  <span
                    className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{
                      background: "#00ff9c",
                      boxShadow: "0 0 6px #00ff9c",
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-xs px-2 py-1 border transition-colors duration-200"
              style={{
                color: "#00ff9c",
                borderColor: "rgba(0,255,156,0.3)",
                borderRadius: "3px",
              }}
              onClick={() => setOpenLangMenu(!openLangMenu)}
            >
              <LucideLanguages className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            <AnimatePresence>
              {openLangMenu && (
                <>
                  <div
                    className="fixed inset-0 z-50"
                    onClick={() => setOpenLangMenu(false)}
                  />
                  <motion.div
                    key="lang"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-36 z-50 text-xs"
                    style={{
                      background: "#0f0f17",
                      border: "1px solid rgba(0,255,156,0.25)",
                      borderRadius: "3px",
                    }}
                  >
                    {["en", "id"].map((lang) => (
                      <button
                        key={lang}
                        className="w-full text-left px-3 py-2 transition-colors duration-150"
                        style={{ color: language === lang ? "#00ff9c" : "#71717a" }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "#00ff9c")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color =
                            language === lang ? "#00ff9c" : "#71717a")
                        }
                        onClick={() => {
                          setLanguage(lang);
                          setOpenLangMenu(false);
                        }}
                      >
                        {lang === "en" ? "$ English" : "$ Bahasa Indonesia"}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* ── Mobile side nav ─────────────────────────────────── */}
      <AnimatePresence>
        {openSideNav && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50"
              style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenSideNav(false)}
            />

            <motion.aside
              key="sidenav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col"
              style={{
                background: "rgba(5,5,7,0.97)",
                borderLeft: "1px solid rgba(0,255,156,0.2)",
              }}
            >
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(0,255,156,0.15)" }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff3e3e] shadow-[0_0_6px_#ff3e3e]" />
                <span className="w-3 h-3 rounded-full bg-[#ffb800] shadow-[0_0_6px_#ffb800]" />
                <button
                  className="w-3 h-3 rounded-full bg-[#00ff9c] shadow-[0_0_6px_#00ff9c]"
                  onClick={() => setOpenSideNav(false)}
                  aria-label="Close"
                />
                <span className="text-[10px] ml-2 text-[#71717a] tracking-wider">
                  nav.sh
                </span>
              </div>

              <div className="flex flex-col justify-center flex-1 px-8 space-y-6">
                <p className="text-[10px] text-[#71717a] tracking-[0.3em] uppercase mb-4">
                  Navigation
                </p>
                {MenuNav.map(({ href, cmd }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpenSideNav(false)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#71717a" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#00ff9c")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#71717a")
                    }
                  >
                    {cmd}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
