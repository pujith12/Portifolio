import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "a828c29d-736f-4e08-84cd-50c2f2891a86");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset();
                setTimeout(() => setIsSubmitted(false), 4000);
            } else {
                alert("Something went wrong! Please email me directly.");
            }
        } catch (err) {
            alert("Error connecting to mail server. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-6 drop-shadow-sm">
                        Get In Touch
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
                        I am actively exploring opportunities in Data Science, AI, and Machine Learning. Whether you have a question or just want to say hi, I will try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contact Info Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex items-center gap-6 hover:border-blue-500/50 transition-colors shadow-lg">
                            <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Email Me</h4>
                                <a href="mailto:pujithsathambakam@gmail.com" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                                    pujithsathambakam@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-500/50 transition-colors shadow-lg">
                            <div className="w-14 h-14 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Call Me</h4>
                                <a href="tel:+919550985411" className="text-white text-lg font-medium hover:text-purple-400 transition-colors">
                                    +91 9550985411
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
                            <div>
                                <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">Connect With Me</h4>
                                <div className="flex gap-4">
                                    <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#181824] flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href={import.meta.env.VITE_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#181824] flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition-all duration-300 shadow-md">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://www.instagram.com/pujith_reddy_07/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#181824] flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md">
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0f0f15]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-[#181824] border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full bg-[#181824] border border-white/5 focus:border-purple-500 rounded-xl px-4 py-3 text-white outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" required className="w-full bg-[#181824] border border-white/5 focus:border-indigo-500 rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none" placeholder="How can I help you?"></textarea>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-500/20 border border-green-500/50 text-green-400 text-center py-3 rounded-xl font-medium"
                                >
                                    Message sent successfully!
                                </motion.div>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg ${
                                        isSubmitting 
                                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white hover:shadow-blue-500/25'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
