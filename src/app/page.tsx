"use client";
import Button from "@/components/Button";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import CyberBackground from "@/components/CyberBackground";
import { Card } from "@/components/ui/card";

import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {


  return (
    <div className="bg-[#0f0c29] min-h-screen relative overflow-x-hidden">

      {/* Background Cyberpunk Neon Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CyberBackground />
      </div>

      {/* Semua konten utama dengan z-index tinggi */}
      <div className="relative z-10">
        {/* Landing Page */}
        <section
          id="Home"
          className=" min-h-screen flex flex-col items-center justify-center text-white px-4"
        >
          <div className="space-y-14 max-w-3xl">
            <h1 className={`text-5xl tracking-widest font-bold ${warna1}`}>
              Full Stack Developer
            </h1>

          </div>


          {/* Tombol */}
          <div className="mt-32">
            <div className="mb-12">
              <Card className="flex flex-row gap-x-12
                bg-transparent border-none text-white">
                <button><FaGithub className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>
                <button><FaLinkedinIn className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>
                <button><BsInstagram className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>

              </Card>
            </div>
            <div className="flex justify-center space-x-8">
              <Button name="projects" icon="/arrow_up.svg" />
              <Button name="contact" icon="/mail.svg" />
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="w-full py-20 md:pt-24 text-white rounded-t-[50px] bg-black/70"
        >
          <AboutPage />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="w-full py-20 md:pt-24 text-white rounded-b-[50px] bg-black/70"
        >
          <ProjectsPage />
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-20 md:pt-24 text-white">
          <ContactPage />
        </section>
      </div>
    </div>
  );
}

export const warna1: string =
  "text-[#0fffc1] drop-shadow-[0_0_10px_#0fffc1]";
