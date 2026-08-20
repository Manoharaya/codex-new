import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Landmark, GraduationCap, ShoppingBag, Factory, Rocket, Truck, Cloud } from 'lucide-react';
import './Industries.css';

const industriesData = [
  { 
    name: 'Healthcare', 
    icon: <HeartPulse size={28} />, 
    desc: 'HIPAA-compliant data systems & medtech platforms.' 
  },
  { 
    name: 'Finance', 
    icon: <Landmark size={28} />, 
    desc: 'Secure fintech architecture & blockchain integration.' 
  },
  { 
    name: 'Education', 
    icon: <GraduationCap size={28} />, 
    desc: 'Scalable edtech & digital learning management.' 
  },
  { 
    name: 'Retail', 
    icon: <ShoppingBag size={28} />, 
    desc: 'E-commerce ecosystems & AI inventory tracking.' 
  },
  { 
    name: 'Manufacturing', 
    icon: <Factory size={28} />, 
    desc: 'IoT integrations & automated supply chain ops.' 
  },
  { 
    name: 'Startups', 
    icon: <Rocket size={28} />, 
    desc: 'Rapid MVP development & high-growth scaling.' 
  },
  { 
    name: 'Logistics', 
    icon: <Truck size={28} />, 
    desc: 'Route optimization & real-time fleet tracking.' 
  },
  { 
    name: 'SaaS', 
    icon: <Cloud size={28} />, 
    desc: 'Multi-tenant cloud architecture & APIs.' 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header text-center"
          style={{ marginBottom: 'var(--space-64)' }}
        >
          <motion.span variants={itemVariants} className="section-subtitle">INDUSTRIES</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Sector-Specific <span className="text-gradient">Engineering</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="industries-premium-grid"
        >
          {industriesData.map((industry, index) => (
            <motion.div key={index} variants={itemVariants} className="industry-premium-card glass-card">
              <div className="industry-icon-wrapper">
                <div className="industry-icon-inner">
                  {industry.icon}
                </div>
              </div>
              <div className="industry-content">
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-desc">{industry.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
