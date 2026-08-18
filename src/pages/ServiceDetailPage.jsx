import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO/SEO';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn-primary">Return to Services</Link>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.codexneural.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.codexneural.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://www.codexneural.com/services/${service.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="page-transition">
      <SEO 
        title={`${service.title}`}
        description={service.description}
        url={`/services/${service.id}`}
        schema={serviceSchema}
      />
      
      {/* Back Navigation */}
      <div className="service-detail-nav-container">
        <div className="container">
          <button className="back-link-btn" onClick={() => navigate('/services')}>
            <ArrowLeft size={16} /> All Services
          </button>
        </div>
      </div>

      {/* SECTION 01: HERO */}
      <section className="service-detail-hero">
        <div className="container">
          <div className={`service-hero-grid ${service.layout === 'image-left' ? 'row-reverse' : ''}`}>
            
            <div className="service-hero-content">
              <motion.div 
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {service.category}
              </motion.div>
              
              <motion.h1 
                className="service-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {service.title}
              </motion.h1>
              
              <motion.h2 
                className="service-hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.headline}
              </motion.h2>

              <motion.p 
                className="service-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="hero-cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight size={18} className="btn-arrow" />
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </motion.div>
            </div>

            <motion.div 
                className="service-hero-visual"
                initial={{ opacity: 0, x: service.layout === 'image-left' ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={`service-image-container ${service.theme}`}>
                  <img src={service.image} alt={`${service.title} capabilities and infrastructure`} className="service-stock-image" fetchPriority="high" />
                  <div className="service-image-gradient"></div>
                </div>
              </motion.div>

          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="service-capabilities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Capabilities</h2>
          </div>
          
          <div className="capabilities-grid">
            {service.capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="capability-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle2 size={20} className="capability-check" />
                <span className="capability-text">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / PROCESS */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Approach</h2>
          </div>
          
          <div className="process-compact-grid">
            {service.process && service.process.map((step, index) => (
              <motion.div 
                key={index}
                className="process-compact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="process-compact-number">0{index + 1}</div>
                <div className="process-compact-title">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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

export default ServiceDetailPage;
