import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Terminal, 
  Layers, 
  Zap, 
  Share2, 
  Palette, 
  FileText, 
  Cpu,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'Website Development',
    desc: 'Highly functional & visually appealing website designed to meet your need.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    headline: 'High-Performance Web Solutions',
    supporting: 'Tailored websites engineered for speed, scalability, and seamless user interaction.'
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    title: 'App Development',
    desc: 'Innovative and user-friendly mobile application designed to engage users.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    headline: 'Mobile Innovation',
    supporting: 'Feature-rich iOS and Android mobile apps crafted for modern digital experiences.'
  },
  {
    icon: <Terminal size={32} strokeWidth={1.5} />,
    title: 'System/Software Development',
    desc: 'System/software developed according to your business needs.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    headline: 'Enterprise Systems',
    supporting: 'Robust internal tools and scalable software architectures built for enterprise requirements.'
  },
  {
    icon: <Layers size={32} strokeWidth={1.5} />,
    title: 'UI/UX Design',
    desc: 'Design eye-catching UI/UX interfaces for effortless user interaction.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    headline: 'Form & Function',
    supporting: 'User-centered design systems and intuitive interfaces that boost engagement and clarity.'
  },
  {
    icon: <Zap size={32} strokeWidth={1.5} />,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Custom SEO solutions for enhanced search engine visibility and growth.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    headline: 'Search Dominance',
    supporting: 'Data-driven SEO techniques that increase search visibility and drive organic traffic.'
  },
  {
    icon: <Share2 size={32} strokeWidth={1.5} />,
    title: 'Social Media Marketing (SMM)',
    desc: 'Build a strong online presence and engage with your targeted audience.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    headline: 'Audience Engagement',
    supporting: 'Targeted social media campaigns designed to grow brand presence and customer loyalty.'
  },
  {
    icon: <Palette size={32} strokeWidth={1.5} />,
    title: 'Graphic Design',
    desc: "Designs that Speak Your Brand's Narrative and Connect with Your Audience.",
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    headline: 'Visual Identity',
    supporting: 'Compelling visual branding materials that resonate with your target market.'
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: 'Content Writing',
    desc: 'Engaging and meaningful content to connect with your audience.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    headline: 'Strategic Copywriting',
    supporting: 'Clear, compelling text crafted to communicate value and convert visitors.'
  },
  {
    icon: <Cpu size={32} strokeWidth={1.5} />,
    title: 'Blockchain & Web3 Development',
    desc: 'Building decentralized, secure, and transparent solutions for the next generation of the web.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    headline: 'Next-Gen Web3',
    supporting: 'Decentralized platforms, smart contracts, and Web3 infrastructure built for security.'
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
                      {/* <div className="service-link mt-auto">
                        Learn more <ArrowRight size={16} />
                      </div> */}
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
