import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Code2, 
  Globe, 
  Smartphone, 
  Cloud, 
  PenTool,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <BrainCircuit size={32} strokeWidth={1.5} />,
    title: 'AI Solutions',
    desc: 'Integrate intelligent automation and predictive analytics into your business workflows.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    headline: 'Unlocking Data Potential',
    supporting: 'Harness machine learning models to accelerate operational efficiency.'
  },
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: 'Custom Software',
    desc: 'Scalable, enterprise-grade software engineered specifically for your complex operational needs.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    headline: 'Architecting the Future',
    supporting: 'Robust internal tools and platforms built for true scalability.'
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'Web Applications',
    desc: 'High-performance, secure web applications built on modern JavaScript and Python stacks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    headline: 'Digital Experiences',
    supporting: 'Blazing-fast SaaS products engineered for maximum retention.'
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences designed for speed and user engagement.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    headline: 'In Your Hands',
    supporting: 'Intuitive iOS and Android applications that users love to engage with.'
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    title: 'Cloud & DevOps',
    desc: 'Robust cloud infrastructure deployment, CI/CD pipelines, and continuous monitoring.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    headline: 'Unbreakable Infrastructure',
    supporting: 'Zero-downtime deployments backed by automated monitoring grids.'
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: 'UI/UX Design',
    desc: 'Data-driven interface design focused on reducing friction and increasing user retention.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    headline: 'Form Follows Function',
    supporting: 'Pixel-perfect wireframing and prototyping rooted in user psychology.'
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
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
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
          <motion.span variants={itemVariants} className="section-subtitle">WHAT WE BUILD</motion.span>
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
          {servicesData.map((service, index) => {
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
                        src={service.image} 
                        alt={service.title} 
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
                        animate={{ opacity: isHovered ? 1 : 0 }}
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
                          <h4 className="cinematic-headline">{service.headline}</h4>
                          <p className="cinematic-supporting">{service.supporting}</p>
                          
                          <Link to="/services" className="btn-primary mt-4 inline-flex">
                            Explore <ArrowRight size={16} />
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Cover Layer (The Front) - Swings open on Desktop */}
                    <motion.div 
                      className="cinematic-cover card-base service-card"
                      animate={{ 
                        rotateY: isHovered ? -110 : 0,
                        opacity: isHovered ? 0 : 1
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left center" }}
                    >
                      <div className="service-icon-wrapper">
                        {service.icon}
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.desc}</p>
                      <div className="service-link mt-auto">
                        Learn more <ArrowRight size={16} />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="mobile-accordion">
                    <div className="mobile-cover card-base service-card" onClick={() => handleInteraction(index)}>
                      <div className="service-icon-wrapper">
                        {service.icon}
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.desc}</p>
                      <div className="mobile-expand-indicator mt-auto">
                        <span className="service-link">View Details</span>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                          <ChevronDown size={16} />
                        </motion.div>
                      </div>
                    </div>
                    
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
                            <img src={service.image} alt={service.title} className="mobile-image" />
                            <div className="mobile-content-box">
                               <h4 className="cinematic-headline" style={{color: "var(--text-primary)"}}>{service.headline}</h4>
                               <p className="cinematic-supporting" style={{color: "var(--text-secondary)"}}>{service.supporting}</p>
                               <Link to="/services" className="btn-primary mt-2">
                                 Explore <ArrowRight size={16} />
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
      </div>
    </section>
  );
};

export default Services;
