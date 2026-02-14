import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SpecItem = ({ title, description, index }: { title: string, description: string, index: number }) => {
  return (
    <motion.div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur-md transition-all hover:border-brand-cyan/40`}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
        {/* Corner Markers */}
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-brand-cyan opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-brand-cyan opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-brand-cyan opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-brand-cyan opacity-50 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="mb-2 font-orbitron text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
          {title}
        </h3>
        <div className="h-[1px] w-12 bg-zinc-700 mb-4 group-hover:bg-brand-cyan transition-colors" />
        <p className="font-rajdhani text-lg text-gray-400 group-hover:text-gray-300">
          {description}
        </p>
      </div>
      
      {/* Subtle Gradient Hover Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-cyan/5 via-transparent to-neon-purple/5 opacity-0 transition-opacity duration-500 hover:opacity-20" />
      
       {/* Data Code */}
       <div className="absolute bottom-4 right-6 text-[10px] font-mono text-zinc-600 group-hover:text-brand-cyan/50 transition-colors">
           SPEC-0{index + 1}
       </div>
    </motion.div>
  );
};

const Specs = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="specs" ref={containerRef} className="relative py-20 md:py-32 bg-deep-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
         <motion.div style={{ y: headerY }} className="mb-20">
             <span className="font-rajdhani text-brand-cyan uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">{t.specs.capsTitle}</span>
           <motion.h2
             className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-6xl"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             {t.specs.title} <span className="text-zinc-500">{t.specs.subtitle}</span>
           </motion.h2>
         </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {t.specs.list.map((spec, index) => (
               <SpecItem key={index} {...spec} index={index} />
             ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
