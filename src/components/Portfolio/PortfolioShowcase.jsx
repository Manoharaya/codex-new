import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioComponents.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const PortfolioShowcase = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="portfolio-showcase">
      <div className="container">
        <div className="portfolio-showcase-grid">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div 
                key={project.id}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className={`portfolio-showcase-row ${isReversed ? 'reversed' : ''}`}
              >
                {/* Visual */}
                <motion.div variants={itemVariants} className={`portfolio-showcase-visual ${project.theme}`}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-showcase-img"
                    loading="lazy"
                  />
                </motion.div>

                {/* Content */}
                <div className="portfolio-showcase-content">
                  <motion.div variants={itemVariants} className="portfolio-project-meta">
                    <span className="portfolio-project-number">{project.number}</span>
                    <h2 className="portfolio-project-title">{project.title}</h2>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="portfolio-project-location">
                    <span>{project.location}</span>
                  </motion.div>

                  <motion.h3 variants={itemVariants} className="portfolio-showcase-headline">
                    {project.shortDescription}
                  </motion.h3>

                  <motion.div variants={itemVariants}>
                    <span className="portfolio-cap-label">Core Capabilities</span>
                    <ul className="portfolio-cap-list">
                      {project.capabilities.slice(0, 4).map((cap, idx) => (
                        <li key={idx}>{cap}</li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="portfolio-project-actions">
                    <Link to={`/portfolio/${project.id}`}>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary"
                      >
                        View Project <ArrowRight size={16} />
                      </motion.button>
                    </Link>
                    
                    {project.websiteUrl && (
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-outline"
                        >
                          Live Site <ArrowUpRight size={16} />
                        </motion.button>
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
