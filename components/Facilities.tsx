import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-16 sm:py-24 px-4 sm:px-6 border-y-8 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-comic text-black mb-4 uppercase leading-[0.9]">
            OUR <span className="text-[#d32f2f]">BATTLE-TESTED</span> TOOLS
          </h2>
          <p className="font-typewriter text-lg sm:text-xl max-w-2xl mx-auto border-t-2 border-black pt-4">
            We don't have fancy chrome machines that do the work for you. We have iron. Cold, heavy, uncompromising iron.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FACILITIES.map((facility, i) => (
            <div 
              key={facility.title}
              className={`bg-white/40 backdrop-blur-md border-4 border-black p-4 shadow-[6px_6px_0px_#1a1a1a] sm:shadow-[10px_10px_0px_#1a1a1a] transition-transform hover:-translate-y-2 hover:rotate-1 ${
                i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
              }`}
            >
              <div className="aspect-square mb-4 border-2 border-black overflow-hidden relative group">
                <img 
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#d32f2f]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <h3 className="font-comic text-2xl sm:text-3xl text-[#d32f2f] mb-2 uppercase leading-none">
                {facility.title}
              </h3>
              
              <p className="font-typewriter text-[10px] sm:text-xs leading-tight text-black/80 mb-4">
                {facility.description}
              </p>
              
              <div className="border-t-2 border-dotted border-black pt-2 flex justify-between items-center">
                <span className="font-comic text-[10px] sm:text-sm tracking-widest text-black/40">REF: DNO-{100 + i}</span>
                <span className="font-handwriting text-lg sm:text-xl text-[#d32f2f] -rotate-12">Built to Last!</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <div className="inline-block bg-[#1a1a1a] text-white p-6 sm:p-8 border-4 border-black transform -rotate-1 shadow-[8px_8px_0px_#d32f2f] sm:shadow-[12px_12px_0px_#d32f2f]">
             <p className="font-comic text-2xl sm:text-3xl mb-2">"THE BEST EQUIPMENT IN THE MIDLANDS"</p>
             <p className="font-typewriter text-[10px] sm:text-sm uppercase">— BODYBUILDING MONTHLY, 1998</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;