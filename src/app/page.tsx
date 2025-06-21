import Button from "@/components/Button";
import About from "./about/page";
export default function Home() {
  return (
    <div className="h-[2000px]">
      <main className="">
        <div className="w-full h-[650px] flex flex-col items-center justify-center text-center position absolute top-0">
          <div className="text-focus-in flex flex-col gap-40 text-white">
            <div className="space-y-6 px-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-widest">Hi! I'm Fendry Tonrate</h1>
              <p className="text-xl md:text-2xl font-normal tracking-wide">Software Developer with experience in creating scalable and modern applications</p>
            </div>
            <div className="flex justify-center space-x-8">
              <Button name="projects" icon="/arrow_up.svg" />
              <Button name="contact" icon="/mail.svg" />
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <About/>
          </div>
        </div>
      </main>
    </div>
  );
}
