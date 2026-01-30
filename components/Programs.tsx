import React from 'react';
import { PROGRAMS, SIGNUP_URL } from '../constants.tsx';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 sm:border-8 border-black p-6 sm:p-10 relative vintage-paper-texture shadow-[10px_10px_0px_rgba(0,0,0,0.1)] sm:shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
          {/* Section Header - Removed rotate */}
          <div className="absolute -top-8 sm:-top-10 left-4 sm:left-10 bg-[#d32f2f] text-white border-2 sm:border-4 border-black px-4 sm:px-8 py-2 font-comic text-2xl sm:text-4xl shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] z-20">
            THE DINO METHOD!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-4 sm:mt-8 items-start">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-comic-bold leading-none mb-4 sm:mb-6 uppercase mt-4">
                Which <span className="text-[#d32f2f]">Course</span> Do YOU Need?
              </h2>
              <p className="font-typewriter text-base sm:text-lg mb-6 sm:mb-8 leading-tight">
                Don't waste years of your life following modern "fluff" routines. Enroll in a Dino Course and forge a physique that commands respect!
              </p>
              {/* Removed rotate */}
              <div className="relative border-4 border-black shadow-[6px_6px_0px_#000] hidden sm:block overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800" 
                  className="w-full grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  alt="Vintage Strength Training"
                />
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4">
              {PROGRAMS.map((p) => (
                <div key={p.id} className="bg-white/40 border-4 border-black p-4 sm:p-5 relative backdrop-blur-sm flex flex-col justify-start min-h-[140px] sm:min-h-0">
                  {/* Removed rotate */}
                  <div className="absolute -top-3 -right-3 bg-yellow-400 border-2 border-black w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-comic text-xl sm:text-2xl shadow-[2px_2px_0px_#000]">
                    {p.id}
                  </div>
                  <h3 className="font-comic text-2xl sm:text-3xl mb-1 sm:mb-2 text-[#d32f2f] uppercase leading-none border-b-2 border-black inline-block self-start">
                    {p.title}
                  </h3>
                  <p className="font-typewriter text-[11px] sm:text-sm leading-snug text-black/90">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Footer - Removed rotate */}
          <div className="mt-8 sm:mt-10 border-t-4 border-black pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-handwriting text-2xl sm:text-3xl text-black text-center">
              "Results guaranteed in 30 days or I'll personally spot your next set!"
            </p>
            <button 
              onClick={() => window.open(SIGNUP_URL, '_blank')}
              className="w-full md:w-auto bg-[#d32f2f] text-white px-8 sm:px-10 py-4 sm:py-5 border-4 border-black font-comic text-2xl sm:text-4xl shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              ENROLL NOW!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;