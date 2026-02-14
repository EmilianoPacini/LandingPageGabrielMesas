import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="gallery" ref={containerRef} className="py-32 bg-deep-black relative">
      <div className="container mx-auto px-4">
        <motion.div style={{ y }} className="mb-24 text-center">
            <span className="font-rajdhani text-brand-cyan uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">{t.gallery.visualRecords}</span>
          <motion.h2 
            className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.gallery.title} <span className="text-neon-purple">{t.gallery.subtitle}</span>
          </motion.h2>
        </motion.div>

        {/* Centered Vertical GIF */}
        <div className="flex justify-center">
          <motion.div 
              className="relative w-full max-w-md h-[450px] md:h-[700px] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
              {/* Decorative border frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-black/60 via-black/40 to-black/60 shadow-2xl shadow-neon-purple/10">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-cyan/60 rounded-tl-2xl z-20" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-cyan/60 rounded-tr-2xl z-20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-cyan/60 rounded-bl-2xl z-20" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-cyan/60 rounded-br-2xl z-20" />
                  
                  {/* GIF */}
                  <img 
                      src="/images/Mesa.gif" 
                      alt="Mesa Infinity Preview" 
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                  />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
                      <span className="font-rajdhani text-brand-cyan/80 tracking-[0.3em] text-xs uppercase block text-center">
                          ∞ Live Preview
                      </span>
                  </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
