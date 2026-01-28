
import React from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-32 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#FFD700] text-sm tracking-[0.4em] font-bold uppercase">Why Choose Dino's?</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mt-4 mb-8">WE ARE NOT JUST A GYM <br/> - WE'RE YOUR PARTNER.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { icon: <Users size={32} />, title: "Family Focused", desc: "No judgment, just a community supporting your lift." },
              { icon: <Trophy size={32} />, title: "Certified Coaches", desc: "Coaches who actually compete and live the lifestyle." },
              { icon: <Zap size={32} />, title: "Hardcore Gear", desc: "Vintage iron meet modern engineering for max load." },
              { icon: <Target size={32} />, title: "Real Results", desc: "Our wall of transformations speaks for itself." }
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-[#FFD700] pt-1">{f.icon}</div>
                <div>
                  <h4 className="font-heading text-white text-2xl uppercase mb-2">{f.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[#FFD700] text-black px-10 py-4 font-heading text-xl gold-glow hover:scale-105 transition-all">
            LEARN MORE ABOUT US
          </button>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-[#FFD700]/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200" 
            alt="Gym" 
            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
          
          {/* Stats Badges */}
          <div className="absolute -bottom-10 -left-10 bg-zinc-900 p-8 border border-zinc-800 gold-glow">
             <div className="text-5xl font-heading text-[#FFD700]">120+</div>
             <p className="text-xs text-zinc-500 tracking-widest uppercase mt-2">Elite<br/>Coaches</p>
          </div>
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-zinc-900 p-8 border border-zinc-800">
             <div className="text-5xl font-heading text-white">1,960+</div>
             <p className="text-xs text-zinc-500 tracking-widest uppercase mt-2">Active<br/>Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
