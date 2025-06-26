import { Card, CardContent, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { warna1 } from "../page";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function ContactPage() {
    return (
        <div className="w-full py-20  text-white">
            <h1 className={`text-4xl font-bold text-center mb-10`}>Contact</h1>

            <div className="max-w-xl mx-auto px-4">
                <Card className="bg-gray-800/50 p-6 border-none">
                <h1 className="text-cyan-500 text-3xl">Get In Touch</h1>
                    <Card className="bg-gray-800/50 p-6 border-none">
                    <p className=" text-cyan-500 text-lg">Have something to discuss? Send me a message and let's talk</p>
                        <form className="space-y-4">
                            {/* name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 h-14 text-xl bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />

                            {/* email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 h-14 text-xl bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />

                            {/* message */}
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="w-full px-4 py-2 h-56 text-xl bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            ></textarea>

                            {/* submit */}
                            <button
                                type="submit"
                                className="w-full text-white border border-cyan-500 
                            py-2 px-4 rounded-md hover:bg-cyan-500 
                            transition cursor-pointer h-14 text-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </Card>
                    <Card className="bg-gray-800/50 p-6 border-none">
                    <p className=" text-cyan-500 text-lg">Connect With Me</p>
                        <div className="">
                            <Card className="flex flex-row gap-x-12
                                    bg-transparent border-none text-white">
                                <button><FaGithub className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>
                                <button><FaLinkedinIn className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>
                                <button><BsInstagram className="w-12 h-12 hover:text-cyan-500 cursor-pointer" /></button>

                            </Card>
                        </div>

                    </Card>
                </Card>

            </div>
        </div>

    );
}


export default ContactPage;