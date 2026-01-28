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
      className={`${className} p-6 border-4 border-black transition-all duration-300 cursor-default ${shadowClass} ${
        isHovered ? '-translate-y-4 scale-105' : ''
      }`}
    >
      <div className="text-5xl font-comic tabular-nums transition-all">
        {displayValue}+
      </div>
      <div className="text-xs font-bold uppercase leading-tight">{label}</div>
      {isHovered && (
        <div className="absolute -top-3 -right-3 bg-yellow-400 text-black border-2 border-black px-1 font-comic text-[10px] animate-bounce">
          PEAK!
        </div>
      )}
    </div>
  );
};

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#fdf1d6] relative overflow-visible">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-comic text-[#d32f2f] mb-8 leading-none transform rotate-1">
            WE ARE CHAMPIONS!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { icon: <Users size={40} />, title: "THE FAMILY", desc: "No judgment, just a community supporting your lift." },
              { icon: <Trophy size={40} />, title: "THE COACHES", desc: "Coaches who actually compete and live the lifestyle." },
              { icon: <Zap size={40} />, title: "THE IRON", desc: "Vintage iron meet modern engineering for max load." },
              { icon: <Target size={40} />, title: "RESULTS!", desc: "Our wall of transformations speaks for itself." }
            ].map((f, i) => (
              <div key={i} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#1a1a1a] hover:-translate-y-1 transition-transform">
                <div className="text-[#d32f2f] mb-4">{f.icon}</div>
                <h4 className="font-comic text-3xl text-black mb-2">{f.title}</h4>
                <p className="text-sm font-bold uppercase leading-tight">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[#26a69a] text-white px-10 py-5 border-4 border-black font-comic text-3xl shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95">
            READ MORE SECRETS!
          </button>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="retro-border bg-white p-2 transform rotate-[-2deg] relative">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200" 
              alt="Gym" 
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
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;