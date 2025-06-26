import React from 'react';
import './ClientsSection.css';

const clientLogos = [
  '1623819164752.jpeg',
  'download.png',
  'm3m.png',
  'adani.webp',
  'yanmar.png',
  'mcdonalds.png',
  'ng.png',
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <h2>OUR <span>CLIENTS</span></h2>
      <div className="clients-logos">
        {clientLogos.map((logo, idx) => (
          <img
            src={new URL(`../assets/${logo}`, import.meta.url).href}
            alt={`Client ${idx + 1}`}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
