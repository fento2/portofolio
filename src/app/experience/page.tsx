"use client";

import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import Timeline from "./components/Timeline";
import { useRouter } from "next/navigation";

function ExperiencePage() {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    router.replace("/");
  }, []);

  const experiences = [
    {
      title: "Fullstack Bootcamp",
      company: "Purwadhika",
      duration: "May 2025 - Oct 2025",
      description: {
        id: "Belajar stack MERN, REST API, testing, dan deployment modern. Fokus pada arsitektur skala production serta kolaborasi tim menggunakan Git dan metodologi agile.",
        en: "Learning MERN stack, REST API, testing, and modern deployment. Focused on production-scale architecture and team collaboration using Git and agile methodology.",
      },
    },
  ];

  return (
    <section className="py-10 w-full px-4 md:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <p
          className="font-mono text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "#71717a" }}
        >
          — git log --oneline
        </p>
        <h2
          className="font-mono text-3xl md:text-4xl font-bold"
          style={{ color: "#00ff9c", textShadow: "0 0 20px rgba(0,255,156,0.3)" }}
        >
          {language === "en" ? "Experience" : "Pengalaman"}
        </h2>
        <p className="text-sm font-mono" style={{ color: "#71717a" }}>
          {language === "en"
            ? "What I've done professionally"
            : "Apa saja pengalaman profesional saya"}
        </p>
      </div>

      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Timeline
          items={experiences.map((exp) => ({
            title: exp.title,
            company: exp.company,
            duration: exp.duration,
            description: language === "en" ? exp.description.en : exp.description.id,
          }))}
        />

        {/* git log decorative panel */}
        <div
          className="hidden lg:flex flex-col justify-center font-mono text-[11px] rounded-sm p-6 self-start"
          style={{
            background: "rgba(5,5,7,0.7)",
            border: "1px solid rgba(0,255,156,0.1)",
            color: "#71717a",
          }}
        >
          <p style={{ color: "#00ff9c" }} className="mb-3">
            $ git log --graph --pretty=format:&apos;%h %s&apos;
          </p>
          <div className="space-y-1.5">
            <p>
              <span style={{ color: "#00ff9c" }}>*</span> a3f9b2e{" "}
              <span style={{ color: "#e4e4e7" }}>feat: Fullstack Bootcamp @ Purwadhika</span>
            </p>
            <p>
              <span style={{ color: "#71717a" }}>|</span>
            </p>
            <p>
              <span style={{ color: "#00d4ff" }}>*</span> 1c0ffee{" "}
              <span style={{ color: "#e4e4e7" }}>init: begin developer journey</span>
            </p>
            <p className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(0,255,156,0.08)" }}>
              <span style={{ color: "#00ff9c" }}>$ git status</span>
            </p>
            <p>
              On branch{" "}
              <span style={{ color: "#00d4ff" }}>career</span>
            </p>
            <p>
              Your branch is{" "}
              <span style={{ color: "#00ff9c" }}>up to date</span>
            </p>
            <p className="mt-1" style={{ color: "#00ff9c" }}>
              nothing to commit, working tree clean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
