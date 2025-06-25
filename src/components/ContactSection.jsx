import React, { useState } from 'react';
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
    <section className="hero-section" id="contact-form">
      <div className="hero-inner">
        <div className="left-content">
          <h3 className="subheading">Spend Minutes. Save Hours.</h3>
          <h2 className="main-heading">
            WE ARE <span className="highlight">READY TO ASSIST YOU</span>
          </h2>
          <ul className="info-list">
            <li>
              Share your Project Requirements: Get tailored solutions designed to meet your specific business goals.
            </li>
            <li>
              Next Step: Our experts will contact you shortly with a customized plan.
            </li>
          </ul>
        </div>

        <div className="right-form">
          <h3>Let's Build Together</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <div className="phone-field">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
                <option value="" disabled hidden>Select</option>
                {countryCodes.map(({ code, country }) => (
                  <option key={`${country}-${code}`} value={code}>
                    ({code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Describe your requirement *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
