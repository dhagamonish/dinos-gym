
import React, { useState, useEffect } from 'react';
import { SIGNUP_URL } from '../constants';

const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax and Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&grayscale=true" 
          className="w-full h-full object-cover scale-110"
          alt="Dino's Gym Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80"></div>
        <div className="absolute inset-0 gritty-overlay opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl transition-transform duration-300" style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
        <h1 className="text-6xl md:text-9xl font-heading text-[#FFB800] leading-none mb-4 animate-[fade-in_1s_ease-out]">
          DINO'S GYM
        </h1>
        <p className="text-xl md:text-3xl font-heading text-white tracking-[0.2em] mb-8">
          WHERE IRON MEETS LEGEND
        </p>
        <div className="w-24 h-1 bg-[#E63946] mx-auto mb-8"></div>
        <p className="text-gray-300 text-lg md:text-xl font-light italic mb-12 uppercase tracking-widest">
          "DOES EXACTLY WHAT IT SAYS ON THE TIN"
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E63946] hover:bg-[#D62828] text-white px-10 py-4 text-lg font-heading tracking-[0.15em] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(230,57,70,0.3)]"
          >
            JOIN THE LEGEND
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-heading tracking-[0.15em] transition-all"
          >
            TAKE A TOUR
          </a>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="absolute bottom-10 left-0 w-full hidden lg:flex justify-center gap-20">
        <div className="text-center">
          <p className="text-[#FFB800] font-heading text-4xl">
            24/7
          </p>
          <p className="text-gray-500 font-heading text-sm tracking-widest uppercase">Access</p>
        </div>
        <div className="text-center">
          <p className="text-[#FFB800] font-heading text-4xl">
            <Counter end={100} suffix="+" />
          </p>
          <p className="text-gray-500 font-heading text-sm tracking-widest uppercase">Machines</p>
        </div>
        <div className="text-center">
          <p className="text-[#FFB800] font-heading text-4xl">
            <Counter end={500} suffix="+" />
          </p>
          <p className="text-gray-500 font-heading text-sm tracking-widest uppercase">Members</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
