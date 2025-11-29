import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import Maintenance from './components/Maintenance';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-darker text-white overflow-x-hidden selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Packages />
        <Maintenance />
        <FinalCTA />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
};

export default App;