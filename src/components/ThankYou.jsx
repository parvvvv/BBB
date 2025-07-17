import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>
          We’ve received your message. Our team will get back to you shortly to discuss your app development requirements.
        </p>
        <a href="/" className="back-home">← Back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou;
