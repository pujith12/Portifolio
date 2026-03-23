import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Decorative background elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border-[1px] border-brand-primary/10 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border-[1px] border-brand-secondary/10 rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 drop-shadow-sm">
                        About <span className="text-brand-primary">Me</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative perspective-1000"
                        >
                            {/* Abstract Shape Container */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/30 to-brand-secondary/30 rounded-2xl blur-xl"
                            />
                            <div className="relative bg-dark-card/80 backdrop-blur-xl border border-dark-border/50 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d">
                                <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
                                    className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 font-light"
                                >
                                    Hello! I&apos;m Peddineni Chandra Vardhan, a dedicated <strong className="text-brand-accent font-semibold drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">Full Stack Developer</strong> and <strong className="text-brand-secondary font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">Competitive Programmer</strong>. My journey in software engineering started with a deep curiosity for how digital experiences are built, which quickly turned into a passion for crafting robust and scalable applications.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                                    className="text-slate-300 text-lg md:text-xl leading-relaxed font-light"
                                >
                                    Currently pursuing my Bachelor of Technology in Computer Science and Engineering at <span className="text-white font-medium">Lovely Professional University</span>, I specialize in the MERN stack while continuously solving complex algorithmic problems. I believe in writing clean, maintainable code and always striving for high performance and optimal user experiences.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        {[
                            {
                                title: "My Focus",
                                content: "Building responsive, scalable web applications and developing efficient backend systems with optimized database structures.",
                                color: "primary",
                                delay: 0.2
                            },
                            {
                                title: "Problem Solving",
                                content: (
                                    <>
                                        Regularly tackling competitive programming challenges. I&apos;ve solved over 200+ problems across platforms like 
                                        <a href={import.meta.env.VITE_APP_LEETCODE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline mx-1">LeetCode</a> 
                                        and 
                                        <a href={import.meta.env.VITE_APP_HACKER_RANK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline mx-1">HackerRank</a>, 
                                        achieving a 5-star rating in C++.
                                    </>
                                ),
                                color: "secondary",
                                delay: 0.4
                            },
                            {
                                title: "Continuous Learning",
                                content: "Always exploring new frameworks and architectural patterns to stay at the forefront of modern web development.",
                                color: "accent",
                                delay: 0.6
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 50, damping: 20, delay: item.delay }}
                                whileHover={{ scale: 1.03, x: -10 }}
                                className={`bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-brand-${item.color}/50 hover:shadow-[0_0_30px_rgba(var(--color-brand-${item.color}-rgb),0.1)] transition-all duration-300 relative overflow-hidden group`}
                            >
                                {/* Highlight line on hover */}
                                <div className={`absolute top-0 left-0 w-1 h-full bg-brand-${item.color} origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300`} />

                                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{item.content}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
