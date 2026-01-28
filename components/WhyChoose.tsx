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
      className={`${className} p-6 border-4 border-black transition-all duration-300 cursor-default ${shadowClass} relative ${
        isHovered ? '-translate-y-6 scale-110 z-30' : 'z-10'
      }`}
    >
      <div className="text-5xl font-comic tabular-nums transition-all duration-300">
        {displayValue}+
      </div>
      <div className="text-xs font-bold uppercase leading-tight">{label}</div>
      
      {/* Dynamic Tag */}
      <div className={`absolute -top-3 -right-3 bg-yellow-400 text-black border-2 border-black px-2 py-0.5 font-comic text-[12px] transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100 rotate-12 animate-bounce' : 'opacity-0 scale-50'
      }`}>
        PEAK!
      </div>
      
      {/* Decorative Stamp Effect */}
      {isHovered && (
        <div className="absolute inset-0 border-2 border-white/20 pointer-events-none"></div>
      )}
    </div>
  );
};

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-24 px-6 relative overflow-visible">
      {/* Subtle halftone overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-comic text-[#d32f2f] mb-8 leading-none transform rotate-1 drop-shadow-[4px_4px_0px_#000]">
            WE ARE CHAMPIONS!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { icon: <Users size={40} />, title: "THE FAMILY", desc: "No judgment, just a community supporting your lift." },
              { icon: <Trophy size={40} />, title: "THE COACHES", desc: "Coaches who actually compete and live the lifestyle." },
              { icon: <Zap size={40} />, title: "THE IRON", desc: "Vintage iron meet modern engineering for max load." },
              { icon: <Target size={40} />, title: "RESULTS!", desc: "Our wall of transformations speaks for itself." }
            ].map((f, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-sm border-4 border-black p-6 shadow-[6px_6px_0px_#1a1a1a] hover:-translate-y-2 transition-all group">
                <div className="text-[#d32f2f] mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="font-comic text-3xl text-black mb-2">{f.title}</h4>
                <p className="text-sm font-bold uppercase leading-tight text-black/70">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[#26a69a] text-white px-10 py-5 border-4 border-black font-comic text-3xl shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95">
            READ MORE SECRETS!
          </button>
        </div>

        <div className="relative mt-16 lg:mt-0">
          <div className="retro-border bg-white/40 backdrop-blur-sm p-2 transform rotate-[-2deg] relative shadow-[15px_15px_0px_rgba(0,0,0,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200" 
              alt="Hardcore Gym Environment" 
              className="grayscale contrast-125 brightness-90 w-full h-auto"
            />
            
            {/* Interactive Stat Badges */}
            <div className="absolute -bottom-10 -left-10 z-20">
              <StatBadge 
                value={120} 
                label={<>ELITE <br/> COACHES</>} 
                className="bg-[#d32f2f] text-white rotate-[-5deg]" 
                shadowClass="shadow-[8px_8px_0px_#000]"
              />
            </div>

            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-20">
              <StatBadge 
                value={1960} 
                label={<>CHAMPION <br/> MEMBERS</>} 
                className="bg-[#1a1a1a] text-white rotate-[5deg]" 
                shadowClass="shadow-[8px_8px_0px_#d32f2f]"
              />
            </div>
          </div>
          
          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-right-4 border-black opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-left-4 border-black opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;