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
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-brand-primary selection:text-white">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-1] bg-brand-darker">
        {/* Modern Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
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