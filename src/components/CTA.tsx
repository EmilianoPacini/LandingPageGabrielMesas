import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();
  return (
    <section id="contact" className="relative h-[80vh] flex items-center justify-center bg-deep-black overflow-hidden">
        {/* Background Effects */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-cyan/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#b026ff_0%,_transparent_50%)] opacity-20 blur-[100px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h2 
            className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {t.cta.acquire} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">{t.cta.infinite}</span>
        </motion.h2>
        <p className="font-rajdhani text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t.cta.limited}
        </p>

        <motion.button 
            className="bg-brand-cyan text-black font-orbitron font-bold text-xl py-4 px-12 hover:brightness-110 transition-all duration-300 relative group rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                const message = t.cta.whatsappMessage;
                const url = `https://wa.me/5492616542804?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }}
        >
            <span className="relative font-orbitron font-bold text-xl text-black tracking-widest">
                {t.cta.preorder}
            </span>
        </motion.button>
        
        <div className="mt-8 font-mono text-xs text-zinc-600">
            {t.cta.secure}
        </div>
      </div>
    </section>
  );
};

export default CTA;
