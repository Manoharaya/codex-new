import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PortfolioComponents.css';

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero">
      <div className="container">
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
            <Link to="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
