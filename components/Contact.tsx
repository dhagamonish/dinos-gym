import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-b-8 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="vintage-paper-texture border-8 border-black p-10 shadow-[15px_15px_0px_#1a1a1a] transform -rotate-1">
            <h2 className="text-6xl md:text-7xl font-comic text-[#d32f2f] mb-8 leading-none uppercase">
              REACH OUT! ☎️
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 border-b-2 border-dotted border-black pb-6">
                <div className="bg-[#d32f2f] p-3 border-2 border-black text-white rotate-3">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-black font-comic text-2xl mb-1 uppercase">THE ADDRESS</h4>
                  <p className="font-typewriter text-lg leading-tight">Unit 1-3, Cranmore Boulevard<br />Solihull, West Midlands B90 4RR</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b-2 border-dotted border-black pb-6">
                <div className="bg-[#26a69a] p-3 border-2 border-black text-white -rotate-3">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-black font-comic text-2xl mb-1 uppercase">TRAINING HOURS</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-typewriter text-sm">
                    <div className="font-bold">Mon - Fri:</div><div>06:00 - 22:00</div>
                    <div className="font-bold">Saturday:</div><div>08:00 - 18:00</div>
                    <div className="font-bold">Sunday:</div><div>08:00 - 16:00</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-yellow-400 p-3 border-2 border-black text-black rotate-2">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-black font-comic text-2xl mb-1 uppercase">HOTLINE</h4>
                  <p className="font-typewriter text-lg">Ph: +44 121 745 9999</p>
                  <p className="font-typewriter text-sm text-black/60">Ask for the Head Coach!</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-4 border-black flex gap-6">
              <a href={INSTAGRAM_URL} className="bg-white/50 border-4 border-black p-4 hover:bg-[#d32f2f] hover:text-white transition-all transform hover:scale-110">
                <Instagram size={32} />
              </a>
              <a href="#" className="bg-white/50 border-4 border-black p-4 hover:bg-[#26a69a] hover:text-white transition-all transform hover:scale-110">
                <Facebook size={32} />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#d32f2f] transform rotate-2 -z-10 border-4 border-black"></div>
            <div className="h-[600px] border-4 border-black relative overflow-hidden bg-white/40 shadow-[12px_12px_0px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-30 pointer-events-none z-10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center flex-col p-10 text-center bg-transparent">
                <div className="w-24 h-24 bg-white/80 border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_#d32f2f] animate-bounce">
                  <MapPin size={48} className="text-[#d32f2f]" />
                </div>
                <h3 className="text-black font-comic text-5xl mb-4 uppercase">FIND THE DUNGEON</h3>
                <p className="font-typewriter text-lg mb-8 max-w-sm">Just off the M42. Look for the yellow signs and the sound of clanking iron.</p>
                
                <a 
                  href="https://www.google.com/maps/search/Dino's+Gym+Solihull" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-12 py-5 font-comic text-3xl shadow-[8px_8px_0px_#d32f2f] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
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