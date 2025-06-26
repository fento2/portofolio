"use client";
import Icon from "@/components/Icon";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

function AboutPage() {
    const { language } = useContext(LanguageContext) as {
        language: "id" | "en";
        setLanguage: (lang: "id" | "en") => void;
    };

    const about = {
        id: {
            title: "Tentang Saya",
            subtitle: "Kenali lebih dekat latar belakang dan kemampuan saya",
            desc: `Halo! Nama saya Fendry Tonrate, seorang junior pengembang web dengan fokus pada pengembangan Front-End dan Back-End menggunakan teknologi modern seperti React, Next.js, dan Node.js. Saya senang membangun antarmuka yang interaktif dan efisien, serta memiliki minat pada desain yang estetik dan pengalaman pengguna yang mulus.`,
        },
        en: {
            title: "About Me",
            subtitle: "Get to know more about my background and skills",
            desc: `Hi! My name is Fendry Tonrate, a junior web developer focusing on both Front-End and Back-End development using modern technologies like React, Next.js, and Node.js. I enjoy building interactive and efficient interfaces, and I’m passionate about clean design and seamless user experiences.`,
        },
    } as const;


    const isi = {
        id: {
            title: "Keahlian Saya",
            subtitle: "Kemampuan teknis dan non-teknis yang saya miliki:",
            skills: [
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
            skills: [
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
    } as const;

    const tech = {
        id: {
            title: "Teknologi Utama",
            subtitle: "Berikut adalah alat utama yang saya gunakan",
        },
        en: {
            title: "Tech Stack",
            subtitle: "Here are my primary development tools",
        },
    } as const;

    return (
        <div className="text-white mx-7">
            <div className="space-y-12 grid lg:grid-cols-2 gap-3">
                <div className="flex flex-col items-center text-center space-y-12">
                    <h1 className={`text-4xl font-bold`}>{about[language].title}</h1>
                    <h1 className="text-[18px] -mt-10">{about[language].subtitle}</h1>

                    <div className="max-w-[500px] lg:max-w-[700px] text-left bg-gray-900 px-5 py-10 rounded-2xl space-y-4  border-none">
                        <h1 className="text-[18px] font-bold sm:text-xl">{about[language].title}</h1>
                        <p className="text-[16px] tracking-wide">{about[language].desc}</p>

                        <h1 className="text-[18px] font-bold sm:text-xl mb-3">{isi[language].title}</h1>
                        <p className="text-[16px] tracking-wide mb-2">{isi[language].subtitle}</p>
                        <ul className="list-disc pl-5 space-y-1 text-[16px]">
                            {isi[language].skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <div className="space-y-12">
                        <div className="flex flex-col justify-center items-center text-center max-w-96 mx-auto">
                            <h1 className={`text-4xl font-bold`}>{tech[language].title}</h1>
                            <h1 className="text-[18px] mt-[10px]">{tech[language].subtitle}</h1>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                                <div><Icon icon="/icons8-html.svg" name="HTML" ClassName="hover:shadow-[#e44d26]" /></div>
                                <div><Icon icon="/icons8-css.svg" name="CSS" ClassName="hover:shadow-[#264de4]" /></div>
                                <div><Icon icon="/icons8-js.svg" name="JavaScript" ClassName="hover:shadow-yellow-400" /></div>
                                <div><Icon icon="/icons8-typescript.svg" name="TypeScript" ClassName="hover:shadow-blue-400" /></div>
                                <div><Icon icon="/icons8-react.svg" name="React" ClassName="hover:shadow-cyan-400" /></div>
                                <div><Icon icon="/icons8-tailwind-css.svg" name="Tailwind CSS" ClassName="hover:shadow-sky-400" /></div>
                                <div><Icon icon="/next.svg" name="Next.Js" ClassName="hover:shadow-white" /></div>
                                <div><Icon icon="/nodejs.svg" name="Node.Js" ClassName="hover:shadow-[#339933]" /></div>
                                <div><Icon icon="/github-logo.png" name="GitHub" ClassName="hover:shadow-white" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
