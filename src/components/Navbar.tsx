import Logo from "./Logo";
import Link from "next/link";
import { warna2 } from "./Icon";

function Navbar() {
    return (
        <nav className="w-full text-white py-6 bg-black/60 sticky top-0 z-50 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6">

                {/* kiri: Icon menu */}
                <button className="w-6 h-6 md:hidden lg:hidden xl:hidden">
                    <img src="/menu.svg" alt="menu" />
                </button>

                {/* tengah nama */}
                <span className="focus-in-contract-bck"><Link href="#landing"><Logo /></Link></span>

                {/* navigasi tengah */}
                <ul className="hidden md:flex lg:flex space-x-5 text-[18px] font-medium tracking-widest">
                    <li><Link href="#about" className={`cursor-pointer ${warna2}`}>ABOUT</Link></li>
                    <li><Link href="#experience" className={`cursor-pointer ${warna2}`}>EXPERIENCE</Link></li>
                    <li><Link href="#projects" className={`cursor-pointer ${warna2}`}>PROJECTS</Link></li>
                    <li><Link href="#contact" className={`cursor-pointer ${warna2}`}>CONTACT</Link></li>
                </ul>

                {/* kanan icon moon */}
                <button className="w-6 h-6">
                    <img src="/dark_mode.svg" alt="moon" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

