import Button from "@/components/Button";
import About from "./about/page";
import Icon from "@/components/Icon";
export const warna1: string ="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-700 to-blue-800";
export default function Home() {
  return (
    <div className="w-full">
      {/*landing page */}
      <section id="landing" className="text-focus-in min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="space-y-14 max-w-3xl">
          <h1 className={`text-5xl tracking-widest font-bold ${warna1}`}>
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl font-normal tracking-wide flex items-start">
            <img src="/lamp.svg" className="animate-bounce"/>Ready to Innovate!
          </p>
        </div>


        {/*tombol */}
        <div className="flex justify-center space-x-8 mt-32">
          <Button name="projects" icon="/arrow_up.svg" />
          <Button name="contact" icon="/mail.svg" />
        </div>
      </section>

      {/*about page */}
      <section id="about" className="w-full py-20 sm:py-30 bg-black/40 text-white">
        <About />
      </section>
    </div>
  );
}

