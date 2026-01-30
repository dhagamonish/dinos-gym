
import React from 'react';
import { MEMBERSHIP_PLANS, SIGNUP_URL } from '../constants';

const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-16 sm:py-24 px-4 sm:px-6 border-t-8 border-black vintage-paper-texture">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-7xl font-comic text-[#d32f2f] uppercase drop-shadow-sm">
            CHOOSE YOUR SET!
          </h2>
          <p className="font-typewriter text-lg sm:text-xl mt-4 max-w-2xl mx-auto text-black/60 uppercase font-bold">
            Select the training blueprint that matches your ambition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 border-4 border-black transition-all bg-white/40 backdrop-blur-md flex flex-col h-full ${
                plan.isSpecial 
                ? 'shadow-[12px_12px_0px_#d32f2f] border-[#d32f2f]' 
                : 'shadow-[8px_8px_0px_#1a1a1a]'
              } hover:scale-105 duration-300 group`}
            >
              {plan.isSpecial && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#d32f2f] text-white px-4 py-1 border-2 border-black font-comic text-xl shadow-[4px_4px_0px_#000]">
                  POPULAR!
                </div>
              )}
              
              <h3 className="text-3xl sm:text-4xl font-comic mb-4 text-[#d32f2f] uppercase">{plan.name}</h3>
              <div className="text-4xl sm:text-5xl font-comic mb-6 pb-4 border-b-4 border-dotted border-black">
                £{plan.price}
                <span className="text-lg font-typewriter lowercase ml-2">/mo</span>
              </div>
              
              <ul className="space-y-3 mb-10 flex-grow text-xs sm:text-sm font-bold uppercase">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="text-[#d32f2f]">»</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => window.open(SIGNUP_URL, '_blank')}
                className={`w-full py-4 font-comic text-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:shadow-none transition-all border-4 border-black ${
                  plan.isSpecial 
                  ? 'bg-[#d32f2f] text-white hover:bg-black' 
                  : 'bg-black text-white hover:bg-[#d32f2f]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-handwriting text-2xl text-black/60">
            No contracts. No hidden fees. Just results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
