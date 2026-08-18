import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Monitor, Smartphone, 
  Cloud, PenTool, BrainCircuit, Database, Shield, Zap, Target, 
  Layout, Code2, Server, Settings, HeartPulse, Building2, 
  GraduationCap, ShoppingCart, Factory, Rocket, Truck, Coffee, Home,
  Brain, FileText, Activity, Share2, Hexagon, Component, Link2, Search, PlayCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { servicesData, categoryData } from '../data/servicesData';
import './ServicesPage.css';

const UIOverlay = ({ type }) => {
  switch(type) {
    case 'ai':
      return (
        <div className="ui-overlay-pill">
          <BrainCircuit size={14} className="overlay-icon" />
          <span>Processing 4.2B parameters</span>
          <div className="overlay-pulse"></div>
        </div>
      );
    case 'web':
      return (
        <div className="ui-overlay-pill">
          <Monitor size={14} className="overlay-icon" />
          <span>res.status(200).json()</span>
          <CheckCircle2 size={14} style={{ color: '#10B981' }} />
        </div>
      );
    case 'mobile':
      return (
        <div className="ui-overlay-pill">
          <Smartphone size={14} className="overlay-icon" />
          <span>Compiled successfully</span>
        </div>
      );
    case 'software':
      return (
        <div className="ui-overlay-pill">
          <Code2 size={14} className="overlay-icon" />
          <span>Architecture active</span>
        </div>
      );
    case 'cloud':
      return (
        <div className="ui-overlay-pill">
          <Cloud size={14} className="overlay-icon" />
          <span>Nodes: 3/3 Healthy</span>
          <div className="overlay-dot healthy"></div>
        </div>
      );
    case 'devops':
      return (
        <div className="ui-overlay-pill">
          <Settings size={14} className="overlay-icon" />
          <span>BUILD → TEST → DEPLOY</span>
        </div>
      );
    case 'uiux':
      return (
        <div className="ui-overlay-pill">
          <Layout size={14} className="overlay-icon" />
          <span>Grid snapped to 8px</span>
        </div>
      );
    case 'graphic':
      return (
        <div className="ui-overlay-pill">
          <PenTool size={14} className="overlay-icon" />
          <span>#6F3FF5</span>
          <div className="color-swatch" style={{ background: '#6F3FF5' }}></div>
        </div>
      );
    case 'seo':
      return (
        <div className="ui-overlay-pill">
          <Search size={14} className="overlay-icon" />
          <span>Crawl → Index → Optimize</span>
        </div>
      );
    case 'marketing':
      return (
        <div className="ui-overlay-pill">
          <Target size={14} className="overlay-icon" />
          <span>Conversion: +24%</span>
          <Activity size={14} style={{ color: '#10B981' }} />
        </div>
      );
    case 'content':
      return (
        <div className="ui-overlay-pill">
          <FileText size={14} className="overlay-icon" />
          <span>Draft published</span>
        </div>
      );
    case 'blockchain':
      return (
        <div className="ui-overlay-pill">
          <Hexagon size={14} className="overlay-icon" />
          <span>Block validated</span>
          <Link2 size={14} />
        </div>
      );
    default:
      return null;
  }
};

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryData[0]?.id || '');
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; // Only apply logic for mobile per user request
      
      let currentCategory = categoryData[0]?.id;
      for (const service of servicesData) {
        const element = document.getElementById(service.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 250px offset to trigger active state when section is decently in view
          if (rect.top <= 250) {
            currentCategory = service.category;
          }
        }
      }
      
      setActiveCategory((prev) => {
        if (prev !== currentCategory) {
          // Keep active category visible in the scrollable nav
          const btn = document.getElementById(`cat-btn-${currentCategory}`);
          const nav = document.querySelector('.category-nav');
          if (btn && nav) {
            nav.scrollTo({
              left: btn.offsetLeft - 24,
              behavior: 'smooth'
            });
          }
        }
        return currentCategory;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          const offset = 100; // Account for sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToCategory = (categoryLabel) => {
    // Find the first service matching this category
    const firstService = servicesData.find(s => s.category === categoryLabel);
    if (firstService) {
      const element = document.getElementById(firstService.id);
      if (element) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.codexneural.com/services/${service.id}`,
      "name": service.title,
      "description": service.description
    }))
  };

  return (
    <div className="page-transition">
      <SEO 
        title="AI, Web & Cloud Engineering Services"
        description="We design and engineer the systems businesses need to move forward: AI solutions, enterprise software, cloud infrastructure, web and mobile platforms."
        url="/services"
        schema={servicesSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <div className="hero-noise-overlay"></div>
        <div className="aurora-blob aurora-purple" style={{ width: '500px', height: '500px', top: '-20%', right: '-10%' }}></div>
        <div className="aurora-blob aurora-cyan" style={{ width: '400px', height: '400px', bottom: '-10%', left: '-5%' }}></div>
        
        <div className="container">
          <div className="services-hero-content text-center">
            <motion.div 
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              WHAT WE BUILD
            </motion.div>
            <motion.h1 
              className="page-title services-main-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Digital systems built for <span className="text-gradient">real business.</span>
            </motion.h1>
            <motion.p 
              className="page-subtitle services-main-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From intelligent AI solutions and enterprise software to high-performance websites, mobile products, cloud infrastructure, and digital growth — we design and engineer the systems businesses need to move forward.
            </motion.p>
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ justifyContent: 'center', marginTop: '32px' }}
            >
              <Link to="/contact" className="btn-primary hero-btn-primary">
                Start Your Project
                <ArrowRight size={18} className="btn-arrow" />
              </Link>
              <button className="btn-secondary hero-btn-secondary" onClick={() => scrollToCategory('INTELLIGENCE')}>
                <PlayCircle size={18} style={{ marginRight: '8px' }} />
                Explore Our Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE NAVIGATION / CATEGORY BAR */}
      <div className="category-nav-wrapper">
        <div className="container">
          <div className="category-nav-scroll">
            <div className="category-nav">
              {categoryData.map((cat) => (
                <button 
                  key={cat.id} 
                  id={`cat-btn-${cat.id}`}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    scrollToCategory(cat.id);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 & 4. FEATURED SERVICES SECTIONS (The 12 Services) */}
      <section className="featured-services-section">
        <div className="container">
          
          {servicesData.map((service, index) => {
            const isLeftImage = service.layout === 'image-left';
            
            return (
              <motion.div 
                key={service.id}
                id={service.id}
                className={`service-editorial-row ${isMobile ? 'mobile-stacked' : (isLeftImage ? 'row-reverse' : '')}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Content Side */}
                <div className="service-editorial-content">
                  <div className="service-editorial-meta">
                    <span className="service-number">{service.number}</span>
                    <span className="service-category">{service.category}</span>
                  </div>
                  <h2 className="service-editorial-title">{service.title}</h2>
                  <h3 className="service-editorial-headline">"{service.headline}"</h3>
                  <p className="service-editorial-desc">{service.description}</p>

                  {/* Mobile Image Positioned properly */}
                  {isMobile && (
                    <div className="service-editorial-visual" style={{ marginBottom: '24px', width: '100%' }}>
                      <div className={`service-image-container ${service.theme}`}>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="service-stock-image"
                        />
                        <div className="service-image-gradient"></div>
                        <UIOverlay type={service.overlayType} />
                      </div>
                    </div>
                  )}
                  
                  <div className="service-capabilities">
                    {service.capabilities.map((cap, i) => (
                      <span key={i} className="capability-tag">{cap}</span>
                    ))}
                  </div>

                  <Link to={`/services/${service.id}`} className="service-cta-link">
                    Explore Service <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Desktop Image Side */}
                {!isMobile && (
                  <div className="service-editorial-visual">
                    <div className={`service-image-container ${service.theme}`}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="service-stock-image"
                      />
                      <div className="service-image-gradient"></div>
                      <UIOverlay type={service.overlayType} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
          
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="final-conversion-section">
        <div className="container">
          <motion.div 
            className="conversion-box glass-card text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="conversion-title">Have a system worth building?</h2>
            <p className="conversion-subtitle">Tell us what you're trying to solve. We'll help turn the requirement into a clear digital solution.</p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default ServicesPage;
