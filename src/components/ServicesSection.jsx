import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Android App Development',
    desc: 'Rise above the competition with our Android app development company that builds device-agnostic apps that work smoothly irrespective of the version of Android.',
    icon: 'icon-android.svg'
  },
  {
    title: 'iOS App Development',
    desc: 'With strong foundational know-how of Objective-C, UIKit, and relevant IDEs, our iOS app development company builds market-leading apps.',
    icon: 'icon-ios.svg',
    highlight: true
  },
  {
    title: 'React Native App Development',
    desc: 'We create enterprise-grade iOS and Android apps by combining JavaScript/TypeScript flexibility with native performance.',
    icon: 'icon-appDev2.svg'
  },
  {
    title: 'Flutter App Development',
    desc: 'Get natively compiled applications for mobile, web, and desktop with the help of experienced Flutter app developers.',
    icon: 'icon-flutter.svg'
  },
  {
    title: 'Mobile UI/UX Design',
    desc: 'Our mobile app design and development services make sure the app we deliver keeps your customers engaged with smooth navigation and an intuitive in-app experience.',
    icon: 'icon-uiux.svg'
  },
  {
    title: 'Software Development',
    desc: 'We deliver scalable and high-performance software solutions tailored to your business goals, using the latest technologies and agile methodologies.',
    icon: 'icon-appStore.svg'
  },
  {
    title: 'Customised ERP',
    desc: 'Our ERP solutions are designed to streamline your business operations with fully customized modules that suit your unique workflow and processes.',
    icon: 'icon_tester.svg'
  },
  {
    title: 'Web Development',
    desc: 'We build responsive, secure, and SEO-optimized websites that offer exceptional user experience and drive your digital presence forward.',
    icon: 'icon_support.svg'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>
        GET FULL-STACK <span>MOBILE APPLICATION DEVELOPMENT SERVICES</span>
      </h2>
      <p>
        Unlock mobile app design and development services that lead to apps with robust core platform functionality and limitless scope for feature integration.
      </p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className={`service-card ${service.highlight ? 'highlight' : ''}`} key={idx}>
            <div className="icon">
              <img src={`/${service.icon}`} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
