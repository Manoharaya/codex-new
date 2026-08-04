import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Layout, BrainCircuit, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

const whyUsData = [
  {
    theme: 'theme-engineering',
    icon: <Settings size={28} strokeWidth={1.5} />,
    title: 'Engineering Mindset',
    desc: 'We design software for long-term scalability.',
    tags: ['Scalable', 'Secure', 'Performant'],
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="why-us-illustration">
        <path d="M0 20H100M0 40H100M0 60H100M0 80H100" stroke="currentColor" strokeWidth="0.5" className="anim-pan-x"/>
        <path d="M20 0V100M40 0V100M60 0V100M80 0V100" stroke="currentColor" strokeWidth="0.5" className="anim-pan-y"/>
        <circle cx="40" cy="40" r="2" fill="currentColor" className="anim-pulse-1" />
        <circle cx="80" cy="60" r="2" fill="currentColor" className="anim-pulse-2" />
        <circle cx="20" cy="80" r="2" fill="currentColor" className="anim-pulse-3" />
      </svg>
    )
  },
  {
    theme: 'theme-design',
    icon: <Layout size={28} strokeWidth={1.5} />,
    title: 'User-Centered Design',
    desc: 'Beautiful interfaces built around real user behavior.',
    tags: ['Research', 'Prototype', 'Experience'],
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="why-us-illustration">
        <rect x="10" y="20" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="1"/>
        <rect x="15" y="25" width="20" height="6" rx="2" fill="currentColor" fillOpacity="0.5" className="anim-float-1"/>
        <rect x="15" y="35" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.3" className="anim-float-2"/>
        <rect x="15" y="43" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.3" className="anim-float-3"/>
        <path d="M65 45L80 60L75 70L60 55Z" stroke="currentColor" strokeWidth="1" className="anim-cursor"/>
      </svg>
    )
  },
  {
    theme: 'theme-ai',
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: 'AI-First Thinking',
    desc: 'We integrate AI where it creates measurable value.',
    tags: ['Automation', 'Intelligence', 'Analytics'],
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="why-us-illustration">
        <path d="M20 50C40 20 60 80 80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="anim-dash"/>
        <circle cx="20" cy="50" r="4" fill="currentColor" fillOpacity="0.8" className="anim-pulse-1"/>
        <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.4" className="anim-pulse-2"/>
        <circle cx="80" cy="50" r="4" fill="currentColor" fillOpacity="0.8" className="anim-pulse-3"/>
      </svg>
    )
  },
  {
    theme: 'theme-enterprise',
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Enterprise Quality',
    desc: 'Security, performance, maintainability, and reliability.',
    tags: ['Reliable', 'Secure', 'Maintainable'],
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="why-us-illustration">
        <path d="M50 15L80 25V50C80 70 50 85 50 85C50 85 20 70 20 50V25L50 15Z" stroke="currentColor" strokeWidth="1" className="anim-shield"/>
        <path d="M40 50L48 58L65 40" stroke="currentColor" strokeWidth="1" className="anim-draw"/>
      </svg>
    )
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
            <motion.div key={index} variants={itemVariants} className={`why-us-card ${feature.theme}`}>
              <div className="why-us-card-accent-line"></div>
              <div className="why-us-bg-glow"></div>
              {feature.illustration}
              
              <div className="why-us-content-top">
                <div className="why-us-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="why-us-title">{feature.title}</h3>
                <p className="why-us-desc">{feature.desc}</p>
              </div>
              
              <div className="why-us-chips">
                {feature.tags.map((tag, i) => (
                  <span key={i} className="why-us-chip">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
