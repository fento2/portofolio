"use client"

import Logo from "./Logo";
import Link from "next/link";
import { LucideLanguages } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


function Navbar() {

    const [openLangMenu, setOpenLangMenu] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    


    return (

        <div>
            <nav className="w-full text-white py-3 md:py-6 fixed top-0 z-50 bg-black/30 backdrop-blur-xs rounded-b-4xl">
                <div className="flex items-center justify-between px-6">


                    {!openSideNav && (<button className="w-6 h-6 md:hidden lg:hidden xl:hidden"
                        onClick={() => { setOpenSideNav(true) }}>
                        <img src="/menu.svg" alt="menu" />
                    </button>)}

                    {openSideNav && (<div className="w-6 h-6">
                    </div>)}



                    <div>
                        <Link href="#home"><Logo /></Link>
                    </div>


                    <ul className="hidden md:flex lg:flex space-x-5 text-[18px] font-medium tracking-widest ">
                        {[
                            { href: "#home", label: "Home" },
                            { href: "#about", label: "About" },
                            { href: "#experience", label: "Experience" },
                            { href: "#projects", label: "Projects" },
                            { href: "#contact", label: "Contact" }
                        ].map(({ href, label }) => (
                            <li key={label} className="relative group cursor-pointer">
                                <Link href={href} className={`text-white`}>
                                    {label}
                                    <div className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></div>
                                </Link>
                            </li>
                        ))}
                    </ul>


                    <div>
                        <button
                            type="button"
                            className="w-8 h-8 flex items-center justify-center transition cursor-pointer"
                            onClick={() => setOpenLangMenu(!openLangMenu)}
                        >
                            <LucideLanguages className="hover:text-cyan-500" />
                        </button>


                        {openLangMenu && (
                            <div className="absolute right-0 mt-2 w-28 bg-black/30 text-white rounded-md shadow-lg z-50">
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-cyan-500 cursor-pointer"
                                    onClick={() => {
                                        setLanguage("id");
                                        setOpenLangMenu(false);
                                    }}
                                >
                                    Bahasa Indonesia
                                </button>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-cyan-500 cursor-pointer"
                                    onClick={() => {
                                        setLanguage("en");
                                        setOpenLangMenu(false);
                                    }}
                                >
                                    English
                                </button>
                            </div>
                        )}
                    </div>

                </div>

            </nav >

            {/**mobile nav */}



            <AnimatePresence>
                {openSideNav && (
                    <>

                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 bg-black/30 z-50 backdrop-blur-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setOpenSideNav(false)}
                        />


                        <motion.aside
                            key="sidenav"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed top-0 left-0 h-full w-1/2 bg-black/30 z-50 text-white 
                            flex flex-col items-center justify-center rounded-r-4xl"
                        >

                            <button
                                className="w-6 h-6 absolute top-4 right-4"
                                onClick={() => setOpenSideNav(false)}
                            >
                                <img src="/close.svg" alt="Close" className="w-6 h-6" />
                            </button>

                            <ul className="flex flex-col items-center space-y-7 text-sm font-medium tracking-widest">
                                {[
                                    { href: "#home", label: "Home" },
                                    { href: "#about", label: "About" },
                                    { href: "#experience", label: "Experience" },
                                    { href: "#projects", label: "Projects" },
                                    { href: "#contact", label: "Contact" },
                                ].map(({ href, label }) => (
                                    <li key={label} className="relative group cursor-pointer">
                                        <Link href={href} onClick={() => setOpenSideNav(false)}>
                                            <span className="text-white">{label}</span>
                                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </motion.aside>
                    </>
                )}

            </AnimatePresence>



        </div >
    );
}

export default Navbar;

