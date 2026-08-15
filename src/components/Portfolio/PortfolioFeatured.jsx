import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioComponents.css';

const PortfolioFeatured = ({ project }) => {
  if (!project) return null;

  return (
    <section className="portfolio-featured">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="portfolio-featured-layout"
        >
          {/* Left: Large Visual */}
          <div className={`portfolio-featured-visual ${project.theme}`}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="portfolio-featured-img"
              loading="lazy"
            />
            <div className="portfolio-featured-overlay"></div>
          </div>

          {/* Right: Content */}
          <div className="portfolio-featured-content">
            <div className="portfolio-project-meta">
              <span className="portfolio-project-number">{project.number}</span>
              <h2 className="portfolio-project-title">{project.title}</h2>
            </div>
            
            <div className="portfolio-project-tags">
              <span className="portfolio-tag-location">{project.location}</span>
              <span className="portfolio-tag-dot">·</span>
              <span className="portfolio-tag-list">{project.capabilities.slice(0,3).join(' · ')}</span>
            </div>

            <h3 className="portfolio-featured-headline">{project.shortDescription}</h3>
            
            <p className="portfolio-featured-desc">{project.fullDescription}</p>

            {project.highlightCapabilities && (
              <div className="portfolio-capability-strip">
                {project.highlightCapabilities.map((cap, idx) => (
                  <div key={idx} className="portfolio-capability-item">
                    <div className="portfolio-capability-dot"></div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="portfolio-project-actions">
              <Link to={`/portfolio/${project.id}`} className="btn-primary">
                View Project <ArrowRight size={16} />
              </Link>
              {project.websiteUrl && (
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  Visit Website <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioFeatured;
