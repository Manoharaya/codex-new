import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Cloud, Server, Database, ShieldCheck, Activity, Layers, Terminal, LineChart, Cpu, ArrowDown, HardDrive, Network, Settings } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './CloudEngineeringPage.css';

const CloudEngineeringPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Cloud Engineering",
        "description": "Cloud infrastructure built to scale with your business.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Cloud Infrastructure",
      desc: "Robust, secure environments configured to host and manage modern business applications.",
      icon: <Cloud size={24} />
    },
    {
      title: "Cloud Architecture",
      desc: "System design focused on component separation, resilience, and operational efficiency.",
      icon: <Network size={24} />
    },
    {
      title: "Infrastructure Scaling",
      desc: "Environments engineered to adapt dynamically as application demand changes.",
      icon: <Layers size={24} />
    },
    {
      title: "Environment Management",
      desc: "Secure configurations across development, staging, and production environments.",
      icon: <Settings size={24} />
    },
    {
      title: "Database Infrastructure",
      desc: "Managed data storage solutions optimized for application performance and data integrity.",
      icon: <Database size={24} />
    },
    {
      title: "Application Deployment",
      desc: "Connecting infrastructure seamlessly with deployment pipelines for reliable releases.",
      icon: <Terminal size={24} />
    }
  ];

  const reliabilityPillars = [
    {
      title: "Scalability",
      desc: "Infrastructure designed to adapt cleanly as application demand and traffic requirements change.",
      icon: <Layers size={20} />
    },
    {
      title: "Reliability",
      desc: "Systems engineered to remain dependable and predictable under real operating conditions.",
      icon: <Server size={20} />
    },
    {
      title: "Security",
      desc: "Appropriate access controls and network configurations applied throughout the environment.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Observability",
      desc: "Making infrastructure and application behaviour easier to understand, monitor, and debug.",
      icon: <Activity size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "We analyze the application architecture, traffic patterns, and existing infrastructure requirements."
    },
    {
      num: "02",
      title: "Architect",
      desc: "We design a scalable cloud architecture and determine the optimal environment structure."
    },
    {
      num: "03",
      title: "Configure",
      desc: "We provision networks, services, access controls, and secure application environments."
    },
    {
      num: "04",
      title: "Deploy",
      desc: "We connect the application to the infrastructure and configure the deployment workflow."
    },
    {
      num: "05",
      title: "Monitor & Improve",
      desc: "We establish visibility and continuously refine the environment based on operational feedback."
    }
  ];

  const technologies = [
    { category: "CLOUD", items: ["AWS", "Azure", "Vercel"] },
    { category: "CONTAINERS", items: ["Docker"] },
    { category: "APPLICATION", items: ["Node.js", "Python", "React", "Next.js"] },
    { category: "DATABASE", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "DEPLOYMENT", items: ["CI/CD Pipelines"] }
  ];

  return (
    <div className="page-transition cloud-page">
      <SEO 
        title="Cloud Engineering | Codex Neural"
        description="Cloud infrastructure built to scale with your business. Reliable, secure, and observable cloud environments."
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
      <section className="cloud-hero">
        <div className="container">
          <div className="cloud-hero-grid">
            <div className="cloud-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / CLOUD INFRASTRUCTURE
              </motion.div>
              
              <motion.h1 
                className="cloud-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Cloud infrastructure built to scale with your business.
              </motion.h1>

              <motion.p 
                className="cloud-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We design and manage reliable cloud environments engineered around your application requirements, deployment workflows, and the need for operational visibility.
              </motion.p>
              
              <motion.div 
                className="cloud-hero-cta"
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
              className="cloud-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Cloud Engineering Infrastructure" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Cloud size={14} className="overlay-icon" />
                  <span>Cloud architecture active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="cloud-section cloud-bg-surface">
        <div className="container">
          <div className="cloud-section-header">
            <h2 className="cloud-section-title">What We Build</h2>
            <p className="cloud-section-subtitle">Core cloud engineering capabilities that support production applications.</p>
          </div>
          
          <div className="cloud-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="cloud-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cloud-cap-icon">{cap.icon}</div>
                <h3 className="cloud-cap-title">{cap.title}</h3>
                <p className="cloud-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUILD FOR RELIABILITY */}
      <section className="cloud-section">
        <div className="container">
          <div className="cloud-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="cloud-section-title">Built for Reliability</h2>
            <p className="cloud-section-subtitle">Engineering principles behind dependable cloud infrastructure.</p>
          </div>

          <div className="cloud-pillars-grid">
            {reliabilityPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="cloud-pillar-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="cloud-pillar-header">
                  <div className="cloud-pillar-icon">{pillar.icon}</div>
                  <h4 className="cloud-pillar-title">{pillar.title}</h4>
                </div>
                <p className="cloud-pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOUD ARCHITECTURE */}
      <section className="cloud-section cloud-bg-surface">
        <div className="container">
          <div className="cloud-section-header">
            <h2 className="cloud-section-title">Cloud Architecture</h2>
            <p className="cloud-section-subtitle">How infrastructure supports a production application.</p>
          </div>

          <motion.div 
            className="cloud-architecture-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Desktop / Horizontal */}
            <div className="arch-flow-desktop">
              <div className="flow-step">USER</div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step highlight">LOAD BALANCER / GATEWAY</div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step">APPLICATION SERVICES</div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step double">
                <span>DATABASE</span>
                <span className="divider"></span>
                <span>STORAGE</span>
              </div>
            </div>

            {/* Mobile / Vertical */}
            <div className="arch-flow-mobile">
              <div className="flow-step">USER</div>
              <ArrowDown size={16} className="flow-arrow" />
              <div className="flow-step highlight">LOAD BALANCER / GATEWAY</div>
              <ArrowDown size={16} className="flow-arrow" />
              <div className="flow-step">APPLICATION SERVICES</div>
              <ArrowDown size={16} className="flow-arrow" />
              <div className="flow-step double">
                <span>DATABASE</span>
                <span className="divider"></span>
                <span>STORAGE</span>
              </div>
            </div>
            
            <div className="arch-observability-bar">
              <span className="obs-label"><Activity size={14} /> MONITORING</span>
              <span className="obs-label"><Terminal size={14} /> LOGGING</span>
              <span className="obs-label"><Settings size={14} /> DEPLOYMENT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW WE ENGINEER YOUR CLOUD */}
      <section className="cloud-section">
        <div className="container">
          <div className="cloud-section-header">
            <h2 className="cloud-section-title">How We Engineer Your Cloud</h2>
            <p className="cloud-section-subtitle">A precise methodology for delivering resilient environments.</p>
          </div>

          <div className="cloud-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="cloud-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cloud-process-number">{step.num}</div>
                <h4 className="cloud-process-title">{step.title}</h4>
                <p className="cloud-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOUD + APPLICATION CONNECTION */}
      <section className="cloud-section cloud-bg-surface">
        <div className="container">
          <div className="cloud-connection-grid">
            <div className="cloud-connection-content">
              <h2 className="cloud-section-title">Infrastructure Designed for Software</h2>
              <p className="cloud-section-subtitle">Cloud engineering is not isolated from the product. We design infrastructure that directly supports application performance, maintainability, and future growth.</p>
            </div>
            
            <div className="cloud-connection-visual">
              <div className="connection-stack">
                <div className="conn-node">CODE</div>
                <ArrowDown size={14} className="conn-arrow" />
                <div className="conn-node highlight">APPLICATION</div>
                <ArrowDown size={14} className="conn-arrow" />
                <div className="conn-node">API / SERVICES</div>
                <ArrowDown size={14} className="conn-arrow" />
                <div className="conn-node">DATABASE</div>
                <ArrowDown size={14} className="conn-arrow" />
                <div className="conn-node cloud-node">CLOUD</div>
                <ArrowDown size={14} className="conn-arrow" />
                <div className="conn-node">USERS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY & INFRASTRUCTURE */}
      <section className="cloud-section">
        <div className="container">
          <div className="cloud-section-header">
            <h2 className="cloud-section-title">Technology Stack</h2>
            <p className="cloud-section-subtitle">The tools we use to architect and manage reliable environments.</p>
          </div>

          <div className="cloud-tech-strip">
            {technologies.map((group, index) => (
              <div key={index} className="tech-group">
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

      {/* 8. OPERATIONAL VISIBILITY */}
      <section className="cloud-section cloud-bg-surface">
        <div className="container">
          <div className="cloud-visibility-container">
            <div className="visibility-header">
              <h2 className="cloud-section-title">Operational Visibility</h2>
              <p className="cloud-section-subtitle">Cloud infrastructure must provide clear insight into system behaviour.</p>
            </div>
            
            <div className="visibility-flow">
              <div className="vis-step">DEPLOY</div>
              <ArrowRight size={16} className="vis-arrow vis-arrow-desktop" />
              <ArrowDown size={16} className="vis-arrow vis-arrow-mobile" />
              <div className="vis-step">MONITOR</div>
              <ArrowRight size={16} className="vis-arrow vis-arrow-desktop" />
              <ArrowDown size={16} className="vis-arrow vis-arrow-mobile" />
              <div className="vis-step">IDENTIFY</div>
              <ArrowRight size={16} className="vis-arrow vis-arrow-desktop" />
              <ArrowDown size={16} className="vis-arrow vis-arrow-mobile" />
              <div className="vis-step highlight">IMPROVE</div>
            </div>

            <div className="visibility-indicators">
              <span className="status-badge"><span className="dot green"></span> STATUS</span>
              <span className="status-badge"><span className="dot green"></span> HEALTH</span>
              <span className="status-badge"><span className="dot blue"></span> LATENCY</span>
              <span className="status-badge"><span className="dot purple"></span> RESOURCE USAGE</span>
              <span className="status-badge"><span className="dot gray"></span> LOGS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY CLOUD ENGINEERING MATTERS */}
      <section className="cloud-section">
        <div className="container">
          <div className="cloud-matters-content">
            <h2 className="cloud-section-title">Why Cloud Engineering Matters</h2>
            <ul className="matters-list">
              <li><CheckCircleIcon /> More predictable deployments and reliable release cycles</li>
              <li><CheckCircleIcon /> Infrastructure that adapts safely to application traffic</li>
              <li><CheckCircleIcon /> Stronger operational visibility and system monitoring</li>
              <li><CheckCircleIcon /> Easier maintenance and structured environment control</li>
              <li><CheckCircleIcon /> Architecture specifically aligned with the software product</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="cloud-cta-section">
        <div className="container">
          <motion.div 
            className="cloud-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cloud-cta-title">Need infrastructure that can grow with your product?</h2>
            <p className="cloud-cta-desc">Tell us what you're building. We'll help design the cloud environment around your application's real requirements.</p>
            <div className="cloud-cta-actions">
              <Link to="/contact" className="btn-primary cloud-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary cloud-cta-btn">
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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default CloudEngineeringPage;
