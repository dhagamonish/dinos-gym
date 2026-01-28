
import React from 'react';
import { SIGNUP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale brightness-50"
          alt="Gym Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 gritty-overlay opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-6 opacity-0 hero-animate" style={{ animationDelay: '200ms' }}>
            <span className="text-[#FFD700] text-sm tracking-widest font-bold">★ 4.8/5 Verified reviews</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-heading leading-[0.9] text-white mb-8 opacity-0 hero-animate" style={{ animationDelay: '400ms' }}>
            TRANSFORM YOUR <br />
            <span className="text-[#FFD700]">MIND & MUSCLE.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center opacity-0 hero-animate" style={{ animationDelay: '600ms' }}>
            <button 
              onClick={() => window.open(SIGNUP_URL, '_blank')}
              className="bg-[#FFD700] text-black px-12 py-5 font-heading text-2xl hover:scale-105 transition-all gold-glow"
            >
              JOIN DINO'S NOW
            </button>
            
            <div className="flex -space-x-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} alt="member" />
                 </div>
               ))}
               <div className="pl-6 text-sm">
                 <p className="font-bold">16k+ Membership</p>
                 <p className="text-zinc-400">Enjoy our facilities</p>
               </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:self-end opacity-0 hero-animate" style={{ animationDelay: '800ms' }}>
          <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700]/10 rounded-bl-full"></div>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Build confidence, strength, and discipline with science-backed training, expert coaching, and a community that never lets you quit.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-[#FFD700]">12+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Years of<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
