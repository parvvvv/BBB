import React, { useState } from 'react';

import './FAQ.css';

const faqData = [
  {
    question: "What makes your apps development company different from others?",
    answer: "Our mobile app development company stands out because of our commitment to understanding each client’s unique business needs..."
  },
  {
    question: "How do I hire a mobile app developer from your company?",
    answer: "You can contact us directly through our website or inquiry form, and we will connect you with a developer suited to your project."
  },
  {
    question: "What experience do your mobile app developers have?",
    answer: "Our developers have experience building scalable, secure apps across various domains and platforms."
  },
  {
    question: "How can I hire Android or iOS app developers in India for my project?",
    answer: "You can choose flexible hiring models—hourly, full-time, or project-based—according to your need."
  },
  {
    question: "What kind of support do you offer post-development?",
    answer: "We offer maintenance, bug fixes, upgrades, and performance monitoring."
  },
  {
    question: "How does your app and web development company ensure project success?",
    answer: "Through agile workflows, QA testing, regular updates, and transparent communication."
  },
  {
    question: "What are the advantages of hiring an app developer in India?",
    answer: "India offers affordable rates, a strong talent pool, and a culture of tech innovation."
  },
  {
    question: "Do you offer custom mobile app design and development services?",
    answer: "Yes, we create custom solutions tailored to your brand and business needs."
  },
  {
    question: "How do you ensure the quality of your applications?",
    answer: "We follow best practices like code reviews, unit testing, and performance benchmarks."
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