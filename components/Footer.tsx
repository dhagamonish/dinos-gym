
import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" />
              <span className="font-heading text-2xl text-[#FFB800]">DINO'S GYM</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The legendary home of hardcore bodybuilding and powerlifting in Solihull. Real iron, real people, real results. Iconic since day one.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-xl mb-6 tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-xl mb-6 tracking-widest">MEMBERSHIPS</h4>
            <ul className="space-y-3">
              <li><a href="#memberships" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider">Standard Access</a></li>
              <li><a href="#memberships" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider">Student Discount</a></li>
              <li><a href="#memberships" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider">Corporate (JLR)</a></li>
              <li><a href="#memberships" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider">Day Passes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-xl mb-6 tracking-widest">SOCIAL</h4>
            <div className="flex flex-col space-y-3">
              <a href={INSTAGRAM_URL} className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider flex items-center gap-2">
                Instagram
              </a>
              <a href="#" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider flex items-center gap-2">
                Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-[#E63946] text-sm uppercase tracking-wider flex items-center gap-2">
                YouTube
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-tighter">#DINOSGYM</span>
              <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-tighter">#BODYBUILDING</span>
              <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-tighter">#POWERLIFTING</span>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
          <p>© 2026 DINO'S GYM SOLIHULL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#E63946]">PRIVACY POLICY</a>
            <a href="#" className="hover:text-[#E63946]">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
