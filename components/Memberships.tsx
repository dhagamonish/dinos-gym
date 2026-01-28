
import React from 'react';
import { MEMBERSHIP_PLANS, SIGNUP_URL } from '../constants';

const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-24 px-6 bg-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Traditional Pricing Cards styled as "Sets" */}
          <div className="flex-1">
            <h2 className="text-6xl font-comic text-[#d32f2f] mb-12 uppercase italic">CHOOSE YOUR SET!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MEMBERSHIP_PLANS.map((plan) => (
                <div 
                  key={plan.name}
                  className={`relative p-6 border-4 border-black transition-all ${
                    plan.isSpecial 
                    ? 'bg-[#fdf1d6] shadow-[8px_8px_0px_#d32f2f]' 
                    : 'bg-white shadow-[8px_8px_0px_#1a1a1a]'
                  }`}
                >
                  <h3 className="text-3xl font-comic mb-4 text-[#d32f2f] uppercase">{plan.name}</h3>
                  <div className="text-4xl font-comic mb-6">${plan.price}</div>
                  <ul className="space-y-2 mb-8 text-xs font-bold uppercase">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="border-b-2 border-dotted border-black pb-1">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => window.open(SIGNUP_URL, '_blank')}
                    className="w-full bg-[#1a1a1a] text-white py-4 font-comic text-xl hover:bg-[#d32f2f]"
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The "Mail-in Form" Visual */}
          <div className="w-full lg:w-1/3">
            <div className="border-4 border-[#26a69a] p-8 bg-white relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#26a69a] text-white font-comic text-4xl px-8 py-2 border-4 border-black rotate-[-2deg]">
                ORDER TODAY!
              </div>
              
              <div className="mt-8 space-y-6">
                <p className="font-comic text-[#26a69a] text-xl leading-tight">
                  DINO'S GYM SOLIHULL<br/>
                  Unit 1-3, Cranmore Blvd<br/>
                  Solihull, B90 4RR
                </p>
                
                <div className="space-y-4 font-bold text-sm">
                   <p className="border-b-2 border-dotted border-black pb-2">Gentlemen: I enclose __________ Rush me my membership!</p>
                   <div className="h-4 border-b-2 border-dotted border-black">Name:</div>
                   <div className="h-4 border-b-2 border-dotted border-black">Street:</div>
                   <div className="h-4 border-b-2 border-dotted border-black">City/Postcode:</div>
                </div>

                <div className="bg-[#1a1a1a] text-white p-4 text-center font-comic text-2xl rotate-1 mt-8">
                  ALL ORDERS SHIPPED PROMPTLY!
                </div>
                
                <p className="text-[10px] uppercase font-bold text-center mt-4">
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
