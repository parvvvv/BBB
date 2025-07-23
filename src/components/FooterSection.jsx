import React from 'react';
import './TechnoscoreContact.css';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const TechnoscoreContact = () => {
  return (
    <div className="contact-container">
      <footer className="main-footer">
        <div className="footer-top">
          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="https://bigbrandbucket.com/">Home</a></li>
              <li><a href="https://bigbrandbucket.com/about-us/">About Us</a></li>
              <li><a href="https://bigbrandbucket.com/our-portfolio/">Our Portfolio</a></li>
              <li><a href="https://bigbrandbucket.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://bigbrandbucket.com/refund-policy/">Refund Policy</a></li>
              <li><a href="https://bigbrandbucket.com/contact-us/">Contact us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="https://bigbrandbucket.com/app-development-company-in-delhi/">APP Development</a></li>
              <li><a href="https://bigbrandbucket.com/ecommerce-website-development/">E-Commerce Web Development</a></li>
              <li><a href="https://bigbrandbucket.com/cms-web-development/">CMS Web Development</a></li>
              <li><a href="https://bigbrandbucket.com/digital-marketing/">Digital Marketing</a></li>
              <li><a href="https://bigbrandbucket.com/software-company-in-delhi/">Software Development</a></li>
              <li><a href="https://bigbrandbucket.com/web-designing-company-in-delhi-ncr/">Web Designing Services</a></li>
            </ul>
          </div>

          {/* Subscribe and Contact */}
          <div className="footer-column subscribe-section">
            <div className="subscribe">
              <input type="email" placeholder="Email" />
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
            <div className="contact-details">
              <p>+91 - 9149039480 &nbsp; | &nbsp; +91 - 9818202357</p>
              <p><a href="mailto:raghav@bigbrandbucket.com">raghav@bigbrandbucket.com</a></p>
              <div className="contact-icons">
                <a href="https://wa.me/919149039480" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="icon whatsapp" />
                </a>
                <a href="mailto:raghav@bigbrandbucket.com">
                  <FaEnvelope className="icon mail" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Branches */}
        <div className="branches">
          <h4 className="branches-heading">Our Branches</h4>
          <div className="branches-wrapper">
            <div className="branch">
              <h5>Gurugram</h5>
              <p>Plot No. 76 D, Udyog Vihar Phase 4,<br />Gurugram, Haryana 122001</p>
            </div>
            <div className="branch">
              <h5>New Delhi</h5>
              <p>22/22B, First Floor, Tilak Nagar,<br />New Delhi 110018</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="footer-bottom-text">
          Big Brand Bucket Pvt. Ltd. Copyright © since 2025. All Rights Reserved
        </p>
      </footer>

      {/* Sticky Buttons */}
      <div className="sticky-buttons">
        <a href="tel:+919149039480" className="sticky-icon phone">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/919149039480" target="_blank" rel="noopener noreferrer" className="sticky-icon whatsapp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default TechnoscoreContact;
