import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Android App Development Company',
    desc: 'Our Android app development company delivers device-agnostic apps that perform seamlessly across all Android versions and devices.',
    icon: 'icon-android.svg'
  },
  {
    title: 'iOS App Development Company in India',
    desc: 'Our expert iOS developers use Objective-C, UIKit, and Swift to build premium iPhone and iPad apps tailored to business goals.',
    icon: 'icon-ios.svg',
    highlight: true
  },
  {
    title: 'React Native App Development',
    desc: 'We deliver high-performance cross-platform apps using React Native, combining JavaScript/TypeScript with native experience.',
    icon: 'icon-appDev2.svg'
  },
  {
    title: 'Flutter App Development Company',
    desc: 'Leverage Flutter to build fast, beautiful, and natively compiled apps for mobile, desktop, and web from a single codebase.',
    icon: 'icon-flutter.svg'
  },
  {
    title: 'Mobile App UI/UX Design Services',
    desc: 'We offer intuitive mobile UI/UX designs that ensure user engagement with smooth, consistent, and visually stunning interfaces.',
    icon: 'icon-uiux.svg'
  },
  {
    title: 'Custom Software Development Company',
    desc: 'Build scalable, secure, and custom software solutions aligned with your vision using modern tools and agile development.',
    icon: 'icon-appStore.svg'
  },
  {
    title: 'Customised ERP Development',
    desc: 'Our ERP development company in India provides fully customized modules that automate and optimize your business workflow.',
    icon: 'icon_tester.svg'
  },
  {
    title: 'Web Development Services',
    desc: 'Get SEO-optimized, mobile-first web development services that boost user experience, speed, and performance.',
    icon: 'icon_support.svg'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>
        Full-Stack <span>Mobile App Development Services in India</span>
      </h2>
      <p>
        As a leading custom mobile app development company in India, we build high-performance, feature-rich Android, iOS, and cross-platform apps for startups and enterprises.
      </p>

      <div className="services-grid">
        {services.map((service, idx) => {
          const iconUrl = new URL(`../assets/${service.icon}`, import.meta.url).href;
          return (
            <div className={`service-card ${service.highlight ? 'highlight' : ''}`} key={idx}>
              <div className="icon">
                <img src={iconUrl} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
