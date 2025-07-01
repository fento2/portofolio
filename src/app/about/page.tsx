"use client";
import Icon from "@/components/core/Icon";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import FadeIn from "@/components/core/FadeIn";
import { useRouter } from "next/navigation";

function AboutPage() {
    const { language } = useContext(LanguageContext);
    
    const router = useRouter();


    const about = {
        id: {
            title: "Tentang Saya",
            subtitle: "Kenali lebih dekat latar belakang dan kemampuan saya",
            desc: [
                "Halo! Nama saya Fendry Tonrate, seorang junior developer yang saat ini berfokus pada pengembangan web, baik Front-End maupun Back-End, menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS.",
                "Saya senang membangun antarmuka yang interaktif, efisien, dan ramah pengguna, dengan perhatian khusus pada desain yang bersih serta pengalaman pengguna yang optimal dan menyenangkan. Saya percaya bahwa kombinasi antara fungsionalitas dan estetika adalah kunci dari sebuah produk digital yang sukses.",
                "Saat ini, saya sedang memperluas cakupan keahlian saya ke dunia pengembangan perangkat lunak secara menyeluruh, termasuk pengembangan aplikasi lintas platform, integrasi sistem, dan perancangan arsitektur backend yang skalabel dan efisien. Saya juga mulai mengeksplorasi prinsip-prinsip rekayasa perangkat lunak seperti pengujian, dokumentasi, dan pemeliharaan kode yang berkelanjutan.",
                "Saya berkomitmen untuk terus belajar dan berkembang, tidak hanya secara teknis, tetapi juga dalam hal kolaborasi tim dan komunikasi. Tujuan saya adalah untuk membangun solusi digital yang tidak hanya bermanfaat, tetapi juga memberikan dampak positif dan nyata bagi pengguna."
            ],


        },
        en: {
            title: "About Me",
            subtitle: "Get to know more about my background and skills",
            desc: [
                "Hi! My name is Fendry Tonrate, a junior developer currently focused on web development, both Front-End and Back-End, using modern technologies like React, Next.js, and Tailwind CSS.",
                "I enjoy building interactive, efficient, and user-friendly interfaces with a strong emphasis on clean design and great user experience. I believe that combining functionality with aesthetics is key to creating successful digital products.",
                "Currently, I'm expanding my expertise into broader software development, including cross-platform application development, system integration, and designing scalable and efficient backend architectures. I'm also beginning to explore core software engineering principles such as testing, documentation, and long-term code maintenance.",
                "I'm committed to continuous learning and growth — not only in technical skills, but also in areas like team collaboration and effective communication. My goal is to create digital solutions that are not only useful, but also meaningful and impactful for users."
            ]


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
        id: {
            title: "Teknologi Utama",
            subtitle: "Berikut adalah alat utama yang saya gunakan",
        },
        en: {
            title: "Tech Stack",
            subtitle: "Here are my primary development tools",
        },
    };

    useEffect(()=>{
        router.replace("/");
        
    }, []);




    return (



        <div className="w-full py-8 max-w-7xl mx-auto px-4 md:px-20 space-y-8 text-white text-center">
            <div>
                <h1 className="text-4xl font-bold">About</h1>
                <h1 className="text-[18px] mb-8 mt-2">
                    {language === "en" ? about.en.subtitle : about.id.subtitle}
                </h1>
            </div>


            <div className="space-y-8 lg:grid grid-cols-2 gap-6">

                <div className="flex flex-col items-center text-center space-y-12">
                    <FadeIn>
                        <div className="w-full bg-neutral-900 px-5 py-10 rounded-2xl space-y-4 border-none text-left">
                            <h1 className="text-[18px] font-bold sm:text-xl">
                                {language === "en" ? about.en.title : about.id.title}
                            </h1>
                            {(language === "en" ? about.en.desc : about.id.desc).map((value, index) => (
                                <p key={index} className="md:text-[16px] indent-8 text-justify">
                                    {value}
                                </p>
                            ))}

                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col items-center">
                    <FadeIn>
                        <div className="w-full bg-neutral-900 sm:grid grid-cols-2 gap-6 rounded-2xl">

                            <div className="text-left px-5 py-10">
                                <h1 className="text-[18px] font-bold sm:text-xl mb-3">
                                    {language === "en" ? fundamental.en.title : fundamental.id.title}
                                </h1>
                                <p className="md:text-[16px] tracking-wide mb-2">
                                    {language === "en" ? fundamental.en.subtitle : fundamental.id.subtitle}
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-[16px]">
                                    {(language === "en" ? fundamental.en.isi : fundamental.id.isi).map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-left px-5 py-10">
                                <h1 className="text-[18px] font-bold sm:text-xl mb-3">
                                    {language === "en" ? skills.en.title : skills.id.title}
                                </h1>
                                <p className="md:text-[16px] tracking-wide mb-2">
                                    {language === "en" ? skills.en.subtitle : skills.id.subtitle}
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-[16px]">
                                    {(language === "en" ? skills.en.isi : skills.id.isi).map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>

            <FadeIn>
                <div className="max-w-3xl mx-auto bg-neutral-900 px-6 py-8 rounded-2xl text-white text-center space-y-3">
                    <p className="text-[18px] italic">
                        {language === "en"
                            ? `"Every great developer you know got there by solving problems they were unqualified to solve - until they actually did it."`
                            : `"Setiap developer hebat yang kamu kenal dulunya pernah mengerjakan hal yang belum tentu bisa - sampai akhirnya mereka bisa."`}
                    </p>
                    <p className="text-sm text-white/80">- Patrick McKenzie</p>
                </div>
            </FadeIn>


            <FadeIn>
                <div className="space-y-12">
                    <div className="flex flex-col justify-center items-center text-center max-w-96 mx-auto">
                        <h1 className="text-3xl font-bold">
                            {language === "en" ? tech.en.title : tech.id.title}
                        </h1>
                        <h1 className="text-[18px] mt-[10px]">
                            {language === "en" ? tech.en.subtitle : tech.id.subtitle}
                        </h1>
                    </div>

                    <div className="grid grid-rows-1">
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 md:gap-8">
                                {/* Icons */}
                                <Icon icon="/icons8-html.svg" name="HTML" ClassName="hover:shadow-[#e44d26]" />
                                <Icon icon="/icons8-css.svg" name="CSS" ClassName="hover:shadow-[#264de4]" />
                                <Icon icon="/icons8-js.svg" name="JavaScript" ClassName="hover:shadow-yellow-400" />
                                <Icon icon="/icons8-typescript.svg" name="TypeScript" ClassName="hover:shadow-blue-400" />
                                <Icon icon="/icons8-react.svg" name="React" ClassName="hover:shadow-cyan-400" />
                                <Icon icon="/icons8-tailwind-css.svg" name="Tailwind CSS" ClassName="hover:shadow-sky-400" />
                                <Icon icon="/next.svg" name="Next.Js" ClassName="hover:shadow-white" />
                                <Icon icon="/nodejs.svg" name="Node.Js" ClassName="hover:shadow-[#339933]" />
                                <Icon icon="/github-logo.png" name="GitHub" ClassName="hover:shadow-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>


    );
}

export default AboutPage;
