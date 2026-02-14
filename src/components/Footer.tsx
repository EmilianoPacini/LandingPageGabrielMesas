import { useLanguage } from '../context/LanguageContext';
import { Linkedin } from 'lucide-react';
import EmiCara from '../assets/Emi_Cara.jpeg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-transparent py-16 text-white border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        
        {/* Brand & Copyright */}
        <div className="mb-8 flex flex-col items-center md:mb-0 md:items-start">
          <h2 className="mb-2 font-orbitron text-2xl font-bold tracking-wider">
            {t.footer.brand}
          </h2>
          <p className="text-sm text-gray-500">
            {t.footer.copyright}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center md:items-end">
          <div className="flex gap-6 text-xl text-gray-400">
            <a 
              href="https://www.instagram.com/studio.infinius?igsh=ZG9mbnh4c2YwbWdr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
        </div>
        </div>

        {/* Developer Credit */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          <span className="text-brand-cyan text-xs font-rajdhani tracking-widest mb-2 uppercase">Desarrollador de la página web</span>
          <a 
            href="https://www.linkedin.com/in/emilianopacini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 md:gap-6 bg-white/5 px-6 py-3 md:px-10 md:py-5 rounded-full backdrop-blur-sm border border-brand-cyan/30 shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all group hover:bg-white/10 hover:border-brand-cyan/50 hover:scale-105"
          >
            <img 
              src={EmiCara} 
              alt="Emiliano Pacini" 
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 border-brand-cyan shadow-lg shadow-brand-cyan/20 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            />
            <div className="flex flex-col items-start gap-0.5 md:gap-1">
              <span className="text-white font-rajdhani font-semibold text-base md:text-lg leading-none group-hover:text-brand-cyan transition-colors">Emiliano Pacini</span>
              <span className="text-gray-400 text-[10px] md:text-xs font-rajdhani tracking-wider">Desarrollador de Software</span>
            </div>
            <div className="ml-1 md:ml-2 text-gray-400 group-hover:text-[#0077b5] transition-colors p-1 md:p-2 rounded-full">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </a>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;
