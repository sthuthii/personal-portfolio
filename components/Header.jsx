// components/Header.jsx

import React from 'react';
import Link from 'next/link'; // <--- IMPORT Link
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* REPLACED <a> with <Link> for internal navigation to the root page */}
        <Link href="/">[Your Initials]</Link> 
      </div>
      <nav className={styles.nav}>
        {/* Internal links to sections (hash links) still work well with <a> */}
        <a href="#projects">Projects</a> 
        <a href="#blog">Blog</a>
        {/* External links (like a PDF CV) still use <a> */}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a> 
        <a href="#contact">Find me</a>
      </nav>
    </header>
  );
};

export default Header;