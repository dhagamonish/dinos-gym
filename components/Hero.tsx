
import React, { useState, useEffect } from 'react';
import { SIGNUP_URL } from '../constants.tsx';
import AnimateOnScroll from './AnimateOnScroll.tsx';

const StatBadge: React.FC<{ 
  value: number; 
  label: React.ReactNode; 
  className: string; 
  shadowClass: string;
}> = ({ value, label, className, shadowClass }) => {
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation
    const startValue = 1;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Simple easing: easeOutQuad
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easeProgress * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const displayValue = isHovered ? Math.floor(count * 1.1) : count;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} p-3 sm:p-5 border-4 border-black transition-all duration-300 cursor-default ${shadowClass} relative ${
        isHovered ? '-translate-y-2 scale-105 z-[70]' : 'z-[60]'
      }`}
    >
      <div className="text-2xl sm:text-4xl font-comic tabular-nums transition-all duration-300 leading-none">
        {displayValue}+
      </div>
      <div className="text-[8px] sm:text-[10px] font-bold uppercase leading-tight mt-1">{label}</div>
      
      {/* Dynamic Tag */}
      <div className={`absolute -top-3 -right-3 bg-yellow-400 text-black border-2 border-black px-2 py-0.5 font-comic text-[10px] transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-50'
      }`}>
        PEAK!
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [year, setYear] = useState(1990);
  const [tagline] = useState('Home of Iron');

  useEffect(() => {
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
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Massive Background Decoration - Straight Alignment */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[12vw] lg:text-[18vw] text-black/[0.03] leading-none pointer-events-none select-none whitespace-nowrap z-0">
        DINO'S GYM
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
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-black/10"></div>
              </span> <br/>
              <span className="transition-all duration-500 inline-block opacity-100 scale-100">
                {tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={500}>
            <div className="font-typewriter text-lg sm:text-xl text-black/80 max-w-lg mb-8 sm:mb-12 leading-tight bg-white/20 backdrop-blur-sm p-4 border-l-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.05)] mx-auto lg:mx-0 font-bold">
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
            </div>
          </AnimateOnScroll>
        </div>

        <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
          <AnimateOnScroll variant="scale" delay={400}>
            <div className="relative border-4 sm:border-8 border-black p-2 bg-white/40 backdrop-blur-sm shadow-[10px_10px_0px_#1a1a1a] sm:shadow-[20px_20px_0px_#1a1a1a] group">
              <div className="overflow-hidden border-2 border-black bg-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" 
                  alt="Legendary Training Gear" 
                  className="w-full h-auto object-cover contrast-125 brightness-110 saturate-150 group-hover:scale-110 transition-all duration-1000"
                />
                {/* Poster Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
                   <div className="bg-[#d32f2f] text-white font-comic text-4xl sm:text-6xl px-4 py-1 self-start border-4 border-black shadow-[4px_4px_0px_#000]">BE STRONG!</div>
                   <div className="bg-yellow-400 text-black font-handwriting text-xl sm:text-2xl px-2 py-1 self-start mt-2 border-2 border-black uppercase">Build Your Power!</div>
                </div>
              </div>
              
              {/* Stat Badges */}
              <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-16 z-[100]">
                <StatBadge 
                  value={120} 
                  label={<>ELITE <br/> COACHES</>} 
                  className="bg-[#d32f2f] text-white" 
                  shadowClass="shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
                />
              </div>

              <div className="absolute top-1/2 -right-8 sm:-right-16 transform -translate-y-1/2 z-[100]">
                <StatBadge 
                  value={1960} 
                  label={<>CHAMPION <br/> MEMBERS</>} 
                  className="bg-[#1a1a1a] text-white" 
                  shadowClass="shadow-[4px_4px_0px_#d32f2f] sm:shadow-[8px_8px_0px_#d32f2f]"
                />
              </div>
            </div>
          </AnimateOnScroll>
          <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
