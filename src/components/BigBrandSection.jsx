import React from 'react';
import './BigBrandSection.css';
import officeImage from '../assets/office-pictures.jpg';

const BigBrandSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bigbrand-section">
      <div className="bigbrand-content">
        <h1>
          
          Big Brand Bucket – Your trusted digital partner for impactful<br />
          <span className="highlight">branding and mobile-first experiences.</span>
        </h1>
        <p>
          Looking for a reliable mobile app development and branding company that delivers results? 
          <strong> Big Brand Bucket</strong> is your go-to partner. We specialize in mobile app development, 
          brand strategy, and next-gen web solutions tailored for startups and enterprises.
        </p>
        <p>
          With a strong track record in delivering high-quality projects, we focus on scalable and user-centric solutions. 
          Our team blends <em>design</em>, <em>development</em>, and <em>strategy</em> to bring your ideas to life 
          and ensure your brand stands out in the digital space.
        </p>
        <button className="cta-button" onClick={scrollToForm}>
          Let’s Talk
        </button>
      </div>

      <div className="bigbrand-image">
        <img src={officeImage} alt="Big Brand Bucket Office" />
      </div>
    </section>
  );
};

export default BigBrandSection;
