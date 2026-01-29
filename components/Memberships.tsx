import React from 'react';
import { MEMBERSHIP_PLANS, SIGNUP_URL } from '../constants';

const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-16 sm:py-24 px-4 sm:px-6 border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <div className="flex-1">
            <h2 className="text-5xl sm:text-6xl font-comic text-[#d32f2f] mb-8 sm:mb-12 uppercase drop-shadow-sm text-center lg:text-left">CHOOSE YOUR SET!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {MEMBERSHIP_PLANS.map((plan) => (
                <div 
                  key={plan.name}
                  className={`relative p-6 border-4 border-black transition-all vintage-paper-texture ${
                    plan.isSpecial 
                    ? 'shadow-[8px_8px_0px_#d32f2f] sm:shadow-[12px_12px_0px_#d32f2f] md:-rotate-1' 
                    : 'shadow-[6px_6px_0px_#1a1a1a] sm:shadow-[8px_8px_0px_#1a1a1a] md:rotate-1'
                  } hover:rotate-0 hover:scale-105 duration-300 group`}
                >
                  <h3 className="text-2xl sm:text-3xl font-comic mb-3 sm:mb-4 text-[#d32f2f] uppercase">{plan.name}</h3>
                  <div className="text-3xl sm:text-4xl font-comic mb-4 sm:mb-6">£{plan.price}</div>
                  <ul className="space-y-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-bold uppercase">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="border-b-2 border-dotted border-black pb-1 group-hover:border-black/40">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => window.open(SIGNUP_URL, '_blank')}
                    className="w-full bg-[#1a1a1a] text-white py-3 sm:py-4 font-comic text-lg sm:text-xl hover:bg-[#d32f2f] shadow-[3px_3px_0px_rgba(0,0,0,0.2)] sm:shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:shadow-none transition-all"
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border-4 border-[#26a69a] p-6 sm:p-8 bg-white/60 backdrop-blur-sm relative shadow-[8px_8px_0px_rgba(0,0,0,0.1)] sm:shadow-[10px_10px_0px_rgba(0,0,0,0.1)]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#26a69a] text-white font-comic text-3xl sm:text-4xl px-6 sm:px-8 py-2 border-4 border-black rotate-[-2deg] shadow-[4px_4px_0px_#000] z-20 whitespace-nowrap">
                ORDER TODAY!
              </div>
              
              <div className="mt-8 space-y-4 sm:space-y-6">
                <p className="font-comic text-[#26a69a] text-lg sm:text-xl leading-tight">
                  DINO'S GYM SOLIHULL<br/>
                  Unit 1-3, Cranmore Blvd<br/>
                  Solihull, B90 4RR
                </p>
                
                <div className="space-y-4 font-bold text-xs sm:text-sm">
                   <p className="border-b-2 border-dotted border-black pb-2 leading-tight">Gentlemen: I enclose __________ Rush me my membership!</p>
                   <div className="h-6 sm:h-8 border-b-2 border-dotted border-black">Name:</div>
                   <div className="h-6 sm:h-8 border-b-2 border-dotted border-black">Street:</div>
                   <div className="h-6 sm:h-8 border-b-2 border-dotted border-black">City/Postcode:</div>
                </div>

                <div className="bg-[#1a1a1a] text-white p-3 sm:p-4 text-center font-comic text-xl sm:text-2xl rotate-1 mt-6 sm:mt-8 shadow-[4px_4px_0px_#d32f2f] sm:shadow-[6px_6px_0px_#d32f2f]">
                  ALL ORDERS SHIPPED PROMPTLY!
                </div>
                
                <p className="text-[8px] sm:text-[10px] uppercase font-bold text-center mt-4">
                  * At least 1/3 down payment required for C.O.D. orders.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Memberships;