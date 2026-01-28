import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden border-y-8 border-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-6xl md:text-8xl font-comic text-[#d32f2f] mb-8 leading-none transform -rotate-1 drop-shadow-md">
              THE LEGACY!
            </h2>
            <div className="space-y-6 text-black text-lg leading-relaxed font-bold vintage-paper-texture p-8 border-4 border-black shadow-[8px_8px_0px_#1a1a1a]">
              <p className="text-2xl text-[#d32f2f] font-comic">
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
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-[#26a69a] text-white p-4 border-4 border-black transform rotate-1 shadow-[4px_4px_0px_#000]">
                <h4 className="font-comic text-2xl uppercase">THE IRON</h4>
                <p className="text-xs font-bold">Forged in Solihull for over 30 years.</p>
              </div>
              <div className="bg-[#d32f2f] text-white p-4 border-4 border-black transform -rotate-1 shadow-[4px_4px_0px_#000]">
                <h4 className="font-comic text-2xl uppercase">THE WILL</h4>
                <p className="text-xs font-bold">Build the character of a champion.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="retro-border bg-white p-3 transform rotate-2 shadow-[12px_12px_0px_#000]">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Interior"
                className="w-full h-auto grayscale contrast-150"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black border-4 border-black p-4 font-comic text-3xl transform -rotate-6 shadow-[4px_4px_0px_#000]">
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