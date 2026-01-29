import React, { useState, useEffect } from 'react';
import { SIGNUP_URL } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Hero: React.FC = () => {
  const [year, setYear] = useState(1990);
  const [tagline] = useState('Home of Iron');
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

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Gritty Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Massive Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[15vw] lg:text-[25vw] text-black/[0.03] leading-none pointer-events-none select-none whitespace-nowrap z-0">
        SOLIHULL
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <AnimateOnScroll variant="left" delay={100}>
            <div className="inline-flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <span className="w-8 sm:w-12 h-[4px] bg-[#d32f2f]"></span>
              <span className="font-comic text-2xl sm:text-3xl text-[#d32f2f] uppercase tracking-widest">
                Est. <span className="inline-block min-w-[1.2em]">{year}</span>
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={300}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-comic-bold leading-[0.85] mb-6 sm:mb-8 tracking-tighter uppercase drop-shadow-sm">
              Solihull's <br className="hidden sm:block" />
              <span className="text-[#d32f2f] relative inline-block">
                Original
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-black/10 -rotate-1"></div>
              </span> <br/>
              <span className={`transition-all duration-500 inline-block ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={500}>
            <div className="font-typewriter text-lg sm:text-xl text-black/80 max-w-lg mb-8 sm:mb-12 leading-tight bg-white/20 backdrop-blur-sm p-4 border-l-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.05)] mx-auto lg:mx-0">
              "Building world-class physiques since the golden era of Solihull bodybuilding. Join the family of iron today."
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => window.open(SIGNUP_URL, '_blank')}
                className="bg-[#d32f2f] text-white px-8 sm:px-12 py-4 sm:py-6 border-4 border-black font-comic text-2xl sm:text-4xl shadow-[6px_6px_0px_#000] active:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95"
              >
                JOIN THE LEGENDS!
              </button>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 border-4 border-black bg-white/30 backdrop-blur-sm font-comic text-2xl sm:text-3xl hover:bg-white/50 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
              >
                OUR STORY
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
          <AnimateOnScroll variant="scale" delay={400}>
            <div className="relative border-4 sm:border-8 border-black p-2 bg-white/40 backdrop-blur-sm transform rotate-3 shadow-[10px_10px_0px_#1a1a1a] sm:shadow-[20px_20px_0px_#1a1a1a] group">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200" 
                alt="Hardcore Bodybuilding Gym Solihull" 
                className="w-full h-auto grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Retro Badge */}
              <div className="absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-10 bg-yellow-400 text-black border-2 sm:border-4 border-black p-4 sm:p-8 font-comic text-3xl sm:text-6xl transform -rotate-12 shadow-[4px_4px_0px_#000] sm:shadow-[10px_10px_0px_#000] animate-pulse z-20">
                REAL <br className="hidden sm:block" /> IRON
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Subtle Halftone Background Accent */}
          <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;