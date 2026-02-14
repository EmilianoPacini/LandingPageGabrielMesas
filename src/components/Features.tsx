import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    span: "md:col-span-2",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    span: "md:col-span-2",
  },
];

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const cardRef = useRef(null);
  
  return (
    <motion.div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-cyan/50 hover:bg-zinc-900/60 ${feature.span}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      {/* Holographic Scanline Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]" />
      
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-cyan/0 via-transparent to-neon-purple/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-cyan/20 group-hover:ring-brand-cyan group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                {feature.icon}
            </div>
            
            <h3 className={`mb-3 font-orbitron text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors ${index === 3 ? 'italic' : ''}`}>
                {feature.title}
            </h3>
            
            <p className="font-rajdhani text-lg font-medium text-gray-400 group-hover:text-gray-200 leading-relaxed">
                {feature.description}
            </p>
          </div>
          

      </div>
    </motion.div>
  );
};

const Features = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Merge translation data with static data (icons, spans)
  const features = t.features.list.map((item, index) => ({
      ...item,
      ...featuresData[index]
  }));

  return (
    <section id="features" ref={containerRef} className="relative py-32 text-white overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

       {/* Section Header */}
       <motion.div style={{ y: headerY }} className="relative z-10 container mx-auto px-4 mb-20 text-center">
            <span className="font-rajdhani text-brand-cyan uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">{t.features.capsTitle}</span>
            <motion.h2
              className="font-orbitron text-5xl font-bold tracking-wider text-white md:text-7xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t.features.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-neon-purple">{t.features.subtitle}</span>
            </motion.h2>
       </motion.div>

       <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
         {features.map((feature, index) => (
           <FeatureCard key={index} feature={feature} index={index} />
         ))}
       </div>

       {/* Decorative Elements */}
       <div className="absolute top-10 right-10 flex flex-col items-end gap-2 opacity-50">
            <div className="w-1 h-20 bg-brand-cyan/20" />
            <span className="text-[10px] font-orbitron text-brand-cyan">{t.features.sysActive}</span>
       </div>
    </section>
  );
};

export default Features;
