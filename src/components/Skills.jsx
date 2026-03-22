import { motion } from 'framer-motion';
import {
    SiCplusplus, SiJavascript, SiHtml5, SiNodedotjs,
    SiReact, SiExpress, SiTailwindcss, SiMongodb,
    SiMysql, SiGithub
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaDatabase } from 'react-icons/fa';

const skills = [
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/30' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-400', bg: 'bg-gray-400/10', border: 'border-gray-400/30' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', bg: 'bg-green-600/10', border: 'border-green-600/30' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/30' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
    { name: 'SQL', icon: FaDatabase, color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/30' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white', bg: 'bg-white/10', border: 'border-white/30' },
    { name: 'VS Code', icon: VscCode, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { name: 'DSA', icon: VscCode, color: 'text-brand-secondary', bg: 'bg-brand-secondary/10', border: 'border-brand-secondary/30' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 }
    }
};

// Continuous floating animation generator
const generateFloatAnimation = (index) => ({
    y: [0, (index % 2 === 0 ? -15 : -10), 0],
    rotate: [0, (index % 3 === 0 ? 3 : -3), 0],
    transition: {
        duration: 3 + (index * 0.2),
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
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 drop-shadow-sm">
                        My <span className="text-brand-secondary">Skills</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 bg-gradient-to-r from-brand-secondary to-brand-primary mx-auto rounded-full"
                    />
                    <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A comprehensive list of the technologies, tools, and concepts I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.15,
                                rotate: 0,
                                y: -10,
                                zIndex: 20,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            animate={generateFloatAnimation(index)}
                            className="relative"
                        >
                            {/* Glow effect that appears on hover */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${skill.bg.replace('/10', '')} to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                            <div className={`relative flex flex-col items-center justify-center p-8 bg-dark-card/60 backdrop-blur-md border border-dark-border rounded-2xl cursor-pointer group hover:border-${skill.color.split('-')[1]}-${skill.color.split('-')[2]} transition-colors duration-300 shadow-xl overflow-hidden`}>

                                {/* Diagonal sweep highlight on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-sweep pointer-events-none" />

                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`p-5 rounded-full ${skill.bg} mb-5 group-hover:scale-110 shadow-inner`}
                                >
                                    <skill.icon className={`text-5xl ${skill.color} filter drop-shadow-lg`} />
                                </motion.div>

                                <h3 className="text-slate-300 font-bold text-lg text-center group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                                    {skill.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
