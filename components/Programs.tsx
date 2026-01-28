
import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Programs: React.FC = () => {
  const [active, setActive] = useState<string | null>('01');

  return (
    <section id="programs" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#FFD700] text-sm tracking-[0.4em] font-bold uppercase">Our Programs</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mt-4 mb-6">
            PROGRAMS THAT DELIVER <br /> <span className="text-[#FFD700]">REAL RESULTS</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Personalized, trackable programs built to push limits and redefine what your body can do.
          </p>
        </div>

        <div className="space-y-4">
          {PROGRAMS.map((p) => (
            <div 
              key={p.id}
              className={`group border-b border-zinc-800 transition-all duration-500 overflow-hidden ${active === p.id ? 'bg-zinc-900/50' : ''}`}
              onMouseEnter={() => setActive(p.id)}
            >
              <div className="flex items-center justify-between py-12 px-8 cursor-pointer">
                <div className="flex items-center gap-12">
                  <span className="font-heading text-2xl text-zinc-600">{p.id}</span>
                  <h3 className="text-3xl md:text-5xl font-heading text-white group-hover:text-[#FFD700] transition-colors uppercase">{p.title}</h3>
                </div>
                {active === p.id ? <Minus className="text-[#FFD700]" /> : <Plus className="text-zinc-600" />}
              </div>
              
              <div className={`transition-all duration-500 ${active === p.id ? 'max-h-[400px] pb-12' : 'max-h-0'}`}>
                <div className="px-8 lg:pl-[148px] grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <p className="text-zinc-400 text-lg leading-relaxed">{p.desc}</p>
                   <div className="flex items-center gap-6">
                     <div className="w-full h-[1px] bg-zinc-800"></div>
                     <button className="whitespace-nowrap font-heading text-[#FFD700] tracking-widest text-xl">EXPLORE PROGRAM</button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
