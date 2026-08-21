import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, Share2, Layers, MessageSquare, PenTool, BarChart2, Target, Users, RefreshCw, LayoutTemplate, Briefcase, Camera, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './DigitalMarketingPage.css';

const DigitalMarketingPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Strategy, content and ongoing social media support designed to help businesses communicate clearly.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Social Media Strategy",
      desc: "Defining the right approach, platforms and communication goals.",
      icon: <Target size={24} />
    },
    {
      title: "Content Planning",
      desc: "Structuring content calendars to ensure consistent messaging.",
      icon: <LayoutTemplate size={24} />
    },
    {
      title: "Social Media Content",
      desc: "Creating high-quality visuals and copy for digital distribution.",
      icon: <Share2 size={24} />
    },
    {
      title: "Brand Communication",
      desc: "Maintaining a consistent voice and visual identity.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Platform Management",
      desc: "Organizing and supporting ongoing social media operations.",
      icon: <Layers size={24} />
    },
    {
      title: "Campaign Support",
      desc: "Creating targeted social assets for marketing initiatives.",
      icon: <BarChart2 size={24} />
    }
  ];

  const workProcess = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the business, audience and goals."
    },
    {
      num: "02",
      title: "STRATEGIZE",
      desc: "Define content direction and priorities."
    },
    {
      num: "03",
      title: "CREATE",
      desc: "Develop copy and visual content."
    },
    {
      num: "04",
      title: "REVIEW",
      desc: "Collaborate with the client and refine content."
    },
    {
      num: "05",
      title: "PUBLISH / SUPPORT",
      desc: "Prepare or support content for platforms."
    }
  ];

  return (
    <div className="page-transition smm-page">
      <SEO 
        title="Social Media Marketing | Codex Neural"
        description="Turn your social presence into a consistent brand experience. Strategy, content, and ongoing social media support."
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
      <section className="smm-hero">
        <div className="container">
          <div className="smm-hero-grid">
            <div className="smm-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                GROWTH / SOCIAL MEDIA MARKETING
              </motion.div>
              
              <motion.h1 
                className="smm-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turn your social presence into a consistent brand experience.
              </motion.h1>

              <motion.p 
                className="smm-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Strategy, content and ongoing social media support designed to help businesses communicate clearly, stay consistent and build meaningful audience connections.
              </motion.p>
              
              <motion.div 
                className="smm-hero-cta"
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
              className="smm-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Social Media Strategy and Planning" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Share2 size={14} className="overlay-icon" />
                  <span>Campaign Active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="smm-section smm-bg-surface">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">What We Do</h2>
            <p className="smm-section-subtitle">Core capabilities for building and maintaining a social presence.</p>
          </div>
          
          <div className="smm-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="smm-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="smm-cap-icon">{cap.icon}</div>
                <h3 className="smm-cap-title">{cap.title}</h3>
                <p className="smm-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOCIAL MEDIA IS A SYSTEM */}
      <section className="smm-section">
        <div className="container">
          <div className="smm-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="smm-section-title">Consistent social media starts with a system.</h2>
            <p className="smm-section-subtitle">Strong social presence is not built from isolated posts. It requires a clear direction, consistent content and an ongoing feedback loop.</p>
          </div>

          <motion.div 
            className="smm-system-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sys-node highlight">STRATEGY</div>
            <div className="sys-connector">
              <ArrowRight size={16} className="sys-arrow-desktop" />
              <ArrowDown size={16} className="sys-arrow-mobile" />
            </div>
            <div className="sys-node">CONTENT</div>
            <div className="sys-connector">
              <ArrowRight size={16} className="sys-arrow-desktop" />
              <ArrowDown size={16} className="sys-arrow-mobile" />
            </div>
            <div className="sys-node">PUBLISH</div>
            <div className="sys-connector">
              <ArrowRight size={16} className="sys-arrow-desktop" />
              <ArrowDown size={16} className="sys-arrow-mobile" />
            </div>
            <div className="sys-node">ENGAGE</div>
            <div className="sys-connector">
              <ArrowRight size={16} className="sys-arrow-desktop" />
              <ArrowDown size={16} className="sys-arrow-mobile" />
            </div>
            <div className="sys-node">LEARN</div>
            <div className="sys-connector">
              <ArrowRight size={16} className="sys-arrow-desktop" />
              <ArrowDown size={16} className="sys-arrow-mobile" />
            </div>
            <div className="sys-node final">REFINE</div>
          </motion.div>
        </div>
      </section>

      {/* 4. CONTENT STRATEGY */}
      <section className="smm-section smm-bg-surface">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">Content works better when every piece has a purpose.</h2>
            <p className="smm-section-subtitle">We align content with the audience, message and platform instead of publishing simply for the sake of staying active.</p>
          </div>

          <div className="smm-strategy-equation glass-card">
            <div className="eq-inputs">
              <div className="eq-item">AUDIENCE</div>
              <div className="eq-op">+</div>
              <div className="eq-item">MESSAGE</div>
              <div className="eq-op">+</div>
              <div className="eq-item">FORMAT</div>
              <div className="eq-op">+</div>
              <div className="eq-item">PLATFORM</div>
              <div className="eq-op">+</div>
              <div className="eq-item">TIMING</div>
            </div>
            <div className="eq-result-connector">
              <ArrowRight size={24} className="eq-arrow-desktop" />
              <ArrowDown size={24} className="eq-arrow-mobile" />
            </div>
            <div className="eq-output">
              CONTENT STRATEGY
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTENT PILLARS */}
      <section className="smm-section">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">Content Pillars</h2>
            <p className="smm-section-subtitle">Organizing recurring content into strategic categories.</p>
          </div>

          <div className="smm-pillars-grid">
            <div className="pillar-card glass-card">
              <h4>EDUCATE</h4>
              <p>Inform and explain to build authority.</p>
            </div>
            <div className="pillar-card glass-card">
              <h4>ENGAGE</h4>
              <p>Start conversations and encourage interaction.</p>
            </div>
            <div className="pillar-card glass-card">
              <h4>BUILD TRUST</h4>
              <p>Show expertise, people and perspective.</p>
            </div>
            <div className="pillar-card glass-card">
              <h4>PROMOTE</h4>
              <p>Communicate relevant products, services or initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FROM IDEA TO PUBLISHED CONTENT */}
      <section className="smm-section smm-bg-surface">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">From Idea to Published Content</h2>
            <p className="smm-section-subtitle">Every post moves through a structured content workflow before it reaches the audience.</p>
          </div>

          <div className="smm-workflow-flow">
            <div className="wf-node">IDEA</div>
            <div className="wf-connector"><ArrowRight size={16} className="wf-arrow-desktop" /><ArrowDown size={16} className="wf-arrow-mobile" /></div>
            <div className="wf-node">CONTENT PLAN</div>
            <div className="wf-connector"><ArrowRight size={16} className="wf-arrow-desktop" /><ArrowDown size={16} className="wf-arrow-mobile" /></div>
            <div className="wf-node">CREATIVE</div>
            <div className="wf-connector"><ArrowRight size={16} className="wf-arrow-desktop" /><ArrowDown size={16} className="wf-arrow-mobile" /></div>
            <div className="wf-node">COPY</div>
            <div className="wf-connector"><ArrowRight size={16} className="wf-arrow-desktop" /><ArrowDown size={16} className="wf-arrow-mobile" /></div>
            <div className="wf-node highlight">REVIEW</div>
            <div className="wf-connector"><ArrowRight size={16} className="wf-arrow-desktop" /><ArrowDown size={16} className="wf-arrow-mobile" /></div>
            <div className="wf-node final">PUBLISH</div>
          </div>
        </div>
      </section>

      {/* 7. PLATFORM-AWARE CONTENT */}
      <section className="smm-section">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">Platform-Aware Content</h2>
            <p className="smm-section-subtitle">Adapting the same brand message to different platform contexts.</p>
          </div>

          <div className="smm-platforms-grid">
            <div className="platform-card glass-card">
              <Briefcase size={24} className="platform-icon" />
              <h4>LINKEDIN</h4>
              <p>Professional thought leadership and B2B communication.</p>
            </div>
            <div className="platform-card glass-card">
              <Camera size={24} className="platform-icon" />
              <h4>INSTAGRAM</h4>
              <p>Visual storytelling and brand presence.</p>
            </div>
            <div className="platform-card glass-card">
              <Users size={24} className="platform-icon" />
              <h4>FACEBOOK</h4>
              <p>Community and broader audience communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BRAND CONSISTENCY */}
      <section className="smm-section smm-bg-surface">
        <div className="container">
          <div className="smm-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="smm-section-title">Every post should still feel like the same brand.</h2>
            <p className="smm-section-subtitle">One brand. Many touchpoints.</p>
          </div>

          <div className="smm-consistency-diagram glass-card">
            <div className="consist-inputs">
              <div className="c-item">BRAND VOICE</div>
              <div className="c-op">+</div>
              <div className="c-item">VISUAL LANGUAGE</div>
              <div className="c-op">+</div>
              <div className="c-item">CONTENT STYLE</div>
              <div className="c-op">+</div>
              <div className="c-item">MESSAGE</div>
            </div>
            <div className="consist-arrow">
              <ArrowDown size={24} />
            </div>
            <div className="consist-output">
              CONSISTENT SOCIAL PRESENCE
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTENT + DESIGN */}
      <section className="smm-section">
        <div className="container">
          <div className="smm-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="smm-section-title">Strategy gives content direction. Design gives it presence.</h2>
            <p className="smm-section-subtitle">We unify strategy, copywriting and graphic design to create complete social assets.</p>
          </div>

          <div className="smm-integration-flow">
            <div className="int-layer top">
              <div className="int-node">STRATEGY</div>
            </div>
            <ArrowDown size={20} className="int-arrow" />
            <div className="int-layer middle">
              <div className="int-node split">COPY</div>
              <div className="int-op">+</div>
              <div className="int-node split">DESIGN</div>
            </div>
            <ArrowDown size={20} className="int-arrow" />
            <div className="int-layer bottom">
              <div className="int-node final">SOCIAL CONTENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. MEASUREMENT & IMPROVEMENT */}
      <section className="smm-section smm-bg-surface">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">Measurement & Improvement</h2>
            <p className="smm-section-subtitle">Social media becomes more effective when content decisions are informed by what audiences respond to.</p>
          </div>

          <div className="smm-feedback-loop">
            <div className="loop-item"><Share2 size={20} /> PUBLISH</div>
            <div className="loop-connector"><ArrowRight size={16} className="l-arrow-desktop"/><ArrowDown size={16} className="l-arrow-mobile"/></div>
            <div className="loop-item"><Target size={20} /> OBSERVE</div>
            <div className="loop-connector"><ArrowRight size={16} className="l-arrow-desktop"/><ArrowDown size={16} className="l-arrow-mobile"/></div>
            <div className="loop-item"><CheckCircle size={20} /> LEARN</div>
            <div className="loop-connector"><ArrowRight size={16} className="l-arrow-desktop"/><ArrowDown size={16} className="l-arrow-mobile"/></div>
            <div className="loop-item"><RefreshCw size={20} /> REFINE</div>
            <div className="loop-connector"><ArrowRight size={16} className="l-arrow-desktop"/><ArrowDown size={16} className="l-arrow-mobile"/></div>
            <div className="loop-item final"><Share2 size={20} /> PUBLISH</div>
          </div>
        </div>
      </section>

      {/* 11. HOW WE WORK */}
      <section className="smm-section">
        <div className="container">
          <div className="smm-section-header">
            <h2 className="smm-section-title">How We Work</h2>
            <p className="smm-section-subtitle">A predictable approach to planning and execution.</p>
          </div>

          <div className="smm-process-grid">
            {workProcess.map((step, index) => (
              <motion.div 
                key={index}
                className="process-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="process-num">{step.num}</div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="smm-cta-section">
        <div className="container">
          <motion.div 
            className="smm-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="smm-cta-title">Ready to build a stronger social presence?</h2>
            <p className="smm-cta-desc">Tell us about your brand, audience and goals. We'll help shape a social media approach built around clear communication and consistent content.</p>
            <div className="smm-cta-actions">
              <Link to="/contact" className="btn-primary smm-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary smm-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
