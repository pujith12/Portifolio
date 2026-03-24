import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            degree: "B.Tech – Computer Science and Engineering",
            duration: "Aug 2023 – Present",
            scoreLabel: "CGPA",
            score: "6.6"
        },
        {
            institution: "Mangal Vidyalayam",
            degree: "Intermediate",
            duration: "Apr 2022 – Mar 2023",
            scoreLabel: "Percentage",
            score: "74%"
        },
        {
            institution: "Mangal Vidyalayam",
            degree: "Matriculation",
            duration: "Apr 2020 – Mar 2021",
            scoreLabel: "Percentage",
            score: "80%"
        }
    ];

    return (
        <section id="education" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6">
                        Education
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="relative border-l-2 border-slate-800/80 ml-2 md:max-w-3xl md:mx-auto pt-4 pb-4 px-6 md:px-10 space-y-12">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="relative"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-[#0a0a0a] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="bg-[#0f0f15]/80 backdrop-blur-md border border-white/5 p-8 rounded-xl hover:bg-[#13131c] transition-colors duration-300 shadow-lg group">
                                <h3 className="text-2xl font-bold text-white tracking-wide mb-2 group-hover:text-blue-300 transition-colors">
                                    {edu.institution}
                                </h3>
                                <h4 className="text-lg text-purple-400 font-medium mb-3">
                                    {edu.degree}
                                </h4>
                                <p className="text-slate-400 text-base mb-6">
                                    Duration: <span className="text-slate-300">{edu.duration}</span>
                                </p>

                                <div className="mt-auto border-t border-white/5 pt-4">
                                    <p className="text-blue-300 font-semibold text-lg tracking-wide">
                                        {edu.scoreLabel}: <span className="text-white">{edu.score}</span>
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
