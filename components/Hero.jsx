// components/Hero.jsx

import React from 'react';
// Assuming you have a CSS module named Hero.module.css
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textColumn}>
        {/* Replace "[Your Name]" with your actual name */}
        <h1 className={styles.title}>Hello. I am Sthuthi Poojary.</h1>
        <p className={styles.subtitle}>
          I’m a Software Developer focusing on modern collaboration tools like {' '}
          <strong className={styles.collabboardHighlight}>collabboard</strong>.
        </p>
        {/* Primary CTA, feature your collabboard project */}
        <a 
          href="https://github.com/your-repo-link/collabboard" 
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Collabboard on GitHub
        </a>
      </div>
      
      {/* Placeholder for the illustration (e.g., an SVG or image) */}
      <div className={styles.illustrationColumn}>
        <div className={styles.illustrationBox}>💻✍️</div>
      </div>
    </section>
  );
};

export default Hero;