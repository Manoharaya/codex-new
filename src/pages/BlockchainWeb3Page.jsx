import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, Search, Cpu, Key, Blocks, Code2, Network, ArrowDown, ArrowRightLeft, AppWindow, Database } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './BlockchainWeb3Page.css';

const BlockchainWeb3Page = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Blockchain & Web3 Development",
        "description": "Decentralized systems built with purpose.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Web3 Applications",
      desc: "Client-side interfaces that interact seamlessly with decentralized networks and wallet providers.",
      icon: <AppWindow size={24} />
    },
    {
      title: "Smart Contract Solutions",
      desc: "Programmable business logic deployed securely to blockchain networks for automated execution.",
      icon: <Code2 size={24} />
    },
    {
      title: "Decentralized Platforms",
      desc: "Complete DApps leveraging decentralized infrastructure for storage, identity, and computation.",
      icon: <Blocks size={24} />
    },
    {
      title: "Digital Asset Systems",
      desc: "Verifiable tokenization architectures to represent ownership, access rights, or digital utility.",
      icon: <Key size={24} />
    },
    {
      title: "Blockchain Integrations",
      desc: "Secure bridges connecting your existing centralized infrastructure with on-chain data and events.",
      icon: <Network size={24} />
    },
    {
      title: "Decentralized Systems",
      desc: "Custom network architectures where trust, transparency, and peer-to-peer verification are required.",
      icon: <Cpu size={24} />
    }
  ];

  const valuePrinciples = [
    {
      title: "Trust",
      desc: "Useful when multiple parties need a shared source of verifiable information without relying on a central authority.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Transparency",
      desc: "Useful when transactions, supply chains, or records need to be independently verifiable by public participants.",
      icon: <Search size={20} />
    },
    {
      title: "Automation",
      desc: "Smart contracts can encode agreed business rules into programmable, unstoppable operational workflows.",
      icon: <Cpu size={20} />
    },
    {
      title: "Ownership",
      desc: "Web3 can enable verifiable digital ownership and decentralized interactions where appropriate.",
      icon: <Key size={20} />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand the business model, participants, workflows, and the specific engineering reason for decentralization."
    },
    {
      num: "02",
      title: "Architect",
      desc: "Determine what belongs on-chain, what belongs off-chain, and how the components communicate securely."
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop the application frontend, smart-contract business logic, and required backend API integrations."
    },
    {
      num: "04",
      title: "Test",
      desc: "Rigorously validate contract behaviour, edge cases, application flows, and critical integration points."
    },
    {
      num: "05",
      title: "Deploy & Improve",
      desc: "Prepare the system for mainnet deployment and iterate the off-chain architecture based on real requirements."
    }
  ];

  const securityPrinciples = [
    {
      title: "Minimal Complexity",
      desc: "We use blockchain only where it provides meaningful value. Unnecessary on-chain logic introduces risk.",
      icon: <Cpu size={20} />
    },
    {
      title: "Clear Architecture",
      desc: "We separate on-chain verification and off-chain computation intentionally to optimize cost and performance.",
      icon: <Blocks size={20} />
    },
    {
      title: "Validated Logic",
      desc: "We test business rules, contract state changes, and transaction flows extensively before deployment.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Maintainability",
      desc: "We build transparent systems that can be understood, monitored, and upgraded securely over time.",
      icon: <Code2 size={20} />
    }
  ];

  const technologies = [
    "Smart Contracts", "Web3 APIs", "Wallet Integration", "Backend APIs", "Databases", "Cloud Infrastructure"
  ];

  return (
    <div className="page-transition web3-page">
      <SEO 
        title="Blockchain & Web3 Development | Codex Neural"
        description="Engineering-led Web3 development. Decentralized systems built with purpose."
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
      <section className="web3-hero">
        <div className="container">
          <div className="web3-hero-grid">
            <div className="web3-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ENGINEERING / BLOCKCHAIN & WEB3
              </motion.div>
              
              <motion.h1 
                className="web3-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Decentralized systems built with purpose.
              </motion.h1>

              <motion.p 
                className="web3-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We build blockchain and Web3 solutions where decentralization, transparency, programmable logic, or verifiable ownership creates genuine business value.
              </motion.p>
              
              <motion.div 
                className="web3-hero-cta"
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
              className="web3-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="Blockchain Network Architecture" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Network size={14} className="overlay-icon" />
                  <span>Network consensus</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="web3-section web3-bg-surface">
        <div className="container">
          <div className="web3-section-header">
            <h2 className="web3-section-title">What We Build</h2>
            <p className="web3-section-subtitle">Scalable Web3 architecture and decentralized logic engineered for real applications.</p>
          </div>
          
          <div className="web3-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="web3-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="web3-cap-icon">{cap.icon}</div>
                <h3 className="web3-cap-title">{cap.title}</h3>
                <p className="web3-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE BLOCKCHAIN MAKES SENSE */}
      <section className="web3-section">
        <div className="container">
          <div className="web3-section-header">
            <h2 className="web3-section-title">Where Blockchain Makes Sense</h2>
            <p className="web3-section-subtitle">Blockchain should solve a real system problem — not be added simply because it is available.</p>
          </div>

          <div className="web3-value-grid">
            {valuePrinciples.map((vp, index) => (
              <motion.div 
                key={index}
                className="web3-value-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="web3-value-icon">{vp.icon}</div>
                <div className="web3-value-content">
                  <h4 className="web3-value-title">{vp.title}</h4>
                  <p className="web3-value-desc">{vp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ON-CHAIN + OFF-CHAIN ARCHITECTURE */}
      <section className="web3-section web3-bg-surface">
        <div className="container">
          <div className="web3-section-header">
            <h2 className="web3-section-title">On-Chain & Off-Chain Architecture</h2>
            <p className="web3-section-subtitle">A production Web3 system contains both decentralized networks and traditional scalable infrastructure.</p>
          </div>

          <motion.div 
            className="web3-architecture-diagram"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Desktop / Tablet Diagram */}
            <div className="arch-desktop">
              <div className="arch-row">
                <div className="arch-node">USER</div>
              </div>
              <div className="arch-connector"><ArrowDown size={20} /></div>
              
              <div className="arch-row">
                <div className="arch-node highlight">WEB3 APPLICATION</div>
              </div>
              <div className="arch-connector"><ArrowDown size={20} /></div>
              
              <div className="arch-row">
                <div className="arch-node">API / BACKEND</div>
              </div>
              <div className="arch-split-connectors">
                <div className="split-left"></div>
                <div className="split-right"></div>
              </div>
              
              <div className="arch-row split-row">
                <div className="arch-col">
                  <div className="arch-node on-chain">BLOCKCHAIN</div>
                  <div className="arch-connector"><ArrowDown size={20} /></div>
                  <div className="arch-node on-chain">SMART CONTRACT</div>
                  <div className="arch-connector"><ArrowDown size={20} /></div>
                  <div className="arch-node on-chain end">VERIFICATION / TRANSACTION</div>
                </div>
                
                <div className="arch-col">
                  <div className="arch-node off-chain">DATABASE / SERVICES</div>
                </div>
              </div>
            </div>

            {/* Mobile Diagram */}
            <div className="arch-mobile">
              <div className="arch-node">USER</div>
              <ArrowDown size={16} className="arch-arrow" />
              <div className="arch-node highlight">WEB3 APPLICATION</div>
              <ArrowDown size={16} className="arch-arrow" />
              <div className="arch-node">API / BACKEND</div>
              
              <div className="arch-mobile-split">
                <div className="arch-mobile-path on-chain-path">
                  <span className="path-label">ON-CHAIN</span>
                  <ArrowDown size={16} className="arch-arrow" />
                  <div className="arch-node on-chain">BLOCKCHAIN</div>
                  <ArrowDown size={16} className="arch-arrow" />
                  <div className="arch-node on-chain">SMART CONTRACT</div>
                  <ArrowDown size={16} className="arch-arrow" />
                  <div className="arch-node on-chain end">VERIFICATION</div>
                </div>
                
                <div className="arch-mobile-path off-chain-path">
                  <span className="path-label">OFF-CHAIN</span>
                  <ArrowDown size={16} className="arch-arrow" />
                  <div className="arch-node off-chain">DATABASE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW WE ENGINEER WEB3 PRODUCTS */}
      <section className="web3-section">
        <div className="container">
          <div className="web3-section-header">
            <h2 className="web3-section-title">How We Engineer Web3</h2>
            <p className="web3-section-subtitle">A rigorous lifecycle focused on architectural integrity and execution safety.</p>
          </div>

          <div className="web3-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="web3-process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="web3-process-number">{step.num}</div>
                <h4 className="web3-process-title">{step.title}</h4>
                <p className="web3-process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY & ENGINEERING PRINCIPLES */}
      <section className="web3-section web3-bg-surface">
        <div className="container">
          <div className="web3-section-header" style={{ marginBottom: '48px' }}>
            <h2 className="web3-section-title">Engineering Principles</h2>
            <p className="web3-section-subtitle">Discipline over hype. Building robust systems that operate reliably.</p>
          </div>

          <div className="web3-security-grid">
            {securityPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                className="web3-security-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="web3-security-header">
                  <div className="web3-security-icon">{principle.icon}</div>
                  <h4 className="web3-security-title">{principle.title}</h4>
                </div>
                <p className="web3-security-desc">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAPABILITIES / TECHNOLOGY */}
      <section className="web3-section">
        <div className="container">
          <div className="web3-tech-container">
            <div className="web3-tech-content">
              <Blocks size={24} className="web3-tech-icon" />
              <h3 className="web3-tech-title">Architecture Stack</h3>
              <p className="web3-tech-desc">Your decentralized system integrates cleanly into your broader technology ecosystem.</p>
            </div>
            <div className="web3-tech-pills">
              {technologies.map((tech, index) => (
                <span key={index} className="web3-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="web3-cta-section">
        <div className="container">
          <motion.div 
            className="web3-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="web3-cta-title">Have a Web3 system worth building?</h2>
            <p className="web3-cta-desc">Tell us what you're trying to solve. We'll help determine where decentralized technology can create real value — and where it shouldn't.</p>
            <div className="web3-cta-actions">
              <Link to="/contact" className="btn-primary web3-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary web3-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainWeb3Page;
