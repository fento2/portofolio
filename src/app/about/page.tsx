"use client";

import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

/* ── Shared Terminal Window wrapper ─────────────────────── */
function TerminalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full rounded-sm overflow-hidden font-mono"
      style={{
        background: "rgba(5,5,7,0.85)",
        border: "1px solid rgba(0,255,156,0.18)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{
          background: "rgba(10,10,20,0.9)",
          borderBottom: "1px solid rgba(0,255,156,0.1)",
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff3e3e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffb800]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9c]" />
        <span className="text-[10px] ml-2 tracking-wider" style={{ color: "#71717a" }}>
          {title}
        </span>
      </div>
      <div className="p-5 text-sm">{children}</div>
    </div>
  );
}

/* ── Section label ──────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono text-[10px] tracking-[0.35em] uppercase mb-6"
      style={{ color: "#71717a" }}
    >
      — {children}
    </p>
  );
}

/* ── Tech card ──────────────────────────────────────────── */
function TechCard({
  name,
  icon,
  color,
  proficiency,
  desc,
}: {
  name: string;
  icon: string;
  color: string;
  proficiency: number;
  desc: string;
}) {
  const filled = Math.round((proficiency / 100) * 10);
  const bar = "█".repeat(filled) + "░".repeat(10 - filled);

  return (
    <motion.div
      className="relative group p-4 rounded-sm font-mono cursor-default"
      style={{
        background: "rgba(5,5,7,0.8)",
        border: "1px solid rgba(0,255,156,0.1)",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      whileHover={{
        y: -3,
        borderColor: "rgba(0,255,156,0.35)",
        boxShadow: "0 0 16px rgba(0,255,156,0.12)",
      }}
    >
      {/* Icon */}
      <div className="flex items-center gap-3 mb-3">
        <Icon icon={icon} width={32} height={32} style={{ filter: "saturate(0.8)" }} />
        <span className="text-xs font-bold" style={{ color: "#e4e4e7" }}>
          {name}
        </span>
      </div>

      {/* ASCII proficiency bar */}
      <div className="text-[10px] space-y-0.5">
        <div style={{ color: "#71717a" }}>proficiency</div>
        <div>
          <span style={{ color }}>[{bar}]</span>
          <span className="ml-1" style={{ color: "#71717a" }}>
            {proficiency}%
          </span>
        </div>
      </div>

      {/* Tooltip */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-[10px] rounded-sm
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-44 text-center"
        style={{
          background: "rgba(10,10,20,0.97)",
          border: "1px solid rgba(0,212,255,0.3)",
          color: "#00d4ff",
        }}
      >
        {desc}
      </div>
    </motion.div>
  );
}

function AboutPage() {
  const { language } = useContext(LanguageContext);
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  const about = {
    id: {
      title: "Tentang Saya",
      subtitle: "Kenali lebih dekat latar belakang dan kemampuan saya",
      desc: [
        "Halo! Nama saya Fendry Tonrate, seorang junior developer yang saat ini berfokus pada pengembangan web, baik Front-End maupun Back-End, menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS.",
        "Saya senang membangun antarmuka yang interaktif, efisien, dan ramah pengguna, dengan perhatian khusus pada desain yang bersih serta pengalaman pengguna yang optimal dan menyenangkan. Saya percaya bahwa kombinasi antara fungsionalitas dan estetika adalah kunci dari sebuah produk digital yang sukses.",
        "Saat ini, saya sedang memperluas cakupan keahlian saya ke dunia pengembangan perangkat lunak secara menyeluruh, termasuk pengembangan aplikasi lintas platform, integrasi sistem, dan perancangan arsitektur backend yang skalabel dan efisien. Saya juga mulai mengeksplorasi prinsip-prinsip rekayasa perangkat lunak seperti pengujian, dokumentasi, dan pemeliharaan kode yang berkelanjutan.",
        "Saya berkomitmen untuk terus belajar dan berkembang, tidak hanya secara teknis, tetapi juga dalam hal kolaborasi tim dan komunikasi. Tujuan saya adalah untuk membangun solusi digital yang tidak hanya bermanfaat, tetapi juga memberikan dampak positif dan nyata bagi pengguna.",
      ],
    },
    en: {
      title: "About Me",
      subtitle: "Get to know more about my background and skills",
      desc: [
        "Hi! My name is Fendry Tonrate, a junior developer currently focused on web development, both Front-End and Back-End, using modern technologies like React, Next.js, and Tailwind CSS.",
        "I enjoy building interactive, efficient, and user-friendly interfaces with a strong emphasis on clean design and great user experience. I believe that combining functionality with aesthetics is key to creating successful digital products.",
        "Currently, I'm expanding my expertise into broader software development, including cross-platform application development, system integration, and designing scalable and efficient backend architectures. I'm also beginning to explore core software engineering principles such as testing, documentation, and long-term code maintenance.",
        "I'm committed to continuous learning and growth — not only in technical skills, but also in areas like team collaboration and effective communication. My goal is to create digital solutions that are not only useful, but also meaningful and impactful for users.",
      ],
    },
  };

  const fundamental = {
    id: {
      title: "Fundamentals",
      subtitle: "Konsep fundamental yang saya pelajari & pahami:",
      isi: [
        "Stack",
        "Queue",
        "Set",
        "Hash Table / Map",
        "Linked List",
        "Graph & Tree (dasar)",
        "Algoritma Pencarian & Sorting",
        "Big O Notation",
      ],
    },
    en: {
      title: "Fundamentals",
      subtitle: "Key concepts I've studied and practiced:",
      isi: [
        "Stack",
        "Queue",
        "Set",
        "Hash Table / Map",
        "Linked List",
        "Graphs & Trees (basic)",
        "Searching & Sorting Algorithms",
        "Big O Notation",
      ],
    },
  };

  const skills = {
    id: {
      title: "Keahlian Saya",
      subtitle: "Kemampuan teknis dan non-teknis yang saya miliki:",
      isi: [
        "Pemecahan Masalah",
        "Berpikir Kritis",
        "Manajemen Waktu",
        "Kolaborasi Tim",
        "Komunikasi",
        "Pengembangan Antarmuka",
        "Integrasi API",
        "Debugging dan Troubleshooting",
      ],
    },
    en: {
      title: "My Skills",
      subtitle: "My technical and non-technical abilities:",
      isi: [
        "Problem Solving",
        "Critical Thinking",
        "Time Management",
        "Team Collaboration",
        "Communication",
        "UI Development",
        "API Integration",
        "Debugging & Troubleshooting",
      ],
    },
  };

  const tech = {
    id: { title: "Teknologi Utama", subtitle: "Berikut adalah alat utama yang saya gunakan" },
    en: { title: "Tech Stack", subtitle: "Here are my primary development tools" },
  };

  const techStack = [
    { name: "HTML",        icon: "logos:html-5",              color: "#e44d26", proficiency: 90, desc: "Semantic markup & structure"      },
    { name: "CSS",         icon: "logos:css-3",               color: "#264de4", proficiency: 85, desc: "Responsive layouts & animations"  },
    { name: "JavaScript",  icon: "logos:javascript",          color: "#f7df1e", proficiency: 82, desc: "ES6+ & async patterns"            },
    { name: "TypeScript",  icon: "logos:typescript-icon",     color: "#3178c6", proficiency: 78, desc: "Type-safe JavaScript"             },
    { name: "Go Language", icon: "logos:go",                  color: "#00ADD8", proficiency: 60, desc: "Systems & backend services"       },
    { name: "React",       icon: "logos:react",               color: "#61dafb", proficiency: 85, desc: "Component-driven UI"              },
    { name: "Tailwind",    icon: "logos:tailwindcss-icon",    color: "#38bdf8", proficiency: 90, desc: "Utility-first CSS framework"      },
    { name: "Next.js",     icon: "logos:nextjs-icon",         color: "#ffffff", proficiency: 80, desc: "Full-stack React framework"       },
    { name: "Node.js",     icon: "logos:nodejs-icon",         color: "#339933", proficiency: 78, desc: "Server-side JavaScript runtime"   },
    { name: "Express.Js",  icon: "skill-icons:expressjs-light", color: "#f4f2ed", proficiency: 75, desc: "Minimalist web framework"      },
    { name: "Prisma ORM",  icon: "skill-icons:prisma",        color: "#677eeb", proficiency: 72, desc: "Next-gen ORM for Node.js"        },
    { name: "Postgre SQL", icon: "skill-icons:postgresql-dark", color: "#336791", proficiency: 70, desc: "Relational database"           },
    { name: "NestJS",      icon: "logos:nestjs",              color: "#E0234E", proficiency: 60, desc: "Scalable Node.js framework"      },
    { name: "GitHub",      icon: "skill-icons:github-dark",   color: "#ffffff", proficiency: 88, desc: "Version control & collaboration" },
  ];

  return (
    <div className="w-full py-10 max-w-7xl mx-auto px-4 md:px-20 space-y-14">
      {/* Header */}
      <div className="text-center space-y-2">
        <SectionLabel>
          {language === "en" ? "About" : "Tentang"}
        </SectionLabel>
        <h2
          className="font-mono text-3xl md:text-4xl font-bold"
          style={{ color: "#00ff9c", textShadow: "0 0 20px rgba(0,255,156,0.3)" }}
        >
          {language === "en" ? about.en.title : about.id.title}
        </h2>
        <p className="text-sm" style={{ color: "#71717a" }}>
          {language === "en" ? about.en.subtitle : about.id.subtitle}
        </p>
      </div>

      {/* Bio + Skills grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* cat about.md */}
        <TerminalBlock title="cat about.md">
          <div className="space-y-1 mb-4">
            <span style={{ color: "#71717a" }}>$ cat about.md</span>
          </div>
          <div className="space-y-3" style={{ color: "#e4e4e7" }}>
            {(language === "en" ? about.en.desc : about.id.desc).map((p, i) => (
              <p key={i} className="indent-4 text-justify leading-relaxed text-[13px]">
                {p}
              </p>
            ))}
          </div>
        </TerminalBlock>

        {/* Fundamentals + Skills */}
        <div className="space-y-6">
          <TerminalBlock title="fundamentals.txt">
            <p style={{ color: "#71717a" }} className="mb-3">
              {language === "en" ? fundamental.en.subtitle : fundamental.id.subtitle}
            </p>
            <ul className="space-y-1.5">
              {(language === "en" ? fundamental.en.isi : fundamental.id.isi).map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[13px] transition-all duration-150 hover:translate-x-1"
                  style={{ color: "#e4e4e7" }}
                >
                  <span style={{ color: "#00ff9c" }}>▸</span>
                  <span className="hover:text-[#00d4ff] transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </TerminalBlock>

          <TerminalBlock title="skills.txt">
            <p style={{ color: "#71717a" }} className="mb-3">
              {language === "en" ? skills.en.subtitle : skills.id.subtitle}
            </p>
            <ul className="space-y-1.5">
              {(language === "en" ? skills.en.isi : skills.id.isi).map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[13px] transition-all duration-150 hover:translate-x-1"
                  style={{ color: "#e4e4e7" }}
                >
                  <span style={{ color: "#ff0080" }}>▸</span>
                  <span className="hover:text-[#ff0080] transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </TerminalBlock>
        </div>
      </div>

      {/* Quote as code comment */}
      <div
        className="max-w-3xl mx-auto p-6 font-mono text-sm rounded-sm"
        style={{
          background: "rgba(5,5,7,0.7)",
          border: "1px solid rgba(0,212,255,0.15)",
        }}
      >
        <p style={{ color: "#71717a" }}>{"/*"}</p>
        <p className="pl-4 italic py-2" style={{ color: "#71717a" }}>
          {language === "en"
            ? `"Every great developer you know got there by solving problems they were unqualified to solve - until they actually did it."`
            : `"Setiap developer hebat yang kamu kenal dulunya pernah mengerjakan hal yang belum tentu bisa - sampai akhirnya mereka bisa."`}
        </p>
        <p style={{ color: "#71717a" }}>
          {"  — Patrick McKenzie"}
        </p>
        <p style={{ color: "#71717a" }}>{"*/"}</p>
      </div>

      {/* Tech stack */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <SectionLabel>
            {language === "en" ? tech.en.title : tech.id.title}
          </SectionLabel>
          <h3
            className="font-mono text-2xl font-bold"
            style={{ color: "#00d4ff", textShadow: "0 0 16px rgba(0,212,255,0.3)" }}
          >
            {language === "en" ? tech.en.title : tech.id.title}
          </h3>
          <p className="text-sm" style={{ color: "#71717a" }}>
            {language === "en" ? tech.en.subtitle : tech.id.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
          {techStack.map((t, i) => (
            <TechCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
