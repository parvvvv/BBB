import React, { useState } from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom'; 

const logo = new URL('../assets/BigBrandBucketLogo.webp', import.meta.url).href;
const isoIcon = new URL('../assets/icon-iso2.svg', import.meta.url).href;
const awsLogo = new URL('../assets/logo-awspartner.svg', import.meta.url).href;
const microsoftIcon = new URL('../assets/icon-microsoft2.svg', import.meta.url).href;
const googleIcon = new URL('../assets/google_partner_icon.png', import.meta.url).href;

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
  const [budget, setbudget] = useState(''); // ✅ New state for budget
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('phone', `${countryCode}${phone}`);
    form.append('message', message);
    form.append('budget', budget); // ✅ Include budget in form

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzpztrVE1ge3CKpr2UZFlwm8GUgehzpDart0HA5JacVq4YXMaIgZefnbGmlSICmcNEDDQ/exec', {
        method: 'POST',
        body: form,
      });

      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="site-header">
        <img src={logo} alt="Big Brand Bucket Logo" className="header-logo" />
      </header>

      <section className="hero-section">
        <div className="hero-inner">
          <div className="left-content">
            <h1>
              Leading <span>Android & iOS App Development Company</span> in India
            </h1>
            <p>
              Hire top-rated mobile app developers in India. We create scalable, secure, and high-performance apps
              for startups, enterprises, and SMEs across 50+ countries.
            </p>
            <ul>
              <li>Scalable IT Teams Across All Time Zones</li>
              <li><strong>Dedicated Project Manager</strong> For Every Client</li>
              <li>Global Reach, Serving 50+ Countries</li>
            </ul>
            <div className="logos">
              <img src={isoIcon} alt="ISO Certified" />
              <img src={awsLogo} alt="AWS Partner" />
              <img src={microsoftIcon} alt="Microsoft Partner" />
              <img src={googleIcon} alt="Google Partner" />
            </div>
          </div>

          <div className="right-form" id="contact-form">
            <h3>Get a Free Quote</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
              
              <div className="phone-field">
                <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
                  <option value="" disabled hidden>Country</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+1">🇨🇦 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+31">🇳🇱 +31</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <select value={budget} onChange={(e) => setbudget(e.target.value)} required>
                <option value="" disabled hidden>Estimated Budget *</option>
                <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                <option value="₹1 Lakh to ₹2 Lakh">₹1 Lakh to ₹2 Lakh</option>
                <option value="₹2 Lakh to ₹5 Lakh">₹2 Lakh to ₹5 Lakh</option>
                <option value="₹5 Lakh and Above">₹5 Lakh and Above</option>
              </select>

              <textarea
                placeholder="Describe your requirement *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={30}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
