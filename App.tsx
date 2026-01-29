import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Programs from './components/Programs.tsx';
import WhyChoose from './components/WhyChoose.tsx';
import Facilities from './components/Facilities.tsx';
import Memberships from './components/Memberships.tsx';
import Testimonials from './components/Testimonials.tsx';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AnimateOnScroll from './components/AnimateOnScroll.tsx';
import ChatBot from './components/ChatBot.tsx';

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