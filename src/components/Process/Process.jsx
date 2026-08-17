import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';
import './Process.css';

const processSteps = [
  {
    icon: <Search size={24} />,
    title: 'Discover',
    desc: 'Business understanding.'
  },
  {
    icon: <PenTool size={24} />,
    title: 'Design',
    desc: 'Wireframes & UX.'
  },
  {
    icon: <Code2 size={24} />,
    title: 'Build',
    desc: 'Modern engineering.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Test',
    desc: 'Quality assurance.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Launch',
    desc: 'Deployment.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Scale',
    desc: 'Continuous improvement.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const Process = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="process-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header text-center"
        >
          <motion.span variants={itemVariants} className="section-subtitle text-gradient">HOW WE WORK</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            The <span className="text-gradient">Engineering Process</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="process-timeline"
        >
          <motion.div 
            className="timeline-line"
            initial={isMobile ? { scaleY: 0 } : { scaleX: 0 }}
            whileInView={isMobile ? { scaleY: 1 } : { scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={isMobile ? { originY: 0 } : { originX: 0 }}
          ></motion.div>
          
          <div className="timeline-steps">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="process-step"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="step-number">0{index + 1}</div>
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
