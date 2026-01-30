
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Main Circular Logo Container */}
      <div className="w-full h-full relative transform transition-transform group-hover:scale-105 duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          {/* Yellow Background and Black Border */}
          <circle cx="50" cy="50" r="46" fill="#fbc02d" stroke="black" strokeWidth="4" />
          
          {/* Inner Decorative Ring */}
          <circle cx="50" cy="50" r="38" fill="transparent" stroke="black" strokeWidth="1" strokeDasharray="2,2" />

          {/* Arched Text Paths */}
          <defs>
            <path id="topTextPath" d="M 15,50 A 35,35 0 0,1 85,50" />
            <path id="bottomTextPath" d="M 85,50 A 35,35 0 0,1 15,50" />
          </defs>

          {/* Top Text: DINO'S GYM */}
          <text fill="black" fontSize="12" fontWeight="900" className="font-comic uppercase tracking-tighter">
            <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
              DINO'S GYM
            </textPath>
          </text>

          {/* Bottom Text: SOLIHULL */}
          <text fill="black" fontSize="10" fontWeight="900" className="font-comic uppercase tracking-widest">
            <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
              SOLIHULL
            </textPath>
          </text>

          {/* Central Muscle Icon */}
          <g transform="translate(30, 32) scale(0.4)" fill="black">
            <path d="M78.4,44.2c-2.8-5.3-8.8-10.4-14.7-12.7c-5.9-2.3-13.6-2.5-19.4-1.2c-5.8,1.3-10.6,4.6-12.8,9.7c-1.4,3.2-1.3,6.8-0.3,10.1 c1,3.3,3,6.3,5.6,8.4c3.3,2.7,7.7,4.3,12.1,4.3c3,0,6-0.8,8.6-2.3c3.4-1.9,6-5.1,7.2-8.8c0.6-1.7,0.8-3.5,0.7-5.3 c-0.1-1.8-0.5-3.6-1.2-5.3c-2.3-5.3-7.5-9.1-13-10.1c-5.5-1-11.2,0.4-15.6,3.8c-2.4,1.8-4.2,4.3-5.2,7.1c-0.9,2.8-1,5.8-0.1,8.6 c1.1,3.4,3.5,6.3,6.6,8.1c3.1,1.8,6.8,2.4,10.3,1.7c4.6-0.9,8.5-4,10.6-8.2" />
            <path d="M42.5,68.2c-1.5,4.2-4.1,8.1-7.6,10.9c-3.5,2.8-7.9,4.5-12.4,4.9c-4.5,0.4-9.2-0.5-13.1-2.9c-3.9-2.4-6.8-6.3-8.1-10.7 c-1.3-4.4-1-9.2,0.8-13.4s5.2-7.7,9.5-9.8c4.3-2.1,9.4-2.5,14-1.1c4.6,1.4,8.5,4.7,10.9,8.9l12.7-7.3c-3.7-6.5-9.8-11.5-17-13.7 c-7.2-2.2-15-1.5-21.7,1.8c-6.7,3.3-12,9-14.8,15.9c-2.8,6.9-3.2,14.6-1.1,21.8c2.1,7.2,6.6,13.5,12.8,17.7 c6.2,4.2,13.7,6.1,21.1,5.5c7.4-0.6,14.4-3.8,19.6-9.1c5.2-5.3,8.4-12.2,9-19.5L42.5,68.2z" />
          </g>
          
          {/* Side Stars */}
          <path d="M 12,50 L 14,52 L 16,50 L 14,48 Z" fill="black" />
          <path d="M 88,50 L 86,52 L 84,50 L 86,48 Z" fill="black" />
        </svg>
      </div>

      {/* Retro "EST 1994" Badge - Bolder and clearly positioned */}
      <div className="absolute top-0 left-0 bg-white text-black border-[3px] border-black font-comic text-[12px] sm:text-[14px] px-1.5 shadow-[2px_2px_0px_#000] z-10 pointer-events-none transform -rotate-6">
        EST 1994
      </div>
    </div>
  );
};

export default Logo;
