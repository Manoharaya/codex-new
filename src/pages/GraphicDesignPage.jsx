import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, PenTool, Layout, Image as ImageIcon, Briefcase, Share2, Type, Maximize, Target, Focus } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './GraphicDesignPage.css';

const GraphicDesignPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Graphic Design",
        "description": "Visual systems that make your brand easier to recognize.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Brand Identity",
      desc: "Establishing a core visual language for recognition.",
      icon: <Target size={24} />
    },
    {
      title: "Campaign Design",
      desc: "Visual assets structured around marketing goals.",
      icon: <Maximize size={24} />
    },
    {
      title: "Social Creatives",
      desc: "Content designed for engagement across digital channels.",
      icon: <Share2 size={24} />
    },
    {
      title: "Presentations",
      desc: "Professional decks that communicate complex information.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Marketing Assets",
      desc: "Digital and promotional graphics for distribution.",
      icon: <Layout size={24} />
    }
  ];

  const principles = [
    {
      title: "Clarity",
      desc: "The message should be understood quickly.",
      icon: <Focus size={20} />
    },
    {
      title: "Consistency",
      desc: "Visual assets should feel like part of the same brand.",
      icon: <Target size={20} />
    },
    {
      title: "Hierarchy",
      desc: "Important information should receive appropriate emphasis.",
      icon: <Layout size={20} />
    },
    {
      title: "Purpose",
      desc: "Every design decision should support the communication goal.",
      icon: <Maximize size={20} />
    }
  ];

  return (
    <div className="page-transition graphic-page">
      <SEO 
        title="Graphic Design | Codex Neural"
        description="From social content to branded visual assets, we create clear, consistent designs that communicate your message and strengthen your digital presence."
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
      <section className="graphic-hero">
        <div className="container">
          <div className="graphic-hero-grid">
            <div className="graphic-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                DESIGN / GRAPHIC DESIGN
              </motion.div>
              
              <motion.h1 
                className="graphic-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Visual systems that make your brand easier to recognize.
              </motion.h1>

              <motion.p 
                className="graphic-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From social content to branded visual assets, we create clear, consistent designs that communicate your message and strengthen your digital presence.
              </motion.p>
              
              <motion.div 
                className="graphic-hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore All Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="graphic-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Graphic Design Workspace" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <PenTool size={14} className="overlay-icon" />
                  <span>Graphic system active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE CREATE */}
      <section className="graphic-section graphic-bg-surface">
        <div className="container">
          <div className="graphic-section-header">
            <h2 className="graphic-section-title">What We Create</h2>
            <p className="graphic-section-subtitle">Core visual capabilities for digital distribution.</p>
          </div>
          
          <div className="graphic-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="graphic-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="graphic-cap-icon">{cap.icon}</div>
                <h3 className="graphic-cap-title">{cap.title}</h3>
                <p className="graphic-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL COMMUNICATION */}
      <section className="graphic-section">
        <div className="container">
          <div className="graphic-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="graphic-section-title">Design should communicate before it decorates.</h2>
            <p className="graphic-section-subtitle">Strong visual communication gives a message structure, hierarchy and identity — helping people understand what matters at a glance.</p>
          </div>

          <motion.div 
            className="graphic-communication-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="comm-node">
              <div className="comm-box highlight">MESSAGE</div>
            </div>
            <ArrowDown size={20} className="comm-arrow" />
            
            <div className="comm-node">
              <div className="comm-box">HIERARCHY</div>
            </div>
            <ArrowDown size={20} className="comm-arrow" />
            
            <div className="comm-node">
              <div className="comm-box">VISUAL LANGUAGE</div>
            </div>
            <ArrowDown size={20} className="comm-arrow" />
            
            <div className="comm-node">
              <div className="comm-box final">COMMUNICATION</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FROM IDEA TO ASSET */}
      <section className="graphic-section graphic-bg-surface">
        <div className="container">
          <div className="graphic-section-header">
            <h2 className="graphic-section-title">From Idea to Asset</h2>
            <p className="graphic-section-subtitle">How a concept is structured into a visual deliverable.</p>
          </div>

          <div className="graphic-workflow-grid">
            <div className="graphic-workflow-card">
              <span className="wf-num">01</span>
              <h4>BRIEF</h4>
              <p>Understand the purpose, audience and communication goal.</p>
            </div>
            <div className="wf-connector">
              <ArrowRight size={20} className="wf-arrow-desktop" />
              <ArrowDown size={20} className="wf-arrow-mobile" />
            </div>
            <div className="graphic-workflow-card">
              <span className="wf-num">02</span>
              <h4>CONCEPT</h4>
              <p>Establish the visual direction and creative approach.</p>
            </div>
            <div className="wf-connector">
              <ArrowRight size={20} className="wf-arrow-desktop" />
              <ArrowDown size={20} className="wf-arrow-mobile" />
            </div>
            <div className="graphic-workflow-card">
              <span className="wf-num">03</span>
              <h4>COMPOSITION</h4>
              <p>Develop hierarchy, typography, imagery and visual balance.</p>
            </div>
            <div className="wf-connector">
              <ArrowRight size={20} className="wf-arrow-desktop" />
              <ArrowDown size={20} className="wf-arrow-mobile" />
            </div>
            <div className="graphic-workflow-card final">
              <span className="wf-num">04</span>
              <h4>FINAL ASSET</h4>
              <p>Prepare the finished visual for its intended digital use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DESIGN CAPABILITIES (SYSTEM COMPOSITION) */}
      <section className="graphic-section">
        <div className="container">
          <div className="graphic-section-header">
            <h2 className="graphic-section-title">Design Elements</h2>
            <p className="graphic-section-subtitle">The foundational tools of visual composition.</p>
          </div>

          <div className="graphic-system-composition glass-card">
            <div className="comp-panel type-panel">
              <span className="comp-label">TYPE</span>
              <div className="type-hero">Aa</div>
            </div>
            
            <div className="comp-panel color-panel">
              <span className="comp-label">COLOR</span>
              <div className="color-dots">
                <span className="dot brand"></span>
                <span className="dot accent"></span>
                <span className="dot dark"></span>
              </div>
            </div>
            
            <div className="comp-panel layout-panel">
              <span className="comp-label">LAYOUT</span>
              <div className="layout-grid">
                <div className="lg-box main"></div>
                <div className="lg-box side1"></div>
                <div className="lg-box side2"></div>
              </div>
            </div>
            
            <div className="comp-panel hierarchy-panel">
              <span className="comp-label">HIERARCHY</span>
              <div className="hierarchy-stack">
                <div className="h-line h1">H1</div>
                <div className="h-line h2">H2</div>
                <div className="h-line body">Body</div>
              </div>
            </div>
            
            <div className="comp-panel img-panel">
              <span className="comp-label">IMAGE</span>
              <div className="img-placeholder">
                <ImageIcon size={24} className="img-icon" />
              </div>
            </div>
            
            <div className="comp-panel consist-panel">
              <span className="comp-label">CONSISTENCY</span>
              <div className="consist-stack">
                <div className="c-item">Component</div>
                <div className="c-item">Component</div>
                <div className="c-item">Component</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHERE GRAPHIC DESIGN SUPPORTS BUSINESS */}
      <section className="graphic-section graphic-bg-surface">
        <div className="container">
          <div className="graphic-section-header">
            <h2 className="graphic-section-title">Supporting Business</h2>
            <p className="graphic-section-subtitle">Practical applications of graphic design.</p>
          </div>

          <div className="graphic-business-grid">
            <div className="biz-card">
              <h4>Social Content</h4>
              <p>Marketing and social media visuals.</p>
            </div>
            <div className="biz-card">
              <h4>Campaign Material</h4>
              <p>Promotional and campaign assets.</p>
            </div>
            <div className="biz-card">
              <h4>Brand Communication</h4>
              <p>Consistent visual language across communication.</p>
            </div>
            <div className="biz-card">
              <h4>Digital Products</h4>
              <p>Supporting graphics and visual assets for digital experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESIGN PRINCIPLES */}
      <section className="graphic-section">
        <div className="container">
          <div className="graphic-section-header">
            <h2 className="graphic-section-title">Design Principles</h2>
            <p className="graphic-section-subtitle">The rules guiding our visual decisions.</p>
          </div>

          <div className="graphic-principles-grid">
            {principles.map((pillar, index) => (
              <motion.div 
                key={index}
                className="graphic-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="graphic-pillar-header">
                  <div className="graphic-pillar-icon">{pillar.icon}</div>
                  <h4 className="graphic-pillar-title">{pillar.title}</h4>
                </div>
                <p className="graphic-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RESPONSIVE DESIGN & 9. BRAND CONSISTENCY */}
      <section className="graphic-section graphic-bg-surface">
        <div className="container">
          <div className="graphic-dual-layout">
            <div className="dual-block">
              <h2 className="graphic-section-title">Responsive Formats</h2>
              <p className="graphic-section-subtitle" style={{marginBottom: '32px'}}>Adapting to real digital distribution.</p>
              <div className="responsive-format-visual glass-card">
                <div className="rf-desktop">
                  <div className="rf-screen"></div>
                  <span>DESKTOP</span>
                </div>
                <div className="rf-tablet">
                  <div className="rf-screen"></div>
                  <span>TABLET</span>
                </div>
                <div className="rf-mobile">
                  <div className="rf-screen"></div>
                  <span>MOBILE</span>
                </div>
              </div>
            </div>

            <div className="dual-block">
              <h2 className="graphic-section-title">Brand Consistency</h2>
              <p className="graphic-section-subtitle" style={{marginBottom: '32px'}}>One brand. Many touchpoints.</p>
              <div className="consistency-touchpoints glass-card">
                <div className="tp-item">SOCIAL</div>
                <div className="tp-item">WEB</div>
                <div className="tp-item">CAMPAIGNS</div>
                <div className="tp-item">PRESENTATIONS</div>
                <div className="tp-item">DIGITAL CONTENT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="graphic-cta-section">
        <div className="container">
          <motion.div 
            className="graphic-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="graphic-cta-title">Need visuals that communicate your brand clearly?</h2>
            <p className="graphic-cta-desc">Tell us what you're trying to communicate. We'll help turn the idea into a clear, consistent visual asset.</p>
            <div className="graphic-cta-actions">
              <Link to="/contact" className="btn-primary graphic-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary graphic-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
