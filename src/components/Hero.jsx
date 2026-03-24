import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden perspective-1000 bg-[#0a0a0a]">
            {/* Dynamic AI Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.4, 0.1],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[150px]"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
                    className="md:w-3/5 space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-blue-400 font-medium tracking-wide text-lg md:text-xl mb-4 flex items-center justify-center md:justify-start">
                            <FaRobot className="mr-3 animate-pulse" /> SYSTEM INITIALIZED
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-400 tracking-tight"
                    >
                        S Pujith Reddy.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-3xl md:text-5xl font-bold text-white h-16"
                    >
                        <TypeAnimation
                            sequence={[
                                'Data Scientist', 2000,
                                'Machine Learning Engineer', 2000,
                                'AI Architect', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] text-blue-500"
                        />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed pt-4"
                    >
                        Computer Science student with a strong focus on Data Science, Machine Learning, and AI. Experienced in building real-world ML systems, RAG pipelines, and intelligent data analysis workflows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8"
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-wide border-none shadow-lg"
                            >
                                View Projects
                            </motion.button>
                        </Link>
                        
                        <a href="/Pujith_Reddy_CV.pdf" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full border-2 border-blue-500/50 hover:bg-blue-500/10 text-white font-bold tracking-wide transition-colors"
                            >
                                View CV
                            </motion.button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, staggerChildren: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-8 pt-10 text-slate-400"
                    >
                        {[
                            { Icon: FaGithub, href: import.meta.env.VITE_APP_GITHUB_URL, isExternal: true },
                            { Icon: FaLinkedin, href: import.meta.env.VITE_APP_LINKEDIN_URL, isExternal: true },
                            { Icon: FaEnvelope, href: "mailto:pujithsathambakam@gmail.com", isExternal: true }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: "#3b82f6", scale: 1.2, rotate: 5 }}
                                className="transition-colors duration-300 cursor-pointer"
                            >
                                <social.Icon size={32} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Profile Photo Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
                    className="hidden md:flex md:w-2/5 justify-center items-center p-8"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        x.set(e.clientX - rect.left - rect.width / 2);
                        y.set(e.clientY - rect.top - rect.height / 2);
                    }}
                    onMouseLeave={() => {
                        x.set(0);
                        y.set(0);
                    }}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        style={{ rotateX, rotateY, z: 100 }}
                        className="relative w-80 h-80 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] border-2 border-indigo-500/30 group"
                    >
                        {/* 3D Rotating Ring for Accent */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-4px] border border-dashed border-purple-500/50 rounded-full group-hover:border-blue-400 transition-colors"
                        />
                        
                        <img 
                            src="/pujith_photo.png" 
                            alt="S Pujith Reddy" 
                            className="w-full h-full object-cover rounded-full z-10 transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
