import React from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-visible">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          {/* Removed rotate */}
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-comic text-[#d32f2f] mb-6 sm:mb-8 leading-none drop-shadow-md lg:drop-shadow-[4px_4px_0px_#000]">
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
          {/* Removed rotate */}
          <div className="retro-border bg-white/40 backdrop-blur-sm p-2 relative shadow-[10px_10px_0px_rgba(0,0,0,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=1200" 
              alt="Champion Physique Goal" 
              className="grayscale contrast-125 brightness-90 w-full h-auto"
            />
          </div>
          
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-right-4 border-black opacity-20 hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-left-4 border-black opacity-20 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;