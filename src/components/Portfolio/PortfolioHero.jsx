import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PortfolioComponents.css';

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero">
      <div className="container">
        <div className="portfolio-hero-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="portfolio-hero-content"
          >
            <span className="portfolio-eyebrow text-gradient">SELECTED WORK</span>
            <h1 className="portfolio-hero-title">
              Digital systems built for <span className="text-gradient">real businesses.</span>
            </h1>
            <p className="portfolio-hero-subtitle">
              From AI platforms and autonomous agents to e-commerce experiences and business software, we build technology around real operational needs.
            </p>
            <p className="portfolio-hero-subtext">
              Selected work across Australia and Nepal.
            </p>
            
            <div className="portfolio-hero-actions">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Start Your Project <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="portfolio-hero-visual-wrapper"
          >
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Product Design Portfolio" 
              className="portfolio-hero-image" 
            />
            <div className="portfolio-hero-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
