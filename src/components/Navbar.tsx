import Logo from "./Logo";
function Navbar() {
    return (
        <nav className="text-white py-6 bg-black/50 sticky top-0 z-50 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 w-full">

                {/* kiri: Icon menu */}
                <button className="w-6 h-6 md:hidden lg:hidden xl:hidden">
                    <img src="/menu.svg" alt="menu" />
                </button>

                {/* tengah nama */}
                <span className="focus-in-contract-bck"><Logo/></span>

                {/* navigasi nengah */}
                <ul className="hidden md:flex lg:flex space-x-5 text-sm font-medium tracking-widest">
                    <li>ABOUT</li>
                    <li>EXPERIENCE</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
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

