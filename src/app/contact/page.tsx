import { Card } from "@/components/ui/card";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { warna1 } from "../page";
import { FadeInLeft } from "@/components/FadeIn";
function ContactPage() {

    const { language } = useContext(LanguageContext);

    return (
        <div className="w-full py-20  text-white">
            <h1 className={`text-4xl font-bold text-center mb-10`}>Contact</h1>

            <div className="max-w-xl mx-auto px-4">
                <FadeInLeft delay={0.3}>
                    <Card className="bg-black/30 p-6 border-none">
                        <FadeInLeft delay={0.6}>
                            <Card className="bg-neutral-900/50 p-6 border-none">
                                <h1 className={`text-3xl ${warna1}`}>
                                    {language === "en" ? "Get In Touch" : "Hubungi Saya"}</h1>
                                <p className=" text-white text-lg">{language === "en" ?
                                    "Have something to discuss? Send me a message and let's talk" :
                                    "Ada yang ingin didiskusikan? Kirim pesan dan ayo kita ngobrol"}</p>

                                <FadeInLeft delay={1}>
                                    <form
                                        action="https://formspree.io/f/mjkrjgpk"
                                        method="POST"
                                        className="space-y-4"
                                        target="_blank"
                                    >

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-4 py-2 h-14 text-xl bg-gray-500/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />


                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            required
                                            className="w-full px-4 py-2 h-14 text-xl bg-gray-500/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />



                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 h-56 text-xl bg-gray-500/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        ></textarea>



                                        <button
                                            type="submit"
                                            className="w-full text-white border border-cyan-500 py-2 px-4 rounded-md hover:bg-cyan-500 transition cursor-pointer h-14 text-xl"
                                        >
                                            Send Message
                                        </button>

                                    </form>
                                </FadeInLeft>

                            </Card>

                        </FadeInLeft>

                        <FadeInLeft delay={0.6}>
                            <Card className="bg-neutral-900/50 p-6 border-none">
                                <p className={`${warna1} text-2xl`}>Connect With Me</p>
                                <div>
                                    <div className="flex flex-row gap-x-12
                                    bg-transparent border-none text-white">
                                        <a href="https://github.com/fento2" target="_blank" rel="noopener noreferrer"><FaGithub className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>
                                        <a href="https://www.linkedin.com/in/fendry-tonrate-0a46b9348/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>
                                        <a href="https://www.instagram.com/fendrytonrate/" target="_blank" rel="noopener noreferrer"><BsInstagram className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></a>

                                    </div>
                                </div>
                            </Card>
                        </FadeInLeft>
                    </Card>
                </FadeInLeft>
            </div>
        </div>

    );
}


export default ContactPage;