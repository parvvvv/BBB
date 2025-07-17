import React from 'react';
import './ClientsSection.css';

const clientLogos = [
  { file: '1623819164752.jpeg', name: 'Unitech' },
  { file: 'download.png', name: 'DLF' },
  { file: 'm3m.png', name: 'M3M India' },
  { file: 'adani.webp', name: 'Adani Group' },
  { file: 'yanmar.png', name: 'Yanmar' },
  { file: 'mcdonalds.png', name: 'McDonald\'s' },
  { file: 'ng.png', name: 'NG Group' },
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <h2>OUR <span>CLIENTS</span></h2>
      <p className="clients-subtext">
        Trusted by global brands in real estate, food, infrastructure, and technology.
      </p>
      <div className="clients-logos">
        {clientLogos.map((logo, idx) => (
          <img
            src={new URL(`../assets/${logo.file}`, import.meta.url).href}
            alt={`${logo.name} Logo`}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
