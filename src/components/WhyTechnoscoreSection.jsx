import React from 'react';
import './WhyTechnoscoreSection.css';

const points = [
  {
    title: "Proactive Project Management",
    text: "Our experienced project managers ensure faster product launches using agile workflows, automation, and testing. We minimize time-to-market for your mobile or web application."
  },
  {
    title: "Flexible Engagement Models",
    text: "As a custom app development company, we offer hourly, monthly, or fixed models. Choose what fits your goals and budget with our scalable hiring solutions."
  },
  {
    title: "Guaranteed Transparency",
    text: "We ensure clear updates, milestone tracking, and real-time communication—so you’re always informed during your app development journey."
  },
  {
    title: "User-First Design Thinking",
    text: "Our UI/UX team prioritizes human-centered design to create intuitive and engaging mobile app experiences that increase retention and conversions."
  },
  {
    title: "Timezone Advantage",
    text: "Hire app developers in India and benefit from round-the-clock productivity. Our global team ensures continuous progress, even while you sleep."
  },
  {
    title: "Maximize Your ROI",
    text: "We deliver high-quality mobile apps at competitive prices. Big Brand Bucket helps you get premium results while keeping your app development cost low."
  }
];

const WhyTechnoscoreSection = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">
        WHY <span>BIG BRAND BUCKET?</span>
      </h2>
      <p className="why-intro">
        As a leading mobile app development company in India, here’s why startups and enterprises trust us to bring their app ideas to life:
      </p>
      <div className="why-grid">
        {points.map((point, index) => (
          <div className="why-box" key={index}>
            <div className="why-box-header">
              <div className="why-number">{index + 1}</div>
              <h4>{point.title}</h4>
            </div>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTechnoscoreSection;
