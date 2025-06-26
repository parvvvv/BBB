import React from 'react';
import './TechnoscoreContact.css';

const wpIcon = new URL('../assets/wp.jpeg', import.meta.url).href;

const TechnoscoreContact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <div className="logo-image">
          <img src={new URL('../assets/BigBrandBucketLogo.webp', import.meta.url).href} alt="Big Brand Bucket Logo" className="logo-img" />
          <p className="tagline">BUILT FOR BIGGER IMPACT</p>
        </div>
      </header>

      <section className="description">
        <p>
          Big Brand Bucket is a global digital solutions provider with over <strong>25 years of experience</strong>. Headquartered in New Delhi, India, we have a team of <strong>1,500 skilled professionals</strong> serving over <strong>8,530 clients in 50 countries</strong>, including the <strong>US, UK, Canada, and Australia</strong>. Our key certifications include <strong>ISO 27001:2013 for Data Security, ISO 9001:2015 for Data Quality, HIPAA compliance, and CMMI level 3</strong>. We are also recognized as an <strong>Amazon Service Provider Network Partner, Microsoft Silver Development Partner, nopCommerce Gold Partner,</strong> and <strong>Shopify Solutions Partner</strong>.
        </p>
      </section>

      <div className="locations">
        <div className="location-box">
          <h4>🇺🇸 US</h4>
          <p>One Boston Place, 201 Washington St 26th Floor, Boston, MA 02108, United States</p>
        </div>

        <div className="location-box">
          <h4>🇮🇳 IN</h4>
          <p>Plot No. 76 D, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana, India</p>
          <p>📞 +91 9149039480</p>
        </div>
      </div>

      <div className="email-section">
        <p>For any query, please email us at <a href="mailto:raghav@bigbrandbucket.com">raghav@bigbrandbucket.com</a></p>
      </div>

      <footer className="footer">
        <p>© Copyright 2025, All Rights Reserved with <a href="mailto:raghav@bigbrandbucket.com">Big Brand Bucket</a> – Web & Mobile App Development Company.</p>
      </footer>

      <div className="sticky-buttons">
        <a href="tel:+919149039480" className="sticky-btn call-btn">📞 Call</a>
        <a href="https://wa.me/9149039480" className="sticky-btn whatsapp-btn">
          <img src={wpIcon} alt="WhatsApp" className="whatsapp-icon" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TechnoscoreContact;
