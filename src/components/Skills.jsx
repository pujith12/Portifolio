import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaCode, FaServer, FaTools, FaBrain, FaWindows, FaLinux, FaGithub, FaFileExcel, 
  FaChartBar, FaChartLine, FaMagic
} from 'react-icons/fa';
import { 
  SiMongodb, SiJupyter, SiCplusplus, SiC, SiMysql 
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skillCategories = [
    {
        title: "Programming Languages & Web",
        icon: <FaCode />,
        colorText: "text-blue-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]",
        borderHover: "hover:border-blue-500/30",
        skills: [
            { name: "Python", icon: <FaPython />, colorHover: "group-hover:text-yellow-400", desc: "General purpose & AI" },
            { name: "C", icon: <SiC />, colorHover: "group-hover:text-blue-500", desc: "Foundation & OS" },
            { name: "C++", icon: <SiCplusplus />, colorHover: "group-hover:text-blue-600", desc: "Systems & DSA" },
            { name: "Java", icon: <DiJava className="text-6xl -my-3" />, colorHover: "group-hover:text-red-500", desc: "Enterprise apps" },
            { name: "HTML", icon: <FaHtml5 />, colorHover: "group-hover:text-orange-500", desc: "Page structure" },
            { name: "CSS", icon: <FaCss3Alt />, colorHover: "group-hover:text-blue-400", desc: "Styling & Layout" },
            { name: "JavaScript", icon: <FaJs />, colorHover: "group-hover:text-yellow-400", desc: "Web interactivity" },
            { name: "React", icon: <FaReact />, colorHover: "group-hover:text-cyan-400", desc: "UI Component library" },
            { name: "Node.js", icon: <FaNodeJs />, colorHover: "group-hover:text-green-500", desc: "JavaScript runtime" }
        ]
    },
    {
        title: "Database & Operating Systems",
        icon: <FaServer />,
        colorText: "text-emerald-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]",
        borderHover: "hover:border-emerald-500/30",
        skills: [
            { name: "RDBMS", icon: <FaDatabase />, colorHover: "group-hover:text-slate-300", desc: "Relational systems" },
            { name: "SQL", icon: <FaDatabase />, colorHover: "group-hover:text-blue-400", desc: "Database querying" },
            { name: "MongoDB", icon: <SiMongodb />, colorHover: "group-hover:text-green-500", desc: "NoSQL DB" },
            { name: "Linux", icon: <FaLinux />, colorHover: "group-hover:text-yellow-500", desc: "Open-source OS" },
            { name: "Windows", icon: <FaWindows />, colorHover: "group-hover:text-blue-400", desc: "Microsoft OS" }
        ]
    },
    {
        title: "Tools/Platforms",
        icon: <FaTools />,
        colorText: "text-orange-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]",
        borderHover: "hover:border-orange-500/30",
        skills: [
            { name: "Git", icon: <FaGitAlt />, colorHover: "group-hover:text-orange-600", desc: "Version control" },
            { name: "GitHub", icon: <FaGithub />, colorHover: "group-hover:text-white", desc: "Code hosting" },
            { name: "Power BI", icon: <FaChartBar />, colorHover: "group-hover:text-yellow-500", desc: "Data visualization" },
            { name: "Excel", icon: <FaFileExcel />, colorHover: "group-hover:text-green-600", desc: "Data processing" },
            { name: "VS Code", icon: <FaCode />, colorHover: "group-hover:text-blue-500", desc: "Code editor" },
            { name: "Jupyter", icon: <SiJupyter />, colorHover: "group-hover:text-orange-500", desc: "Notebook environment" },
            { name: "IDLE", icon: <FaPython />, colorHover: "group-hover:text-yellow-400", desc: "Python IDE" },
            { name: "MySQL", icon: <SiMysql />, colorHover: "group-hover:text-blue-400", desc: "RDBMS" }
        ]
    },
    {
        title: "Data Analytics & AI",
        icon: <FaBrain />,
        colorText: "text-purple-400",
        shadowHover: "hover:shadow-[0_0_20px_rgba(192,132,252,0.2)]",
        borderHover: "hover:border-purple-500/30",
        skills: [
            { name: "Predictive Analytics", icon: <FaChartLine />, colorHover: "group-hover:text-blue-400", desc: "Statistical forecasting" },
            { name: "Machine Learning", icon: <FaBrain />, colorHover: "group-hover:text-purple-400", desc: "AI algorithms" },
            { name: "Prompt Engineering", icon: <FaMagic />, colorHover: "group-hover:text-yellow-300", desc: "AI interaction setup" },
            { name: "LLMs", icon: <FaBrain />, colorHover: "group-hover:text-indigo-400", desc: "Large Language Models" }
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
                                        <div className={`text-5xl text-slate-400/80 ${skill.colorHover} transition-colors duration-300 flex items-center justify-center min-h-[60px]`}>
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
