
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-heading text-[#FFB800] mb-8 leading-none">VISIT US</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-[#1a1a1a] p-3 border border-zinc-800 text-[#E63946]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading text-xl mb-1">LOCATION</h4>
                  <p className="text-gray-400">Unit 1-3, Cranmore Boulevard<br />Solihull, West Midlands B90 4RR, UK</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#1a1a1a] p-3 border border-zinc-800 text-[#E63946]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading text-xl mb-1">OPENING HOURS</h4>
                  <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
                    <div>Mon - Fri:</div><div>06:00 - 22:00</div>
                    <div>Saturday:</div><div>08:00 - 18:00</div>
                    <div>Sunday:</div><div>08:00 - 16:00</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#1a1a1a] p-3 border border-zinc-800 text-[#E63946]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading text-xl mb-1">GET IN TOUCH</h4>
                  <p className="text-gray-400 mb-1">Phone: +44 121 745 9999</p>
                  <p className="text-gray-400">Email: info@dinosgym.co.uk</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href={INSTAGRAM_URL} className="p-3 bg-zinc-900 border border-zinc-800 text-white hover:text-[#E63946] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 text-white hover:text-[#E63946] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="h-[500px] border-4 border-[#1a1a1a] relative group overflow-hidden">
            {/* Simple Mock Map Container */}
            <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center flex-col p-10 text-center">
              <MapPin size={60} className="text-[#E63946] mb-4 animate-bounce" />
              <p className="text-white font-heading text-2xl mb-4 uppercase">View Location on Map</p>
              <p className="text-gray-500 mb-8 max-w-sm">We are located in the heart of Solihull's industrial area, the perfect spot for some heavy lifting.</p>
              <a 
                href="https://www.google.com/maps/search/Dino's+Gym+Solihull" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E63946] text-white px-8 py-3 font-heading tracking-widest hover:bg-[#D62828] transition-colors"
              >
                GET DIRECTIONS
              </a>
            </div>
            {/* Gritty image overlay for map aesthetics */}
            <div className="absolute inset-0 gritty-overlay opacity-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
