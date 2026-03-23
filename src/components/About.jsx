import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Decorative background elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border-[1px] border-blue-500/10 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border-[1px] border-purple-500/10 rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 mb-6 drop-shadow-sm">
                        About <span className="text-white">Me</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
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
                            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative perspective-1000"
                        >
                            {/* Abstract Shape Container */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"
                            />
                            <div className="relative bg-[#0f0f15]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d">
                                <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
                                    className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 font-light"
                                >
                                    I am a <strong className="text-blue-400 font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Data Scientist</strong> and <strong className="text-purple-400 font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Machine Learning Engineer</strong>. My expertise lies in building intelligent architectures, robust predictive models, and LLM-powered applications.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                                    className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-6"
                                >
                                    My strong foundation in Computer Science combined with hands-on experience in implementing end-to-end Machine Learning pipelines allows me to transform raw data into actionable insights and automated workflows.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}
                                    className="text-slate-300 text-lg md:text-xl leading-relaxed font-light"
                                >
                                    I specialize in <span className="text-white font-medium">Python, RAG architectures, LLMs, and Data Analytics</span>, always striving to build scalable AI systems that solve real-world problems.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        {[
                            {
                                title: "Data Science & Analytics",
                                content: "Expertise in exploratory data analysis (EDA), data cleaning, statistical modeling, and visualizing insights using tools like Pandas, Python, and Power BI.",
                                color: "blue",
                                icon: <FaDatabase />,
                                delay: 0.2
                            },
                            {
                                title: "Machine Learning Models",
                                content: "Building robust predictive models, optimizing hyperparameters, and evaluating model accuracy and recall using Scikit-Learn and advanced statistical algorithms.",
                                color: "purple",
                                icon: <FaBrain />,
                                delay: 0.4
                            },
                            {
                                title: "Generative AI & LLMs",
                                content: "Designing intelligent Prompt Engineering workflows and deploying Retrieval-Augmented Generation (RAG) pipelines using LangChain, FAISS, and Ollama.",
                                color: "indigo",
                                icon: <FaCode />,
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
                                className={`bg-[#0f0f15]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-${item.color}-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden group`}
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300`} />
                                
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-3 rounded-lg bg-${item.color}-500/20 text-${item.color}-400 text-2xl`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">{item.title}</h3>
                                </div>
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
