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
          YOUR <span>APP PERFORMANCE</span> AND<br />
          SCALABILITY ARE <span>OUR NUMBER #1 PRIORITY</span>
        </h2>
        <p>
          Partner with BBB for robust mobile app solutions tailored to your needs.
        </p>
        <button onClick={scrollToForm}>Contact Us</button>
      </div>
    </section>
  );
};

export default PerformanceSection;
