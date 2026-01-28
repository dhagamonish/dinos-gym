
import React, { useState, useEffect } from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="facilities" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Parallax Text - Moves vertically slower for depth */}
      <div 
        className="absolute -bottom-10 left-0 font-heading text-[22vw] text-white/[0.02] leading-none pointer-events-none select-none transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${offsetY * 0.08}px)` }}
      >
        STRENGTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#FFD700] text-sm tracking-[0.4em] font-bold uppercase block mb-2">Our Space</span>
            <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] uppercase">
              EQUIPMENT & <br /> <span className="text-[#FFD700]">FACILITIES</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md font-medium uppercase tracking-[0.1em] text-sm md:text-right">
            Curated selection of vintage iron and modern engineering for the dedicated strength athlete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.title}
              className="group relative h-[500px] overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              {/* Image with zoom and grayscale hover effects */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale"
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-[2px] w-8 bg-[#FFD700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <h3 className="text-3xl font-heading text-white uppercase tracking-wider">{facility.title}</h3>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {facility.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[#FFD700] font-heading text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span>VIEW DETAILS</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#FFD700]/0 group-hover:border-[#FFD700]/30 transition-all duration-500 m-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
