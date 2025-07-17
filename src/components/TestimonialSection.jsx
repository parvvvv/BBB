import React, { useState, useEffect } from 'react';
import './TestimonialSection.css';

const logoClutch = new URL('../assets/logo-clutch.svg', import.meta.url).href;
const logoTrustpilot = new URL('../assets/logo-trustpilot.svg', import.meta.url).href;

const testimonials = [
  {
    text: "We needed a robust eLearning solution in Nigeria. Big Brand Bucket, a mobile app development company in India, was highly recommended — and they exceeded our expectations.",
    name: "Tundey",
    position: "Managing Director, Petss"
  },
  {
    text: "Big Brand Bucket helped us launch a high-performing eCommerce app on time and within budget. Their developers are some of the best in India.",
    name: "Emily Roberts",
    position: "CTO, ShopEase"
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
            <h2>CLIENT TESTIMONIALS<span> & REVIEWS</span></h2>
            <p>
              As a trusted mobile app development company in India, we’ve earned 5-star reviews and a 98% client retention rate. See what our clients say:
            </p>
          </div>
          <div className="review-logos-box">
            <img src={logoClutch} alt="Clutch Verified Reviews" />
            <div className="divider"></div>
            <img src={logoTrustpilot} alt="Trustpilot Client Ratings" />
          </div>
        </div>
      </div>

      <div className="testimonial-slider">
        <button onClick={prev} className="nav-btn">←</button>
        <blockquote className={`testimonial-content slide`}>
          <p className="quote">“{testimonials[index].text}”</p>
          <h4>{testimonials[index].name}</h4>
          <p className="title">{testimonials[index].position}</p>
        </blockquote>
        <button onClick={next} className="nav-btn">→</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
