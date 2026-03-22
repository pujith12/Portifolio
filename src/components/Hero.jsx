import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden perspective-1000">
            {/* Dynamic Background */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full mix-blend-screen filter blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-[150px]"
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
                        <h2 className="text-brand-accent font-medium tracking-wide text-lg md:text-xl mb-4">
                            <span className="inline-block animate-bounce mr-2">👋</span> Hi, my name is
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight"
                    >
                        Peddineni Chandra Vardhan.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-primary h-16"
                    >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'MERN Stack Expert',
                                2000,
                                'Competitive Programmer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed pt-4"
                    >
                        I&apos;m a passionate software developer specializing in building exceptional digital experiences. Currently, I&apos;m focused on creating accessible, human-centered products using modern web technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8"
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-blue-600 text-white font-bold tracking-wide border-none"
                            >
                                Explore My Work
                            </motion.button>
                        </Link>

                        <motion.a
                            href="/chandraCV.pdf" download="Chandra_Vardhan_CV.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-slate-600 text-slate-300 font-bold tracking-wide hover:border-slate-400 hover:text-white transition-colors"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, staggerChildren: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-8 pt-10 text-slate-400"
                    >
                        {[
                            { Icon: FaGithub, href: import.meta.env.VITE_GITHUB_URL },
                            { Icon: FaLinkedin, href: import.meta.env.VITE_LINKEDIN_URL },
                            { Icon: FaEnvelope, href: `mailto:${import.meta.env.VITE_EMAIL}` }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: "#fff", scale: 1.2, rotate: 5 }}
                                className="transition-colors duration-300"
                            >
                                <social.Icon size={32} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* 3D Floating Element */}
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
                        className="relative w-80 h-80"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[3px] border-dashed border-brand-primary/40 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border-[2px] border-brand-secondary/40 rounded-full"
                        />
                        <div className="absolute inset-8 border border-white/30 rounded-full shadow-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center group">
                            <img
                                src="https://i.postimg.cc/B6mRHY4f/Whats-App-Image-2026-03-17-at-08-23-49.jpg"
                                alt="Peddineni Chandra Vardhan Profile"
                                className="w-full h-full rounded-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
                            />
                            {/* Animated tech ring around profile */}
                            <motion.div
                                className="absolute w-full h-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-6 left-1/2 w-3 h-3 -translate-x-1/2 bg-brand-accent rounded-full shadow-[0_0_12px_#06b6d4]"></div>
                                <div className="absolute bottom-6 left-1/2 w-3 h-3 -translate-x-1/2 bg-brand-primary rounded-full shadow-[0_0_12px_#3b82f6]"></div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
