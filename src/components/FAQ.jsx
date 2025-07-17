import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What makes your Android & iOS app development company in India different?",
    answer: "As a leading Android and iOS app development company in India, we stand out through our tailored approach, industry-specific expertise, and commitment to cost-effective, scalable solutions."
  },
  {
    question: "How do I hire a mobile app developer in India from your company?",
    answer: "You can easily hire mobile app developers in India through our flexible hiring models. Submit your requirements via our contact form, and we’ll match you with the right developer quickly."
  },
  {
    question: "What experience do your mobile app developers have?",
    answer: "Our mobile app developers have 5–10 years of experience building high-performance apps for startups, enterprises, and global brands across healthcare, eCommerce, real estate, and more."
  },
  {
    question: "Can I hire Android or iOS app developers on an hourly basis?",
    answer: "Yes, we offer hourly, monthly, and project-based hiring models to ensure flexibility based on your budget and timeline."
  },
  {
    question: "What support do you provide after the app is launched?",
    answer: "We offer comprehensive post-launch support including performance monitoring, regular updates, maintenance, bug fixes, and feature upgrades."
  },
  {
    question: "How does your app development company ensure project success?",
    answer: "We follow agile development processes, regular QA testing, milestone tracking, and transparent communication to ensure timely and successful delivery."
  },
  {
    question: "Why should I hire an app developer in India?",
    answer: "Hiring an app developer in India ensures access to a highly skilled talent pool, cost-effective rates, and reliable delivery — making India a global hub for app outsourcing."
  },
  {
    question: "Do you offer custom mobile app design and development?",
    answer: "Yes, we offer fully custom mobile app development services tailored to your business needs with a focus on UI/UX and core functionality."
  },
  {
    question: "How do you ensure the quality of mobile apps?",
    answer: "We use code reviews, performance benchmarks, unit testing, and user testing phases to ensure quality, scalability, and maintainability of the app."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, faqData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    setExpandedIndex(null);
  };

  return (
    <div className="faq-container">
      <h2>FREQUENTLY ASKED <span>QUESTIONS</span></h2>
      <p className="faq-subtext">
        Everything you need to know about hiring app developers and building mobile applications with Big Brand Bucket.
      </p>
      {faqData.slice(0, visibleCount).map((item, index) => (
        <div className={`faq-card ${expandedIndex === index ? 'expanded' : ''}`} key={index}>
          <button className="faq-header" onClick={() => toggleQuestion(index)}>
            <span className="faq-question-text">{item.question}</span>
            <span className={`faq-toggle-icon ${expandedIndex === index ? 'rotate' : ''}`}>↓</span>
          </button>
          <div className={`faq-answer-wrapper ${expandedIndex === index ? 'open' : ''}`}>
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
      {visibleCount < faqData.length ? (
        <button className="show-toggle" onClick={handleShowMore}>
          Load More ↓
        </button>
      ) : visibleCount > 3 ? (
        <button className="show-toggle" onClick={handleShowLess}>
          Show Less ↑
        </button>
      ) : null}
    </div>
  );
};

export default FAQ;
