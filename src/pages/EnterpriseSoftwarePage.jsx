import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Server, Database, GitMerge, LayoutDashboard, Settings, Layers, Lock, Repeat, Box } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './EnterpriseSoftwarePage.css';

const EnterpriseSoftwarePage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Enterprise Software Engineering",
        "description": "Business software engineered around the way you operate.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Custom Business Platforms",
      desc: "Tailored enterprise software designed specifically for your unique operational requirements and business logic.",
      icon: <Box size={24} />
    },
    {
      title: "Internal Operations Systems",
      desc: "Secure internal tools that connect departments, streamline processes, and eliminate operational bottlenecks.",
      icon: <Settings size={24} />
    },
    {
      title: "Admin & Management",
      desc: "Comprehensive dashboards with multi-role access control for managing users, data, and business operations.",
      icon: <LayoutDashboard size={24} />
    },
    {
      title: "Workflow Management",
      desc: "Digital systems that map directly to your real-world workflows, ensuring consistency and tracking.",
      icon: <Layers size={24} />
    },
    {
      title: "API & System Integrations",
      desc: "Robust architectural bridges that connect your new software with existing legacy systems and third-party tools.",
      icon: <GitMerge size={24} />
    },
    {
      title: "Database Systems",
      desc: "Scalable, secure data architectures designed for high-performance retrieval and absolute data integrity.",
      icon: <Database size={24} />
    }
  ];

  const useCases = [
    {
      title: "Operational Workflow Management",
      desc: "Replace fragmented spreadsheets and email chains with a unified software system that enforces business rules and tracks progress."
    },
    {
      title: "Centralized Business Data",
      desc: "Break down data silos by engineering a single source of truth that connects isolated departments and legacy databases."
    },
    {
      title: "Multi-Role Administration",
      desc: "Deploy granular role-based access control (RBAC) ensuring employees, managers, and external partners only see what they need."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "We analyze your business workflows, user requirements, data structures, and operational challenges to scope the true engineering requirements."
    },
    {
      num: "02",
      title: "Architect",
      desc: "We define the system architecture, database schema, third-party integrations, and security protocols needed for enterprise scale."
    },
    {
      num: "03",
      title: "Build",
      desc: "We develop the platform, implementing complex business logic, intuitive user interfaces, and robust backend integrations."
    },
    {
      num: "04",
      title: "Deploy & Improve",
      desc: "We rigorously test, deploy the system, and establish monitoring to ensure reliability and continuous improvement as your business scales."
    }
  ];

  const foundations = [
    {
      title: "Scalable",
      desc: "Architecture designed to seamlessly support growing users, expanding datasets, and increasing transaction volume.",
      icon: <Layers size={20} />
    },
    {
      title: "Secure",
      desc: "Security-conscious application design, encrypted data architecture, and strict access controls.",
      icon: <Lock size={20} />
    },
    {
      title: "Maintainable",
      desc: "Clean, well-documented, structured codebases designed for long-term development and easy onboarding.",
      icon: <Repeat size={20} />
    },
    {
      title: "Integrated",
      desc: "API-first architectures that connect fluidly with your existing CRMs, ERPs, and specialized tools.",
      icon: <GitMerge size={20} />
    }
  ];

  const technologies = [
    "React", "Node.js", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Docker", "AWS", "Google Cloud", "Redis"
  ];

  return (
    <div className="page-transition enterprise-software-page">
      <SEO 
        title="Enterprise Software Engineering | Codex Neural"
        description="Business software engineered around the way you operate. Custom systems, internal platforms, and integrated workflows."
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
      <section className="es-hero">
        <div className="container">
          <div className="es-hero-grid">
            <div className="es-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / ENTERPRISE SOFTWARE
              </motion.div>
              
              <motion.h1 
                className="es-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Business software engineered around the way you operate.
              </motion.h1>

              <motion.p 
                className="es-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We build custom software systems, internal operational platforms, and connected business applications designed strictly around your specific workflows and technical requirements.
              </motion.p>
              
              <motion.div 
                className="es-hero-cta"
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
              className="es-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Enterprise Software Architecture" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Code2 size={14} className="overlay-icon" />
                  <span>Architecture active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="es-section es-bg-surface">
        <div className="container">
          <div className="es-section-header">
            <h2 className="es-section-title">What We Build</h2>
            <p className="es-section-subtitle">Scalable systems designed to handle complex business logic and demanding operational environments.</p>
          </div>
          
          <div className="es-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="es-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="es-cap-icon">{cap.icon}</div>
                <h3 className="es-cap-title">{cap.title}</h3>
                <p className="es-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS SYSTEMS / USE CASES */}
      <section className="es-section">
        <div className="container">
          <div className="es-section-header">
            <h2 className="es-section-title">Where Software Creates Value</h2>
            <p className="es-section-subtitle">Solving structural business problems through targeted engineering.</p>
          </div>

          <div className="es-value-grid">
            {useCases.map((uc, index) => (
              <motion.div 
                key={index}
                className="es-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Server size={20} className="es-value-icon" />
                <div className="es-value-content">
                  <h4 className="es-value-title">{uc.title}</h4>
                  <p className="es-value-desc">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING APPROACH */}
      <section className="es-section es-bg-surface">
        <div className="container">
          <div className="es-section-header">
            <h2 className="es-section-title">Our Engineering Methodology</h2>
            <p className="es-section-subtitle">A rigorous, structured approach ensuring software aligns perfectly with business operations.</p>
          </div>

          <div className="es-approach-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="es-approach-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="es-approach-number">{step.num}</div>
                <h4 className="es-approach-title">{step.title}</h4>
                <p className="es-approach-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE FOUNDATIONS */}
      <section className="es-section">
        <div className="container">
          <div className="es-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="es-section-title">Enterprise Foundations</h2>
            <p className="es-section-subtitle">The underlying non-negotiable qualities built into every system we engineer.</p>
          </div>

          <div className="es-foundations-grid">
            {foundations.map((foundation, index) => (
              <motion.div 
                key={index}
                className="es-foundation-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="es-foundation-header">
                  <div className="es-foundation-icon">{foundation.icon}</div>
                  <h4 className="es-foundation-title">{foundation.title}</h4>
                </div>
                <p className="es-foundation-desc">{foundation.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY / INTEGRATION */}
      <section className="es-section es-bg-surface">
        <div className="container">
          <div className="es-tech-container">
            <div className="es-tech-content">
              <GitMerge size={24} className="es-tech-icon" />
              <h3 className="es-tech-title">Technology & Integration</h3>
              <p className="es-tech-desc">Your enterprise system should work flawlessly with the technology ecosystem you already use.</p>
            </div>
            <div className="es-tech-pills">
              {technologies.map((tech, index) => (
                <span key={index} className="es-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="es-cta-section">
        <div className="container">
          <motion.div 
            className="es-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="es-cta-title">Have a business system worth building?</h2>
            <p className="es-cta-desc">Tell us how your business operates. We'll help turn the workflow into a reliable, scalable software system.</p>
            <div className="es-cta-actions">
              <Link to="/contact" className="btn-primary es-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary es-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSoftwarePage;
