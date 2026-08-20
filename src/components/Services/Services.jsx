import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, Smartphone, Terminal, Layers, Palette, Brain, Cloud, ArrowRight, ChevronDown, ChevronRight
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 'engineering',
    icon: <Terminal size={32} strokeWidth={1.5} />,
    title: 'ENGINEERING',
    desc: 'Scalable software architectures, mobile experiences, and autonomous AI systems.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    headline: 'Engineering Excellence',
    supporting: 'Architecting intelligent digital solutions and enterprise ecosystems.',
    subServices: [
      { name: 'AI Solutions', id: 'ai-solutions' },
      { name: 'Enterprise Software', id: 'software-development' },
      { name: 'Website Development', id: 'web-development' },
      { name: 'Mobile Apps', id: 'app-development' },
      { name: 'Blockchain & Web3', id: 'blockchain-web3' }
    ]
  },
  {
    id: 'infrastructure',
    icon: <Cloud size={32} strokeWidth={1.5} />,
    title: 'INFRASTRUCTURE',
    desc: 'Immutable cloud topologies, automated CI/CD pipelines, and robust security.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    headline: 'Zero-Downtime Infrastructure',
    supporting: 'Deploying self-healing environments via modern DevOps practices.',
    subServices: [
      { name: 'Cloud Engineering', id: 'cloud-engineering' },
      { name: 'DevOps', id: 'devops' }
    ]
  },
  {
    id: 'design',
    icon: <Palette size={32} strokeWidth={1.5} />,
    title: 'DESIGN',
    desc: 'Data-driven user research, digital branding, and intuitive interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    headline: 'Cognitive Friction Reduction',
    supporting: 'Translating complex requirements into beautiful, accessible design systems.',
    subServices: [
      { name: 'UI/UX Design', id: 'ui-ux-design' },
      { name: 'Graphic Design', id: 'graphic-design' }
    ]
  },
  {
    id: 'growth',
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'GROWTH',
    desc: 'Data-driven marketing, organic search optimization, and brand narrative.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    headline: 'Market Dominance',
    supporting: 'Scaling digital presence and user acquisition through strategic marketing.',
    subServices: [
      { name: 'Search Engine Optimization', id: 'technical-seo' },
      { name: 'Social Media Marketing', id: 'digital-marketing' },
      { name: 'Content Writing', id: 'content-writing' }
    ]
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <section id="services" className="services-section chapter-services">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header"
        >
          <motion.span variants={itemVariants} className="section-subtitle text-gradient">WHAT WE BUILD</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            We Build Digital Products That <br /> Solve Real Business Problems.
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="services-grid"
        >
          {servicesData.map((category, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`service-card-wrapper ${isMobile ? 'is-mobile' : ''}`}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                animate={{
                  opacity: !isMobile && isOtherHovered ? 0.6 : 1,
                  scale: !isMobile && isOtherHovered ? 0.98 : !isMobile && isHovered ? 1.02 : 1,
                  zIndex: isHovered ? 10 : 1
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {!isMobile ? (
                  <div className="cinematic-card">
                    {/* Base Layer (The Photo Story) */}
                    <div className="cinematic-base">
                      <motion.img 
                        src={category.image} 
                        alt={category.title} 
                        className="cinematic-image"
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        loading="lazy"
                      />
                      
                      <motion.div 
                        className="cinematic-overlay"
                        animate={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? 'auto' : 'none' }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div 
                          className="cinematic-content"
                          animate={{ 
                            y: isHovered ? 0 : 20,
                            opacity: isHovered ? 1 : 0
                          }}
                          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <h4 className="cinematic-headline">{category.headline}</h4>
                          <p className="cinematic-supporting">{category.supporting}</p>
                          
                          <ul className="cinematic-subservices">
                            {category.subServices.map(sub => (
                              <li key={sub.id}>
                                <Link to={`/services/${sub.id}`} className="cinematic-subservice-link">
                                  {sub.name} <ChevronRight size={14} />
                                </Link>
                              </li>
                            ))}
                          </ul>
                          
                          <Link to={`/services#cat-btn-${category.title}`} className="btn-primary mt-auto inline-flex" style={{ width: '100%', justifyContent: 'center' }}>
                            Explore {category.title} <ArrowRight size={16} />
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Cover Layer (The Front) - Swings open on Desktop */}
                    <motion.div 
                      className="cinematic-cover card-base service-card"
                      animate={{ 
                        rotateY: isHovered ? -110 : 0,
                        opacity: isHovered ? 0 : 1,
                        pointerEvents: isHovered ? 'none' : 'auto'
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left center" }}
                    >
                      <div className="service-icon-wrapper">
                        {category.icon}
                      </div>
                      <h3 className="service-title">{category.title}</h3>
                      <p className="service-desc">{category.desc}</p>
                      
                      <ul className="cover-subservices">
                        {category.subServices.map(sub => (
                          <li key={sub.id} className="cover-subservice-item">{sub.name}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ) : (
                  <div className="mobile-accordion">
                    <button className="mobile-cover card-base service-card" onClick={() => handleInteraction(index)} style={{textAlign: 'left', appearance: 'none', width: '100%'}}>
                      <div className="service-icon-wrapper">
                        {category.icon}
                      </div>
                      <h3 className="service-title">{category.title}</h3>
                      <p className="service-desc">{category.desc}</p>
                      <div className="mobile-expand-indicator mt-auto">
                        <span className="service-link">View Capabilities</span>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                          <ChevronDown size={16} />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mobile-expanded-content"
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="mobile-content-inner">
                            <img src={category.image} alt={category.title} className="mobile-image" loading="lazy" />
                            <div className="mobile-content-box">
                               <h4 className="cinematic-headline" style={{color: "var(--text-primary)"}}>{category.headline}</h4>
                               
                               <div className="mobile-subservices">
                                 {category.subServices.map(sub => (
                                   <Link key={sub.id} to={`/services/${sub.id}`} className="mobile-subservice-link">
                                     {sub.name} <ChevronRight size={16} />
                                   </Link>
                                 ))}
                               </div>
                               
                               <Link to={`/services#cat-btn-${category.title}`} className="btn-primary mt-2" style={{width: '100%', justifyContent: 'center'}}>
                                 Explore {category.title} <ArrowRight size={16} />
                               </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-48)' }}>
           <Link to="/services" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
             Explore all capabilities <ArrowRight size={16} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
