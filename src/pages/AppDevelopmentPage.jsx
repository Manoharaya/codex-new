import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Smartphone, Tablets, SmartphoneNfc, AppWindow, CloudCog, ShieldCheck, Zap, Hand, CheckCircle2, GitMerge, ArrowDown } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './AppDevelopmentPage.css';

const AppDevelopmentPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Mobile products engineered for real-world users.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Business Mobile Applications",
      desc: "Native iOS and Android applications engineered for complex business requirements and secure data handling.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Customer-Facing Apps",
      desc: "Consumer products focused on engagement, seamless UX, and reliable push notification systems.",
      icon: <AppWindow size={24} />
    },
    {
      title: "Internal Business Apps",
      desc: "Operational tools designed to connect your mobile workforce securely to core enterprise systems.",
      icon: <Tablets size={24} />
    },
    {
      title: "Mobile Product Experiences",
      desc: "Cross-platform architectures delivering a unified, high-performance experience across all devices.",
      icon: <SmartphoneNfc size={24} />
    },
    {
      title: "API-Connected Apps",
      desc: "Applications built to consume, process, and display data flawlessly from your existing business APIs.",
      icon: <GitMerge size={24} />
    },
    {
      title: "Custom Mobile Platforms",
      desc: "End-to-end mobile ecosystems featuring dedicated cloud backends, databases, and admin infrastructure.",
      icon: <CloudCog size={24} />
    }
  ];

  const pillars = [
    {
      title: "User Experience",
      desc: "Clear interactions designed around real mobile behavior, touch ergonomics, and platform conventions.",
      icon: <Hand size={20} />
    },
    {
      title: "Performance",
      desc: "Fast, responsive interactions and efficient experiences that respect battery life and network conditions.",
      icon: <Zap size={20} />
    },
    {
      title: "Responsive Interaction",
      desc: "Interfaces designed specifically for touch, adapting flawlessly across phones and tablets.",
      icon: <Smartphone size={20} />
    },
    {
      title: "Reliability",
      desc: "Stable functionality, predictable interactions, and dependable application behavior under stress.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand users, business requirements, workflows and product goals to define the mobile strategy."
    },
    {
      num: "02",
      title: "Design",
      desc: "Create information architecture, user flows, wireframes and high-fidelity mobile UI prototypes."
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop the native or hybrid application, implement functionality and connect required backend APIs."
    },
    {
      num: "04",
      title: "Test & Launch",
      desc: "Validate the experience, resolve issues, and prepare the product for App Store deployment."
    }
  ];

  const technologies = [
    "iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin", "REST APIs", "GraphQL", "Push Notifications", "Cloud Backend"
  ];

  return (
    <div className="page-transition app-development-page">
      <SEO 
        title="Mobile App Development | Codex Neural"
        description="Mobile products engineered for real-world users. iOS, Android, and cross-platform applications."
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

      {/* 1. HERO */}
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-grid">
            <div className="app-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / MOBILE APP DEVELOPMENT
              </motion.div>
              
              <motion.h1 
                className="app-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Mobile products engineered for real-world users.
              </motion.h1>

              <motion.p 
                className="app-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We design and develop mobile applications focused on usability, performance, reliable functionality, and deep integration with the business systems behind the product.
              </motion.p>
              
              <motion.div 
                className="app-hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  All Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="app-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Mobile App Development" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Smartphone size={14} className="overlay-icon" />
                  <span>Native Architecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="app-section app-bg-surface">
        <div className="container">
          <div className="app-section-header">
            <h2 className="app-section-title">What We Build</h2>
            <p className="app-section-subtitle">Reliable mobile applications engineered for business operations and consumer engagement.</p>
          </div>
          
          <div className="app-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="app-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="app-cap-icon">{cap.icon}</div>
                <h3 className="app-cap-title">{cap.title}</h3>
                <p className="app-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOBILE EXPERIENCE */}
      <section className="app-section">
        <div className="container">
          <div className="app-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="app-section-title">The Mobile Experience</h2>
            <p className="app-section-subtitle">We don't simply put a website inside a mobile app. We design for mobile behavior.</p>
          </div>

          <div className="app-pillars-grid">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="app-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="app-pillar-header">
                  <div className="app-pillar-icon">{pillar.icon}</div>
                  <h4 className="app-pillar-title">{pillar.title}</h4>
                </div>
                <p className="app-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FROM IDEA TO MOBILE PRODUCT */}
      <section className="app-section app-bg-surface">
        <div className="container">
          <div className="app-section-header">
            <h2 className="app-section-title">From Idea to Mobile Product</h2>
            <p className="app-section-subtitle">A disciplined product engineering process taking you from initial concept to the App Store.</p>
          </div>

          <div className="app-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="app-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="app-process-number">{step.num}</div>
                <h4 className="app-process-title">{step.title}</h4>
                <p className="app-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT ECOSYSTEM (Visual Flow) */}
      <section className="app-section">
        <div className="container">
          <div className="app-section-header">
            <h2 className="app-section-title">The Product Ecosystem</h2>
            <p className="app-section-subtitle">A mobile application is part of a larger, interconnected product ecosystem.</p>
          </div>

          <motion.div 
            className="app-ecosystem-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flow-step">
              <div className="flow-node">User</div>
            </div>
            <ArrowRight size={20} className="flow-arrow flow-arrow-desktop" />
            <ArrowDown size={20} className="flow-arrow flow-arrow-mobile" />
            
            <div className="flow-step">
              <div className="flow-node highlight">Mobile App</div>
            </div>
            <ArrowRight size={20} className="flow-arrow flow-arrow-desktop" />
            <ArrowDown size={20} className="flow-arrow flow-arrow-mobile" />
            
            <div className="flow-step">
              <div className="flow-node">API / Services</div>
            </div>
            <ArrowRight size={20} className="flow-arrow flow-arrow-desktop" />
            <ArrowDown size={20} className="flow-arrow flow-arrow-mobile" />
            
            <div className="flow-step">
              <div className="flow-node">Business Logic</div>
            </div>
            <ArrowRight size={20} className="flow-arrow flow-arrow-desktop" />
            <ArrowDown size={20} className="flow-arrow flow-arrow-mobile" />
            
            <div className="flow-step">
              <div className="flow-node end">Database</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. INTEGRATION & TECHNOLOGY */}
      <section className="app-section app-bg-surface">
        <div className="container">
          <div className="app-tech-container">
            <div className="app-tech-content">
              <GitMerge size={24} className="app-tech-icon" />
              <h3 className="app-tech-title">Integration & Technology</h3>
              <p className="app-tech-desc">Engineering standards that securely connect the mobile interface to your broader data architecture.</p>
            </div>
            <div className="app-tech-pills">
              {technologies.map((tech, index) => (
                <span key={index} className="app-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="app-cta-section">
        <div className="container">
          <motion.div 
            className="app-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="app-cta-title">Have a mobile product worth building?</h2>
            <p className="app-cta-desc">Tell us what you're trying to create. We'll help turn the idea into a clear, usable, and reliable mobile experience.</p>
            <div className="app-cta-actions">
              <Link to="/contact" className="btn-primary app-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary app-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentPage;
