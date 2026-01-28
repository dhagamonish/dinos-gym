
import React from 'react';
import { INSTAGRAM_URL } from '../constants';

const Gallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/gym1/800/800?grayscale',
    'https://picsum.photos/seed/gym2/800/1000?grayscale',
    'https://picsum.photos/seed/gym3/800/800?grayscale',
    'https://picsum.photos/seed/gym4/1000/800?grayscale',
    'https://picsum.photos/seed/gym5/800/800?grayscale',
    'https://picsum.photos/seed/gym6/800/1200?grayscale',
  ];

  return (
    <section id="gallery" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading text-white">INSIDE DINO'S GYM</h2>
          <p className="text-[#E63946] font-heading tracking-[0.3em] uppercase mt-2">The Real Atmosphere</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden border-2 border-zinc-800 break-inside-avoid">
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <span className="text-white border-2 border-white px-4 py-2 font-heading tracking-widest text-sm uppercase">VIEW ON IG</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-white hover:text-[#FFB800] font-heading text-2xl transition-colors"
          >
            FOLLOW US @DINOS.GYM.SOLIHULL
            <span className="w-12 h-[2px] bg-[#FFB800]"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
