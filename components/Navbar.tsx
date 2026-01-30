
import React, { useState, useEffect } from 'react';
import { Menu, X, Maximize, Minimize } from 'lucide-react';
import { NAV_ITEMS, SIGNUP_URL } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept local anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const navOffset = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed w-full z-[60] vintage-paper-texture border-b-4 border-black py-2 bg-[#f0e6d2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <Logo className="w-12 h-12 sm:w-16 sm:h-16" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <div className="flex items-center space-x-3 xl:space-x-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-black hover:text-[#d32f2f] text-[10px] xl:text-sm font-comic tracking-widest transition-all hover:scale-110 active:scale-90 whitespace-nowrap px-1 py-1 border-2 border-transparent hover:border-black/5 hover:bg-black/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="h-8 w-[2px] bg-black/20 mx-1"></div>
            
            {/* Fullscreen Toggle */}
            <button 
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              className="p-1.5 border-2 border-black bg-white/50 hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_#000] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>

            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d32f2f] text-white px-4 py-2 xl:px-8 xl:py-3 border-4 border-black font-comic text-base xl:text-xl shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95 whitespace-nowrap"
            >
              JOIN NOW!
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={toggleFullscreen}
              className="p-1.5 border-2 border-black bg-white/50 active:translate-y-[1px]"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 border-4 border-black bg-white/50 active:translate-y-[1px]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen vintage-paper-texture border-b-4 border-black bg-[#f0e6d2]' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-black block px-3 py-4 sm:py-5 text-xl sm:text-2xl font-comic border-b-2 border-dotted border-black/10 hover:bg-[#d32f2f] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#d32f2f] text-white block px-3 py-6 font-comic text-3xl border-4 border-black shadow-[6px_6px_0px_#000]"
            >
              JOIN NOW!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
