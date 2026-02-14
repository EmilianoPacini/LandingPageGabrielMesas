import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const { t } = useLanguage();
    // Fallback
    const faqs = t.faq?.list || [];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-deep-black overflow-hidden relative">
             <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                     <span className="font-rajdhani text-brand-cyan uppercase tracking-[0.4em] text-2xl font-semibold mb-4 block">{t.faq.title}</span>
                    <h2 className="font-orbitron text-4xl font-bold text-white md:text-5xl">
                        {t.faq.subtitle}
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-white/10 bg-zinc-900/30 backdrop-blur-sm overflow-hidden group"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                            >
                                <span className="font-rajdhani text-lg md:text-xl text-white font-medium pr-8">
                                    {item.q}
                                </span>
                                <span className={`text-brand-cyan transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 font-rajdhani text-gray-400 leading-relaxed text-base md:text-lg border-t border-white/5">
                                    {item.a}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default FAQ;
