import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering",
        institution: "Lovely Professional University, Punjab",
        duration: "August 2023 - Present",
        result: "6.84 CGPA",
        type: "CGPA"
    },
    {
        degree: "Intermediate",
        field: "MPC",
        institution: "Sri Chaitanya Junior College, Vijayawada, Andhra Pradesh",
        duration: "July 2022 - April 2023",
        result: "94%",
        type: "Percentage"
    },
    {
        degree: "Matriculation",
        field: "Secondary Education",
        institution: "P.V.S Concept School, Mudigubba, Andhra Pradesh",
        duration: "July 2020 - April 2021",
        result: "95%",
        type: "Percentage"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-dark-bg relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-brand-secondary">Education</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-border"></div>

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-24 py-8 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-10 w-16 h-16 bg-dark-card border-2 border-brand-secondary rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-brand-secondary/20 transition-all duration-300">
                                <FaGraduationCap className="text-2xl text-brand-secondary" />
                            </div>

                            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-brand-secondary/50 transition-colors shadow-xl">
                                <span className="inline-block py-1 px-4 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-4">
                                    {item.duration}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">
                                    {item.degree}
                                </h3>
                                <h4 className="text-lg text-slate-300 font-medium mb-3">{item.field}</h4>
                                <p className="text-brand-accent font-medium text-lg mb-4">
                                    {item.institution}
                                </p>

                                <div className="bg-dark-bg rounded-xl px-5 py-3 inline-block border border-dark-border group-hover:border-brand-secondary/30 transition-colors">
                                    <p className="text-slate-400">
                                        <span className="text-white font-bold">{item.type}:</span> {item.result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
