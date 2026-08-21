import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, PenTool, Layout, Layers, Smartphone, Eye, Focus, MousePointer2, Code2, Monitor, Tablet, GripHorizontal } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './UIUXDesignPage.css';

const UIUXDesignPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "Interfaces designed around how people actually use products.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "UX Research",
      desc: "Understanding users, workflows, and business goals before designing.",
      icon: <Focus size={24} />
    },
    {
      title: "Wireframes",
      desc: "Structuring information architecture and user flows clearly.",
      icon: <Layout size={24} />
    },
    {
      title: "Prototyping",
      desc: "Creating interactive models to test functionality early.",
      icon: <MousePointer2 size={24} />
    },
    {
      title: "Design Systems",
      desc: "Building scalable visual systems for long-term consistency.",
      icon: <Layers size={24} />
    },
    {
      title: "Interaction Design",
      desc: "Defining micro-interactions that make interfaces feel responsive.",
      icon: <Eye size={24} />
    },
    {
      title: "Visual Design",
      desc: "Creating polished, premium interfaces aligned with your brand.",
      icon: <PenTool size={24} />
    }
  ];

  const principles = [
    {
      title: "Clarity",
      desc: "Interfaces should make the next action easy to understand.",
      icon: <Eye size={20} />
    },
    {
      title: "Consistency",
      desc: "Reusable patterns create predictable and scalable experiences.",
      icon: <Layers size={20} />
    },
    {
      title: "Accessibility",
      desc: "Design should remain usable across different users and screen sizes.",
      icon: <Focus size={20} />
    },
    {
      title: "Purpose",
      desc: "Every visual decision should support the product and its users.",
      icon: <Layout size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the product, users, requirements and business context."
    },
    {
      num: "02",
      title: "Structure",
      desc: "Define information architecture, user flows and content hierarchy."
    },
    {
      num: "03",
      title: "Wireframe",
      desc: "Create the structure before adding visual complexity."
    },
    {
      num: "04",
      title: "Design",
      desc: "Develop the interface, visual language and interaction patterns."
    },
    {
      num: "05",
      title: "Refine",
      desc: "Review the experience and refine the final interface where required."
    }
  ];

  return (
    <div className="page-transition uiux-page">
      <SEO 
        title="UI/UX Design | Codex Neural"
        description="From user flows to polished interfaces, we design clear digital experiences that make complex products easier to understand and use."
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
      <section className="uiux-hero">
        <div className="container">
          <div className="uiux-hero-grid">
            <div className="uiux-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                DESIGN / UI & UX
              </motion.div>
              
              <motion.h1 
                className="uiux-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Interfaces designed around how people actually use products.
              </motion.h1>

              <motion.p 
                className="uiux-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From user flows to polished interfaces, we design clear digital experiences that make complex products easier to understand and use.
              </motion.p>
              
              <motion.div 
                className="uiux-hero-cta"
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
              className="uiux-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="UI/UX Design Process" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <PenTool size={14} className="overlay-icon" />
                  <span>Design system active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DESIGN */}
      <section className="uiux-section uiux-bg-surface">
        <div className="container">
          <div className="uiux-section-header">
            <h2 className="uiux-section-title">What We Design</h2>
            <p className="uiux-section-subtitle">Core design capabilities for digital products.</p>
          </div>
          
          <div className="uiux-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="uiux-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="uiux-cap-icon">{cap.icon}</div>
                <h3 className="uiux-cap-title">{cap.title}</h3>
                <p className="uiux-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGNING THE EXPERIENCE */}
      <section className="uiux-section">
        <div className="container">
          <div className="uiux-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="uiux-section-title">Designing the Experience</h2>
            <p className="uiux-section-subtitle">Good interface design begins with understanding what users need to accomplish.</p>
          </div>

          <motion.div 
            className="uiux-experience-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="exp-node">
              <div className="exp-box highlight">USER</div>
            </div>
            <ArrowRight size={16} className="exp-arrow exp-arrow-desktop" />
            <ArrowDown size={16} className="exp-arrow exp-arrow-mobile" />
            
            <div className="exp-node">
              <div className="exp-box">USER FLOW</div>
            </div>
            <ArrowRight size={16} className="exp-arrow exp-arrow-desktop" />
            <ArrowDown size={16} className="exp-arrow exp-arrow-mobile" />
            
            <div className="exp-node">
              <div className="exp-box">WIREFRAME</div>
            </div>
            <ArrowRight size={16} className="exp-arrow exp-arrow-desktop" />
            <ArrowDown size={16} className="exp-arrow exp-arrow-mobile" />
            
            <div className="exp-node">
              <div className="exp-box">INTERFACE</div>
            </div>
            <ArrowRight size={16} className="exp-arrow exp-arrow-desktop" />
            <ArrowDown size={16} className="exp-arrow exp-arrow-mobile" />

            <div className="exp-node">
              <div className="exp-box final">PRODUCT EXPERIENCE</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FROM STRUCTURE TO INTERFACE */}
      <section className="uiux-section uiux-bg-surface">
        <div className="container">
          <div className="uiux-section-header">
            <h2 className="uiux-section-title">From Structure to Interface</h2>
            <p className="uiux-section-subtitle">Information architecture transformed into a polished visual experience.</p>
          </div>

          <div className="uiux-structure-visual">
            <div className="structure-stage">
              <div className="wireframe-mockup">
                <div className="wf-header"></div>
                <div className="wf-body">
                  <div className="wf-block"></div>
                  <div className="wf-lines">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <p>WIREFRAME</p>
            </div>
            
            <div className="structure-connector">
              <ArrowRight size={24} className="s-arrow-desktop" />
              <ArrowDown size={24} className="s-arrow-mobile" />
            </div>

            <div className="structure-stage">
              <div className="system-mockup">
                <div className="sys-colors">
                  <div className="sc c1"></div><div className="sc c2"></div>
                </div>
                <div className="sys-type">Aa</div>
                <div className="sys-comp">Button</div>
              </div>
              <p>VISUAL SYSTEM</p>
            </div>

            <div className="structure-connector">
              <ArrowRight size={24} className="s-arrow-desktop" />
              <ArrowDown size={24} className="s-arrow-mobile" />
            </div>

            <div className="structure-stage">
              <div className="interface-mockup">
                <div className="ui-header">
                  <div className="ui-logo"></div>
                  <div className="ui-nav"></div>
                </div>
                <div className="ui-hero">
                  <div className="ui-title"></div>
                  <div className="ui-btn"></div>
                </div>
              </div>
              <p>POLISHED INTERFACE</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR DESIGN PRINCIPLES */}
      <section className="uiux-section">
        <div className="container">
          <div className="uiux-section-header">
            <h2 className="uiux-section-title">Design Principles</h2>
            <p className="uiux-section-subtitle">The rules guiding our visual decisions.</p>
          </div>

          <div className="uiux-principles-grid">
            {principles.map((pillar, index) => (
              <motion.div 
                key={index}
                className="uiux-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="uiux-pillar-header">
                  <div className="uiux-pillar-icon">{pillar.icon}</div>
                  <h4 className="uiux-pillar-title">{pillar.title}</h4>
                </div>
                <p className="uiux-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE DESIGN */}
      <section className="uiux-section uiux-bg-surface">
        <div className="container">
          <div className="uiux-section-header">
            <h2 className="uiux-section-title">How We Design</h2>
            <p className="uiux-section-subtitle">A predictable approach to interface creation.</p>
          </div>

          <div className="uiux-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="uiux-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="uiux-process-number">{step.num}</div>
                <h4 className="uiux-process-title">{step.title}</h4>
                <p className="uiux-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DESIGN SYSTEM */}
      <section className="uiux-section">
        <div className="container">
          <div className="uiux-section-header">
            <h2 className="uiux-section-title">Building a Design System</h2>
            <p className="uiux-section-subtitle">A strong interface is not a collection of individual screens. It is a consistent system.</p>
          </div>

          <div className="uiux-system-board">
            <div className="sys-panel typography">
              <h5>TYPOGRAPHY</h5>
              <div className="type-sample primary">Heading 1</div>
              <div className="type-sample secondary">Body Text</div>
            </div>
            <div className="sys-panel colors">
              <h5>COLOR</h5>
              <div className="color-swatches">
                <div className="swatch primary"></div>
                <div className="swatch secondary"></div>
                <div className="swatch accent"></div>
                <div className="swatch dark"></div>
              </div>
            </div>
            <div className="sys-panel spacing">
              <h5>SPACING</h5>
              <div className="spacing-blocks">
                <div className="s-block s8">8</div>
                <div className="s-block s16">16</div>
                <div className="s-block s24">24</div>
                <div className="s-block s32">32</div>
              </div>
            </div>
            <div className="sys-panel components">
              <h5>COMPONENTS & INTERACTIONS</h5>
              <div className="comp-demo">
                <button className="sys-btn primary">Primary Action</button>
                <button className="sys-btn secondary">Secondary</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RESPONSIVE PRODUCT EXPERIENCE */}
      <section className="uiux-section uiux-bg-surface">
        <div className="container">
          <div className="uiux-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="uiux-section-title">Responsive Product Experience</h2>
            <p className="uiux-section-subtitle">Every interface should remain clear and usable wherever the product is experienced.</p>
          </div>

          <div className="uiux-responsive-visual">
            <div className="device desktop">
              <Monitor size={48} className="device-icon" />
              <span>DESKTOP</span>
            </div>
            <ArrowRight size={20} className="r-arrow-desktop" />
            <ArrowDown size={20} className="r-arrow-mobile" />
            <div className="device tablet">
              <Tablet size={36} className="device-icon" />
              <span>TABLET</span>
            </div>
            <ArrowRight size={20} className="r-arrow-desktop" />
            <ArrowDown size={20} className="r-arrow-mobile" />
            <div className="device mobile">
              <Smartphone size={28} className="device-icon" />
              <span>MOBILE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY / DESIGN HANDOFF */}
      <section className="uiux-section">
        <div className="container">
          <div className="uiux-handoff-card">
            <h2 className="handoff-title">Design to Engineering Handoff</h2>
            <p className="handoff-subtitle">Design and engineering are connected — not separate silos.</p>
            
            <div className="handoff-flow">
              <div className="hf-node">
                <PenTool size={20} />
                <span>DESIGN</span>
              </div>
              <div className="hf-operator">↓</div>
              <div className="hf-node">
                <GripHorizontal size={20} />
                <span>COMPONENTS</span>
              </div>
              <div className="hf-operator">↓</div>
              <div className="hf-node highlight">
                <Code2 size={20} />
                <span>DEVELOPER HANDOFF</span>
              </div>
              <div className="hf-operator">↓</div>
              <div className="hf-node final">
                <Focus size={20} />
                <span>IMPLEMENTATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="uiux-cta-section">
        <div className="container">
          <motion.div 
            className="uiux-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="uiux-cta-title">Have a product experience worth improving?</h2>
            <p className="uiux-cta-desc">Tell us what you're building or where the experience is falling short. We'll help turn the requirements into a clearer digital product experience.</p>
            <div className="uiux-cta-actions">
              <Link to="/contact" className="btn-primary uiux-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary uiux-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
