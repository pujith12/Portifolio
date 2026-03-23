import { motion } from 'framer-motion';
import {
    SiCplusplus, SiJavascript, SiHtml5, SiNodedotjs,
    SiReact, SiExpress, SiTailwindcss, SiMongodb,
    SiMysql, SiGithub, SiPostman, SiPostgresql, SiVite
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaDatabase, FaCode, FaDesktop, FaNetworkWired, FaBrain, FaTerminal, FaCss3Alt, FaServer, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { name: 'Java', icon: FaJava, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { name: 'Python', icon: FaPython, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: 'ReactJS', icon: SiReact, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', bg: 'bg-green-500/10' },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-400', bg: 'bg-gray-400/10' },
            { name: 'REST APIs', icon: FaServer, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', bg: 'bg-blue-600/10' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', bg: 'bg-green-600/10' },
        ]
    },
    {
        title: "Core CS",
        skills: [
            { name: 'DSA', icon: FaCode, color: 'text-brand-secondary', bg: 'bg-brand-secondary/10' },
            { name: 'OS', icon: FaDesktop, color: 'text-purple-400', bg: 'bg-purple-400/10' },
            { name: 'CN', icon: FaNetworkWired, color: 'text-orange-400', bg: 'bg-orange-400/10' },
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: 'GitHub', icon: SiGithub, color: 'text-white', bg: 'bg-white/10' },
            { name: 'VS Code', icon: VscCode, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', bg: 'bg-orange-600/10' },
            { name: 'Postman', icon: SiPostman, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { name: 'Vite', icon: SiVite, color: 'text-purple-400', bg: 'bg-purple-400/10' },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12 }
    }
};

const generateFloatAnimation = (idx) => ({
    y: [0, (idx % 2 === 0 ? -10 : -7), 0],
    transition: {
        duration: 4 + (idx * 0.5),
        repeat: Infinity,
        ease: "easeInOut",
    }
});

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-dark-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 transition-all duration-500">
                        My <span className="text-brand-secondary">Skills</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 bg-gradient-to-r from-brand-secondary to-brand-primary mx-auto rounded-full"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, catIdx) => (
                        <div key={catIdx} className="bg-dark-card/20 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 group">
                            <motion.h3
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: catIdx * 0.1 }}
                                className="text-xl font-bold text-white mb-6 flex items-center gap-3"
                            >
                                <span className="w-1.5 h-6 bg-brand-secondary rounded-full"></span>
                                <span className="text-brand-secondary">{category.title}</span>
                            </motion.h3>

                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="relative p-4 bg-dark-bg/40 border border-dark-border/40 rounded-xl flex items-center gap-3 hover:border-brand-primary/50 transition-all duration-300"
                                    >
                                        <div className={`p-2 rounded-lg ${skill.bg}`}>
                                            <skill.icon className={`text-2xl ${skill.color}`} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors truncate">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
