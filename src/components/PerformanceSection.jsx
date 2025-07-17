import React from 'react';
import styles from './PerformanceSection.module.css';

const PerformanceSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.performanceSection}>
      <div className={styles.textContainer}>
        <h2>
          YOUR <span>MOBILE APP'S PERFORMANCE</span> &<br />
          SCALABILITY ARE <span>OUR #1 PRIORITY</span>
        </h2>
        <p>
          As a leading mobile app development company in India, Big Brand Bucket ensures your application is built for speed, reliability, and growth—across devices and user bases.
        </p>
        <button onClick={scrollToForm}>Get Your Scalable App Quote</button>
      </div>
    </section>
  );
};

export default PerformanceSection;
