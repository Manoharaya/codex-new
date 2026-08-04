import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Cloud, Brain, Database } from 'lucide-react';
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

const TechStack = () => {
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
      </div>
    </section>
  );
};

export default TechStack;
