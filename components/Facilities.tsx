import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 px-6 bg-[#fdf1d6] border-y-8 border-black relative overflow-hidden">
      {/* Decorative Halftone background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-comic text-black mb-4 uppercase italic">
            OUR <span className="text-[#d32f2f]">BATTLE-TESTED</span> TOOLS
          </h2>
          <p className="font-typewriter text-xl max-w-2xl mx-auto border-t-2 border-black pt-4">
            We don't have fancy chrome machines that do the work for you. We have iron. Cold, heavy, uncompromising iron.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACILITIES.map((facility, i) => (
            <div 
              key={facility.title}
              className={`bg-white border-4 border-black p-4 shadow-[10px_10px_0px_#1a1a1a] transition-transform hover:-translate-y-2 hover:rotate-1 ${
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
              
              <h3 className="font-comic text-3xl text-[#d32f2f] mb-2 uppercase leading-none">
                {facility.title}
              </h3>
              
              <p className="font-typewriter text-xs leading-tight text-black/80 mb-4">
                {facility.description}
              </p>
              
              <div className="border-t-2 border-dotted border-black pt-2 flex justify-between items-center">
                <span className="font-comic text-sm tracking-widest text-black/40">REF: DNO-{100 + i}</span>
                <span className="font-handwriting text-xl text-[#d32f2f] -rotate-12">Built to Last!</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-[#1a1a1a] text-white p-8 border-4 border-black transform -rotate-1 shadow-[12px_12px_0px_#d32f2f]">
             <p className="font-comic text-3xl mb-2">"THE BEST EQUIPMENT IN THE MIDLANDS"</p>
             <p className="font-typewriter text-sm uppercase">— BODYBUILDING MONTHLY, 1998</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;