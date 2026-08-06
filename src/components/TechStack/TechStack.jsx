import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Server, Cloud, Brain, Database, User, Rocket, ChevronDown } from 'lucide-react';
import './TechStack.css';

const techGroups = [
  {
    icon: <Terminal size={20} />,
    category: 'Frontend',
    techs: ['React', 'Next.js', 'Vue']
  },
  {
    icon: <Server size={20} />,
    category: 'Backend',
    techs: ['Node.js', 'Python', '.NET']
  },
  {
    icon: <Cloud size={20} />,
    category: 'Cloud & DevOps',
    techs: ['AWS', 'Azure', 'Docker']
  },
  {
    icon: <Brain size={20} />,
    category: 'AI & Machine Learning',
    techs: ['OpenAI', 'Gemini', 'LangChain']
  },
  {
    icon: <Database size={20} />,
    category: 'Databases',
    techs: ['PostgreSQL', 'MongoDB', 'Redis']
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

const mobileJourney = [
  { icon: <User size={20} />, title: "User Request", desc: "A user interacts with your application." },
  { icon: <Terminal size={20} />, title: "Frontend", desc: "React/Next.js interface handles the event." },
  { icon: <Server size={20} />, title: "Backend", desc: "Node.js processes the business logic." },
  { icon: <Brain size={20} />, title: "AI Model", desc: "Data is analyzed via intelligent systems." },
  { icon: <Database size={20} />, title: "Database", desc: "Results securely stored in PostgreSQL." },
  { icon: <Cloud size={20} />, title: "Cloud", desc: "AWS infrastructure autoscales on demand." },
  { icon: <Rocket size={20} />, title: "Deployment", desc: "Seamless CI/CD delivery with zero downtime." },
];

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const mQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mQuery.addEventListener('change', handleResize);
    return () => mQuery.removeEventListener('change', handleResize);
  }, []);

  const handleTap = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="tech-stack-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header text-center"
        >
          <motion.span variants={itemVariants} className="section-subtitle">TECHNOLOGY</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Built Using <span className="text-gradient">Modern Technologies.</span>
          </motion.h2>
        </motion.div>
        
        {!isMobile ? (
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="tech-grid"
          >
            {techGroups.map((group, index) => (
              <motion.div key={index} variants={itemVariants} className="tech-group-card glass-card">
                <div className="tech-group-header">
                  <div className="tech-group-icon">
                    {group.icon}
                  </div>
                  <h3 className="tech-group-title">{group.category}</h3>
                </div>
                
                <ul className="tech-list">
                  {group.techs.map((tech, i) => (
                    <li key={i} className="tech-item">{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="mobile-journey-container">
            {mobileJourney.map((step, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className="journey-node-wrapper">
                  {/* Connecting Line */}
                  {index !== mobileJourney.length - 1 && <div className="journey-line"></div>}
                  
                  <div 
                    className={`journey-node glass-card ${isExpanded ? 'active' : ''}`}
                    onClick={() => handleTap(index)}
                  >
                    <div className="journey-node-header">
                      <div className="journey-icon">{step.icon}</div>
                      <div className="journey-title">{step.title}</div>
                      <motion.div 
                        animate={{ rotate: isExpanded ? 180 : 0 }} 
                        className="journey-chevron"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="journey-node-content"
                        >
                          <p>{step.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
