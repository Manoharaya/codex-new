import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, PenTool, Layout, FileText, Share2, Search, Crosshair, CheckCircle, MessagesSquare, Lightbulb, Edit3 } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './ContentWritingPage.css';

const ContentWritingPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Content Writing",
        "description": "Strategic, technically informed content designed to make complex ideas clear for brands, products, and digital businesses.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Website & Landing Page Copy",
      desc: "Clear, conversion-focused messaging that explains what you do and why it matters.",
      icon: <Layout size={24} />
    },
    {
      title: "Technical & B2B Content",
      desc: "Authoritative writing designed to communicate complex topics accurately.",
      icon: <FileText size={24} />
    },
    {
      title: "SEO Content",
      desc: "Search-optimized structures that remain engaging and natural for human readers.",
      icon: <Search size={24} />
    },
    {
      title: "Brand & Marketing Content",
      desc: "Thought leadership, editorial articles, and cohesive brand messaging.",
      icon: <MessagesSquare size={24} />
    },
    {
      title: "Social Media Content",
      desc: "Platform-adapted copy to maintain a consistent digital presence.",
      icon: <Share2 size={24} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Research",
      desc: "We understand your audience, product, and brand voice.",
      icon: <Search size={20} />
    },
    {
      num: "02",
      title: "Structure",
      desc: "We map out the narrative flow and hierarchy.",
      icon: <Layout size={20} />
    },
    {
      num: "03",
      title: "Write",
      desc: "We craft the content for clarity and impact.",
      icon: <PenTool size={20} />
    },
    {
      num: "04",
      title: "Refine",
      desc: "We edit and adjust based on feedback.",
      icon: <Edit3 size={20} />
    }
  ];

  const outcomes = [
    {
      title: "Communicate Clearly",
      desc: "Remove friction by making your value proposition easy to understand.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Build Credibility",
      desc: "Establish trust through professional, error-free, authoritative language.",
      icon: <CheckCircle size={24} />
    },
    {
      title: "Support Search Visibility",
      desc: "Provide search engines with structured, relevant information.",
      icon: <Search size={24} />
    },
    {
      title: "Guide Users Toward Action",
      desc: "Lead audiences naturally from understanding to decision.",
      icon: <Crosshair size={24} />
    }
  ];

  return (
    <div className="page-transition cw-page">
      <SEO 
        title="Content Writing & Strategy | Codex Neural"
        description="Strategic, technically informed content designed to make complex ideas clear for digital businesses."
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
      <section className="cw-hero">
        <div className="container">
          <div className="cw-hero-grid">
            <div className="cw-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                GROWTH / CONTENT WRITING
              </motion.div>
              
              <motion.h1 
                className="cw-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Content that makes complex ideas clear.
              </motion.h1>

              <motion.p 
                className="cw-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We create strategic, technically informed content for brands, products, and digital businesses. Good writing doesn't just sound nice—it explains, connects, and drives action.
              </motion.p>
              
              <motion.div 
                className="cw-hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="cw-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Professional Content Strategy" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <PenTool size={14} className="overlay-icon" />
                  <span>Draft in progress</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DELIVER */}
      <section className="cw-section cw-bg-surface">
        <div className="container">
          <div className="cw-section-header">
            <h2 className="cw-section-title">What We Deliver</h2>
            <p className="cw-section-subtitle">Targeted communication capabilities for different stages of the digital journey.</p>
          </div>
          
          <div className="cw-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="cw-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cw-cap-icon">{cap.icon}</div>
                <div className="cw-cap-text">
                  <h3 className="cw-cap-title">{cap.title}</h3>
                  <p className="cw-cap-desc">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="cw-section">
        <div className="container">
          <div className="cw-section-header center">
            <h2 className="cw-section-title">Our Approach</h2>
            <p className="cw-section-subtitle">A simple, effective process from understanding to delivery.</p>
          </div>

          <div className="cw-process-flow">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="cw-process-node glass-card">
                  <div className="cp-header">
                    <span className="cp-num">{step.num}</span>
                    <span className="cp-icon">{step.icon}</span>
                  </div>
                  <h4 className="cp-title">{step.title}</h4>
                  <p className="cp-desc">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="cw-process-connector">
                    <ArrowRight size={24} className="cp-arrow-desktop" />
                    <ArrowDown size={24} className="cp-arrow-mobile" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTENT THAT SUPPORTS BUSINESS */}
      <section className="cw-section cw-bg-surface">
        <div className="container">
          <div className="cw-section-header">
            <h2 className="cw-section-title">Content That Supports Business</h2>
            <p className="cw-section-subtitle">We don't write just to fill space. Every word serves a structural purpose.</p>
          </div>

          <div className="cw-outcomes-grid">
            {outcomes.map((outcome, index) => (
              <motion.div 
                key={index}
                className="cw-outcome-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cwo-icon">{outcome.icon}</div>
                <h4 className="cwo-title">{outcome.title}</h4>
                <p className="cwo-desc">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="cw-cta-section">
        <div className="container">
          <motion.div 
            className="cw-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cw-cta-title">Have something worth saying?</h2>
            <p className="cw-cta-desc">Let's turn your expertise into content people understand and act on.</p>
            <div className="cw-cta-actions">
              <Link to="/contact" className="btn-primary cw-cta-btn">
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentWritingPage;
