
import React from 'react';
import { Check } from 'lucide-react';
import { MEMBERSHIP_PLANS, SIGNUP_URL } from '../constants';

const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-24 bg-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-4">JOIN THE LEGEND</h2>
          <p className="text-[#E63946] font-heading text-xl tracking-widest uppercase">Start Your Journey Today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 bg-[#0a0a0a] border-2 transition-all duration-300 hover:-translate-y-2 group ${
                plan.isSpecial ? 'border-[#E63946] shadow-[0_10px_40px_rgba(230,57,70,0.1)]' : 'border-zinc-800'
              }`}
            >
              {plan.isSpecial && (
                <div className="absolute top-0 right-0 bg-[#E63946] text-white px-4 py-1 text-xs font-heading tracking-widest transform translate-y-[-50%]">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-heading text-[#FFB800] mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white uppercase font-impact">{plan.price}</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-400 gap-3">
                    <Check size={18} className="text-[#E63946]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 text-center font-heading tracking-widest transition-all ${
                  plan.isSpecial 
                  ? 'bg-[#E63946] text-white hover:bg-[#D62828]' 
                  : 'border border-gray-600 text-gray-400 hover:border-white hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-500 max-w-2xl mx-auto text-sm">
          <p>
            * Prices are subject to change. Corporate and Student memberships require proof of status at first visit.
            All memberships include full access to the gym facilities and legendary community atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
