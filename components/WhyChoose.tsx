import React, { useState } from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const StatBadge: React.FC<{ 
  value: number; 
  label: React.ReactNode; 
  className: string; 
  shadowClass: string;
}> = ({ value, label, className, shadowClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayValue = isHovered ? Math.floor(value * 1.1) : value;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} p-4 sm:p-6 border-4 border-black transition-all duration-300 cursor-default ${shadowClass} relative ${
        isHovered ? '-translate-y-4 sm:-translate-y-6 scale-105 sm:scale-110 z-30' : 'z-10'
      }`}
    >
      <div className="text-3xl sm:text-5xl font-comic tabular-nums transition-all duration-300">
        {displayValue}+
      </div>
      <div className="text-[10px] sm:text-xs font-bold uppercase leading-tight">{label}</div>
      
      {/* Dynamic Tag */}
      <div className={`absolute -top-3 -right-3 bg-yellow-400 text-black border-2 border-black px-2 py-0.5 font-comic text-[10px] sm:text-[12px] transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100 rotate-12 animate-bounce' : 'opacity-0 scale-50'
      }`}>
        PEAK!
      </div>
    </div>
  );
};

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-visible">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-comic text-[#d32f2f] mb-6 sm:mb-8 leading-none transform sm:rotate-1 drop-shadow-md lg:drop-shadow-[4px_4px_0px_#000]">
            WE ARE CHAMPIONS!
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
            {[
              { icon: <Users size={32} />, title: "THE FAMILY", desc: "No judgment, just a community supporting your lift." },
              { icon: <Trophy size={32} />, title: "THE COACHES", desc: "Coaches who actually compete and live the lifestyle." },
              { icon: <Zap size={32} />, title: "THE IRON", desc: "Vintage iron meet modern engineering for max load." },
              { icon: <Target size={32} />, title: "RESULTS!", desc: "Our wall of transformations speaks for itself." }
            ].map((f, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-sm border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_#1a1a1a] sm:shadow-[6px_6px_0px_#1a1a1a] hover:-translate-y-2 transition-all group text-left">
                <div className="text-[#d32f2f] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="font-comic text-2xl sm:text-3xl text-black mb-1 sm:mb-2">{f.title}</h4>
                <p className="text-[10px] sm:text-sm font-bold uppercase leading-tight text-black/70">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 sm:mt-12 bg-[#26a69a] text-white px-8 sm:px-10 py-4 sm:py-5 border-4 border-black font-comic text-2xl sm:text-3xl shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95">
            READ MORE SECRETS!
          </button>
        </div>

        <div className="relative mt-12 lg:mt-0 px-2 sm:px-4">
          <div className="retro-border bg-white/40 backdrop-blur-sm p-2 transform sm:rotate-[-2deg] relative shadow-[10px_10px_0px_rgba(0,0,0,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200" 
              alt="Hardcore Gym Environment" 
              className="grayscale contrast-125 brightness-90 w-full h-auto"
            />
            
            {/* Interactive Stat Badges - Repositioned for mobile */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-0 sm:-left-10 z-20">
              <StatBadge 
                value={120} 
                label={<>ELITE <br/> COACHES</>} 
                className="bg-[#d32f2f] text-white rotate-[-5deg]" 
                shadowClass="shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
              />
            </div>

            <div className="absolute top-1/2 right-0 sm:-right-10 transform -translate-y-1/2 z-20">
              <StatBadge 
                value={1960} 
                label={<>CHAMPION <br/> MEMBERS</>} 
                className="bg-[#1a1a1a] text-white rotate-[5deg]" 
                shadowClass="shadow-[4px_4px_0px_#d32f2f] sm:shadow-[8px_8px_0px_#d32f2f]"
              />
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-right-4 border-black opacity-20 hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-left-4 border-black opacity-20 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;