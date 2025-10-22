// app/page.jsx

import React from 'react';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Page.module.css';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickLinks />
      
      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        
        <div className={styles.projectsGrid}>
          
          <ProjectCard 
            title="Collabboard"
            description="A real-time, canvas-based collaboration tool designed for remote teams. Implemented with WebSockets and a scalable backend."
            link="https://collabboard.vercel.app" // Replace with your live link
            imageAlt="Screenshot of collabboard"
          />
          
          <ProjectCard 
            title="Portfolio Site (This One!)"
            description="Built from scratch with Next.js and pure CSS Modules. Focus on minimal design and high performance."
            link="https://github.com/your-username/my-portfolio"
            imageAlt="Portfolio design concept"
          />
          
          <ProjectCard 
            title="Data Visualization Dashboard"
            description="A project focused on displaying complex datasets using D3.js and React hooks for dynamic updates."
            link="/projects/data-viz"
            imageAlt="Chart screenshot"
          />
          
        </div>
      </section>
      
      {/* Placeholder for Blog Section */}
      <section id="blog" className={styles.section}>
        <h2 className={styles.sectionTitle}>From the blog</h2>
        <p>A simple grid of smaller cards would go here, linking to your blog posts.</p>
      </section>
      
    </main>
  );
}