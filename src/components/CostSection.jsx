import React from 'react';
import './CostSection.css';

const features = [
  { text: 'Hassle-Free & Quick Onboarding', icon: 'icon-quickOnboard.svg' },
  { text: '24/7 Support', icon: 'icon-support.svg' },
  { text: 'Developers with 8+ Yrs Experience', icon: 'icon-target.svg' },
  { text: 'NDA Protection Guaranteed', icon: 'icon-nda.svg' }
];

const CostSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cost-section">
      <h2>
        Worried About <span>App Development Cost</span>?<br />
        Local Teams Too <span>Expensive</span>?
      </h2>
      <p>
        Big Brand Bucket offers affordable mobile app development services in India with zero compromise on quality.
        Hire expert developers at a fraction of the local cost, backed by 24/7 support and NDAs.
      </p>

      <div className="cost-features">
        {features.map((feature, idx) => (
          <div className="feature-box" key={idx}>
            <img
              src={new URL(`../assets/${feature.icon}`, import.meta.url).href}
              alt={`${feature.text} icon`}
            />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      <button className="cta-btn" onClick={scrollToForm}>Get Cost Estimate</button>
    </section>
  );
};

export default CostSection;
