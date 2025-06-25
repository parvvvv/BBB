import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
}
  const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = new FormData();
      form.append('name', name);
      form.append('email', email);
      form.append('phone', `${countryCode}${phone}`);
      form.append('message', message);
  
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzpztrVE1ge3CKpr2UZFlwm8GUgehzpDart0HA5JacVq4YXMaIgZefnbGmlSICmcNEDDQ/exec', {
          method: 'POST',
          body: form,
        });
  
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setCountryCode('');
        setMessage('');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form.');
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
                <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                   <option value="" disabled hidden>Select</option>  
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
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
