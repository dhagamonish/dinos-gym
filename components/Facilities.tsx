
import React, { useState, useEffect } from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="facilities" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background Parallax Text */}
      <div 
        className="absolute bottom-0 left-0 font-heading text-[15vw] text-white/[0.02] leading-none pointer-events-none select-none transition-transform duration-75"
        style={{ transform: `translateX(${offsetY * -0.05}px)` }}
      >
        STRENGTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading text-white leading-none">EQUIPMENT & FACILITIES</h2>
            <div className="w-32 h-2 bg-[#E63946] mt-4"></div>
          </div>
          <p className="text-gray-400 max-w-md font-light uppercase tracking-wider text-sm">
            Top-of-the-line iron curated for those who take training seriously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.title}
              className="group relative h-96 overflow-hidden border border-zinc-800"
            >
              <img 
                src={facility.imageUrl}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0"
                style={{ transform: `scale(1.3) translateY(${offsetY * 0.02}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-heading text-[#FFB800] mb-2">{facility.title}</h3>
                <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
