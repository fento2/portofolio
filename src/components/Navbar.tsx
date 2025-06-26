"use client"

import Logo from "./Logo";
import Link from "next/link";
import { LucideLanguages } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useState } from "react";

function Navbar() {


    const [openLangMenu, setOpenLangMenu] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);



    return (

        <div>
            <nav className="w-full text-white py-5 md:py-6 fixed top-0 z-50 bg-black/40 border-b border-black rounded-b-4xl">
                <div className="flex items-center justify-between px-6">

                    {/* kiri: Icon menu */}
                    {!openSideNav && (<button className="w-6 h-6 md:hidden lg:hidden xl:hidden"
                        onClick={() => { setOpenSideNav(true) }}>
                        <img src="/menu.svg" alt="menu" />
                    </button>)}
                    
                    {openSideNav && (<div className="w-6 h-6">
                    </div>)}
                    

                    {/* tengah nama */}
                    <div className="">
                        <Link href="#home"><Logo /></Link>
                    </div>

                    {/* navigasi tengah */}
                    <ul className="hidden md:flex lg:flex space-x-5 text-[18px] font-medium tracking-widest ">
                        {[
                            { href: "#home", label: "Home" },
                            { href: "#about", label: "About" },
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
                            className="w-8 h-8 flex items-center justify-center hover:bg-cyan-500 hover:rounded-full transition cursor-pointer"
                            onClick={() => setOpenLangMenu(!openLangMenu)}
                        >
                            <LucideLanguages />
                        </button>
                        

                        {openLangMenu && (
                            <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg z-50">
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-cyan-500 cursor-pointer"
                                    onClick={() => {
                                        setLanguage("id");
                                        setOpenLangMenu(false);
                                    }}
                                >
                                    Bahsa Indonesia
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



            <aside
                className={`fixed top-0 left-0 h-full w-1/2 bg-black/80 z-50 text-white 
                flex flex-col items-center justify-center transition-transform duration-300
                inset-0
                ${openSideNav ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* tombol close di pojok kanan atas */}
                < button className="w-6 h-6 absolute top-4 right-4"
                    onClick={() => { setOpenSideNav(false) }}>
                    <img src="/close.svg" alt="Close" className="w-6 h-6 " />
                </button >

                < ul className="flex flex-col items-center space-y-7 text-sm font-medium tracking-widest" >
                    {[
                        { href: "#home", label: "Home" },
                        { href: "#about", label: "About" },
                        { href: "#projects", label: "Projects" },
                        { href: "#contact", label: "Contact" }

                    ].map(({ href, label }) => (
                        <li key={label} className="relative group cursor-pointer">
                            <Link href={href} className={`text-white`}>
                                {label}
                                {/* garis animasi */}
                                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                            </Link>
                        </li>
                    ))}
                </ul >
            </aside>


        </div >
    );
}

export default Navbar;

