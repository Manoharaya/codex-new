import React from 'react';
import { motion } from 'framer-motion';
import './PortfolioComponents.css';

const PortfolioGlobal = () => {
  return (
    <section className="portfolio-global">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-global-content"
        >
          <h2 className="portfolio-global-title">Built across <span className="text-gradient">borders.</span></h2>
          <p className="portfolio-global-subtitle">Client work delivered across Australia and Nepal.</p>
          
          <div className="portfolio-global-grid">
            <motion.div 
              className="portfolio-global-card"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="portfolio-global-card-glow"></div>
              <div className="portfolio-global-card-content">
                <span className="portfolio-global-label">REGION</span>
                <h3>AUSTRALIA</h3>
                <div className="portfolio-global-caps">
                  <span>AI</span>
                  <span className="portfolio-global-dot"></span>
                  <span>E-Commerce</span>
                  <span className="portfolio-global-dot"></span>
                  <span>Digital Experiences</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="portfolio-global-card"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="portfolio-global-card-glow"></div>
              <div className="portfolio-global-card-content">
                <span className="portfolio-global-label">REGION</span>
                <h3>NEPAL</h3>
                <div className="portfolio-global-caps">
                  <span>Web Platforms</span>
                  <span className="portfolio-global-dot"></span>
                  <span>Software Development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGlobal;
