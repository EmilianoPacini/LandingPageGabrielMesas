
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';


const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect: Text moves down slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  // Fade out effect: Text disappears as user scrolls down
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Scroll indicator fade out
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div 
      id="hero"
      ref={containerRef} 
      className="relative h-[65dvh] md:h-screen w-full overflow-hidden bg-deep-black"
    >
      {/* Background Video - Single Play */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-[55%_center] md:object-center opacity-80"
        src="/videos/AnimacionHero.mp4"
        autoPlay
        muted
        playsInline
        loop={false}
        poster="/videos/poster.jpg" 
        onEnded={(e) => {
          e.currentTarget.pause();
        }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_120%)] pointer-events-none" />

      {/* Content with Parallax & Fade */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div style={{ y, opacity }} className="relative">
          <h1 className="mb-4 font-orbitron text-5xl font-bold tracking-wide text-white mix-blend-screen md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="mt-4 font-rajdhani text-lg font-medium tracking-[0.15em] text-cyan-100/80 md:text-2xl md:tracking-[0.3em]"
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
 
        <span className="font-rajdhani text-[10px] uppercase tracking-[0.3em] text-brand-cyan/70">{t.hero.scroll}</span>
        <motion.div 
          className="h-16 w-[1px] bg-gradient-to-b from-brand-cyan to-transparent"
          animate={{ height: [0, 64, 0], opacity: [0, 1, 0], translateY: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
