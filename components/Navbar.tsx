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

  return (
    <nav className="fixed w-full z-[60] bg-[#fdf1d6] border-b-4 border-black py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Logo className="w-14 h-14" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-black hover:text-[#d32f2f] text-lg font-comic tracking-wider transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Fullscreen Toggle */}
              <button 
                onClick={toggleFullscreen}
                title="Toggle Fullscreen"
                className="p-2 border-2 border-black bg-white hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_#000]"
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>

              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d32f2f] text-white px-8 py-3 border-4 border-black font-comic text-xl shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                JOIN NOW!
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleFullscreen}
              className="p-2 border-2 border-black bg-white"
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-4 border-black bg-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-[#fdf1d6] border-b-4 border-black' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-black block px-3 py-6 text-2xl font-comic border-b-2 border-dotted border-black/20"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#d32f2f] text-white block px-3 py-6 font-comic text-3xl"
          >
            JOIN NOW!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;