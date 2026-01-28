import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=800',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800',
  ];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-[#fdf1d6] border-y-8 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-comic text-black mb-2 italic">
            THE <span className="text-[#d32f2f]">WALL</span> OF IRON
          </h2>
          <p className="font-typewriter text-xl text-black/60 uppercase tracking-tighter">Snapshots from the dungeon floor</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className={`relative group overflow-hidden border-4 border-black bg-white p-2 break-inside-avoid shadow-[8px_8px_0px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)] cursor-zoom-in ${
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
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative z-10 max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#d32f2f] transition-colors p-2"
            >
              <X size={40} />
            </button>
            
            <div className="border-8 border-black bg-white p-2 shadow-[20px_20px_0px_rgba(211,47,47,0.5)] transform rotate-1">
              <img 
                src={selectedImage} 
                alt="Selected iron workout" 
                className="max-h-[80vh] w-auto grayscale contrast-125 brightness-110"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 border-4 border-black px-4 py-2 font-comic text-2xl -rotate-6">
                TRUE STRENGTH!
              </div>
            </div>
            
            <p className="mt-12 font-typewriter text-white text-center text-xl uppercase tracking-widest animate-pulse">
              Click anywhere to close the archive
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;