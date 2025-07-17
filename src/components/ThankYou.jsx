import React from 'react';
import './ThankYou.css';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-content">
        <h1>Thank You for Contacting Us</h1>
        <p>
          We’ve received your message. Our team will get back to you shortly to discuss your app development requirements.
        </p>
        <div className="links-box">
          <Link to="/" className="back-home">← Back to Home</Link>
          <Link to="/contact-form" className="back-home">📞 Contact Again</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
