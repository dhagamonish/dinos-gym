
import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden vintage-paper-texture px-4 sm:px-6">
      {/* Decorative Stamp */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-10 pointer-events-none hidden sm:flex">
        <div className="w-full h-full border-4 sm:border-8 border-[#d32f2f] rounded-full flex items-center justify-center text-[#d32f2f] font-comic text-2xl sm:text-4xl text-center leading-none p-4 uppercase transform -rotate-12">
          Guaranteed <br/> Results!
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 sm:mb-20 border-b-4 border-dotted border-black pb-12 sm:pb-16 text-center sm:text-left">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-6 sm:mb-8">
              <Logo className="w-12 h-12 sm:w-16 sm:h-16" />
              <div className="font-comic text-2xl sm:text-3xl text-black leading-none uppercase">
                DINO'S <br/> GYM
              </div>
            </div>
            <p className="font-typewriter text-xs sm:text-sm leading-tight text-black font-bold mb-8 max-w-sm mx-auto sm:mx-0 uppercase">
              The legendary home of hardcore bodybuilding and powerlifting in Solihull. We specialize in transforming lives through pure effort and high-quality iron. Iconic since 1994.
            </p>
          </div>

          <div>
            <h4 className="font-comic text-xl sm:text-2xl text-[#d32f2f] mb-4 sm:mb-8 uppercase border-b-4 border-black inline-block">MAP YOUR PATH</h4>
            <ul className="space-y-2 sm:space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="font-typewriter text-[10px] sm:text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors flex items-center justify-center sm:justify-start gap-2">
                    <span className="w-1 sm:w-2 h-1 sm:h-2 bg-black"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-comic text-xl sm:text-2xl text-[#d32f2f] mb-4 sm:mb-8 uppercase border-b-4 border-black inline-block">ENROLLMENT</h4>
            <ul className="space-y-2 sm:space-y-4">
              {['Standard Access', 'Student Discount', 'Corporate (JLR)', 'Day Passes'].map(link => (
                <li key={link}>
                  <a href="#memberships" className="font-typewriter text-[10px] sm:text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-comic text-xl sm:text-2xl text-[#d32f2f] mb-4 sm:mb-8 uppercase border-b-4 border-black inline-block">THE SOCIALS</h4>
            <div className="flex flex-col space-y-2 sm:space-y-4">
              <a href={INSTAGRAM_URL} target="_blank" className="font-typewriter text-[10px] sm:text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Instagram Feed
              </a>
              <a href="#" className="font-typewriter text-[10px] sm:text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Facebook Page
              </a>
              <a href="#" className="font-typewriter text-[10px] sm:text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Training Vlog
              </a>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="bg-black text-white px-3 py-1 font-comic text-[10px] sm:text-xs uppercase border-2 border-black">#DINOSGYM</span>
              <span className="bg-[#d32f2f] text-white px-3 py-1 font-comic text-[10px] sm:text-xs uppercase border-2 border-black">#REALIRON</span>
              <span className="bg-yellow-400 text-black px-3 py-1 font-comic text-[10px] sm:text-xs uppercase border-2 border-black">#SOLIHULL</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-typewriter text-[10px] sm:text-[12px] text-black font-bold uppercase text-center md:text-left">
          <p>© 1994-2026 DINO'S GYM SOLIHULL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 sm:gap-12 underline underline-offset-4 decoration-4 decoration-[#d32f2f]">
            <a href="#" className="hover:text-[#d32f2f]">LEGAL NOTICE</a>
            <a href="#" className="hover:text-[#d32f2f]">PRIVACY BLUEPRINT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; export default Footer;
