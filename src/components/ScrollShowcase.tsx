import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ScrollShowcase = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const panels = [
    {
      id: 'elegant',
      img: '/images/scenario-elegant-home.jpeg',
      title: t.scrollShowcase.panels.elegant,
      borderColor: 'border-white/20',
      shadowColor: 'shadow-white/10 bg-white/5'
    },
    {
      id: 'gamer',
      img: '/images/scenario-gamer-room.jpeg',
      title: t.scrollShowcase.panels.gamer,
      borderColor: 'border-neon-purple/50',
      shadowColor: 'shadow-neon-purple/30 bg-black/40'
    },
    {
      id: 'party',
      img: '/images/scenario-party.png',
      title: t.scrollShowcase.panels.party,
      borderColor: 'border-brand-cyan/50',
      shadowColor: 'shadow-brand-cyan/30 bg-black/40'
    }
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Horizontal Scroll
      const ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
              translateX: `-${(panels.length - 1) * 100}vw`,
              ease: "none",
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${panels.length * 1000}`,
                scrub: 0.6,
                pin: true,
              },
            }
          );
      }, triggerRef);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
        // Mobile: Normal Vertical Scroll
    });

    return () => mm.revert();
  }, [panels.length]);

  return (
    <section className="bg-deep-black text-white relative">
      <div ref={triggerRef} className="md:h-auto">
        <div 
            ref={sectionRef} 
            className="flex flex-col md:flex-row md:h-screen relative w-full md:w-auto overflow-hidden md:overflow-visible"
            style={{ width: window.innerWidth >= 768 ? `${panels.length * 100}vw` : '100%' }}
        >
          {panels.map((panel) => (
            <div key={panel.id} className="min-h-[50vh] md:min-h-0 md:h-[100dvh] w-full md:w-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden shrinkage-0 py-12 md:py-0">
                 
                 {/* 1. Creative Background Layer */}
                 <div className="absolute inset-0 z-0">
                    <img 
                        src={panel.img} 
                        alt="Background Blur" 
                        className="w-full h-full object-cover blur-3xl scale-110 opacity-40 brightness-75 saturate-150"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                 </div>

                 {/* 2. Main Image */}
                 <div className="relative z-10 w-full h-[40vh] md:h-full md:max-w-[80vw] flex items-end md:items-center justify-center p-4">
                    <img 
                        src={panel.img} 
                        alt={panel.title} 
                        className="w-auto h-auto max-h-[40vh] md:max-h-[75vh] max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                    />
                 </div>
                 
                 {/* 3. Text Box */}
                 <div className="relative z-20 w-full md:absolute md:bottom-24 md:left-24 px-6 md:pb-0 md:max-w-md flex justify-center md:justify-start -mt-8 md:mt-0">
                    <div className={`backdrop-blur-xl border ${panel.borderColor} p-6 rounded-2xl shadow-xl ${panel.shadowColor} transition-all duration-300 hover:bg-black/60 group w-full max-w-xs md:max-w-none`}>
                        <h3 className="font-orbitron text-white text-xl md:text-2xl font-bold tracking-wide leading-relaxed group-hover:tracking-wider transition-all duration-300 text-center md:text-left">
                            {panel.title}
                        </h3>
                        <div className={`mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mx-auto md:mx-0`} />
                    </div>
                 </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollShowcase;
