
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial year animation
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
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: 0.05
        }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Massive Background Decoration */}
      <div 
        className="absolute top-1/2 left-1/2 font-heading text-[12vw] lg:text-[18vw] text-black/[0.03] leading-none pointer-events-none select-none whitespace-nowrap z-0"
        style={{ 
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`,
          willChange: 'transform'
        }}
      >
        DINO'S GYM
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <AnimateOnScroll variant="left" delay={100}>
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <div className="h-[4px] w-12 bg-black"></div>
              <span className="font-comic text-xl sm:text-2xl text-black uppercase tracking-[0.2em] font-bold">
                EST. <span className="text-[#d32f2f]">{year}</span>
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={300}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-comic-bold leading-[0.85] mb-6 sm:mb-8 tracking-tighter uppercase drop-shadow-sm">
              Solihull's <br className="hidden sm:block" />
              <span className="text-[#d32f2f] relative inline-block">
                Original
                <div className="absolute -bottom-1 sm:bottom-0 left-0 w-full h-1 sm:h-2 bg-black"></div>
              </span> <br/>
              <span className="transition-all duration-500 inline-block opacity-100 scale-100">
                {tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="left" delay={500}>
            <div className="font-typewriter text-lg sm:text-xl text-black/80 max-w-lg mb-8 sm:mb-12 leading-tight bg-white/20 backdrop-blur-sm p-4 border-4 border-black shadow-[6px_6px_0px_#000] mx-auto lg:mx-0 font-bold">
              "Building world-class physiques since the golden era of Solihull bodybuilding. Join the family of iron today."
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => window.open(SIGNUP_URL, '_blank')}
                className="bg-[#d32f2f] text-white px-8 sm:px-12 py-4 sm:py-6 border-4 border-black font-comic text-2xl sm:text-4xl shadow-[8px_8px_0px_#000] active:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95"
              >
                JOIN THE LEGENDS!
              </button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Constrained container for the image to maintain visual quality and prevent tearing */}
        <div className="relative mt-8 lg:mt-0 px-4 sm:px-0 max-w-[480px] mx-auto lg:mx-0 lg:ml-auto">
          <AnimateOnScroll variant="scale" delay={400}>
            <div className="relative border-4 sm:border-8 border-black p-2 bg-white shadow-[15px_15px_0px_#000] group">
              <div className="overflow-hidden border-2 border-black bg-white relative min-h-[250px] flex items-center justify-center">
                {/* Updated Image with provided 'Mind and Body' poster link */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1osoVlVxIIaXSNUZuIASr8-KJU4Pm6S9T" 
                  alt="Mind and Body Vintage Poster" 
                  className="w-full h-auto object-contain contrast-[1.1] brightness-[1.05] saturate-[1.2] transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    // Failback if drive link fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Subtle Grain Overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-20 pointer-events-none"></div>
              </div>
              
              {/* Stat Badges */}
              <div className="absolute -bottom-10 sm:-bottom-12 -left-6 sm:-left-12 z-[100]">
                <StatBadge 
                  value={120} 
                  label={<>ELITE <br/> COACHES</>} 
                  className="bg-[#d32f2f] text-white" 
                  shadowClass="shadow-[8px_8px_0px_#000]"
                />
              </div>

              <div className="absolute top-1/2 -right-6 sm:-right-10 transform -translate-y-1/2 z-[100]">
                <StatBadge 
                  value={1960} 
                  label={<>CHAMPION <br/> MEMBERS</>} 
                  className="bg-[#1a1a1a] text-white" 
                  shadowClass="shadow-[8px_8px_0px_#d32f2f]"
                />
              </div>
            </div>
          </AnimateOnScroll>
          <div 
            className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-30 pointer-events-none"
            style={{ 
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
