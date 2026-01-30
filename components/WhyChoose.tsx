
import React from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-visible vintage-paper-texture">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-comic text-[#d32f2f] mb-6 sm:mb-8 leading-none drop-shadow-md lg:drop-shadow-[4px_4px_0px_#000]">
            WE ARE CHAMPIONS!
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              { icon: <Users size={32} />, title: "THE FAMILY", desc: "No judgment, just a community supporting your lift." },
              { icon: <Trophy size={32} />, title: "THE COACHES", desc: "Coaches who actually compete and live the lifestyle." },
              { icon: <Zap size={32} />, title: "THE IRON", desc: "Vintage iron meet modern engineering for max load." },
              { icon: <Target size={32} />, title: "RESULTS!", desc: "Our wall of transformations speaks for itself." }
            ].map((f, i) => (
              <div key={i} className="bg-white border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000] hover:-translate-y-2 hover:translate-x-2 hover:shadow-none transition-all group text-left cursor-default">
                <div className="text-[#d32f2f] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="font-comic text-2xl sm:text-3xl text-black mb-1 sm:mb-2">{f.title}</h4>
                <p className="text-[10px] sm:text-sm font-bold uppercase leading-tight text-black/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 px-2 sm:px-4">
          {/* THE GOAL POSTER IMPLEMENTATION */}
          <div className="retro-border bg-black p-1 relative shadow-[15px_15px_0px_#000] overflow-hidden group">
            {/* Base Image from Google Drive */}
            <img 
              src="https://lh3.googleusercontent.com/d/13MN52lUGzQ0GuFx8hFdyoKi6GfBQFHog" 
              alt="Champion Physique Goal" 
              className="w-full h-auto contrast-[1.3] brightness-[1.05] saturate-[1.4] transition-all duration-1000 scale-105 group-hover:scale-100"
              onError={(e) => {
                // Fallback to previous Unsplash image if drive link fails
                e.currentTarget.src = "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            
            {/* Poster Overlays */}
            <div className="absolute inset-0 pointer-events-none p-4 sm:p-8 flex flex-col justify-between">
              <div className="self-end text-right">
                <div className="font-heading text-4xl sm:text-6xl text-white leading-[0.8] tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">
                  THIS <br/> IS <br/> THE
                </div>
              </div>

              <div className="absolute top-[45%] left-[40%] text-white animate-pulse">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
                    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                 </svg>
              </div>

              <div className="w-full">
                <div className="font-heading text-[22vw] sm:text-[120px] text-white leading-none tracking-tighter drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)] transform -translate-x-2">
                  GOAL
                </div>
                <div className="flex justify-end pr-2 mt-[-10px]">
                   <span className="font-typewriter text-white text-[10px] sm:text-xs font-bold tracking-widest opacity-80 uppercase bg-black px-2 py-0.5">Dino's System</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 opacity-60"></div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-black opacity-40 hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-black opacity-40 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
