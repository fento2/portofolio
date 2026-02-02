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
      duration: "Mey 2025 - oct 2025",
      description: {
        id: "Belajar stack MERN, REST API, testing, dan deployment modern. Fokus pada arsitektur skala production serta kolaborasi tim menggunakan Git dan metodologi agile.",
        en: "Learning MERN stack, REST API, testing, and modern deployment. Focused on production-scale architecture and team collaboration using Git and agile methodology.",
      },
    },
  ];

  return (
    <section className="py-8 w-full px-4 md:px-20" id="experience">

      <h1 className="text-4xl font-bold mb-12 text-center text-white">
        {language === "en" ? "Experience" : "Pengalaman"}
      </h1>
      <p className="text-[18px] text-center -mt-10 mb-12 text-white">
        {language === "en"
          ? "What I've done professionally"
          : "Apa saja pengalaman profesional saya"}
      </p>


      <div className="w-full max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
        <Timeline
          items={experiences.map((exp) => ({
            title: exp.title,
            company: exp.company,
            duration: exp.duration,
            description: language === "en" ? exp.description.en : exp.description.id,
          }))}
        />
      </div>
    </section>
  );
}

export default ExperiencePage;
