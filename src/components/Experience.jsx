import { motion } from 'framer-motion';
import { FaNetworkWired, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            role: "Infosys Springboard Internship",
            company: "Infosys",
            icon: <FaNetworkWired />,
            color: "blue",
            bullets: [
                "Built AI-powered ticket resolution system using LangChain and Ollama.",
                "Implemented RAG pipeline utilizing FAISS vector store for semantic search.",
                "Automated document processing and ingestion pipelines using PyPDFLoader and SQLite.",
            ]
        },
        {
            role: "MERN Stack Internship",
            company: "Webstack Academy",
            icon: <FaLaptopCode />,
            color: "purple",
            link: import.meta.env.VITE_APP_MERN_STACK_INTERSHIP_CERTIFICATE,
            bullets: [
                "Developed Synthesia, a full-stack music streaming platform.",
                "Engineered robust REST APIs using Node.js and Express architecture.",
                "Implemented scalable frontend interfaces using React and modern CSS frameworks.",
            ]
        },
        {
            role: "Summer Training – Data Science",
            company: "Lovely Professional University | Jun 2025 – Jul 2025",
            icon: <FaChartLine />,
            color: "teal",
            link: "https://drive.google.com/file/d/1W8jgKarL3_R5ruTm-wwdpGcNL6t7ZgV8/view?usp=sharing",
            bullets: [
                "Completed intensive hands-on training in Data Science covering Python, SQL, Excel analytics, and Power BI.",
                "Built data preprocessing workflows and performed data cleaning, transformation, and analysis on real datasets.",
                "Developed SQL queries, Excel statistical models, and Power BI dashboards for data-driven insights.",
                "Applied machine learning techniques to real-world datasets to improve analytical accuracy and decision-making."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-purple-900/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6 drop-shadow-sm">
                        Internships & Experience
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12 py-6 group"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-[#050505] border-2 border-${exp.color}-500 shadow-[0_0_15px_rgba(var(--tw-colors-${exp.color}-500),0.8)] z-10 group-hover:scale-125 transition-transform duration-300`} />

                            <div className={`bg-gradient-to-r from-[#0f0f15] to-[#1a1a24] border border-white/5 p-8 rounded-2xl shadow-xl hover:shadow-${exp.color}-500/10 transition-shadow duration-300`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-${exp.color}-500/20 text-${exp.color}-400 flex flex-shrink-0 items-center justify-center text-2xl`}>
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                                            <h4 className={`text-${exp.color}-400 font-medium text-lg`}>{exp.company}</h4>
                                        </div>
                                    </div>
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-1.5 rounded-full bg-${exp.color}-500/10 border border-${exp.color}-500/30 text-${exp.color}-300 hover:bg-${exp.color}-500/20 hover:text-white transition-colors text-sm font-medium w-fit`}>
                                            View Certificate
                                        </a>
                                    ) : (
                                        <div className={`px-4 py-1.5 rounded-full bg-${exp.color}-500/10 border border-${exp.color}-500/30 text-${exp.color}-300 text-sm font-medium w-fit`}>
                                            Experience Details
                                        </div>
                                    )}
                                </div>

                                <ul className="space-y-3 pl-2">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3 text-slate-400">
                                            <span className={`text-${exp.color}-500 mt-1`}>▹</span>
                                            <span className="text-lg leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
