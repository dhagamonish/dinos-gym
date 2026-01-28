
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <div className={`relative flex items-center justify-center border-4 border-black bg-[#d32f2f] p-1 rotate-[-3deg] shadow-[4px_4px_0px_#000] ${className}`}>
      <div className="text-white font-comic text-center leading-none select-none">
        <div className="text-[12px] tracking-tight border-b-2 border-white mb-1">DINO'S</div>
        <div className="text-[20px] font-bold italic">GYM</div>
        <div className="text-[10px] tracking-widest mt-1">SOLIHULL</div>
      </div>
      <div className="absolute -top-3 -left-3 bg-white text-black border-2 border-black font-comic text-[10px] px-1 transform rotate-[10deg]">
        EST 1994
      </div>
    </div>
  );
};

export default Logo;
