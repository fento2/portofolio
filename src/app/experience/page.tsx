"use client";

import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import FadeIn from "@/components/core/FadeIn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

function ExperiencePage() {

  const router = useRouter();
 
     const { language } = useContext(LanguageContext);
 
     useEffect(()=>{
             router.replace("/");
             
         }, []);

    const experiences = [
    {
      title: "Fullstack Bootcamp",
      company: "Purwadhika",
      duration: "Mey 2024 - now",
      description: {
        id: "Belajar stack MERN, REST API, testing, dan deployment modern. Fokus pada arsitektur skala production.",
        en: "Learning MERN stack, REST API, testing, and modern deployment. Focused on production-scale architecture.",
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
        {experiences.map((exp, index) => {
          const isHorizontal = index === 2;

          return (
            <Card
              key={index}
              className={`bg-neutral-900 border-none text-white
                ${isHorizontal ? "lg:col-span-2" : ""}`}
            >
              <FadeIn>
                <CardContent
                  className={`p-4 ${
                    isHorizontal
                      ? "flex flex-col lg:flex-row gap-4 items-start"
                      : ""
                  }`}
                >
                  <div
                    className={`${
                      isHorizontal ? "w-full lg:w-full" : "w-full"
                    } px-2`}
                  >
                    <CardTitle className="text-xl font-semibold mb-1">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-white mb-2">
                      {exp.company} • {exp.duration}
                    </CardDescription>
                    <p className="text-white text-[16px] leading-relaxed text-justify indent-8">
                      {language === "en"
                        ? exp.description.en
                        : exp.description.id}
                    </p>
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

export default ExperiencePage;
