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
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#d32f2f] selection:text-white relative">
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
      
      <Footer />

      {/* AI Chat Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;