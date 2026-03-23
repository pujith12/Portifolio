import { motion } from 'framer-motion';
import { FaRobot, FaHeartbeat, FaChartLine, FaMusic, FaMicrochip, FaGithub } from 'react-icons/fa';
import synthesiaImage from '../assets/synthesia.png';

const Projects = () => {
    const projects = [
        {
            title: "AI Ticket Resolution System",
            category: "LLM + RAG System",
            icon: <FaRobot />,
            color: "blue",
            tech: ["LangChain", "Ollama", "FAISS", "Python"],
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            github: import.meta.env.VITE_APP_AI_TICKET_RESOLUTION_SYSTEM_GITHUB_URL,
            description: "Developed an intelligent conversational system capable of autonomously resolving tickets by retrieving contextual documentation via a RAG pipeline and processing it through large language models."
        },
        {
            title: "Diabetes Prediction System",
            category: "Machine Learning / Healthcare",
            icon: <FaHeartbeat />,
            color: "pink",
            tech: ["Scikit-learn", "Pandas", "Python"],
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            github: import.meta.env.VITE_APP_DIABETES_PREDICTION_SYSTEM_GITHUB_URL,
            description: "Engineered a robust predictive model utilizing core machine learning classification algorithms to estimate diabetes onset risk based on comprehensive diagnostic health metrics."
        },
        {
            title: "Election Data Visualization",
            category: "Data Analytics & Insights",
            icon: <FaChartLine />,
            color: "purple",
            tech: ["Python", "Matplotlib", "Seaborn"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            github: import.meta.env.VITE_APP_ELECTION_DATA_VISUALIZATION_GITHUB_URL,
            description: "Constructed extensive data analysis pipelines designed to dissect large-scale electoral datasets, producing insightful graphical representations of voter demographics and historical trends."
        },
        {
            title: "Synthesia Music Platform",
            category: "Full Stack Development",
            icon: <FaMusic />,
            color: "indigo",
            tech: ["React.js", "Node.js", "Express", "MongoDB"],
            image: synthesiaImage,
            github: import.meta.env.VITE_APP_SYNTHESIA_MUSIC_PLATFORM_GITHUB_URL,
            description: "Built a fully functional end-to-end music streaming application showcasing robust REST API integration, dynamic state management, and seamless audio playback architecture."
        },
        {
            title: "CPU Scheduler Simulator",
            category: "Core CS + Visualization",
            icon: <FaMicrochip />,
            color: "teal",
            tech: ["C/C++", "Algorithms"],
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
            github: import.meta.env.VITE_APP_CPU_SCHEDULER_SIMULATOR_GITHUB_URL,
            description: "Designed a graphical and logic-driven simulation utility computing and visualizing operating system process scheduling algorithms including Round Robin and SJF."
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6 drop-shadow-sm">
                        Projects
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-gradient-to-br from-[#0f0f15] to-[#181824] border border-white/5 hover:border-${project.color}-500/50 rounded-2xl relative overflow-hidden group shadow-xl flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className="w-full md:w-1/2 h-64 md:min-h-[400px] relative overflow-hidden shrink-0">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#0f0f15] to-transparent md:hidden`} />
                                <div className={`hidden md:block absolute inset-0 ${idx % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#0f0f15] via-[#0f0f15]/50 to-transparent`} />
                            </div>

                            {/* Content side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">

                            {/* Abstract Glowing Accent */}
                            <div className={`absolute -right-10 top-32 w-32 h-32 bg-${project.color}-500/20 rounded-full blur-2xl group-hover:bg-${project.color}-500/30 transition-all duration-500`} />
                            
                            <div className={`w-14 h-14 rounded-xl bg-${project.color}-500/20 text-${project.color}-400 flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(var(--tw-colors-${project.color}-500),0.3)] relative z-10`}>
                                {project.icon}
                            </div>
                            
                            <span className={`inline-block px-3 py-1 rounded-full bg-${project.color}-500/10 border border-${project.color}-500/30 text-${project.color}-300 text-xs font-bold tracking-wider uppercase mb-4`}>
                                {project.category}
                            </span>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-slate-400 mb-6 line-clamp-4 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="px-2.5 py-1 bg-[#222230] text-slate-300 text-xs font-medium rounded border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                                        <FaGithub size={20} />
                                    </a>
                                )}
                            </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
