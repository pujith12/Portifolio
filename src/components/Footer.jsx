const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-center md:text-left text-sm flex items-center justify-center md:justify-start">
                    Designed and Built by <span className="font-bold text-white ml-2 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">S Pujith Reddy</span>
                </p>
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
