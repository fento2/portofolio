"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

function ProjectsPage() {

  const router = useRouter();
  const [show, setShow] = useState<number>(2);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    router.replace("/");

  }, []);

  const projects = [
    {
      title: "Personal Website",
      image: "/personal_web.png",
      link: "https://portofolio-rho-ten-84.vercel.app/",
      description: {
        id: "Ini adalah website portofolio pertama saya yang dibangun menggunakan React, Next.js, dan Tailwind CSS. Website ini dirancang untuk memperkenalkan latar belakang saya, menampilkan proyek-proyek yang telah saya kerjakan, serta menyediakan halaman kontak untuk kolaborasi. Proyek ini menjadi langkah awal saya dalam membangun kehadiran digital sebagai developer dan sekaligus menjadi sarana belajar dalam menerapkan desain responsif, navigasi yang baik, serta performa optimal.",
        en: "This is my first portfolio website, built using React, Next.js, and Tailwind CSS. It is designed to showcase my background, highlight the projects I've worked on, and provide a contact page for potential collaboration. This project marks my initial step in building a digital presence as a developer and also serves as a learning opportunity to implement responsive design, good navigation, and optimized performance.",

      },
      tech: ["Next.Js", "React", "Tailwind CSS"],
    },
    {
      title: "Company Website",
      image: "/project2.png",
      link: "https://company-web-vert-psi.vercel.app/",
      description: {
        id: "Situs web perusahaan yang sedang dikembangkan ini bertujuan untuk meningkatkan keterampilan saya dalam pengembangan aplikasi web modern. Fokus proyek ini mencakup optimasi performa menggunakan Next.js, integrasi API eksternal, serta penerapan arsitektur komponen yang skalabel dan praktik terbaik dalam pengelolaan data. Deskripsi fitur lengkap akan ditambahkan setelah tahap pengembangan utama selesai.",
        en: "This corporate website is currently under development and aims to enhance my skills in modern web application development. The project focuses on performance optimization using Next.js, external API integration, and the implementation of scalable component architecture along with best practices in data management. A full feature description will be added after the main development phase is completed.",
      },
      tech: ["Next.Js", "React", "Tailwind CSS"],
    },
    {
      title: "project 3",
      image: "/under development.jpg",
      description: {
        id: "Proyek ini masih dalam tahap pengembangan dan dirancang untuk memperluas cakupan kemampuan saya dalam pengembangan aplikasi web. Fokus utama proyek ini adalah pada peningkatan performa, integrasi API, serta penerapan praktik terbaik dalam pengelolaan data dan arsitektur komponen. Deskripsi lengkap dan fitur-fitur utama akan segera ditambahkan setelah pengembangan selesai.",
        en: "This project is currently in development and is intended to broaden my skills in web application development. The main focus of this project includes performance optimization, API integration, and implementing best practices in data handling and component architecture. A full description and feature highlights will be added once development is complete.",
      }
    },
  ];



  return (
    <section className="py-8 w-full px-4 md:px-20">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h1>
      <p className="text-[18px] text-center -mt-10 mb-12">{language === "en" ? "What I've been working on recently" : "Apa yang sedang saya kerjakan belakangan ini"}</p>

      <div className="w-full max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.slice(0, show).map((project, index) => {

          return (

            <Card
              key={index}
              className={`bg-neutral-900 border-none text-white `}
            >

              <CardContent className="p-4">
                <Link href={project.link ?? "#"} target="_blank" rel="noopener noreferrer">
                  <div
                    className="relative aspect-[5/3] 
                      overflow-hidden rounded-2xl
                       transition-transform duration-300 
                       hover:scale-105 w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </Link>

                <div className="w-full px-2">
                  <CardTitle className="text-xl font-semibold mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-white text-[16px]">
                    <p className="indent-8 text-justify">
                      {language === "en" ? project.description.en : project.description.id}
                    </p>

                    {project.tech && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-900/50 text-cyan-500 rounded-full border border-cyan-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardDescription>
                </div>
              </CardContent>

            </Card>

          );
        })}

      </div>
      <div className="max-w-7xl mx-auto">

        <Button className="mt-4 rounded-2xl w-25 hover:bg-cyan-500 cursor-pointer
        bg-transparent border border-cyan-500
        text-xs"
          onClick={() => setShow(show === 2 ? projects.length : 2)}>
          {show === 2 ? "See More" : "See Less"}</Button>
      </div>
    </section >
  );
}

export default ProjectsPage;
