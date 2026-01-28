
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SIGNUP_URL } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 py-2 shadow-2xl' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <span className="font-heading text-2xl hidden md:block text-[#FFB800]">DINO'S GYM</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-[#E63946] px-3 py-2 text-sm font-heading tracking-wider transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E63946] hover:bg-[#D62828] text-white px-6 py-2 rounded-none text-sm font-heading tracking-widest transition-all transform hover:scale-105 active:scale-95"
              >
                JOIN NOW
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-black border-b border-zinc-800' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#E63946] block px-3 py-4 text-base font-heading tracking-wider border-b border-zinc-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#E63946] text-white block px-3 py-4 text-center font-heading tracking-widest mt-4"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
