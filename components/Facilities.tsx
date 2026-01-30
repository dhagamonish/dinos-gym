
import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden vintage-paper-texture">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-comic text-black mb-4 uppercase leading-[0.9]">
            OUR <span className="text-[#d32f2f]">BATTLE-TESTED</span> TOOLS
          </h2>
          <p className="font-typewriter text-lg sm:text-xl max-w-2xl mx-auto border-t-4 border-black pt-6 font-bold uppercase tracking-tighter">
            We don't have fancy chrome machines that do the work for you. We have iron. Cold, heavy, uncompromising iron.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACILITIES.map((facility, i) => (
            <div 
              key={facility.title}
              className={`bg-white border-4 border-black p-4 shadow-[10px_10px_0px_#000] transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-none cursor-default`}
            >
              <div className="aspect-square mb-4 border-2 border-black overflow-hidden relative group">
                <img 
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover contrast-150 brightness-100 saturate-150 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#d32f2f]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <h3 className="font-comic text-2xl sm:text-3xl text-[#d32f2f] mb-2 uppercase leading-none">
                {facility.title}
              </h3>
              
              <p className="font-typewriter text-xs sm:text-sm leading-tight text-black mb-4 font-bold uppercase">
                {facility.description}
              </p>
              
              <div className="border-t-2 border-dotted border-black pt-3 flex justify-between items-center">
                <span className="font-comic text-xs sm:text-sm tracking-widest text-black/40">REF: DNO-{100 + i}</span>
                <span className="font-handwriting text-xl text-[#d32f2f]">Built to Last!</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
