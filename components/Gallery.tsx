import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=800',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800',
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    }
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrev();
    };
    
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 border-y-8 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-comic text-black mb-2">
            THE <span className="text-[#d32f2f]">WALL</span> OF IRON
          </h2>
          <p className="font-typewriter text-xl text-black/60 uppercase tracking-tighter">Snapshots from the dungeon floor</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className={`relative group overflow-hidden border-4 border-black bg-white/40 backdrop-blur-sm p-2 break-inside-avoid shadow-[8px_8px_0px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)] cursor-zoom-in ${
                i % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-[#d32f2f] text-white px-2 py-1 font-comic text-sm transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW LARGE
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 group"
          >
            <span className="font-handwriting text-4xl text-black group-hover:text-[#d32f2f] transition-colors">Follow the Legends on IG</span>
            <div className="flex items-center gap-4">
              <span className="h-1 w-20 bg-black"></span>
              <span className="font-comic text-2xl tracking-widest text-[#d32f2f]">@DINOS.GYM.SOLIHULL</span>
              <span className="h-1 w-20 bg-black"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative z-10 max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-16 right-0 md:-right-16 text-white hover:text-[#d32f2f] transition-all p-2 bg-black/50 rounded-full border-2 border-white/20 hover:border-[#d32f2f]"
              aria-label="Close modal"
            >
              <X size={48} />
            </button>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-24 z-20">
              <button 
                onClick={handlePrev}
                className="bg-yellow-400 text-black border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-24 z-20">
              <button 
                onClick={handleNext}
                className="bg-yellow-400 text-black border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Image Container */}
            <div className="border-8 border-black bg-white p-3 shadow-[20px_20px_0px_#d32f2f] transform rotate-1 animate-zoom-in-up">
              <img 
                src={images[selectedIndex]} 
                alt={`Selected archive image ${selectedIndex + 1}`} 
                className="max-h-[75vh] w-auto grayscale contrast-125 brightness-110 border-4 border-black/10"
              />
              
              {/* Overlay Badges */}
              <div className="absolute -top-6 -right-6 bg-[#d32f2f] text-white border-4 border-black px-4 py-2 font-comic text-xl rotate-6 shadow-[4px_4px_0px_#000]">
                IMAGE {selectedIndex + 1} / {images.length}
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 border-4 border-black px-6 py-2 font-comic text-2xl -rotate-6 shadow-[6px_6px_0px_#000]">
                TRUE STRENGTH!
              </div>
            </div>
            
            {/* Controls Helper */}
            <div className="mt-16 flex items-center gap-8">
               <p className="font-typewriter text-white/40 text-sm uppercase tracking-widest hidden md:block">
                Use arrows to navigate
              </p>
              <div className="h-px w-12 bg-white/20 hidden md:block"></div>
              <p className="font-typewriter text-white text-center text-xl uppercase tracking-widest animate-pulse cursor-pointer" onClick={() => setSelectedIndex(null)}>
                Click backdrop to exit
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;