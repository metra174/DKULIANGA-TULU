import React, { useState, useEffect } from 'react';
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
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate static snowflakes for the background
    const flakes = Array.from({ length: 30 }, (_, i) => i);
    setSnowflakes(flakes);
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://i.imgur.com/NStHtjx.png')" }}
      >
        {/* Red/Dark Overlay for Christmas Vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/90 via-brand-darker/80 to-red-900/20"></div>
      </div>

      {/* Snow Effect */}
      {snowflakes.map((i) => (
        <div 
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >
          ❄
        </div>
      ))}

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