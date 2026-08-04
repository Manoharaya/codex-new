import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Layout, BrainCircuit, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

const whyUsData = [
  {
    icon: <Settings size={28} strokeWidth={1.5} />,
    title: 'Engineering Mindset',
    desc: 'We design software for long-term scalability.'
  },
  {
    icon: <Layout size={28} strokeWidth={1.5} />,
    title: 'User-Centered Design',
    desc: 'Beautiful interfaces built around real user behavior.'
  },
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: 'AI-First Thinking',
    desc: 'We integrate AI where it creates measurable value.'
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Enterprise Quality',
    desc: 'Security, performance, maintainability, and reliability.'
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="why-us-header"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            More Than Developers. <br />
            <span className="text-gradient">Product Engineers.</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="why-us-grid"
        >
          {whyUsData.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="why-us-card">
              <div className="why-us-icon">
                {feature.icon}
              </div>
              <h3 className="why-us-title">{feature.title}</h3>
              <p className="why-us-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
