
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Memberships from './components/Memberships';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimateOnScroll from './components/AnimateOnScroll';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <Memberships />
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <Facilities />
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <Gallery />
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <Testimonials />
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default App;
