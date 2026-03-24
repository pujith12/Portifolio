import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';
import cloudImage from '../assets/cloud_image.jpg';
import compTheoryImage from '../assets/Computational_Theory_image.jpg';
import networkingImage from '../assets/The_Bits_and_Bytes_of_Computer_Networking_image.jpg';

const Certifications = () => {
    const certs = [
        {
            title: "Generative AI",
            issuer: "Infosys",
            image: compTheoryImage,
            description: "An intensive certification covering the foundational aspects of Generative AI, prompt composition, LLM limitations, and ethical considerations.",
            color: "blue",
            link: import.meta.env.VITE_APP_GENERATIVE_AI_CERTIFICATION,
            year: "2025"
        },
        {
            title: "Prompt Engineering",
            issuer: "Specialization",
            image: networkingImage,
            description: "Developed expertise in crafting precise prompt structures to optimize large language model outputs and enhance multi-step reasoning capabilities.",
            color: "purple",
            link: import.meta.env.VITE_APP_PROMPT_ENGINEERING_CERTIFICATION,
            year: "2025"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            image: cloudImage,
            description: "Mastered fundamental concepts of cloud infrastructure, services, and deployment models on Google Cloud Platform.",
            color: "indigo",
            link: import.meta.env.VITE_APP_CLOUD_COMPUTING_CERTIFICATION,
            year: "2025"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-[#050505] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6 drop-shadow-sm">
                        Certifications
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={`bg-gradient-to-br from-[#0f0f15] to-[#13131c] border border-white/5 hover:border-${cert.color}-500/50 rounded-2xl overflow-hidden group shadow-lg flex flex-col`}
                        >
                            <div className="w-full h-56 overflow-hidden relative border-b border-white/5">
                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f15] to-transparent opacity-80" />
                                <div className={`absolute top-4 right-4 text-${cert.color}-400 text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-[#0f0f15]/50 p-2 rounded-full backdrop-blur-md`}>
                                    <FaCertificate />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{cert.title}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <FaAward className={`text-${cert.color}-500`} />
                                    <h4 className={`text-${cert.color}-400 font-medium tracking-wide`}>{cert.issuer}</h4>
                                </div>
                                <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                                    {cert.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                                    {cert.link && cert.link !== "#" ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-5 py-2 rounded-full bg-${cert.color}-500/10 border border-${cert.color}-500/30 text-${cert.color}-300 hover:bg-${cert.color}-500/20 hover:text-white transition-colors text-sm font-semibold tracking-wide`}
                                        >
                                            View Certificate
                                        </a>
                                    ) : (
                                        <div className={`px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-500 text-sm font-medium cursor-not-allowed`}>
                                            Certificate Offline
                                        </div>
                                    )}
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Issued {cert.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
