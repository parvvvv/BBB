import React, { useState } from 'react';
import styles from './SuccessStories.module.css';

const SuccessStories = () => {
  const stories = [
    {
      company: "Jaquar",
      logo: new URL('../assets/portfolio-logo-jaquar.png', import.meta.url).href,
      problem:
        "Retailers lose $2T annually due to poor online search. Our client had a similar issue, with only 10–15% of searchers purchasing.",
      solutions: [
        "AI-powered search engine",
        "80% more accurate results",
        "72% higher conversions",
        "57% higher click-throughs",
      ],
      imageLeft: new URL('../assets/port1.png', import.meta.url).href,
      imageRight: new URL('../assets/port1slider.jpg', import.meta.url).href,
    },
    {
      company: "Field Service Management (FSM) App Development",
      logo: "",
      problem:
        "Our client partnered with a municipal government body in London, UK, where technicians struggled to identify pipe blockages on job sites. They needed a custom FSM app that could function both online and offline, adapt to various FSM workflows, and maintain high performance without delays.",
      solutions: [
        "35% increase in new customer acquisitions.",
        "65% increase in customer satisfaction.",
        "46% reduction in avg. time spent on each job site.",
        "20% reduction in fuel costs.",
      ],
      imageLeft: new URL('../assets/port3.png', import.meta.url).href,
      imageRight: new URL('../assets/port3slider.jpg', import.meta.url).href,
    }
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className={styles.successSection}>
      <h2>
        OUR <span>MOBILE APP DEVELOPMENT SUCCESS STORIES</span>
      </h2>
      <p className={styles.subtext}>
        Collaborate with mobile app developers for hire who enable state-of-the-art mobile
        solutions irrespective of your operational domain.
      </p>

      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prevSlide}>&larr;</button>

        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {stories.map((story, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardLeft}>
                  {story.logo && (
                    <div className={styles.logoBox}>
                      <img src={story.logo} alt={`${story.company} logo`} />
                    </div>
                  )}
                  <h3>{story.company}</h3>

                  <h4>Problem</h4>
                  <p className={styles.problem}>{story.problem}</p>

                  <h4>Solution Delivered:</h4>
                  <ul>
                    {story.solutions.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardRight}>
                  <img
                    src={story.imageLeft}
                    alt="App Preview 1"
                    className={styles.phoneImg}
                  />
                  <img
                    src={story.imageRight}
                    alt="App Preview 2"
                    className={styles.phoneImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowRight} onClick={nextSlide}>&rarr;</button>
      </div>
    </section>
  );
};

export default SuccessStories;
