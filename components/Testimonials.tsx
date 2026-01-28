
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#FFD700] text-sm tracking-[0.4em] font-bold uppercase">Our Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mt-4 uppercase">Proof of Performance</h2>
          <p className="text-zinc-500 mt-4">We believe fitness is more than just reps and sets — it's about building confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-zinc-900/40 p-10 border border-zinc-800 hover:border-[#FFD700]/30 transition-all group">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt={t.author} />
                  </div>
                  <div>
                    <h4 className="font-heading text-white text-xl tracking-wider uppercase">{t.author}</h4>
                    <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase">{t.role}</p>
                  </div>
                </div>
                <div className="flex text-[#FFD700]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
