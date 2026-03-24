import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg shadow-brand-primary/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-brand-primary font-semibold"
                                className="text-slate-300 hover:text-brand-accent transition-colors cursor-pointer text-sm tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/Pujith_Reddy_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 transition-colors text-sm font-semibold tracking-wide"
                        >
                            View CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark-card/95 backdrop-blur-lg border-b border-dark-border">
                    <div className="px-4 pt-2 pb-4 space-y-1 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-brand-primary bg-dark-bg"
                                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-dark-bg cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/Pujith_Reddy_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-3 mt-2 text-center rounded-md text-base font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20"
                            onClick={() => setIsOpen(false)}
                        >
                            View CV
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
