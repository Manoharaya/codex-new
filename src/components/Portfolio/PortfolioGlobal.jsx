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
            <div className="portfolio-global-card">
              <h3>AUSTRALIA</h3>
              <p>AI · E-Commerce · Digital Experiences</p>
            </div>
            <div className="portfolio-global-card">
              <h3>NEPAL</h3>
              <p>Web Platforms · Software</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGlobal;
