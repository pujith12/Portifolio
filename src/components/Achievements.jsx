import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa';

const achievements = [
    {
        icon: FaTrophy,
        title: '200+ Problems Solved',
        platform: 'LeetCode, GeeksforGeeks, HackerRank',
        description: 'Consistently honing my algorithmic skills and problem-solving abilities by tackling challenging data structure and algorithm problems.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
        gradient: 'from-yellow-400/20',
        link: import.meta.env.VITE_APP_LEETCODE_PROFILE_URL,
        linkText: 'View Profile'
    },
    {
        icon: FaStar,
        title: '5-Star in C++',
        platform: 'HackerRank',
        description: 'Achieved a 5-star rating by demonstrating strong proficiency and deep understanding of advanced C++ programming concepts.',
        color: 'text-brand-primary',
        bg: 'bg-brand-primary/10',
        border: 'border-brand-primary/20',
        gradient: 'from-brand-primary/20',
        link: import.meta.env.VITE_APP_HACKER_RANK_PROFILE_URL,
        linkText: 'View Profile'
    },
    {
        icon: FaMedal,
        title: '2nd Place',
        platform: 'Intra-hostel Cognitive Ability Competition',
        description: 'Secured the runner-up position demonstrating exceptional logical reasoning, aptitude, and analytical skills at Lovely Professional University.',
        color: 'text-brand-secondary',
        bg: 'bg-brand-secondary/10',
        border: 'border-brand-secondary/20',
        gradient: 'from-brand-secondary/20',
        link: import.meta.env.VITE_APP_CONGNTIVE_ABILITY_COMPETITION_URL,
        linkText: 'View Certificate'
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-dark-bg relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-yellow-400/5 to-transparent blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Milestones & <span className="text-yellow-400">Achievements</span>
                    </h2>
                    <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`bg-dark-card border ${item.border} rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6`}>
                                <item.icon className={`text-3xl ${item.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <h4 className="text-brand-accent font-medium mb-4">{item.platform}</h4>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {item.description}
                            </p>

                            {item.link && (
                                <motion.a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className={`inline-flex items-center gap-2 ${item.color} font-bold hover:opacity-80 transition-all`}
                                >
                                    {item.linkText}
                                    <span className="text-xl">→</span>
                                </motion.a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
