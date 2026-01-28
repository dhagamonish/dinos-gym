import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChoose from './components/WhyChoose';
import Facilities from './components/Facilities';
import Memberships from './components/Memberships';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimateOnScroll from './components/AnimateOnScroll';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#d32f2f] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <AnimateOnScroll variant="up" delay={100}>
          <About />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={200}>
          <Programs />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="right" delay={100}>
          <WhyChoose />
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale" delay={150}>
          <Facilities />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={100}>
          <Memberships />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade" delay={250}>
          <Gallery />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="left" delay={100}>
          <Testimonials />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={150}>
          <Contact />
        </AnimateOnScroll>
      </main>
      
      {/* Newsletter Section - Vintage Ad Style */}
      <section className="py-24 bg-[#d32f2f] relative overflow-hidden border-y-8 border-black">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/halftone.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0px_#000] transform -rotate-1">
            <div className="text-center mb-10">
              <AnimateOnScroll variant="scale" delay={100}>
                <h2 className="text-5xl md:text-8xl font-comic text-black mb-4 uppercase italic leading-none">
                  FREE <span className="text-[#d32f2f]">ADVICE</span> INSIDE!
                </h2>
                <p className="font-typewriter text-2xl text-black/60 uppercase font-bold tracking-tight">Join our newsletter and receive the 32-page training blueprint!</p>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll variant="up" delay={300}>
              <div className="flex flex-col md:flex-row max-w-3xl mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="TYPE YOUR EMAIL HERE..." 
                  className="flex-1 bg-white border-4 border-black p-5 text-black placeholder:text-black/30 focus:bg-yellow-50 outline-none font-comic text-2xl transition-colors"
                />
                <button className="bg-[#d32f2f] text-white px-12 py-5 border-4 border-black font-comic text-3xl shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95">
                  SEND ME SECRETS!
                </button>
              </div>
              <p className="font-handwriting text-2xl text-center mt-8 text-black transform rotate-[-1deg]">
                "The only newsletter dedicated to the true fan of the iron."
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;