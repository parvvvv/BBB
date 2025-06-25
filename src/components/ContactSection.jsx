import React, { useState } from 'react';
import './ContactSection.css';

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+81', country: 'Japan' },
];

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone: `${countryCode} ${phone}`,
      message,
    };

    try {
      const response = await fetch('https://corsproxy.io/?https://script.google.com/macros/s/AKfycbyu0oxS3kyyW6qZLNywAsKXCuEnTmdT_5Cc1P1z0FCnwSYd_bv04vx0NM2kH4ecEmryBA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
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
    <section className="contact-section" id="contact-form">
      <div className="container">
        <div className="left-content">
          <h3 className="subheading">Spend Minutes. Save Hours.</h3>
          <h2 className="main-heading">
            WE ARE <span className="highlight">READY TO ASSIST YOU</span>
          </h2>
          <ul className="info-list">
            <li>
              <span className="checkmark">✔</span> Share your Project Requirements: Get tailored solutions designed to meet your specific business goals.
            </li>
            <li>
              <span className="checkmark">✔</span> Next Step: Our experts will contact you shortly with a customized plan.
            </li>
          </ul>
        </div>

        <div className="right-form">
          <h4 className="form-heading">Let's Build Together</h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <div className="phone-input-wrapper">
              <select className="country-code-select" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {country} ({code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="phone-number-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <textarea placeholder="Describe your requirement *" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
