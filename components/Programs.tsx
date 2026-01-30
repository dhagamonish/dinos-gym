
import React from 'react';
import { PROGRAMS, SIGNUP_URL } from '../constants.tsx';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-16 sm:py-24 px-4 sm:px-6 relative vintage-paper-texture">
      <div className="max-w-7xl mx-auto">
        <div className="relative p-2 sm:p-0">
          {/* Section Header */}
          <div className="absolute -top-12 sm:-top-16 left-0 bg-[#d32f2f] text-white border-4 border-black px-6 sm:px-10 py-3 font-comic text-3xl sm:text-5xl shadow-[6px_6px_0px_#000] z-20 uppercase tracking-tighter">
            THE DINO METHOD!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 pt-8 sm:pt-12 items-start">
            <div className="lg:col-span-1 text-center lg:text-left pt-6">
              <h2 className="text-4xl sm:text-6xl font-comic-bold leading-none mb-6 sm:mb-8 uppercase">
                Which <span className="text-[#d32f2f]">Course</span> Do YOU Need?
              </h2>
              <p className="font-typewriter text-lg sm:text-xl mb-8 sm:mb-10 leading-tight font-bold">
                Don't waste years of your life following modern "fluff" routines. Enroll in a Dino Course and forge a physique that commands respect!
              </p>
              <div className="relative border-4 border-black shadow-[10px_10px_0px_#000] hidden sm:block overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800" 
                  className="w-full grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  alt="Vintage Strength Training"
                />
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {PROGRAMS.map((p) => (
                <div key={p.id} className="bg-white border-4 border-black p-6 relative backdrop-blur-sm flex flex-col justify-start shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-default">
                  <div className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-comic text-2xl sm:text-3xl shadow-[3px_3px_0px_#000]">
                    {p.id}
                  </div>
                  <h3 className="font-comic text-2xl sm:text-3xl mb-3 text-[#d32f2f] uppercase leading-none border-b-2 border-black inline-block self-start">
                    {p.title}
                  </h3>
                  <p className="font-typewriter text-sm leading-snug text-black font-bold">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="mt-16 sm:mt-24 border-t-4 border-black pt-10 sm:pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="font-handwriting text-3xl sm:text-4xl text-black text-center md:text-left leading-tight">
              "Results guaranteed in 30 days or I'll personally spot your next set!"
            </p>
            <button 
              onClick={() => window.open(SIGNUP_URL, '_blank')}
              className="w-full md:w-auto bg-[#d32f2f] text-white px-10 sm:px-14 py-5 sm:py-6 border-4 border-black font-comic text-3xl sm:text-5xl shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
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
