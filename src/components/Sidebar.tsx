function Sidebar() {

    return (
        < nav className="text-white w-[50%] h-screen fixed top-0 left-0 bg-black/50 z-50 flex flex-col items-center justify-center md:hidden lg:hidden" >
            {/* tombol close di pojok kanan atas */}
            < button className="w-6 h-6 absolute top-4 right-4" >
                <img src="/close.svg" alt="Close" className="w-6 h-6" />
            </button >

            < ul className="flex flex-col items-center space-y-7 text-sm font-medium tracking-widest" >
                <li>ABOUT</li>
                <li>EXPERIENCE</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul >
        </nav >
    );

}
export default Sidebar;