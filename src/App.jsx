import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ThankYou from './components/ThankYou'; // ✅ create this file later

const MainPage = () => (
  <>
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
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
