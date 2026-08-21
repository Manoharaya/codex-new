import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layout, Code2, Globe, MonitorSmartphone, Zap, Server, Activity, Users, Layers, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './WebDevelopmentPage.css';

const WebDevelopmentPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Website Development",
        "description": "High-performance websites engineered for real business.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Corporate Websites",
      desc: "Premium, responsive corporate identities engineered for speed, accessibility, and strong brand presence.",
      icon: <Globe size={24} />
    },
    {
      title: "Web Applications",
      desc: "Interactive, state-driven applications built on React to handle complex user tasks and data.",
      icon: <Layout size={24} />
    },
    {
      title: "SaaS Platforms",
      desc: "Scalable architecture for subscription-based software, multi-tenant databases, and seamless onboarding.",
      icon: <Layers size={24} />
    },
    {
      title: "Custom Web Platforms",
      desc: "Bespoke digital platforms engineered entirely around unique operational requirements and workflows.",
      icon: <Code2 size={24} />
    },
    {
      title: "Responsive Digital Experiences",
      desc: "Interfaces that adapt flawlessly across mobile, tablet, and desktop devices without compromising performance.",
      icon: <MonitorSmartphone size={24} />
    },
    {
      title: "API & Backend Systems",
      desc: "Secure Node.js backend infrastructure that powers your web frontends and connects to existing business data.",
      icon: <Server size={24} />
    }
  ];

  const pillars = [
    {
      title: "Performance",
      desc: "Fast-loading experiences engineered for smooth interaction, optimized assets, and exceptional Core Web Vitals.",
      icon: <Zap size={20} />
    },
    {
      title: "Responsive",
      desc: "Fluid interfaces that adapt naturally and provide a native feel across desktop, tablet, and mobile devices.",
      icon: <MonitorSmartphone size={20} />
    },
    {
      title: "User Experience",
      desc: "Clear navigation, intuitive interactions, and purposeful UI designed around the way real users behave.",
      icon: <Users size={20} />
    },
    {
      title: "Scalability",
      desc: "A solid architectural foundation built to evolve effortlessly as your business, traffic, and feature requirements grow.",
      icon: <Activity size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "We analyze your business objectives, target audience, technical requirements, and long-term digital goals."
    },
    {
      num: "02",
      title: "Design",
      desc: "We structure the user experience, information architecture, and interface design to align with your brand."
    },
    {
      num: "03",
      title: "Build",
      desc: "We engineer the frontend and backend using modern, maintainable frameworks like React and Next.js."
    },
    {
      num: "04",
      title: "Launch & Improve",
      desc: "We rigorously test performance, deploy the system, and establish monitoring to refine the experience post-launch."
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "REST APIs", "GraphQL", "PostgreSQL", "Vercel", "AWS", "Headless CMS"
  ];

  return (
    <div className="page-transition web-development-page">
      <SEO 
        title="Website Development | Codex Neural"
        description="High-performance websites engineered for real business. Fast, responsive, scalable web experiences."
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
      <section className="web-hero">
        <div className="container">
          <div className="web-hero-grid">
            <div className="web-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / WEBSITE DEVELOPMENT
              </motion.div>
              
              <motion.h1 
                className="web-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                High-performance websites engineered for real business.
              </motion.h1>

              <motion.p 
                className="web-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We build fast, responsive, and scalable web platforms designed strictly around your business requirements, user experience, and long-term maintainability.
              </motion.p>
              
              <motion.div 
                className="web-hero-cta"
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
              className="web-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Web Development Engineering" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Zap size={14} className="overlay-icon" />
                  <span>Performance optimized</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="web-section web-bg-surface">
        <div className="container">
          <div className="web-section-header">
            <h2 className="web-section-title">What We Build</h2>
            <p className="web-section-subtitle">Scalable digital products engineered for operational reliability and user engagement.</p>
          </div>
          
          <div className="web-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="web-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="web-cap-icon">{cap.icon}</div>
                <h3 className="web-cap-title">{cap.title}</h3>
                <p className="web-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT MAKES A GOOD WEBSITE */}
      <section className="web-section">
        <div className="container">
          <div className="web-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="web-section-title">What Makes A Good Website</h2>
            <p className="web-section-subtitle">The foundational engineering principles behind every platform we build.</p>
          </div>

          <div className="web-pillars-grid">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="web-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="web-pillar-header">
                  <div className="web-pillar-icon">{pillar.icon}</div>
                  <h4 className="web-pillar-title">{pillar.title}</h4>
                </div>
                <p className="web-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR WEB ENGINEERING PROCESS */}
      <section className="web-section web-bg-surface">
        <div className="container">
          <div className="web-section-header">
            <h2 className="web-section-title">Our Web Engineering Process</h2>
            <p className="web-section-subtitle">A structured methodology focused on architecture, usability, and measurable outcomes.</p>
          </div>

          <div className="web-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="web-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="web-process-number">{step.num}</div>
                <h4 className="web-process-title">{step.title}</h4>
                <p className="web-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WEBSITE CAPABILITIES / INTEGRATIONS */}
      <section className="web-section">
        <div className="container">
          <div className="web-tech-container">
            <div className="web-tech-content">
              <Code2 size={24} className="web-tech-icon" />
              <h3 className="web-tech-title">Technology & Integration</h3>
              <p className="web-tech-desc">Modern web technologies selected for performance, security, and enterprise scalability.</p>
            </div>
            <div className="web-tech-pills">
              {technologies.map((tech, index) => (
                <span key={index} className="web-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="web-cta-section">
        <div className="container">
          <motion.div 
            className="web-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="web-cta-title">Have a website worth building?</h2>
            <p className="web-cta-desc">Tell us what you're trying to achieve. We'll help turn the requirement into a fast, scalable and purposeful web experience.</p>
            <div className="web-cta-actions">
              <Link to="/contact" className="btn-primary web-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary web-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
