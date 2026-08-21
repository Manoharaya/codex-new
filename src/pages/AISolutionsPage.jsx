import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BrainCircuit, Bot, Workflow, FileText, Activity, Layers, TerminalSquare, Database, Network } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './AISolutionsPage.css';

const AISolutionsPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "AI Agents",
      desc: "Autonomous systems capable of executing multi-step business processes with reasoning and context.",
      icon: <Bot size={24} />
    },
    {
      title: "Automation",
      desc: "Intelligent automation that bridges disparate systems and reduces manual data entry.",
      icon: <Workflow size={24} />
    },
    {
      title: "LLM Integration",
      desc: "Custom integration of Large Language Models into your existing enterprise software ecosystem.",
      icon: <BrainCircuit size={24} />
    },
    {
      title: "Document Intelligence",
      desc: "Extract structured data from unstructured documents, PDFs, and forms using advanced OCR and NLP.",
      icon: <FileText size={24} />
    },
    {
      title: "Workflow Automation",
      desc: "End-to-end automation pipelines that trigger AI operations based on business events.",
      icon: <Layers size={24} />
    },
    {
      title: "Predictive Systems",
      desc: "Machine learning models designed to forecast trends and identify anomalies in operational data.",
      icon: <Activity size={24} />
    }
  ];

  const useCases = [
    {
      title: "Customer & Lead Triage",
      desc: "Automatically categorize, route, and draft responses to inbound inquiries based on intent and urgency."
    },
    {
      title: "Data Extraction & Processing",
      desc: "Convert thousands of unstructured invoices, contracts, or emails into structured database records instantly."
    },
    {
      title: "Internal Knowledge Retrieval",
      desc: "Give your team an intelligent conversational interface to securely search proprietary company documentation."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "We analyze your existing workflows, data structures, and bottlenecks to identify high-value AI opportunities."
    },
    {
      num: "02",
      title: "Architect",
      desc: "We design a secure system architecture that connects AI models seamlessly with your existing infrastructure."
    },
    {
      num: "03",
      title: "Build",
      desc: "We develop, integrate, and rigorously test the solution in a staged environment using real-world data."
    },
    {
      num: "04",
      title: "Improve",
      desc: "We monitor model performance, refine logic, and ensure the system adapts correctly as your business scales."
    }
  ];

  const technologies = [
    "OpenAI API", "Anthropic", "Python", "PyTorch", "TensorFlow", "LangChain", "Vector Databases", "AWS", "Google Cloud", "REST/GraphQL"
  ];

  return (
    <div className="page-transition ai-solutions-page">
      <SEO 
        title={`${service.title} | Codex Neural`}
        description={service.description}
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
      <section className="ai-hero">
        <div className="container">
          <div className="ai-hero-grid">
            <div className="ai-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                INTELLIGENCE / AI SOLUTIONS
              </motion.div>
              
              <motion.h1 
                className="ai-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Engineer AI systems that solve real business problems.
              </motion.h1>

              <motion.p 
                className="ai-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="ai-hero-cta"
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
              className="ai-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="AI Solutions Architecture" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                {/* Reusing existing overlay pill for consistency */}
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <BrainCircuit size={14} className="overlay-icon" />
                  <span>Processing 4.2B parameters</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="ai-section ai-capabilities-bg">
        <div className="container">
          <div className="ai-section-header">
            <h2 className="ai-section-title">What We Build</h2>
            <p className="ai-section-subtitle">Practical, scalable AI capabilities engineered for enterprise integration.</p>
          </div>
          
          <div className="ai-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="ai-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="ai-cap-icon">{cap.icon}</div>
                <h3 className="ai-cap-title">{cap.title}</h3>
                <p className="ai-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE AI CREATES VALUE */}
      <section className="ai-section">
        <div className="container">
          <div className="ai-section-header">
            <h2 className="ai-section-title">Where AI Creates Value</h2>
            <p className="ai-section-subtitle">Real-world applications driving operational efficiency and scale.</p>
          </div>

          <div className="ai-value-grid">
            {useCases.map((uc, index) => (
              <motion.div 
                key={index}
                className="ai-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TerminalSquare size={20} className="ai-value-icon" />
                <div className="ai-value-content">
                  <h4 className="ai-value-title">{uc.title}</h4>
                  <p className="ai-value-desc">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR ENGINEERING APPROACH */}
      <section className="ai-section ai-approach-bg">
        <div className="container">
          <div className="ai-section-header">
            <h2 className="ai-section-title">Our Engineering Approach</h2>
            <p className="ai-section-subtitle">A disciplined process focused on architecture, security, and measurable outcomes.</p>
          </div>

          <div className="ai-approach-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="ai-approach-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="ai-approach-number">{step.num}</div>
                <h4 className="ai-approach-title">{step.title}</h4>
                <p className="ai-approach-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY / INTEGRATION */}
      <section className="ai-section">
        <div className="container">
          <div className="ai-tech-container">
            <div className="ai-tech-content">
              <Network size={24} className="ai-tech-icon" />
              <h3 className="ai-tech-title">Technology & Integration</h3>
              <p className="ai-tech-desc">AI solutions engineered to operate securely within your existing technology ecosystem.</p>
            </div>
            <div className="ai-tech-pills">
              {technologies.map((tech, index) => (
                <span key={index} className="ai-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="ai-cta-section">
        <div className="container">
          <motion.div 
            className="ai-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="ai-cta-title">Have a workflow worth making intelligent?</h2>
            <p className="ai-cta-desc">Tell us what you're trying to improve. We'll help determine where AI can create practical value for your business.</p>
            <Link to="/contact" className="btn-primary ai-cta-btn">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
