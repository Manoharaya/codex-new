import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="cta-background-glow"></div>
      
      <div className="container">
        <motion.div 
          className="final-cta-content glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="cta-title">
            Ready to Build Something <span className="text-gradient">Exceptional?</span>
          </h2>
          
          <p className="cta-text">
            Whether you're launching an AI startup, modernizing enterprise software, or building your next digital product, we're ready to help.
          </p>
          
          <div className="cta-actions">
            <a href="#contact" className="btn-primary btn-large">
              Book a Discovery Call <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
