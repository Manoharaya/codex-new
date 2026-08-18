import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Code2, Cpu, Cloud } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import { caseStudiesData, caseStudyCategories } from '../data/caseStudiesData';
import './CaseStudiesPage.css';

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = activeCategory === "ALL" 
    ? caseStudiesData 
    : caseStudiesData.filter(cs => cs.category === activeCategory);

  // Take the first matching item as featured, and the rest for the grid
  const featuredCaseStudy = filteredData.length > 0 ? filteredData[0] : null;
  const gridCaseStudies = filteredData.length > 1 ? filteredData.slice(1) : [];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies | Codex Neural",
    "description": "Explore how we approach complex business challenges through strategy, design, engineering and technology.",
    "url": "https://www.codexneural.com/case-studies"
  };

  return (
    <div className="case-studies-page page-wrapper">
      <SEO 
        title="Case Studies | Codex Neural"
        description="Problems solved. Systems built. Results delivered. Explore our case studies."
        url="/case-studies"
        schema={pageSchema}
      />
      
      {/* 1. HERO SECTION */}
      <section className="cs-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cs-hero-content"
          >
            <span className="cs-eyebrow">CASE STUDIES</span>
            <h1 className="cs-headline">
              Problems solved.<br />
              <span className="text-gradient">Systems built.</span><br />
              Results delivered.
            </h1>
            <p className="cs-supporting">
              Explore how we approach complex business challenges through strategy, design, engineering and technology.
            </p>
            <div className="cs-hero-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="cs-filters-section">
        <div className="container">
          <div className="cs-filters-scroll-wrapper">
            <div className="cs-filters">
              {caseStudyCategories.map((cat) => (
                <button
                  key={cat}
                  className={`cs-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CASE STUDY */}
      <AnimatePresence mode="wait">
        {featuredCaseStudy && (
          <motion.section 
            key={`featured-${featuredCaseStudy.slug}`}
            className="cs-featured-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <div className="cs-featured-layout">
                <div className="cs-featured-visual">
                  <div className={`cs-image-wrapper ${featuredCaseStudy.theme}`}>
                    <img src={featuredCaseStudy.heroImage} alt={featuredCaseStudy.title} loading="eager" fetchPriority="high" />
                    <div className="cs-image-overlay"></div>
                  </div>
                </div>
                <div className="cs-featured-content">
                  <span className="cs-badge">CASE STUDY</span>
                  <h2 className="cs-featured-title">{featuredCaseStudy.title}</h2>
                  
                  <div className="cs-info-group">
                    <span className="cs-info-label">Industry:</span>
                    <span className="cs-info-value">{featuredCaseStudy.industry}</span>
                  </div>

                  <div className="cs-info-group">
                    <span className="cs-info-label">Challenge:</span>
                    <p className="cs-info-text">{featuredCaseStudy.challenge}</p>
                  </div>

                  <div className="cs-info-group">
                    <span className="cs-info-label">Solution:</span>
                    <p className="cs-info-text">{featuredCaseStudy.solution}</p>
                  </div>

                  <div className="cs-info-group capabilities-group">
                    <span className="cs-info-label">Capabilities:</span>
                    <div className="cs-tags">
                      {featuredCaseStudy.services.map(s => (
                        <span key={s} className="cs-tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  <Link to={`/case-studies/${featuredCaseStudy.slug}`} className="btn-text cs-read-btn">
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. GRID CASE STUDIES */}
      <section className="cs-grid-section">
        <div className="container">
          <motion.div layout className="cs-grid">
            <AnimatePresence>
              {gridCaseStudies.map((cs) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={cs.slug}
                  className="cs-card"
                  onClick={() => navigate(`/case-studies/${cs.slug}`)}
                >
                  <div className={`cs-card-visual ${cs.theme}`}>
                    <img src={cs.heroImage} alt={cs.title} loading="lazy" />
                  </div>
                  <div className="cs-card-content">
                    <span className="cs-card-industry">{cs.industry}</span>
                    <h3 className="cs-card-title">{cs.title}</h3>
                    <p className="cs-card-essence">{cs.essence}</p>
                    <div className="cs-card-tags">
                      {cs.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="cs-card-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="cs-card-footer">
                      <span className="btn-text">Read Case Study <ArrowRight size={16} /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default CaseStudiesPage;
