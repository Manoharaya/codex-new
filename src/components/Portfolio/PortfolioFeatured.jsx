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
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const PortfolioFeatured = ({ project }) => {
  if (!project) return null;

  return (
    <section className="portfolio-featured">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="portfolio-featured-layout"
        >
          {/* Left: Large Visual */}
          <motion.div variants={itemVariants} className={`portfolio-featured-visual ${project.theme}`}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={project.image} 
              alt={project.title} 
              className="portfolio-featured-img"
              loading="lazy"
            />
            <div className="portfolio-featured-overlay"></div>
          </motion.div>

          {/* Right: Content */}
          <div className="portfolio-featured-content">
            <motion.div variants={itemVariants} className="portfolio-project-meta">
              <span className="portfolio-project-number">{project.number}</span>
              <h2 className="portfolio-project-title">{project.title}</h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="portfolio-project-tags">
              <span className="portfolio-tag-location">{project.location}</span>
            </motion.div>

            <motion.h3 variants={itemVariants} className="portfolio-featured-headline">
              {project.shortDescription}
            </motion.h3>

            <motion.p variants={itemVariants} className="portfolio-featured-desc">
              {project.fullDescription}
            </motion.p>

            <motion.div variants={itemVariants} className="portfolio-capability-strip">
              {project.highlightCapabilities && project.highlightCapabilities.map((cap, idx) => (
                <div key={idx} className="portfolio-capability-item">
                  <div className="portfolio-capability-dot"></div>
                  <span>{cap}</span>
                </div>
              ))}
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
      </div>
    </section>
  );
};

export default PortfolioFeatured;
