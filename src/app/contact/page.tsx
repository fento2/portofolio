"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FadeInLeft } from "@/components/core/FadeIn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function ContactPage() {
  const router = useRouter();
  const { language } = useContext(LanguageContext);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.replace("/");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setProgress(0);

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) { clearInterval(interval); return 90; }
        return p + Math.random() * 12;
      });
    }, 120);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mjkrjgpk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => { setSending(false); setSent(true); }, 400);
    } catch {
      clearInterval(interval);
      setSending(false);
      setProgress(0);
    }
  };

  const barFilled = Math.round((Math.min(progress, 100) / 100) * 10);
  const bar = "█".repeat(barFilled) + "░".repeat(10 - barFilled);

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,255,156,0.3)",
    borderRadius: 0,
    color: "#e4e4e7",
    outline: "none",
    width: "100%",
    padding: "8px 4px",
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: "14px",
  };

  return (
    <div className="w-full py-10 font-mono">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <p
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "#71717a" }}
        >
          — open channel
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#00ff9c", textShadow: "0 0 20px rgba(0,255,156,0.3)" }}
        >
          Contact
        </h2>
        <p className="text-sm" style={{ color: "#71717a" }}>
          {language === "en"
            ? "Have something to discuss? Open a channel."
            : "Ada yang ingin didiskusikan? Buka saluran komunikasi."}
        </p>
      </div>

      <div className="max-w-xl mx-auto px-4 space-y-6">
        <FadeInLeft delay={0.2}>
          {/* Terminal form block */}
          <div
            className="rounded-sm overflow-hidden"
            style={{
              background: "rgba(5,5,7,0.9)",
              border: "1px solid rgba(0,255,156,0.2)",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{
                background: "rgba(10,10,20,0.9)",
                borderBottom: "1px solid rgba(0,255,156,0.12)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3e3e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb800]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9c]" />
              <span className="text-[10px] ml-2 text-[#71717a] tracking-wider">
                transmit_message.sh
              </span>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "#00d4ff" }}
                >
                  {language === "en" ? "Get In Touch" : "Hubungi Saya"}
                </h3>
                <p className="text-xs" style={{ color: "#71717a" }}>
                  {language === "en"
                    ? "Have something to discuss? Send me a message and let's talk"
                    : "Ada yang ingin didiskusikan? Kirim pesan dan ayo kita ngobrol"}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 text-center space-y-3"
                  >
                    <p
                      className="text-3xl"
                      style={{ color: "#00ff9c", textShadow: "0 0 20px #00ff9c" }}
                    >
                      ✓
                    </p>
                    <p style={{ color: "#00ff9c" }}>
                      &gt; Message received. Response ETA: 24h
                    </p>
                    <p className="text-xs" style={{ color: "#71717a" }}>
                      Connection closed gracefully.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: "#71717a" }}>
                        $ name:{" "}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="your_name"
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor = "#00ff9c")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor =
                            "rgba(0,255,156,0.3)")
                        }
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: "#71717a" }}>
                        $ email:{" "}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="user@host.dev"
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor = "#00ff9c")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor =
                            "rgba(0,255,156,0.3)")
                        }
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: "#71717a" }}>
                        $ message: |
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="// type your message here..."
                        style={{
                          ...inputStyle,
                          borderBottom: "1px solid rgba(0,255,156,0.3)",
                          resize: "vertical",
                        }}
                        onFocus={(e) =>
                          ((e.target as HTMLTextAreaElement).style.borderBottomColor = "#00ff9c")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLTextAreaElement).style.borderBottomColor =
                            "rgba(0,255,156,0.3)")
                        }
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 text-sm transition-all duration-200"
                      style={{
                        border: "1px solid rgba(0,255,156,0.4)",
                        color: sending ? "#71717a" : "#00ff9c",
                        background: sending ? "rgba(0,255,156,0.05)" : "transparent",
                        borderRadius: "3px",
                        cursor: sending ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) => {
                        if (!sending)
                          (e.currentTarget as HTMLButtonElement).style.background =
                            "rgba(0,255,156,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        if (!sending)
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      }}
                    >
                      {sending ? (
                        <span>
                          [{bar}] {Math.round(Math.min(progress, 100))}% sending...
                        </span>
                      ) : (
                        "[ TRANSMIT_MESSAGE ]"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeInLeft>

        {/* Social links — ssh style */}
        <FadeInLeft delay={0.4}>
          <div
            className="rounded-sm p-5 space-y-3"
            style={{
              background: "rgba(5,5,7,0.7)",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <p className="text-xs mb-3" style={{ color: "#71717a" }}>
              {`// connect via`}
            </p>
            <div className="space-y-2">
              <Link
                href="https://github.com/fento2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs transition-colors duration-200 hover:text-[#00ff9c] group"
                style={{ color: "#71717a" }}
              >
                <FaGithub className="w-4 h-4 group-hover:text-[#00ff9c]" />
                $ ssh github://fendo2
              </Link>
              <Link
                href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs transition-colors duration-200 hover:text-[#00d4ff] group"
                style={{ color: "#71717a" }}
              >
                <FaLinkedinIn className="w-4 h-4 group-hover:text-[#00d4ff]" />
                $ ssh linkedin://fendry-tonrate
              </Link>
              <Link
                href="https://www.instagram.com/fendrytonrate/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs transition-colors duration-200 hover:text-[#ff0080] group"
                style={{ color: "#71717a" }}
              >
                <BsInstagram className="w-4 h-4 group-hover:text-[#ff0080]" />
                $ ssh instagram://fendrytonrate
              </Link>
            </div>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}

export default ContactPage;
