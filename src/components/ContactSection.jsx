import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added
import './ContactSection.css';

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+81', country: 'Japan' },
  { code: '+31', country: 'Netherlands' },
  { code: '+971', country: 'Dubai (UAE)' },
  { code: '+1', country: 'Canada' },
];

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('phone', `${countryCode}${phone}`);
    form.append('message', message);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzpztrVE1ge3CKpr2UZFlwm8GUgehzpDart0HA5JacVq4YXMaIgZefnbGmlSICmcNEDDQ/exec',
        {
          method: 'POST',
          body: form,
        }
      );

      navigate('/thankyou'); // ✅ Correct SPA redirect
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section" id="contact-form">
      <div className="hero-inner">
        <div className="left-content">
          <h3 className="subheading">Spend Minutes. Save Hours.</h3>
          <h2 className="main-heading">
            WE ARE A <span className="highlight">MOBILE APP DEVELOPMENT COMPANY IN INDIA</span> READY TO ASSIST YOU
          </h2>
          <ul className="info-list">
            <li>Share your project requirements: Get tailored solutions aligned with your business needs.</li>
            <li>Our experts will connect with you shortly with a personalized proposal.</li>
          </ul>
        </div>

        <div className="right-form">
          <h3>Let’s Build Your App Together</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="phone-field">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Country
                </option>
                {countryCodes.map(({ code, country }) => (
                  <option key={`${country}-${code}`} value={code}>
                    {country} ({code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Describe your requirements *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Get Free Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
