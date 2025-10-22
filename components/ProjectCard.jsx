// components/ProjectCard.jsx (UPDATED)

import React from 'react';
import styles from '../styles/ProjectCard.module.css'; 
import techStyles from '../styles/TechStack.module.css'; // <--- NEW IMPORT

const ProjectCard = ({ title, description, link, imageAlt, techStack, role }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {/* Placeholder for project thumbnail/screenshot */}
        <div className={styles.projectImagePlaceholder}>
          {imageAlt}
        </div>
      </div>
      
      <div className={styles.cardBody}>
        {/* NEW: Metadata */}
        <p className={styles.projectRole}>{role}</p> 
        
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        
        {/* NEW: Tech Stack Badges */}
        <div className={techStyles.badgeContainer}>
          {techStack && techStack.map((tech, index) => (
            <span key={index} className={techStyles.badge}>
              {tech}
            </span>
          ))}
        </div>

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