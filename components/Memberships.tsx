
import React from 'react';
import { Check } from 'lucide-react';
import { MEMBERSHIP_PLANS, SIGNUP_URL } from '../constants';

const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#FFD700] text-sm tracking-[0.4em] font-bold uppercase">Pricing Plan</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mt-4 uppercase">Choose Your Plan</h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">Choose a plan that fits your goals, schedule, and lifestyle we've got an option for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-10 transition-all duration-500 ${
                plan.isSpecial 
                ? 'bg-[#FFD700] text-black scale-105 z-10' 
                : 'bg-zinc-900 text-white border border-zinc-800'
              }`}
            >
              <h3 className="text-2xl font-heading mb-8 uppercase">{plan.name}</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-heading tracking-tighter">${plan.price}</span>
                <span className={`ml-2 text-sm uppercase font-bold ${plan.isSpecial ? 'text-black/60' : 'text-zinc-500'}`}>/ Month</span>
              </div>
              
              <div className={`h-[1px] w-full mb-10 ${plan.isSpecial ? 'bg-black/10' : 'bg-zinc-800'}`}></div>

              <ul className="flex-1 space-y-5 mb-12">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4 text-sm font-semibold">
                    <Check size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => window.open(SIGNUP_URL, '_blank')}
                className={`w-full py-5 font-heading text-xl uppercase tracking-widest transition-all ${
                  plan.isSpecial 
                  ? 'bg-black text-white hover:scale-105' 
                  : 'bg-zinc-800 text-white hover:bg-[#FFD700] hover:text-black'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
