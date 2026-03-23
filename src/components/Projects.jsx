import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import conceptHubImg from '../assets/concepthub.png';
import mediRapidImg from '../assets/medirapid.png';
import dhrmsImg from '../assets/dhrms.png';

const projects = [
    {
        title: 'ConceptHub',
        subtitle: 'Knowledge Sharing Platform',
        description: 'A social knowledge-sharing platform where users can post, like, comment, and follow others. Features real-time messaging, optimized search, and infinite scrolling. Improved query performance using indexing and reduced API overhead using debouncing and lazy loading.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'TanStack Query', 'Zustand', 'Socket.io', 'Tailwind CSS'],
        github: import.meta.env.VITE_APP_GITHUB_CONCEPTHUB,
        demo: import.meta.env.VITE_APP_CONCEPTHUB_DEPLOY_LINK,
        image: conceptHubImg,
    },
    {
        title: 'MediRapid',
        subtitle: 'Medical Management System',
        description: 'An emergency response platform designed to locate the nearest hospitals quickly and efficiently. Built with an optimized backend to ensure rapid hospital search queries during critical moments.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'REST APIs', 'GROQ API'],
        github: import.meta.env.VITE_APP_GITHUB_MEDIRAPID,
        demo: '#',
        image: mediRapidImg,
    },
    {
        title: 'DHRMS',
        subtitle: 'Digital Health Record Management System',
        description: 'A secure digital health platform for managing patient records and medical histories. Improved data accessibility and reduced manual handling by 40%. Features optimized backend logic and efficient database queries, resulting in 30% faster data retrieval and 35% reduced latency. Enhanced overall user experience for medical staff with a reliable and user-friendly interface.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'Vite', 'JavaScript'],
        github: import.meta.env.VITE_APP_GITHUB_DHRMS,
        demo: '#',
        image: dhrmsImg,
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"]
    });

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const xTransform = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgess, opacity: opacityProgess, x: xTransform }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}
        >
            {/* Image side */}
            <motion.div
                whileHover={{ scale: 1.05, rotateY: index % 2 === 1 ? -5 : 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:w-1/2 relative perspective-1000"
            >
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-dark-border aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d">
                    <motion.div
                        initial={{ backgroundColor: "rgba(59, 130, 246, 0.4)" }}
                        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        className="absolute inset-0 z-10 mix-blend-overlay transition-colors duration-500"
                    />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </motion.div>

            {/* Content side */}
            <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 1 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} z-20`}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-brand-accent font-medium tracking-wide mb-2"
                >
                    Featured Project
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-4xl font-black text-white mb-2 drop-shadow-lg"
                >
                    {project.title}
                </motion.h3>
                <motion.h4
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-xl text-slate-300 font-medium mb-6"
                >
                    {project.subtitle}
                </motion.h4>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                    className="bg-dark-card/90 backdrop-blur-md border border-dark-border p-6 rounded-xl shadow-2xl w-full text-slate-300 mb-6 relative hover:border-brand-primary/50 transition-colors"
                >
                    <p className="leading-relaxed">{project.description}</p>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, staggerChildren: 0.1 }}
                    className={`flex flex-wrap gap-3 mb-8 w-full ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                    {project.tech.map((tech, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (i * 0.05) }}
                            whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                            key={i}
                            className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20 cursor-default"
                        >
                            {tech}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="flex items-center gap-6"
                >
                    <motion.a whileHover={{ scale: 1.2, color: "#fff" }} href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400">
                        <FaGithub size={28} />
                    </motion.a>
                    {project.demo !== '#' && (
                        <motion.a whileHover={{ scale: 1.2, color: "#06b6d4" }} href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400">
                            <FaExternalLinkAlt size={26} />
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-dark-card/5 relative overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 -right-40 w-[600px] h-[600px] border border-brand-primary/10 rounded-full"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 drop-shadow-sm">
                        Featured <span className="text-brand-primary">Projects</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1 }}
                        className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"
                    />
                </motion.div>
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
