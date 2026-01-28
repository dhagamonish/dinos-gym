
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading text-white">MEMBER VOICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#1a1a1a] p-10 border-l-8 border-[#FFB800] relative">
              <Quote size={40} className="text-[#FFB800]/20 absolute top-4 right-4" />
              <p className="text-gray-300 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center font-heading text-white text-xl">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-heading tracking-wider">{t.author}</h4>
                  <p className="text-[#E63946] text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
