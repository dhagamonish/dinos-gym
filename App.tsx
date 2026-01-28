
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
    <div className="min-h-screen selection:bg-[#FFD700] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        <AnimateOnScroll variant="up" delay={100}>
          <About />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={100}>
          <Programs />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="right" delay={200}>
          <WhyChoose />
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale" delay={100}>
          <Facilities />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={100}>
          <Memberships />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade" delay={300}>
          <Gallery />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="left" delay={200}>
          <Testimonials />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="up" delay={100}>
          <Contact />
        </AnimateOnScroll>
      </main>
      
      {/* Newsletter Section */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimateOnScroll variant="scale">
            <h2 className="text-5xl md:text-8xl font-heading text-white mb-8 uppercase">JOIN OUR NEWSLETTER <br/> <span className="text-[#FFD700]">FOR ADVICE & OFFERS!</span></h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="up" delay={200}>
            <div className="flex flex-col md:flex-row max-w-2xl mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Type your email" 
                className="flex-1 bg-black/50 border border-zinc-700 p-5 text-white focus:border-[#FFD700] outline-none font-heading text-xl"
              />
              <button className="bg-[#FFD700] text-black px-12 py-5 font-heading text-xl hover:scale-105 transition-all">SUBSCRIBE</button>
            </div>
            <p className="text-zinc-500 mt-6 text-sm uppercase tracking-widest">Stay updated and informed with our latest classes, events, and best offers.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
