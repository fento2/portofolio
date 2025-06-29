"use client";
import Button from "@/components/Button";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import CyberBackground from "@/components/CyberBackground";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link"
import { FadeInLeft } from "@/components/FadeIn";
import Experience from "./experience/page";


export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);


  return (
    <div className="bg-[#090630] min-h-screen relative overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <CyberBackground />
      </div>

      {/* Semua konten utama dengan z-index tinggi */}
      <div className="relative z-10">
        {/* Landing Page */}

        <section
          id="Home"
          className="text-focus-in min-h-screen flex flex-col items-center justify-center text-white px-4"
        >
          <div className="space-y-8 max-w-3xl">

            <FadeInLeft delay={0.3}>
              <h1 className={`text-5xl tracking-widest font-bold ${warna1}`}>
                {language === "en" ? "Hi! I'm Fendry Tonrate" : "Hai! Saya Fendry Tonrate"}
              </h1>
            </FadeInLeft>
            <FadeInLeft delay={0.8}>
              <p className="text-xl text-white-300 max-w-[40rem]">
                {language === "en" ? "Full Stack Developer focused on crafting intuitive and scalable applications" :
                  "Pengembang Full Stack yang fokus menciptakan aplikasi yang efisien dan mudah digunakan"}
              </p>
            </FadeInLeft>
            <FadeInLeft delay={1}>
              <div className="mb-18">
                <div className="flex flex-row gap-x-12
                bg-transparent border-none text-white">
                  <a href="https://github.com/fento2" target="_blank" rel="noopener noreferrer"><FaGithub className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>
                  <a href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>
                  <a href="https://www.instagram.com/fendrytonrate/" target="_blank" rel="noopener noreferrer"><BsInstagram className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>
                </div>
              </div>
            </FadeInLeft>
          </div>
          
          <FadeInLeft delay={1.3}>
            <div className="flex justify-center space-x-8">
              <Link href="#projects"><Button name="projects" icon="/arrow_up.svg" /></Link>
              <Link href="#contact"><Button name="contact" icon="/mail.svg" /></Link>
            </div>
          </FadeInLeft>
        </section>

        {/* About */}

        <section
          id="about"
          className="w-full py-20 md:pt-24 text-white rounded-t-[50px] bg-black/30"
        >
          <AboutPage />
        </section>

         {/* Experience */}         
        <section
          id="experience"
          className="w-full py-20 md:pt-24 text-white bg-black/30"
        >
          <Experience />
        </section>


        {/* Projects */}
        <section
          id="projects"
          className="w-full py-20 md:pt-24 text-white rounded-b-[50px] bg-black/30"
        >
          <ProjectsPage />
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-4 text-white">
          <ContactPage />
        </section>

      </div>

      <footer className="text-white py-4 border-t border-white">
        <p className="text-sm text-center tracking-wide">
          © {new Date().getFullYear()} Fendry Tonrate - All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export const warna1: string = "text-[#0fffc1] drop-shadow-[0_0_10px_#0fffc1]";
