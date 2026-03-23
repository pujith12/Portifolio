import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import cloudImage from '../assets/cloud_image.jpg';
import computationalTheoryImage from '../assets/Computational_Theory_image.jpg';
import hardwareOSImage from '../assets/Hardware_and_Operating_systems_image.jpg';
import networkingImage from '../assets/The_Bits_and_Bytes_of_Computer_Networking_image.jpg';

const certifications = [
    {
        title: "Cloud Computing",
        issuer: "Google",
        date: "2024",
        link: import.meta.env.VITE_APP_CLOUD_COMPUTING_CERTIFICATE,
        image: cloudImage,
        description: "Mastered fundamental concepts of cloud infrastructure, services, and deployment models on Google Cloud Platform."
    },
    {
        title: "Computational Theory",
        issuer: "Google",
        date: "2024",
        link: import.meta.env.VITE_APP_COMPUTATIONAL_THEORY_CERTIFICATE,
        image: computationalTheoryImage,
        description: "In-depth study of algorithms, automata theory, and the mathematical foundations of computer science."
    },
    {
        title: "Hardware and Operating Systems",
        issuer: "Google",
        date: "2023",
        link: import.meta.env.VITE_APP_INTRODUCTION_TO_HARDWARE_AND_OPERATING_SYSTEMS_CERTIFICATE,
        image: hardwareOSImage,
        description: "Explored the internal workings of computer hardware and the architecture of modern operating systems."
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "2023",
        link: import.meta.env.VITE_APP_THE_BITS_AND_BYTES_OF_COMPUTER_NETWORKING_CERTIFICATE,
        image: networkingImage,
        description: "Comprehensive understanding of network protocols, OSI model, and troubleshooting network connectivity."
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Professional <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Industry-recognized certifications validating technical expertise and commitment to continuous learning in the ever-evolving tech landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-card/40 backdrop-blur-xl border border-dark-border/50 rounded-3xl p-8 hover:border-brand-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Glassmorphic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                                {/* Badge Image */}
                                <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    {/* <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-brand-primary text-sm font-semibold tracking-wider uppercase">
                                        <HiOutlineAcademicCap className="text-xl" />
                                        <span>{cert.issuer} Verified</span>
                                    </div> */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {cert.description}
                                    </p>

                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/30 rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300 transform active:scale-95"
                                        >
                                            View Certificate
                                            <HiOutlineExternalLink className="text-lg" />
                                        </a>
                                        <span className="text-slate-500 text-sm italic">Issued {cert.date}</span>
                                    </div>
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
