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
        LOCAL DEVELOPMENT TEAMS ARE TOO <span>COSTLY</span>,<br />
        <span>IMPACTING YOUR BUDGET?</span>
      </h2>
      <p>
        Big Brand Bucket offers competitive pricing with uncompromising quality, providing <br />
        the best value for your investment.
      </p>

      <div className="cost-features">
        {features.map((feature, idx) => (
          <div className="feature-box" key={idx}>
            <img
              src={new URL(`../assets/${feature.icon}`, import.meta.url).href}
              alt={feature.text}
            />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      <button className="cta-btn" onClick={scrollToForm}>Talk to our Experts</button>
    </section>
  );
};

export default CostSection;
