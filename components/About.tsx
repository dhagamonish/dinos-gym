import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden border-y-8 border-black vintage-paper-texture">
      {/* Halftone texture overlay for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-comic text-[#d32f2f] mb-6 sm:mb-8 leading-none drop-shadow-md text-center lg:text-left">
              THE LEGACY!
            </h2>
            <div className="space-y-6 text-black text-base sm:text-lg leading-relaxed font-bold bg-white/60 backdrop-blur-sm p-6 sm:p-8 border-4 border-black shadow-[6px_6px_0px_#1a1a1a] sm:shadow-[8px_8px_0px_#1a1a1a]">
              <p className="text-xl sm:text-2xl text-[#d32f2f] font-comic">
                DINO'S GYM IS NOT FOR THE WEAK!
              </p>
              <p>
                Founded on pure passion, Dino's is a legendary institution in the bodybuilding community. We're the home of real iron, real sweat, and real results.
              </p>
              <p>
                What makes us different? We blend old-school atmosphere with top-tier equipment. Cybex and Hammer Strength sit alongside vintage machines that have built championship physiques for decades.
              </p>
              <p>
                "No judgment, no ego, just pure dedication. Everyone is part of the Dino's family."
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#26a69a] text-white p-4 border-4 border-black shadow-[4px_4px_0px_#000]">
                <h4 className="font-comic text-2xl uppercase">THE IRON</h4>
                <p className="text-xs font-bold">Forged in Solihull for over 30 years.</p>
              </div>
              <div className="bg-[#d32f2f] text-white p-4 border-4 border-black shadow-[4px_4px_0px_#000]">
                <h4 className="font-comic text-2xl uppercase">THE WILL</h4>
                <p className="text-xs font-bold">Build the character of a champion.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative px-4 sm:px-0">
            <div className="retro-border bg-white p-2 sm:p-3 shadow-[8px_8px_0px_#000] sm:shadow-[12px_12px_0px_#000] relative z-20">
              <div className="overflow-hidden border-2 border-black">
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" 
                  alt="Vintage Bodybuilding Legacy"
                  className="w-full h-auto contrast-150 brightness-100 hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 bg-yellow-400 text-black border-2 sm:border-4 border-black p-2 sm:p-4 font-comic text-xl sm:text-3xl shadow-[4px_4px_0px_#000] z-[80]">
                ICONIC!
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;