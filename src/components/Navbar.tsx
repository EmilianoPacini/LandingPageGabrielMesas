import { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/Logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stop Lenis scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [mobileMenuOpen, lenis]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${mobileMenuOpen ? 'transition-none' : 'transition-all duration-300'} ${
        scrolled ? 'py-4' : 'py-6'
      } ${
        scrolled && !mobileMenuOpen ? 'bg-deep-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => lenis?.scrollTo('#hero', { duration: 1.5 })}
        >
           <div className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
               <img src={logo} alt="Studio Infinius Logo" className="h-full w-full object-cover" />
           </div>
           <span className="font-orbitron font-bold text-xl text-white tracking-widest group-hover:text-brand-cyan transition-colors">
               STUDIO INFINIUS
           </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
            {[
              { name: t.navbar.services, href: '#features' },
              { name: t.navbar.about, href: '#specs' },
              { name: t.navbar.gallery, href: '#gallery' },
              { name: t.navbar.faq, href: '#faq' },
              { name: t.navbar.contact, href: '#contact' }
            ].map((item) => (
                <a 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      lenis?.scrollTo(item.href, { duration: 1.5 });
                    }}
                    className="font-rajdhani text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-brand-cyan transition-colors relative group"
                >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
                </a>
            ))}

            {/* Language Selector */}
            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-6 h-6">
                {['es', 'en', 'pt'].map((lang) => (
                    <button 
                        key={lang}
                        onClick={() => setLanguage(lang as any)}
                        className={`font-rajdhani text-xs font-bold transition-colors uppercase ${language === lang ? 'text-brand-cyan' : 'text-gray-500 hover:text-white'}`}
                    >
                        {lang}
                    </button>
                ))}
            </div>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
            className="md:hidden text-white hover:text-brand-cyan transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.05 }}
                    className="fixed inset-0 z-40 bg-deep-black/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden h-screen w-screen touch-none"
                >
                    <div className="flex flex-col items-center gap-8">
                        {[
                          { name: t.navbar.services, href: '#features' },
                          { name: t.navbar.about, href: '#specs' },
                          { name: t.navbar.gallery, href: '#gallery' },
                          { name: t.navbar.faq, href: '#faq' },
                          { name: t.navbar.contact, href: '#contact' }
                        ].map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileMenuOpen(false);
                                  lenis?.start();
                                  lenis?.scrollTo(item.href, { duration: 1.5 });
                                }}
                                className="font-orbitron text-xl font-bold uppercase tracking-widest text-white hover:text-brand-cyan transition-colors text-center"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        {['es', 'en', 'pt'].map((lang) => (
                            <button 
                                key={lang}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLanguage(lang as any);
                                    // Optional: close menu on language switch or keep open? keeping open for now.
                                }}
                                className={`font-rajdhani text-lg font-bold transition-colors uppercase py-2 px-4 touch-auto ${language === lang ? 'text-brand-cyan border-b-2 border-brand-cyan' : 'text-gray-500 hover:text-white'}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
