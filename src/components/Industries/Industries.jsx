import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Landmark, GraduationCap, ShoppingBag, Factory, Rocket, Truck, Cloud } from 'lucide-react';
import './Industries.css';

const industriesData = [
  { name: 'Healthcare', icon: <HeartPulse size={24} /> },
  { name: 'Finance', icon: <Landmark size={24} /> },
  { name: 'Education', icon: <GraduationCap size={24} /> },
  { name: 'Retail', icon: <ShoppingBag size={24} /> },
  { name: 'Manufacturing', icon: <Factory size={24} /> },
  { name: 'Startups', icon: <Rocket size={24} /> },
  { name: 'Logistics', icon: <Truck size={24} /> },
  { name: 'SaaS', icon: <Cloud size={24} /> }
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
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
          className="industries-simple-grid"
        >
          {industriesData.map((industry, index) => (
            <motion.div key={index} variants={itemVariants} className="industry-simple-card glass-card">
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h3 className="industry-name">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
