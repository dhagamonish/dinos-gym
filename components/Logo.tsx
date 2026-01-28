
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative flex items-center justify-center rounded-full border-4 border-[#FFB800] bg-black p-1 ${className}`}>
      <div className="text-[#FFB800] font-heading text-center leading-none select-none">
        <div className="text-[10px] tracking-tight">DINO'S</div>
        <div className="text-[12px] font-bold">GYM</div>
        <div className="text-[8px] tracking-tighter">SOLIHULL</div>
      </div>
      {/* Abstract Bulldog/Strength Symbol simplified for SVG */}
      <div className="absolute -bottom-1 -right-1">
        <span className="text-xl">🏆</span>
      </div>
    </div>
  );
};

export default Logo;
