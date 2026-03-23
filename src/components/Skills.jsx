import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaBrain, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJupyter, SiCplusplus, SiC } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skillCategories = [
    {
        title: "Data Science & AI",
        color: "blue",
        icon: <FaBrain />,
        items: [
            { name: "Machine Learning", progress: 90 },
            { name: "Data Analysis & Visualization", progress: 88 },
            { name: "Pandas & Scikit-learn", progress: 85 },
            { name: "Prompt Engineering", progress: 95 },
            { name: "LLMs & RAG Pipelines", progress: 85 }
        ]
    },
    {
        title: "Programming Languages",
        color: "purple",
        icon: <FaPython />,
        items: [
            { name: "Python", progress: 95, icon: <FaPython /> },
            { name: "C++", progress: 80, icon: <SiCplusplus /> },
            { name: "C", progress: 85, icon: <SiC /> },
            { name: "Java", progress: 75, icon: <DiJava className="text-xl" /> }
        ]
    },
    {
        title: "Web Technologies",
        color: "indigo",
        icon: <FaReact />,
        items: [
            { name: "React", progress: 85, icon: <FaReact /> },
            { name: "Node.js", progress: 80, icon: <FaNodeJs /> },
            { name: "HTML & CSS", progress: 90, icon: <div className="flex gap-1"><FaHtml5 /><FaCss3Alt /></div> },
            { name: "JavaScript", progress: 85, icon: <FaJs /> }
        ]
    },
    {
        title: "Databases & Tools",
        color: "cyan",
        icon: <FaDatabase />,
        items: [
            { name: "SQL", progress: 90, icon: <FaDatabase /> },
            { name: "MongoDB", progress: 85, icon: <SiMongodb /> },
            { name: "Power BI & Excel", progress: 88 },
            { name: "Git & Jupyter", progress: 95, icon: <div className="flex gap-1"><FaGitAlt /><SiJupyter /></div> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6 drop-shadow-sm">
                        Technical Expertise
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 border border-${category.color}-500/30 text-${category.color}-400 text-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)]`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.items.map((skill, sIdx) => (
                                    <div key={sIdx} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center justify-center gap-2">
                                                {skill.icon && <span className="text-slate-400 group-hover:text-white transition-colors">{skill.icon}</span>}
                                                <span className="text-slate-300 font-medium tracking-wide group-hover:text-blue-300 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-blue-400/80 text-sm font-semibold">{skill.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                                                className={`h-full rounded-full bg-gradient-to-r from-${category.color}-600 to-${category.color}-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] relative`}
                                            >
                                                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20" style={{ filter: 'blur(2px)' }}></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
