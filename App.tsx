import React, { useState } from 'react';
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
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-brand-accent selection:text-white">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://i.imgur.com/NStHtjx.png')" }}
      >
        <div className="absolute inset-0 bg-brand-darker/85"></div>
      </div>

      <Navbar onOpenContact={openContactModal} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <About />
        <Services />
        <WhyUs onOpenContact={openContactModal} />
        <Testimonials />
        <Packages />
        <Maintenance />
        <FinalCTA onOpenContact={openContactModal} />
      </main>
      <Footer />
      <SocialProof />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default App;