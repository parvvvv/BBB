import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, phone, message };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyu0oxS3kyyW6qZLNywAsKXCuEnTmdT_5Cc1P1z0FCnwSYd_bv04vx0NM2kH4ecEmryBA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();
      if (result.result === 'success') {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      alert('Error submitting form.');
      console.error(error);
    }
  };

  return (
    <>
      <header className="site-header">
        <img src="/BigBrandBucketLogo.webp" alt="Company Logo" className="header-logo" />
      </header>

      <section className="hero-section">
        <div className="hero-inner">
          <div className="left-content">
            <h1>
              <span>Hire Mobile</span><br />Application Developers
            </h1>
            <p>
              Our seasoned app developers provide innovative, cost-efficient apps for clients
              across 50+ countries in the UK, USA, Europe, Asia-Pacific, and the Middle East.
            </p>
            <ul>
              <li>Scalable IT Teams Across All Time Zones</li>
              <li><strong>Dedicated Project Manager</strong>, For Every Client</li>
              <li>Global Reach, Serving 50+ Countries</li>
              <li><strong>Proven Track Record</strong>, 500+ Successful Projects</li>
              <li>Result–Driven Delivery, Not Just Code</li>
              <li>Client–First Approach, 98% Retention Rate</li>
              <li>Confidentiality Assured, Strict NDA & NCA</li>
            </ul>
            <div className="logos">
              <img src="/icon-iso2.svg" alt="ISO" />
              <img src="/logo-awspartner.svg" alt="AWS" />
              <img src="/icon-microsoft2.svg" alt="Microsoft" />
              <img src="/google_partner_icon.png" alt="Google Partner" />
            </div>
          </div>

          <div className="right-form" id="contact-form">
            <h3>Let's Build Together</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className="phone-field">
                <span>+91</span>
                <input type="tel" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <textarea placeholder="Describe your requirement *" value={message} onChange={(e) => setMessage(e.target.value)} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
