import React from 'react';
import './WhyTechnoscoreSection.css';

const points = [
  {
    title: "Proactive Project Management",
    text: "Our experienced managers ensure your product launches faster with agile workflows, automation, and thorough testing—minimizing time-to-market and maximizing efficiency."
  },
  {
    title: "Flexible Engagement Models",
    text: "Choose from our range of hiring models or customize one based on your goals. Big Brand Bucket offers scalable, budget-friendly solutions tailored to your needs."
  },
  {
    title: "Guaranteed Transparency",
    text: "We maintain full transparency with regular updates, milestone tracking, and open communication—ensuring you always know the status of your project."
  },
  {
    title: "User-First Design Thinking",
    text: "We apply design thinking to craft user interfaces that connect emotionally with your users—boosting satisfaction, engagement, and retention."
  },
  {
    title: "Timezone Advantage",
    text: "Leverage our global team to ensure continuous progress during your off-hours—accelerating delivery with round-the-clock development and support."
  },
  {
    title: "Maximize Your ROI",
    text: "Get the best of both worlds—premium quality and affordable pricing. Big Brand Bucket helps you stretch your budget without compromising results."
  }
];

const WhyTechnoscoreSection = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">WHY <span>BIG BRAND BUCKET?</span></h2>
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
