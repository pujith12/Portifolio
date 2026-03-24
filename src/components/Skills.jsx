import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCode, FaLaptopCode, FaLayerGroup, FaTools, FaChartPie, FaFileExcel } from 'react-icons/fa';
import { SiMongodb, SiJupyter, SiCplusplus, SiC, SiTailwindcss, SiExpress, SiPandas, SiScikitlearn, SiMysql } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <FaCode />,
        colorText: "text-blue-400",
        colorHover: "group-hover:text-blue-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]",
        borderHover: "hover:border-blue-500/30",
        skills: [
            { name: "Python", icon: <FaPython />, desc: "General purpose & AI" },
            { name: "JavaScript", icon: <FaJs />, desc: "Web interactivity" },
            { name: "C++", icon: <SiCplusplus />, desc: "Systems & DSA" },
            { name: "C", icon: <SiC />, desc: "Foundation & OS" },
            { name: "Java", icon: <DiJava className="text-6xl -my-3" />, desc: "Enterprise apps" }
        ]
    },
    {
        title: "Web Development",
        icon: <FaLaptopCode />,
        colorText: "text-indigo-400",
        colorHover: "group-hover:text-indigo-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]",
        borderHover: "hover:border-indigo-500/30",
        skills: [
            { name: "HTML5", icon: <FaHtml5 />, desc: "Page structure" },
            { name: "CSS3", icon: <FaCss3Alt />, desc: "Styling & Layout" },
            { name: "Node.js", icon: <FaNodeJs />, desc: "JavaScript runtime" },
            { name: "Express.js", icon: <SiExpress />, desc: "Backend framework" }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: <FaLayerGroup />,
        colorText: "text-purple-400",
        colorHover: "group-hover:text-purple-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(192,132,252,0.2)]",
        borderHover: "hover:border-purple-500/30",
        skills: [
            { name: "React", icon: <FaReact />, desc: "UI Component library" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Utility-first styling" },
            { name: "Pandas", icon: <SiPandas />, desc: "Data manipulation" },
            { name: "Scikit-Learn", icon: <SiScikitlearn />, desc: "Machine learning" },
            { name: "Framer Motion", icon: <motion.div className="w-8 h-8 bg-purple-400 rounded-md" />, desc: "Animation library" }
        ]
    },
    {
        title: "Databases",
        icon: <FaDatabase />,
        colorText: "text-emerald-400",
        colorHover: "group-hover:text-emerald-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]",
        borderHover: "hover:border-emerald-500/30",
        skills: [
            { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL DB" },
            { name: "SQL", icon: <FaDatabase />, desc: "Relational queries" },
            { name: "MySQL", icon: <SiMysql />, desc: "RDBMS" }
        ]
    },
    {
        title: "Tools & Technologies",
        icon: <FaTools />,
        colorText: "text-orange-400",
        colorHover: "group-hover:text-orange-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]",
        borderHover: "hover:border-orange-500/30",
        skills: [
            { name: "Git", icon: <FaGitAlt />, desc: "Version control" },
            { name: "Jupyter", icon: <SiJupyter />, desc: "Notebook environment" },
            { name: "Power BI", icon: <FaChartPie />, desc: "Data visualization" },
            { name: "Excel", icon: <FaFileExcel />, desc: "Data processing" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 drop-shadow-sm">
                        Technical Expertise
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="flex flex-col gap-12 sm:gap-16">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="w-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`${category.colorText} text-2xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{category.title}</h3>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
                            </div>

                            <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className={`group relative bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 shadow-lg ${category.shadowHover} ${category.borderHover}`}
                                    >
                                        <div className={`text-5xl text-slate-400/80 ${category.colorHover} transition-colors duration-300 flex items-center justify-center min-h-[60px]`}>
                                            {skill.icon}
                                        </div>
                                        <span className="text-slate-300 font-medium text-center text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>

                                        {/* Tooltip */}
                                        <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1a1a24] text-slate-200 text-xs py-2 px-3 rounded-lg whitespace-nowrap border border-white/10 shadow-xl pointer-events-none z-10 font-medium">
                                            {skill.desc}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1a1a24] border-b border-r border-white/10 rotate-45"></div>
                                        </div>
                                    </motion.div>
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
