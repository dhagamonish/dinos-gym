import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 border-t-8 border-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-comic text-black mb-4">
            THEY <span className="text-[#d32f2f]">PROVED</span> IT!
          </h2>
          <p className="font-typewriter text-xl max-w-2xl mx-auto uppercase font-bold text-black/60 tracking-tighter">
            Read these amazing unsolicited letters from Dino's disciples!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className={`bg-white/40 backdrop-blur-md border-4 border-black p-8 relative shadow-[10px_10px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-105`}
            >
              {/* Paper Clip Visual */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 border-4 border-black border-b-0 rounded-t-xl opacity-20"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border-4 border-black p-1 grayscale group-hover:grayscale-0 transition-all bg-[#1a1a1a]">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${i+50}`} 
                    alt={t.author} 
                    className="w-full h-full object-cover filter contrast-150 brightness-110"
                  />
                </div>
                <div>
                  <h4 className="font-comic text-2xl text-[#d32f2f] leading-none mb-1 uppercase">{t.author}</h4>
                  <p className="font-typewriter text-[10px] tracking-widest uppercase text-zinc-500 font-bold">{t.role}</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-2 -left-2 text-[#d32f2f] opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H2.017V21H5.017Z" /></svg>
                </div>
                <p className="font-typewriter text-sm leading-relaxed text-black/80 pl-6 mb-6">
                  {t.quote}
                </p>
              </div>
              
              <div className="flex justify-center text-[#d32f2f] border-t-2 border-dotted border-black pt-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>

              <div className="absolute -bottom-3 right-4 bg-black text-white px-2 py-1 font-comic text-xs">
                VERIFIED STORY
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-handwriting text-3xl mb-4">Will YOU be the next success story?</p>
          <div className="w-48 h-1 bg-black mx-auto mb-4"></div>
          <p className="font-comic text-xl text-zinc-500 tracking-[0.2em]">SINCE 1994 - RESULTS SPEAK LOUDER THAN WORDS</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;