import React, { useState, useEffect } from 'react';
import { SIGNUP_URL } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Hero: React.FC = () => {
  const [year, setYear] = useState(1990);
  const [tagline, setTagline] = useState('Home of Iron');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Year Counter Animation
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setYear((prev) => {
          if (prev >= 1994) {
            clearInterval(interval);
            return 1994;
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    }, 1000);

    // Tagline Transition Animation
    const taglineTimer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTagline('Where Legends Are Forged');
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(taglineTimer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 overflow-hidden bg-[#fdf1d6]">
      {/* Gritty Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Massive Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[25vw] text-black/[0.03] leading-none pointer-events-none select-none whitespace-nowrap">
        SOLIHULL
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <AnimateOnScroll variant="left" delay={100}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-12 h-[4px] bg-[#d32f2f]"></span>
              <span className="font-comic text-3xl text-[#d32f2f] uppercase tracking-widest">
                Est. <span className="inline-block min-w-[1.2em]">{year}</span>
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={300}>
            <h1 className="text-7xl md:text-[110px] font-comic-bold leading-[0.85] mb-8 tracking-tighter uppercase italic drop-shadow-sm">
              Solihull's <br/>
              <span className="text-[#d32f2f] relative">
                Original
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-black/10 -rotate-1"></div>
              </span> <br/>
              <span className={`transition-all duration-500 inline-block ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={500}>
            <div className="font-typewriter text-xl text-black/80 max-w-lg mb-12 leading-tight bg-white/40 p-4 border-l-4 border-black italic">
              "Building world-class physiques since the golden era of Solihull bodybuilding. Join the family of iron today."
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => window.open(SIGNUP_URL, '_blank')}
                className="bg-[#d32f2f] text-white px-12 py-6 border-4 border-black font-comic text-4xl shadow-[10px_10px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
              >
                JOIN THE LEGENDS!
              </button>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-12 py-6 border-4 border-black bg-white/50 font-comic text-3xl hover:bg-white transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.1)]"
              >
                OUR STORY
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="relative">
          <AnimateOnScroll variant="scale" delay={400}>
            <div className="relative border-8 border-black p-2 bg-white transform rotate-3 shadow-[20px_20px_0px_#1a1a1a] group">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200" 
                alt="Hardcore Bodybuilding Gym Solihull" 
                className="w-full h-auto grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Retro Badge */}
              <div className="absolute -bottom-10 -right-10 bg-yellow-400 text-black border-4 border-black p-8 font-comic text-6xl transform -rotate-12 shadow-[10px_10px_0px_#000] animate-pulse">
                REAL <br/> IRON
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Subtle Halftone Background Accent */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;