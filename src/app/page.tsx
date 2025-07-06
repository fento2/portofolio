"use client";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import CyberBackground from "@/components/core/CyberBackground";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link"
import FadeIn, { FadeInLeft, SectionDivider } from "@/components/core/FadeIn";
import { ExternalLink } from "lucide-react";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExperiencePage from "./experience/page";
import Footer from "@/components/core/Footer";


export default function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="bg-[#090527] min-h-screen relative overflow-x-hidden scroll-smooth font-mono ">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CyberBackground />
      </div>

      <div className="relative z-10">
        {/* Landing */}
        <section
          id="Home"
          className="min-h-screen flex flex-col items-center justify-center text-white px-4"
        >
          <div className="space-y-8 max-w-3xl font-mono text-left">
            <FadeInLeft delay={0.3}>
              <h1 className="text-5xl tracking-widest font-bold text-cyan-300 drop-shadow-md">
                {language === "en" ? "Hi! I'm Fendry Tonrate" : "Hai! Saya Fendry Tonrate"}
              </h1>
            </FadeInLeft>
            <FadeInLeft delay={0.8} >
              <p className="text-xl text-gray-300 max-w-[40rem]">
                {language === "en"
                  ? "Full Stack Developer focused on crafting intuitive and scalable applications"
                  : "Pengembang Full Stack yang fokus menciptakan aplikasi yang efisien dan mudah digunakan"}
              </p>
            </FadeInLeft>
            <FadeInLeft delay={1}>
              <div className="mb-16">
                <div className="flex flex-row gap-x-10 text-white">
                  <Link href="https://github.com/fento2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-12 h-12 hover:text-cyan-500" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="w-12 h-12 hover:text-cyan-500" />
                  </Link>
                  <Link href="https://www.instagram.com/fendrytonrate/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="w-12 h-12 hover:text-cyan-500" />
                  </Link>
                </div>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={1.3} >
              <div className="flex justify-center space-x-8">
                <Link href="#projects"><Button variant="ghost" className=" border border-cyan-500 hover:bg-cyan-500 h-12 w-full cursor-pointer"
                >Projects<ExternalLink/></Button></Link>
                <Link href="#contact"><Button variant="ghost" className=" border border-cyan-500 hover:bg-cyan-500 h-12 w-full cursor-pointer"
                >Contact<MailIcon/></Button></Link>
              </div>
            </FadeInLeft>
          </div>
        </section>

        {/* Sections */}
        <SectionDivider delay={0.3}/>
        <FadeIn delay={0.6}>
        <section id="about" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
          <AboutPage />
        </section>
        </FadeIn>
        
        <SectionDivider delay={0.3}/>
        <FadeIn delay={0.6}>
        <section id="experience" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
          <ExperiencePage />
        </section>
        </FadeIn>
        
        
        <SectionDivider delay={0.3}/>
        <FadeIn delay={0.6}>
        <section id="projects" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
          <ProjectsPage />
        </section>
        </FadeIn>

        <SectionDivider delay={0.3}/>
        <section id="contact" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
          <ContactPage />
        </section>
      </div>

      <Footer/>
      
    </div>
  );
}
