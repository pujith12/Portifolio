import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-dark-bg relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-brand-secondary">Education</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-secondary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-border"></div>

                    {/* Education Item */}
                    <div className="relative pl-24 py-6 group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-8 w-16 h-16 bg-dark-card border-2 border-brand-secondary rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-brand-secondary/20 transition-all duration-300">
                            <FaGraduationCap className="text-2xl text-brand-secondary" />
                        </div>

                        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-brand-secondary/50 transition-colors shadow-xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-4">
                                Expected 2025
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h3>
                            <h4 className="text-xl text-slate-300 font-medium mb-4">Computer Science and Engineering</h4>
                            <p className="text-brand-accent font-medium text-lg mb-4">
                                Lovely Professional University, Punjab
                            </p>

                            <div className="bg-dark-bg rounded-xl p-4 inline-block border border-dark-border">
                                <p className="text-slate-400">
                                    <span className="text-white font-bold">CGPA:</span> 6.84
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
