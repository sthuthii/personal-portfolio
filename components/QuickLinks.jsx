// components/QuickLinks.jsx

import React from 'react';
import styles from '../styles/QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <h3 className={styles.quickLinksLabel}>Quick links</h3>
      <nav className={styles.quickLinksNav}>
        <a href="#blog" className={styles.link}>Blog <span className={styles.arrow}>→</span></a>
        <a href="#projects" className={styles.link}>Projects <span className={styles.arrow}>→</span></a>
        <a href="/about" className={styles.link}>About <span className={styles.arrow}>→</span></a>
        <a href="#contact" className={styles.link}>Contact <span className={styles.arrow}>→</span></a>
      </nav>
    </div>
  );
};

export default QuickLinks;