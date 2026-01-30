
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="vintage-paper-texture border-4 sm:border-8 border-black p-6 sm:p-10 shadow-[10px_10px_0px_#1a1a1a] sm:shadow-[15px_15px_0px_#1a1a1a]">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-comic text-[#d32f2f] mb-6 sm:mb-8 leading-none uppercase text-center lg:text-left">
              REACH OUT! ☎️
            </h2>
            
            <div className="space-y-8 sm:space-y-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b-2 border-dotted border-black pb-6 text-center sm:text-left">
                <div className="bg-[#d32f2f] p-3 border-2 border-black text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-black font-comic text-xl sm:text-2xl mb-1 uppercase">THE ADDRESS</h4>
                  <p className="font-typewriter text-base sm:text-lg leading-tight">Unit 1-3, Cranmore Boulevard<br />Solihull, West Midlands B90 4RR</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b-2 border-dotted border-black pb-6 text-center sm:text-left">
                <div className="bg-[#26a69a] p-3 border-2 border-black text-white">
                  <Clock size={28} />
                </div>
                <div className="w-full">
                  <h4 className="text-black font-comic text-xl sm:text-2xl mb-1 uppercase">TRAINING HOURS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 font-typewriter text-xs sm:text-sm max-w-xs mx-auto sm:mx-0">
                    <div className="flex justify-between sm:block"><span className="font-bold">Mon - Fri:</span> 06:00 - 22:00</div>
                    <div className="flex justify-between sm:block"><span className="font-bold">Saturday:</span> 08:00 - 18:00</div>
                    <div className="flex justify-between sm:block"><span className="font-bold">Sunday:</span> 08:00 - 16:00</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                <div className="bg-yellow-400 p-3 border-2 border-black text-black">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-black font-comic text-xl sm:text-2xl mb-1 uppercase">HOTLINE</h4>
                  <p className="font-typewriter text-base sm:text-lg">Ph: +44 121 745 9999</p>
                  <p className="font-typewriter text-xs text-black/60">Ask for the Head Coach!</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-4 border-black flex justify-center lg:justify-start gap-4 sm:gap-6">
              <a href={INSTAGRAM_URL} className="bg-white/50 border-2 sm:border-4 border-black p-3 sm:p-4 hover:bg-[#d32f2f] hover:text-white transition-all transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-white/50 border-2 sm:border-4 border-black p-3 sm:p-4 hover:bg-[#26a69a] hover:text-white transition-all transform hover:scale-110">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="relative group mt-8 lg:mt-0 px-2 sm:px-0">
            <div className="absolute inset-0 bg-[#d32f2f] -z-10 border-4 border-black"></div>
            <div className="h-[400px] sm:h-[600px] border-4 border-black relative overflow-hidden bg-white/40 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-30 pointer-events-none z-10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center flex-col p-6 sm:p-10 text-center bg-transparent">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/80 border-4 border-black rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-[3px_3px_0px_#d32f2f] sm:shadow-[4px_4px_0px_#d32f2f] animate-bounce">
                  <MapPin size={32} className="text-[#d32f2f]" />
                </div>
                <h3 className="text-black font-comic text-4xl sm:text-5xl mb-3 sm:mb-4 uppercase leading-none">FIND THE DUNGEON</h3>
                <p className="font-typewriter text-sm sm:text-lg mb-6 sm:mb-8 max-w-sm">Just off the M42. Look for the yellow signs and the sound of clanking iron.</p>
                
                <a 
                  href="https://www.google.com/maps/search/Dino's+Gym+Solihull" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 sm:px-12 py-3 sm:py-5 font-comic text-2xl sm:text-3xl shadow-[5px_5px_0px_#d32f2f] sm:shadow-[8px_8px_0px_#d32f2f] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  GET DIRECTIONS »
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
