import { warna2 } from "./Icon";
import Link from "next/link";
function Sidebar() {

    return (
        < nav className="text-white w-[50%] h-full fixed top-0 left-0 bg-black/50 z-50 flex flex-col items-center justify-center md:hidden lg:hidden" >
            {/* tombol close di pojok kanan atas */}
            < button className="w-6 h-6 absolute top-4 right-4" >
                <img src="/close.svg" alt="Close" className="w-6 h-6" />
            </button >

            < ul className="flex flex-col items-center space-y-7 text-sm font-medium tracking-widest" >
                <li><Link href="#about" className={`cursor-pointer ${warna2}`}>ABOUT</Link></li>
                <li><Link href="#experience" className={`cursor-pointer ${warna2}`}>EXPERIENCE</Link></li>
                <li><Link href="#projects" className={`cursor-pointer ${warna2}`}>PROJECTS</Link></li>
                <li><Link href="#contact" className={`cursor-pointer ${warna2}`}>CONTACT</Link></li>
            </ul >
        </nav >
    );

}
export default Sidebar;