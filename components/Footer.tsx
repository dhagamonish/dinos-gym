import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-8 border-black pt-20 pb-10 relative overflow-hidden vintage-paper-texture">
      {/* Decorative Stamp */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-10 rotate-12 pointer-events-none">
        <div className="w-full h-full border-8 border-[#d32f2f] rounded-full flex items-center justify-center text-[#d32f2f] font-comic text-4xl text-center leading-none p-4 uppercase">
          Guaranteed <br/> Results!
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b-4 border-dotted border-black pb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="w-16 h-16" />
              <div className="font-comic text-3xl text-black leading-none uppercase">
                DINO'S <br/> GYM
              </div>
            </div>
            <p className="font-typewriter text-sm leading-tight text-black/70 mb-8">
              The legendary home of hardcore bodybuilding and powerlifting in Solihull. We specialize in transforming lives through pure effort and high-quality iron. Iconic since 1994.
            </p>
          </div>

          <div>
            <h4 className="font-comic text-2xl text-[#d32f2f] mb-8 uppercase border-b-2 border-black inline-block">MAP YOUR PATH</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="font-typewriter text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-black"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-comic text-2xl text-[#d32f2f] mb-8 uppercase border-b-2 border-black inline-block">ENROLLMENT</h4>
            <ul className="space-y-4">
              {['Standard Access', 'Student Discount', 'Corporate (JLR)', 'Day Passes'].map(link => (
                <li key={link}>
                  <a href="#memberships" className="font-typewriter text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-comic text-2xl text-[#d32f2f] mb-8 uppercase border-b-2 border-black inline-block">THE SOCIALS</h4>
            <div className="flex flex-col space-y-4">
              <a href={INSTAGRAM_URL} className="font-typewriter text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Instagram Feed
              </a>
              <a href="#" className="font-typewriter text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Facebook Page
              </a>
              <a href="#" className="font-typewriter text-sm font-bold hover:text-[#d32f2f] uppercase transition-colors">
                Training Vlog
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="bg-black text-white px-2 py-1 font-comic text-[10px] uppercase">#DINOSGYM</span>
              <span className="bg-[#d32f2f] text-white px-2 py-1 font-comic text-[10px] uppercase">#REALIRON</span>
              <span className="bg-yellow-400 text-black px-2 py-1 font-comic text-[10px] uppercase">#SOLIHULL</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-typewriter text-[12px] text-black font-bold uppercase">
          <p>© 1994-2026 DINO'S GYM SOLIHULL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 underline decoration-2 decoration-[#d32f2f]">
            <a href="#" className="hover:text-[#d32f2f]">LEGAL NOTICE</a>
            <a href="#" className="hover:text-[#d32f2f]">PRIVACY BLUEPRINT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; export default Footer;