import React, { useState, useEffect } from 'react';
import './TestimonialSection.css';

const logoClutch = new URL('../assets/logo-clutch.svg', import.meta.url).href;
const logoTrustpilot = new URL('../assets/logo-trustpilot.svg', import.meta.url).href;

const testimonials = [
  {
    text: "On the lookout for an eLearning solution for primary and secondary schools in Nigeria, we came upon Big Brand Bucket because of a recommendation from a trusted peer...",
    name: "Tundey",
    position: "MD at Petss"
  },
  {
    text: "Big Brand Bucket helped us launch a powerful eCommerce app within tight deadlines. The team’s technical skills and dedication were outstanding.",
    name: "Emily Roberts",
    position: "CTO at ShopEase"
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-top">
          <div className="testimonial-text">
            <h2>HEAR FROM <span>OUR CLIENTS</span></h2>
            <p>Our commitment to client satisfaction has resulted in a 98% retention rate. Here's feedback from our clients:</p>
          </div>
          <div className="review-logos-box">
            <img src={logoClutch} alt="Clutch" />
            <div className="divider"></div>
            <img src={logoTrustpilot} alt="Trustpilot" />
          </div>
        </div>
      </div>

      <div className="testimonial-slider">
        <button onClick={prev} className="nav-btn">←</button>
        <div className={`testimonial-content slide`}>
          <p className="quote">{testimonials[index].text}</p>
          <h4>{testimonials[index].name}</h4>
          <p className="title">{testimonials[index].position}</p>
        </div>
        <button onClick={next} className="nav-btn">→</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
