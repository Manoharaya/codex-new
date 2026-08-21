import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, GitBranch, Terminal, Layers, Box, Activity, Server, Settings, CheckCircle, RefreshCcw } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './DevOpsPage.css';

const DevOpsPage = ({ service }) => {
  const navigate = useNavigate();
  const [deployState, setDeployState] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple animation loop for the deployment visual
  useEffect(() => {
    const interval = setInterval(() => {
      setDeployState((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "DevOps",
        "description": "Ship software with a clearer path to production.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "CI/CD Pipelines",
      desc: "Automated pathways moving code from repository to production cleanly.",
      icon: <GitBranch size={24} />
    },
    {
      title: "Deployment Automation",
      desc: "Consistent, repeatable release processes that reduce manual intervention.",
      icon: <RefreshCcw size={24} />
    },
    {
      title: "Containerization",
      desc: "Standardizing application environments for reliable performance across systems.",
      icon: <Box size={24} />
    },
    {
      title: "Infrastructure Automation",
      desc: "Managing infrastructure through code for predictable configurations.",
      icon: <Server size={24} />
    },
    {
      title: "Monitoring & Logging",
      desc: "Gaining visibility into system health and application behavior in real-time.",
      icon: <Activity size={24} />
    },
    {
      title: "Release Workflows",
      desc: "Structured paths through testing and staging before final deployment.",
      icon: <Layers size={24} />
    }
  ];

  const principles = [
    {
      title: "Automation",
      desc: "Reduce repetitive operational work where automation creates measurable value.",
      icon: <Settings size={20} />
    },
    {
      title: "Consistency",
      desc: "Keep environments and deployment processes entirely predictable.",
      icon: <Box size={20} />
    },
    {
      title: "Visibility",
      desc: "Make application and infrastructure behaviour easier to observe and audit.",
      icon: <Activity size={20} />
    },
    {
      title: "Controlled Releases",
      desc: "Move changes through a clear, rigorous, and repeatable delivery process.",
      icon: <GitBranch size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Assess",
      desc: "We understand your existing development practices and deployment workflows."
    },
    {
      num: "02",
      title: "Design",
      desc: "We define the appropriate environments, pipeline structure, and operational approach."
    },
    {
      num: "03",
      title: "Automate",
      desc: "We implement repeatable build, test, and deployment activities where appropriate."
    },
    {
      num: "04",
      title: "Release",
      desc: "We establish a highly controlled, transparent path from development to production."
    },
    {
      num: "05",
      title: "Improve",
      desc: "We continually review the workflow to improve reliability and efficiency over time."
    }
  ];

  const technologies = [
    { category: "CONTAINERS", items: ["Docker"] },
    { category: "CLOUD", items: ["AWS", "Azure", "Vercel"] },
    { category: "APPLICATION", items: ["Node.js", "Python", "React"] },
    { category: "DATABASE", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DEPLOYMENT", items: ["CI/CD Tooling"] }
  ];

  const deployStages = [
    { label: "SOURCE", state: "READY" },
    { label: "BUILD", state: "BUILDING" },
    { label: "TEST", state: "TESTING" },
    { label: "DEPLOY", state: "DEPLOYING" },
    { label: "PRODUCTION", state: "LIVE" }
  ];

  return (
    <div className="page-transition devops-page">
      <SEO 
        title="DevOps Engineering | Codex Neural"
        description="Ship software with a clearer path to production. CI/CD, automation, and reliable software delivery."
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
      <section className="devops-hero">
        <div className="container">
          <div className="devops-hero-grid">
            <div className="devops-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / DEVOPS
              </motion.div>
              
              <motion.h1 
                className="devops-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ship software with a clearer path to production.
              </motion.h1>

              <motion.p 
                className="devops-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We connect development and operations through reliable deployment workflows, structured environments, rigorous automation, and strong operational practices.
              </motion.p>
              
              <motion.div 
                className="devops-hero-cta"
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
              className="devops-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="DevOps Engineering Pipeline" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Terminal size={14} className="overlay-icon" />
                  <span>Pipeline active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="devops-section devops-bg-surface">
        <div className="container">
          <div className="devops-section-header">
            <h2 className="devops-section-title">What We Do</h2>
            <p className="devops-section-subtitle">Core DevOps capabilities supporting continuous software delivery.</p>
          </div>
          
          <div className="devops-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="devops-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="devops-cap-icon">{cap.icon}</div>
                <h3 className="devops-cap-title">{cap.title}</h3>
                <p className="devops-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FROM CODE TO PRODUCTION */}
      <section className="devops-section">
        <div className="container">
          <div className="devops-section-header">
            <h2 className="devops-section-title">From Code to Production</h2>
            <p className="devops-section-subtitle">A structured pipeline ensuring quality and predictability.</p>
          </div>

          <motion.div 
            className="devops-code-to-prod"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="c2p-stage">
              <div className="c2p-box">CODE</div>
              <p className="c2p-desc">Changes enter the workflow.</p>
            </div>
            <ArrowRight size={16} className="c2p-arrow c2p-arrow-desktop" />
            <ArrowDown size={16} className="c2p-arrow c2p-arrow-mobile" />
            
            <div className="c2p-stage">
              <div className="c2p-box highlight">BUILD</div>
              <p className="c2p-desc">Components are prepared.</p>
            </div>
            <ArrowRight size={16} className="c2p-arrow c2p-arrow-desktop" />
            <ArrowDown size={16} className="c2p-arrow c2p-arrow-mobile" />
            
            <div className="c2p-stage">
              <div className="c2p-box">TEST</div>
              <p className="c2p-desc">Changes are validated.</p>
            </div>
            <ArrowRight size={16} className="c2p-arrow c2p-arrow-desktop" />
            <ArrowDown size={16} className="c2p-arrow c2p-arrow-mobile" />
            
            <div className="c2p-stage">
              <div className="c2p-box highlight">REVIEW</div>
              <p className="c2p-desc">Approval before release.</p>
            </div>
            <ArrowRight size={16} className="c2p-arrow c2p-arrow-desktop" />
            <ArrowDown size={16} className="c2p-arrow c2p-arrow-mobile" />
            
            <div className="c2p-stage">
              <div className="c2p-box">DEPLOY</div>
              <p className="c2p-desc">Code moves to environments.</p>
            </div>
            <ArrowRight size={16} className="c2p-arrow c2p-arrow-desktop" />
            <ArrowDown size={16} className="c2p-arrow c2p-arrow-mobile" />

            <div className="c2p-stage">
              <div className="c2p-box final">MONITOR</div>
              <p className="c2p-desc">System is observed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ENVIRONMENT MANAGEMENT */}
      <section className="devops-section devops-bg-surface">
        <div className="container">
          <div className="devops-env-grid">
            <div className="devops-env-content">
              <h2 className="devops-section-title">Environment Control</h2>
              <p className="devops-section-subtitle" style={{marginBottom: '24px'}}>
                Isolating code at different stages of maturity is critical for reliable releases.
              </p>
              <ul className="devops-env-benefits">
                <li><CheckCircleIcon /> Safer integration testing</li>
                <li><CheckCircleIcon /> Highly controlled releases</li>
                <li><CheckCircleIcon /> Better team collaboration</li>
                <li><CheckCircleIcon /> Reduced deployment risk</li>
                <li><CheckCircleIcon /> Clearer release workflows</li>
              </ul>
            </div>
            
            <div className="devops-env-visual">
              <div className="env-stack">
                <div className="env-node dev">DEVELOPMENT</div>
                <div className="env-flow-line"></div>
                <div className="env-node staging">STAGING</div>
                <div className="env-flow-line"></div>
                <div className="env-node prod">PRODUCTION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEVOPS ENGINEERING PRINCIPLES */}
      <section className="devops-section">
        <div className="container">
          <div className="devops-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="devops-section-title">Engineering Principles</h2>
            <p className="devops-section-subtitle">How we think about operational stability.</p>
          </div>

          <div className="devops-principles-grid">
            {principles.map((pillar, index) => (
              <motion.div 
                key={index}
                className="devops-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="devops-pillar-header">
                  <div className="devops-pillar-icon">{pillar.icon}</div>
                  <h4 className="devops-pillar-title">{pillar.title}</h4>
                </div>
                <p className="devops-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE IMPLEMENT DEVOPS */}
      <section className="devops-section devops-bg-surface">
        <div className="container">
          <div className="devops-section-header">
            <h2 className="devops-section-title">How We Implement DevOps</h2>
            <p className="devops-section-subtitle">A systematic approach to delivery automation.</p>
          </div>

          <div className="devops-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="devops-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="devops-process-number">{step.num}</div>
                <h4 className="devops-process-title">{step.title}</h4>
                <p className="devops-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEPLOYMENT VISUAL */}
      <section className="devops-section">
        <div className="container">
          <div className="devops-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="devops-section-title">The Deployment Path</h2>
            <p className="devops-section-subtitle">A transparent view of moving software updates live.</p>
          </div>

          <div className="devops-live-deploy-visual">
            {deployStages.map((stage, index) => {
              const isActive = index === deployState;
              const isPast = index < deployState;
              return (
                <div key={index} className="deploy-stage-wrapper">
                  <div className={`deploy-stage-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                    <span className="node-label">{stage.label}</span>
                    <span className="node-status">{isActive ? stage.state : (isPast ? 'DONE' : 'WAITING')}</span>
                  </div>
                  {index < deployStages.length - 1 && (
                    <>
                      <ArrowRight size={16} className={`deploy-arrow deploy-arrow-desktop ${isPast ? 'past' : ''}`} />
                      <ArrowDown size={16} className={`deploy-arrow deploy-arrow-mobile ${isPast ? 'past' : ''}`} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. DEVOPS + CLOUD RELATIONSHIP */}
      <section className="devops-section devops-bg-surface">
        <div className="container">
          <div className="devops-relationship-card">
            <h2 className="relationship-title">Infrastructure vs Delivery</h2>
            
            <div className="relationship-equation">
              <div className="equation-block">
                <h4>CLOUD ENGINEERING</h4>
                <p>Infrastructure</p>
                <p>Architecture</p>
                <p>Environments</p>
              </div>
              
              <div className="equation-operator">+</div>
              
              <div className="equation-block highlight">
                <h4>DEVOPS</h4>
                <p>Delivery</p>
                <p>Automation</p>
                <p>Deployment</p>
              </div>
              
              <div className="equation-operator">=</div>
              
              <div className="equation-block final">
                <h4>RELIABLE SOFTWARE DELIVERY</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY & TOOLING */}
      <section className="devops-section">
        <div className="container">
          <div className="devops-section-header">
            <h2 className="devops-section-title">Technology & Tooling</h2>
            <p className="devops-section-subtitle">Supported components of our operational stack.</p>
          </div>

          <div className="devops-tech-strip">
            {technologies.map((group, index) => (
              <div key={index} className="devops-tech-group">
                <div className="tech-category">{group.category}</div>
                <div className="tech-items">
                  {group.items.map((item, i) => (
                    <span key={i} className="tech-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="devops-cta-section">
        <div className="container">
          <motion.div 
            className="devops-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="devops-cta-title">Ready to make software delivery more reliable?</h2>
            <p className="devops-cta-desc">Tell us how you build and deploy today. We'll help identify where better engineering workflows and automation can make the process clearer.</p>
            <div className="devops-cta-actions">
              <Link to="/contact" className="btn-primary devops-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary devops-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default DevOpsPage;
