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
import Image from "next/image";

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
          className="relative min-h-screen flex items-center justify-center text-white px-4"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto font-mono z-10 py-16">

            {/* Text Section */}
            <div className="w-full  space-y-6 text-center lg:text-left">
              <FadeInLeft delay={0.3}>
                <h1 className="text-4xl sm:text-5xl tracking-widest font-bold text-cyan-300 drop-shadow-md">
                  {language === "en" ? "Hi! I'm Fendry Tonrate" : "Hai! Saya Fendry Tonrate"}
                </h1>
              </FadeInLeft>

              <FadeInLeft delay={0.8}>
                <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                  {language === "en"
                    ? "Full Stack Developer focused on crafting intuitive and scalable applications"
                    : "Pengembang Full Stack yang fokus menciptakan aplikasi yang efisien dan mudah digunakan"}
                </p>
              </FadeInLeft>

              <FadeInLeft delay={1}>
                <div className="flex justify-center lg:justify-start gap-x-6">
                  <Link href="https://github.com/fento2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-9 h-9 hover:text-cyan-500" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="w-9 h-9 hover:text-cyan-500" />
                  </Link>
                  <Link href="https://www.instagram.com/fendrytonrate/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="w-9 h-9 hover:text-cyan-500" />
                  </Link>
                </div>
              </FadeInLeft>

              <FadeInLeft delay={1.3}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                  <Link href="#projects">
                    <Button
                      variant="ghost"
                      className="border border-cyan-500 hover:bg-cyan-500 h-12 w-full sm:w-auto px-6"
                    >
                      Projects <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      variant="ghost"
                      className="border border-cyan-500 hover:bg-cyan-500 h-12 w-full sm:w-auto px-6"
                    >
                      Contact <MailIcon className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </FadeInLeft>
            </div>

            {/* Avatar Section */}
            <FadeIn delay={0.6}>
              <div className="w-full flex justify-center">
                <div
                  className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]
                   rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_25px_5px_#06b6d4]
                  transition-transform duration-500 hover:scale-105 hover:rotate-2"
                >
                  <Image
                    src="/avatar-personal.png"
                    alt="Cyberpunk Coder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

            </FadeIn>


          </div>
        </section>

        {/* Sections */}
        <SectionDivider delay={0.3} />
        <FadeIn delay={0.6}>
          <section id="about" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
            <AboutPage />
          </section>
        </FadeIn>

        <SectionDivider delay={0.3} />
        <FadeIn delay={0.6}>
          <section id="experience" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
            <ExperiencePage />
          </section>
        </FadeIn>


        <SectionDivider delay={0.3} />
        <FadeIn delay={0.6}>
          <section id="projects" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
            <ProjectsPage />
          </section>
        </FadeIn>

        <SectionDivider delay={0.3} />
        <section id="contact" className="w-full text-white scroll-mt-12 md:scroll-mt-18">
          <ContactPage />
        </section>
      </div>

      <Footer />

    </div>
  );
}
