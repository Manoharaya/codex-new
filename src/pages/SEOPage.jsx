import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, Activity, Search, Box, Zap, BarChart, Layers, FileText, Globe, Key, ShieldCheck, Database, LayoutTemplate } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './SEOPage.css';

const SEOPage = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Search Engine Optimization",
        "description": "Technical SEO, content structure and performance improvements designed to help search engines understand your website.",
        "provider": {
          "@type": "Organization",
          "name": "Codex Neural"
        }
      }
    ]
  };

  const capabilities = [
    {
      title: "Technical SEO",
      desc: "Ensuring search engines can crawl and index your pages.",
      icon: <Database size={24} />
    },
    {
      title: "Site Architecture",
      desc: "Creating logical structure and internal linking.",
      icon: <Globe size={24} />
    },
    {
      title: "On-Page SEO",
      desc: "Optimizing content hierarchy and intent.",
      icon: <FileText size={24} />
    },
    {
      title: "Performance",
      desc: "Improving Core Web Vitals and load speeds.",
      icon: <Zap size={24} />
    },
    {
      title: "Metadata & Structure",
      desc: "Structured data and meta information mapping.",
      icon: <LayoutTemplate size={24} />
    },
    {
      title: "Search Visibility",
      desc: "Building organic presence on a strong foundation.",
      icon: <Search size={24} />
    }
  ];

  const auditProcess = [
    {
      num: "01",
      title: "AUDIT",
      desc: "Understand the current website."
    },
    {
      num: "02",
      title: "IDENTIFY",
      desc: "Find technical, structural and content opportunities."
    },
    {
      num: "03",
      title: "PRIORITIZE",
      desc: "Focus on changes with the clearest potential value."
    },
    {
      num: "04",
      title: "IMPLEMENT",
      desc: "Apply the agreed improvements."
    },
    {
      num: "05",
      title: "MONITOR",
      desc: "Review changes and continue improving where appropriate."
    }
  ];

  return (
    <div className="page-transition seo-page">
      <SEO 
        title="Search Engine Optimization | Codex Neural"
        description="Build search visibility on a stronger technical foundation with our SEO services."
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
      <section className="seo-hero">
        <div className="container">
          <div className="seo-hero-grid">
            <div className="seo-hero-content">
              <motion.div 
                className="hero-eyebrow text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                GROWTH / SEARCH ENGINE OPTIMIZATION
              </motion.div>
              
              <motion.h1 
                className="seo-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Build search visibility on a stronger technical foundation.
              </motion.h1>

              <motion.p 
                className="seo-hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Technical SEO, content structure and performance improvements designed to help search engines understand your website and users find the right pages.
              </motion.p>
              
              <motion.div 
                className="seo-hero-cta"
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
              className="seo-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`service-image-container ${service.theme}`}>
                <img src={service.image} alt="SEO Data Analysis" className="service-stock-image" fetchPriority="high" />
                <div className="service-image-gradient"></div>
                <div className="ui-overlay-pill" style={{ bottom: '30px', left: '-20px' }}>
                  <Activity size={14} className="overlay-icon" />
                  <span>Crawling active</span>
                  <div className="overlay-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT SEO COVERS */}
      <section className="seo-section seo-bg-surface">
        <div className="container">
          <div className="seo-section-header">
            <h2 className="seo-section-title">What SEO Covers</h2>
            <p className="seo-section-subtitle">Core capabilities to build search visibility.</p>
          </div>
          
          <div className="seo-capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="seo-cap-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="seo-cap-icon">{cap.icon}</div>
                <h3 className="seo-cap-title">{cap.title}</h3>
                <p className="seo-cap-desc">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEO SYSTEM DIAGRAM */}
      <section className="seo-section">
        <div className="container">
          <div className="seo-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="seo-section-title">The SEO System</h2>
            <p className="seo-section-subtitle">Search visibility depends on a website being technically accessible, understandable and properly structured.</p>
          </div>

          <motion.div 
            className="seo-system-flow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sys-node">
              <div className="sys-box">CRAWL</div>
            </div>
            <div className="sys-connector">
              <ArrowRight size={20} className="sys-arrow-desktop" />
              <ArrowDown size={20} className="sys-arrow-mobile" />
            </div>
            
            <div className="sys-node">
              <div className="sys-box">UNDERSTAND</div>
            </div>
            <div className="sys-connector">
              <ArrowRight size={20} className="sys-arrow-desktop" />
              <ArrowDown size={20} className="sys-arrow-mobile" />
            </div>
            
            <div className="sys-node">
              <div className="sys-box">INDEX</div>
            </div>
            <div className="sys-connector">
              <ArrowRight size={20} className="sys-arrow-desktop" />
              <ArrowDown size={20} className="sys-arrow-mobile" />
            </div>

            <div className="sys-node">
              <div className="sys-box highlight">RANK</div>
            </div>
            <div className="sys-connector">
              <ArrowRight size={20} className="sys-arrow-desktop" />
              <ArrowDown size={20} className="sys-arrow-mobile" />
            </div>
            
            <div className="sys-node">
              <div className="sys-box final">DISCOVER</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TECHNICAL SEO FOUNDATION */}
      <section className="seo-section seo-bg-surface">
        <div className="container">
          <div className="seo-section-header">
            <h2 className="seo-section-title">Technical SEO Foundation</h2>
            <p className="seo-section-subtitle">Without a strong technical foundation, great content cannot perform.</p>
          </div>

          <div className="seo-layer-diagram">
            <div className="seo-layer">
              <div className="layer-label">CRAWLABILITY</div>
              <div className="layer-desc">Make important pages accessible to search engines.</div>
            </div>
            <div className="layer-link"><ArrowDown size={16} /></div>
            
            <div className="seo-layer">
              <div className="layer-label">INDEXATION</div>
              <div className="layer-desc">Help search engines understand which pages should be indexed.</div>
            </div>
            <div className="layer-link"><ArrowDown size={16} /></div>

            <div className="seo-layer">
              <div className="layer-label">SITE ARCHITECTURE</div>
              <div className="layer-desc">Create clear relationships between pages and content.</div>
            </div>
            <div className="layer-link"><ArrowDown size={16} /></div>

            <div className="seo-layer">
              <div className="layer-label">PERFORMANCE</div>
              <div className="layer-desc">Improve technical performance and user experience.</div>
            </div>
            <div className="layer-link"><ArrowDown size={16} /></div>

            <div className="seo-layer final">
              <div className="layer-label">SEARCH VISIBILITY</div>
              <div className="layer-desc">Create a stronger foundation for organic discovery.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ON-PAGE SEO */}
      <section className="seo-section">
        <div className="container">
          <div className="seo-page-anatomy-wrapper">
            <div className="anatomy-text">
              <h2 className="seo-section-title">Every important page needs a clear structure.</h2>
              <p className="seo-section-subtitle">Search engines and users both benefit when content has clear hierarchy, context and relationships.</p>
            </div>
            
            <div className="anatomy-visual glass-card">
              <div className="anatomy-browser">
                <div className="browser-bar">
                  <div className="dots"><span/><span/><span/></div>
                  <div className="url-bar">URL STRUCTURE</div>
                </div>
                <div className="browser-content">
                  <div className="meta-tag">TITLE & META DESCRIPTION</div>
                  <div className="h1-tag">H1 (Main Topic)</div>
                  <div className="content-block">
                    CONTENT STRUCTURE
                    <div className="internal-link">INTERNAL LINKS</div>
                  </div>
                  <div className="img-block">IMAGE ALT TEXT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SITE ARCHITECTURE & INTERNAL LINKING */}
      <section className="seo-section seo-bg-surface">
        <div className="container">
          <div className="seo-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="seo-section-title">Make the relationship between your pages clear.</h2>
            <p className="seo-section-subtitle">Search engines use internal links to discover new pages and understand the importance of your content.</p>
          </div>

          <div className="architecture-diagram glass-card">
            <div className="arch-node home">HOME</div>
            <div className="arch-branches">
              <div className="branch">
                <div className="arch-line-vertical"></div>
                <div className="arch-node level-1">SERVICES</div>
                <div className="sub-branches">
                  <div className="sub-branch">
                    <div className="arch-line-vertical"></div>
                    <div className="arch-node level-2">SERVICE A</div>
                  </div>
                  <div className="sub-branch">
                    <div className="arch-line-vertical"></div>
                    <div className="arch-node level-2">SERVICE B</div>
                  </div>
                  <div className="sub-branch">
                    <div className="arch-line-vertical"></div>
                    <div className="arch-node level-2">SERVICE C</div>
                  </div>
                </div>
              </div>
              
              <div className="branch">
                <div className="arch-line-vertical"></div>
                <div className="arch-node level-1">CONTENT</div>
                <div className="sub-branches">
                  <div className="sub-branch">
                    <div className="arch-line-vertical"></div>
                    <div className="arch-node level-2">RELATED PAGE</div>
                  </div>
                  <div className="sub-branch">
                    <div className="arch-line-vertical"></div>
                    <div className="arch-node level-2">SUPPORTING PAGE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEO + CONTENT */}
      <section className="seo-section">
        <div className="container">
          <div className="seo-section-header">
            <h2 className="seo-section-title">SEO & Content Structure</h2>
            <p className="seo-section-subtitle">Search-focused content should answer the right questions, match intent and fit naturally into the site's information architecture.</p>
          </div>

          <div className="content-flow-diagram">
            <div className="cf-node">SEARCH INTENT</div>
            <ArrowRight size={20} className="cf-arrow-desktop" />
            <ArrowDown size={20} className="cf-arrow-mobile" />
            <div className="cf-node">CONTENT STRUCTURE</div>
            <ArrowRight size={20} className="cf-arrow-desktop" />
            <ArrowDown size={20} className="cf-arrow-mobile" />
            <div className="cf-node">RELEVANCE</div>
            <ArrowRight size={20} className="cf-arrow-desktop" />
            <ArrowDown size={20} className="cf-arrow-mobile" />
            <div className="cf-node final">DISCOVERABILITY</div>
          </div>
        </div>
      </section>

      {/* 8. PERFORMANCE & USER EXPERIENCE */}
      <section className="seo-section seo-bg-surface">
        <div className="container">
          <div className="seo-section-header">
            <h2 className="seo-section-title">Performance & UX</h2>
            <p className="seo-section-subtitle">Google rewards websites that load quickly, remain accessible, and provide a clear user experience.</p>
          </div>

          <div className="performance-equation">
            <div className="pe-item glass-card">
              <Zap size={20} className="pe-icon" />
              <span>PERFORMANCE</span>
            </div>
            <div className="pe-operator">+</div>
            <div className="pe-item glass-card">
              <ShieldCheck size={20} className="pe-icon" />
              <span>ACCESSIBILITY</span>
            </div>
            <div className="pe-operator">+</div>
            <div className="pe-item glass-card">
              <Globe size={20} className="pe-icon" />
              <span>RESPONSIVE DESIGN</span>
            </div>
            <div className="pe-operator">+</div>
            <div className="pe-item glass-card">
              <LayoutTemplate size={20} className="pe-icon" />
              <span>CLEAR UX</span>
            </div>
            <div className="pe-operator equals">=</div>
            <div className="pe-item final">
              <Activity size={20} className="pe-icon" />
              <span>BETTER WEBSITE EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEO AUDIT / IMPROVEMENT FLOW */}
      <section className="seo-section">
        <div className="container">
          <div className="seo-section-header">
            <h2 className="seo-section-title">Continuous Improvement</h2>
            <p className="seo-section-subtitle">Our approach to analyzing and upgrading search foundations.</p>
          </div>

          <div className="seo-audit-grid">
            {auditProcess.map((step, index) => (
              <motion.div 
                key={index}
                className="audit-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="audit-num">{step.num}</div>
                <h4 className="audit-title">{step.title}</h4>
                <p className="audit-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SEO VISUAL ANALYSIS */}
      <section className="seo-section seo-bg-surface">
        <div className="container">
          <div className="seo-section-header" style={{textAlign: 'center', margin: '0 auto 64px auto'}}>
            <h2 className="seo-section-title">The Sum of Its Parts</h2>
            <p className="seo-section-subtitle">Search visibility is the result of multiple systems working efficiently together.</p>
          </div>

          <div className="seo-visual-analysis glass-card">
            <div className="sva-inputs">
              <div className="sva-box">TECHNICAL HEALTH</div>
              <div className="sva-box">CONTENT</div>
              <div className="sva-box">STRUCTURE</div>
              <div className="sva-box">PERFORMANCE</div>
              <div className="sva-box">USER EXPERIENCE</div>
            </div>
            
            <div className="sva-connector">
              <ArrowRight size={32} className="sva-arrow-desktop" />
              <ArrowDown size={32} className="sva-arrow-mobile" />
            </div>

            <div className="sva-output">
              <div className="sva-box final">SEARCH DISCOVERABILITY</div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="seo-cta-section">
        <div className="container">
          <motion.div 
            className="seo-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="seo-cta-title">Is your website being found by the right people?</h2>
            <p className="seo-cta-desc">Tell us about your website and your search visibility goals. We'll help identify the technical and structural opportunities worth addressing.</p>
            <div className="seo-cta-actions">
              <Link to="/contact" className="btn-primary seo-cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary seo-cta-btn">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOPage;
