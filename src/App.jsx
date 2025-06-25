import React from 'react';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import ServicesSection from './components/ServicesSection';
import CostSection from './components/CostSection';
import TestimonialSection from './components/TestimonialSection';
import WhyTechnoscoreSection from './components/WhyTechnoscoreSection';
import PerformanceSection from './components/PerformanceSection';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <CostSection />
      <TestimonialSection />
      <WhyTechnoscoreSection />
      <PerformanceSection />
      <SuccessStories />
      <FAQ />
      <ContactSection />
      <FooterSection />

      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
