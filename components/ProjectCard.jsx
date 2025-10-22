// components/ProjectCard.jsx

import React from 'react';
import styles from '../styles/ProjectCard.module.css'; 

const ProjectCard = ({ title, description, link, imageAlt }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {/* Placeholder for project thumbnail/screenshot */}
        <div className={styles.projectImagePlaceholder}>
          {imageAlt}
        </div>
      </div>
      
      <div className={styles.cardBody}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        
        <a 
          href={link} 
          className={styles.viewProjectButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;