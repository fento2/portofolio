"use client";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function ProjectsPage() {
  const router = useRouter();
  const [show, setShow] = useState<number>(4);
  const [hovered, setHovered] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    router.replace("/");
  }, []);

  const projects = [
    {
      title: "Indonesia Region API",
      image: "/indonesia_region_api.png",
      link: "https://indonesia-region-api.vercel.app/",
      status: "DEPLOYED",
      description: {
        id: "Indonesia Region API adalah RESTful API publik yang menyediakan data wilayah administratif Indonesia secara terstruktur dan hierarkis, mulai dari provinsi, kabupaten/kota, kecamatan, hingga desa. API ini mendukung fitur pagination, filtering, dan sorting untuk memastikan performa yang cepat, konsisten, dan mudah diintegrasikan ke berbagai aplikasi web maupun mobile.",
        en: "Indonesia Region API is a public RESTful API that provides structured and hierarchical Indonesian administrative region data, including provinces, regencies/cities, districts, and villages. It supports pagination, filtering, and sorting features to deliver fast, consistent, and easily integrable data for web and mobile applications.",
      },
      tech: ["Node Js", "Express Js", "Prisma ORM", "Postgre SQL"],
    },
    {
      title: "Company Website",
      image: "/project2.png",
      link: "https://company-web-vert-psi.vercel.app/",
      status: "DEPLOYED",
      description: {
        id: "Website ini merupakan proyek redesign untuk sebuah situs hotel sebagai bagian dari tugas pengembangan ulang tampilan dan struktur web. Proyek ini difokuskan pada peningkatan UI/UX, kecepatan akses, serta implementasi teknologi modern seperti Next.js dan Tailwind CSS. Fitur seperti navigasi dinamis, tata letak responsif, dan integrasi API dirancang untuk memberikan pengalaman pengguna yang optimal.",
        en: "This website is a redesign project for a hotel site, created as part of an assignment focused on improving the layout, design, and structure of an existing web interface. The project emphasizes enhanced UI/UX, fast performance, and the use of modern technologies such as Next.js and Tailwind CSS. Features like dynamic navigation, responsive layouts, and API integration are designed to deliver an optimal user experience.",
      },
      tech: ["Next.Js", "React", "Tailwind CSS"],
    },
    {
      title: "Job Board",
      image: "/job_board.png",
      link: "https://final-project-fe-mauve.vercel.app/",
      status: "DEPLOYED",
      description: {
        id: "Aplikasi Job Board adalah platform yang dirancang untuk menghubungkan pencari kerja dengan peluang kerja yang diposting oleh perusahaan. Tujuannya adalah untuk menyederhanakan proses pencarian kerja bagi para pencari kerja maupun perusahaan, serta mempermudah interaksi dan pertukaran informasi tentang posisi yang tersedia.",
        en: "Job Board apps are platforms designed to connect job seekers with job opportunities posted by companies. The goal is to speed up the job search process for both job seekers and companies, as well as facilitate interaction and the exchange of information about available positions.",
      },
      tech: ["Next.Js", "React", "Tailwind CSS", "Node.Js", "Express.Js", "Prisma ORM", "Postgre SQL"],
    },
    {
      title: "Personal Website",
      image: "/personal_web.png",
      link: "https://portofolio-rho-ten-84.vercel.app/",
      status: "DEPLOYED",
      description: {
        id: "Ini adalah website portofolio pertama saya yang dibangun menggunakan React, Next.js, dan Tailwind CSS. Website ini dirancang untuk memperkenalkan latar belakang saya, menampilkan proyek-proyek yang telah saya kerjakan, serta menyediakan halaman kontak untuk kolaborasi. Proyek ini menjadi langkah awal saya dalam membangun kehadiran digital sebagai developer.",
        en: "This is my first portfolio website, built using React, Next.js, and Tailwind CSS. It is designed to showcase my background, highlight the projects I've worked on, and provide a contact page for potential collaboration. This project marks my initial step in building a digital presence as a developer.",
      },
      tech: ["Next.Js", "React", "Tailwind CSS"],
    },
  ];

  const visible = projects.slice(0, show);

  return (
    <section className="py-10 w-full px-4 md:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <p
          className="font-mono text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "#71717a" }}
        >
          — ls -la /projects/
        </p>
        <h2
          className="font-mono text-3xl md:text-4xl font-bold"
          style={{ color: "#00ff9c", textShadow: "0 0 20px rgba(0,255,156,0.3)" }}
        >
          Projects
        </h2>
        <p className="text-sm font-mono" style={{ color: "#71717a" }}>
          {language === "en"
            ? "What I've been working on recently"
            : "Apa yang sedang saya kerjakan belakangan ini"}
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto">
        <AnimatePresence>
          {visible.map((project, index) => {
            const isFeatured = index === 0;
            const isHovered = hovered === index;
            const isDimmed = hovered !== null && !isHovered;

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isDimmed ? 0.4 : 1,
                  y: 0,
                  scale: isHovered ? 1.01 : 1,
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-sm overflow-hidden font-mono group ${
                  isFeatured ? "lg:col-span-2" : "lg:col-span-1"
                }`}
                style={{
                  background: "rgba(5,5,7,0.88)",
                  border: isHovered
                    ? "1px solid rgba(0,212,255,0.5)"
                    : "1px solid rgba(0,255,156,0.12)",
                  boxShadow: isHovered
                    ? "0 0 30px rgba(0,212,255,0.1), inset 0 -20px 40px rgba(255,0,128,0.04)"
                    : "none",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: isFeatured ? "16/7" : "16/10" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ filter: "saturate(0.75) contrast(1.05)" }}
                    sizes={isFeatured ? "66vw" : "33vw"}
                    priority={index === 0}
                  />
                  {/* Scanlines on image */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
                    }}
                  />
                  {/* Duotone color overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, transparent 60%, rgba(255,0,128,0.06) 100%)",
                      mixBlendMode: "screen",
                    }}
                  />
                  {/* Status badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 text-[10px] rounded-sm"
                    style={{
                      background: "rgba(5,5,7,0.9)",
                      border: "1px solid rgba(0,255,156,0.3)",
                      color: "#00ff9c",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]"
                      style={{ animation: "neon-pulse 2s ease-in-out infinite" }}
                    />
                    STATUS: {project.status}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 space-y-3">
                  <h3
                    className="text-base font-bold transition-colors duration-200"
                    style={{ color: isHovered ? "#00d4ff" : "#e4e4e7" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-[12px] leading-relaxed line-clamp-3 text-justify"
                    style={{ color: "#71717a" }}
                  >
                    {language === "en" ? project.description.en : project.description.id}
                  </p>

                  {/* Tech flags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-sm"
                        style={{
                          background: "rgba(0,212,255,0.06)",
                          border: "1px solid rgba(0,212,255,0.2)",
                          color: "#00d4ff",
                        }}
                      >
                        --{t.toLowerCase().replace(/\s/g, "-")}
                      </span>
                    ))}
                  </div>

                  {/* Execute link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] transition-all duration-200 group/link mt-1"
                    style={{ color: "#00ff9c" }}
                  >
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                      &gt;
                    </span>
                    execute_demo.sh
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                      _
                    </span>
                  </Link>
                </div>

                {/* Magenta bottom-right glow on hover */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, rgba(255,0,128,0.15) 0%, transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* See more */}
      <div className="mt-8 space-y-3">
        {projects.length > 4 && (
          <button
            className="font-mono text-xs px-4 py-2 transition-all duration-200"
            style={{
              border: "1px solid rgba(0,255,156,0.3)",
              color: "#00ff9c",
              borderRadius: "3px",
              background: "transparent",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,255,156,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
            }
            onClick={() => setShow(show === 4 ? projects.length : 4)}
          >
            {show === 4 ? "$ ls -a  # show more" : "$ ls     # show less"}
          </button>
        )}
        <p className="font-mono text-[11px]" style={{ color: "#71717a" }}>
          {language === "en"
            ? "// If you find any bugs or issues, feel free to contact me."
            : "// Jika kamu menemukan bug atau masalah, silakan hubungi saya."}
        </p>
      </div>
    </section>
  );
}

export default ProjectsPage;
