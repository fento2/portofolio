import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Car, Languages } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import FadeIn from "@/components/FadeIn";

function ProjectsPage() {

  const { language } = useContext(LanguageContext);

  const projects = [
    {
      title: "Personal Website",
      image: "/personal-web.png",
      description: {
        id: "Ini adalah website portofolio pertama saya yang dibangun menggunakan React, Next.js, dan Tailwind CSS. Website ini dirancang untuk memperkenalkan latar belakang saya, menampilkan proyek-proyek yang telah saya kerjakan, serta menyediakan halaman kontak untuk kolaborasi. Proyek ini menjadi langkah awal saya dalam membangun kehadiran digital sebagai developer dan sekaligus menjadi sarana belajar dalam menerapkan desain responsif, navigasi yang baik, serta performa optimal.",
        en: "This is my first portfolio website, built using React, Next.js, and Tailwind CSS. It is designed to showcase my background, highlight the projects I've worked on, and provide a contact page for potential collaboration. This project marks my initial step in building a digital presence as a developer and also serves as a learning opportunity to implement responsive design, good navigation, and optimized performance.",

      },
      tech: ["Next.Js", "React", "Tailwind CSS"]
    },
    {
      title: "Project 2",
      image: "/under development.jpg",
      description: {
        id: "Proyek ini masih dalam tahap pengembangan dan dirancang untuk memperluas cakupan kemampuan saya dalam pengembangan aplikasi web. Fokus utama proyek ini adalah pada peningkatan performa, integrasi API, serta penerapan praktik terbaik dalam pengelolaan data dan arsitektur komponen. Deskripsi lengkap dan fitur-fitur utama akan segera ditambahkan setelah pengembangan selesai.",
        en: "This project is currently in development and is intended to broaden my skills in web application development. The main focus of this project includes performance optimization, API integration, and implementing best practices in data handling and component architecture. A full description and feature highlights will be added once development is complete.",

      },
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
    <section className="w-full px-4 md:px-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h1>
        <p className="text-[18px] text-center -mt-10 mb-12">{language === "en" ? "What I've been working on recently" : "Apa yang sedang saya kerjakan belakangan ini"}</p>
      </FadeIn>
      <div className="w-full max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => {
          const isHorizontal = index === 2;

          return (

            <Card
              key={index}
              className={`bg-neutral-900 border-none text-white 
                ${isHorizontal ? "lg:col-span-2" : ""}
                `}
            >
              <FadeIn>
                <CardContent
                  className={`p-4 ${isHorizontal ? "flex flex-col lg:flex-row gap-4 items-start " : ""
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`rounded-2xl transition-transform duration-300 
                    ease-in-out hover:scale-105
                    ${isHorizontal
                        ? "w-full lg:w-1/3 "
                        : "w-full"
                      }`}
                  />
                  <div
                    className={`${isHorizontal ? "w-full lg:w-full" : "w-full"
                      } px-2`}
                  >
                    <CardTitle className="text-xl font-semibold mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className=" leading-relaxed text-white text-[16px]">
                      <p className="indent-8 text-justify">{language === "en" ? project.description.en : project.description.id}</p>

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
              </FadeIn>
            </Card>

          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPage;
