import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-dark-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">

                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
                            <span className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                                CV.
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-xs">
                            Building modern and responsive web applications with a focus on seamless user experiences.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-white hover:border-white hover:bg-slate-800 transition-all duration-300">
                            <FaGithub size={20} />
                        </a>
                        <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300">
                            <FaLinkedin size={20} />
                        </a>
                        <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300">
                            <FaEnvelope size={20} />
                        </a>
                    </div>

                </div>

                <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Peddineni Chandra Vardhan. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-4 md:mt-0">
                        Built with <FaHeart className="text-red-500 mx-1" /> and React.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
