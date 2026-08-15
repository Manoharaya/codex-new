import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioComponents.css';

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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`portfolio-showcase-row ${isReversed ? 'reversed' : ''}`}
              >
                {/* Visual */}
                <div className={`portfolio-showcase-visual ${project.theme}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-showcase-img"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="portfolio-showcase-content">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-number">{project.number}</span>
                    <h2 className="portfolio-project-title">{project.title}</h2>
                  </div>
                  
                  <div className="portfolio-project-location">
                    <span>{project.location}</span>
                  </div>

                  <h3 className="portfolio-showcase-headline">"{project.shortDescription}"</h3>
                  
                  <div className="portfolio-showcase-capabilities">
                    <span className="portfolio-cap-label">Capabilities:</span>
                    <ul className="portfolio-cap-list">
                      {project.capabilities.map((cap, idx) => (
                        <li key={idx}>{cap}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="portfolio-project-actions">
                    <Link to={`/portfolio/${project.id}`} className="btn-primary">
                      View Project <ArrowRight size={16} />
                    </Link>
                    {project.websiteUrl && (
                      <a 
                        href={project.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-tertiary"
                      >
                        Visit Website <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
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
