
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Parallax Watermark */}
      <div 
        className="absolute top-0 right-0 font-heading text-[20vw] text-white/[0.02] leading-none pointer-events-none select-none transition-transform duration-75"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        LEGACY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-heading text-[#FFB800] mb-8 leading-none">
              ICONIC 💣💥
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="font-bold text-white text-xl">
                Dino's Gym is not just a gym - it's a legendary institution in the bodybuilding and powerlifting community.
              </p>
              <p>
                We're the home of real iron, real training, and real results. Our walls have seen legends, world champions, and thousands of dedicated lifters who call this place home.
              </p>
              <p>
                What makes us different? We blend old-school atmosphere with top-tier equipment. Cybex, Gym80, and Hammer Strength sit alongside vintage machines that have built championship physiques for decades.
              </p>
              <p>
                No judgment, no ego, just pure dedication. From beginners taking their first steps to pro athletes visiting from across the globe, everyone is part of the Dino's family.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="flex-1 border-l-4 border-[#E63946] pl-4">
                <h4 className="text-white font-heading text-xl">THE LEGACY</h4>
                <p className="text-gray-500 text-sm">Founded on passion for the sport.</p>
              </div>
              <div className="flex-1 border-l-4 border-[#E63946] pl-4">
                <h4 className="text-white font-heading text-xl">THE FAMILY</h4>
                <p className="text-gray-500 text-sm">Proud to have the best members.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div 
              className="absolute -inset-4 border-2 border-[#E63946]/20 transition-transform duration-75 hidden md:block"
              style={{ transform: `translate(${offsetY * 0.05}px, ${offsetY * 0.05}px)` }}
            ></div>
            <div className="relative z-10 aspect-square overflow-hidden border-4 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Interior"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                style={{ transform: `translateY(${offsetY * -0.05}px) scale(1.2)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
