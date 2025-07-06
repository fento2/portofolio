function Footer() {

    return (
        <div className="relative z-10">
            <footer className="text-white py-6 border-t border-white">
                <p className="text-sm text-center tracking-wide">
                    © {new Date().getFullYear()} Fendry Tonrate - All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;