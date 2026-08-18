import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import { caseStudiesData } from '../data/caseStudiesData';
import './CaseStudyDetailPage.css';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const study = caseStudiesData.find(cs => cs.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="cs-not-found">
        <h2>Case Study Not Found</h2>
        <Link to="/case-studies" className="btn-primary">Return to Case Studies</Link>
      </div>
    );
  }

  // Find a related case study (just grab the next one, or the first one if we're at the end)
  const relatedIndex = (caseStudiesData.findIndex(cs => cs.slug === slug) + 1) % caseStudiesData.length;
  const relatedStudy = caseStudiesData[relatedIndex];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": study.title,
        "description": study.essence,
        "image": study.heroImage,
        "author": {
          "@type": "Organization",
          "name": "Codex Neural"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Codex Neural",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.codexneural.com/logo.svg"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.codexneural.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://www.codexneural.com/case-studies"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.title,
            "item": `https://www.codexneural.com/case-studies/${study.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="cs-detail-page page-wrapper">
      <SEO 
        title={`${study.title} | Case Study | Codex Neural`}
        description={study.essence}
        url={`/case-studies/${study.slug}`}
        schema={caseStudySchema}
      />

      {/* Navigation Bar */}
      <div className="cs-detail-nav">
        <div className="container">
          <button className="cs-back-btn" onClick={() => navigate('/case-studies')}>
            <ArrowLeft size={16} /> Back to Case Studies
          </button>
        </div>
      </div>

      {/* 01 — HERO */}
      <section className="cs-detail-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cs-detail-header"
          >
            <div className="cs-detail-meta">
              <span className="cs-detail-industry">{study.industry}</span>
              <span className="cs-detail-category">{study.category}</span>
            </div>
            <h1 className="cs-detail-title">{study.title}</h1>
            <p className="cs-detail-essence">{study.essence}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`cs-detail-image-wrapper ${study.theme}`}
          >
            <img src={study.heroImage} alt={`${study.title} overview`} fetchPriority="high" />
          </motion.div>
        </div>
      </section>

      <div className="cs-detail-content-wrapper">
        <div className="container cs-detail-grid">
          
          {/* Main Content Column */}
          <div className="cs-detail-main">
            {/* 02 — THE CHALLENGE */}
            <section className="cs-content-section">
              <h2 className="cs-section-title">02 &mdash; The Challenge</h2>
              <p className="cs-section-text">{study.challenge}</p>
            </section>

            {/* 03 — OUR APPROACH */}
            <section className="cs-content-section">
              <h2 className="cs-section-title">03 &mdash; Our Approach</h2>
              <p className="cs-section-text">{study.approach}</p>
            </section>

            {/* 04 — THE SOLUTION */}
            <section className="cs-content-section">
              <h2 className="cs-section-title">04 &mdash; The Solution</h2>
              <p className="cs-section-text">{study.solution}</p>
            </section>
            
            {/* 06 — OUTCOME */}
            <section className="cs-content-section cs-outcome-section">
              <h2 className="cs-section-title">05 &mdash; The Outcome</h2>
              <div className="cs-metrics-grid">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="cs-metric-card">
                    <span className="cs-metric-value">{metric.value}</span>
                    <span className="cs-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="cs-detail-sidebar">
            <div className="cs-sidebar-sticky">
              {/* 05 — TECHNOLOGY & SERVICES */}
              <div className="cs-sidebar-block">
                <h3 className="cs-sidebar-title">Services</h3>
                <div className="cs-sidebar-tags">
                  {study.services.map(service => (
                    <span key={service} className="cs-sidebar-tag">{service}</span>
                  ))}
                </div>
              </div>

              <div className="cs-sidebar-block">
                <h3 className="cs-sidebar-title">Technology</h3>
                <div className="cs-sidebar-tags">
                  {study.technologies.map(tech => (
                    <span key={tech} className="cs-sidebar-tag outline">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 07 — RELATED WORK */}
      <section className="cs-related-section">
        <div className="container">
          <div className="cs-related-header">
            <h2 className="cs-related-title">More Case Studies</h2>
            <Link to="/case-studies" className="btn-text">View All Case Studies <ArrowRight size={16} /></Link>
          </div>
          
          <div className="cs-related-card" onClick={() => navigate(`/case-studies/${relatedStudy.slug}`)}>
            <div className={`cs-related-visual ${relatedStudy.theme}`}>
              <img src={relatedStudy.heroImage} alt={relatedStudy.title} loading="lazy" />
            </div>
            <div className="cs-related-content">
              <span className="cs-related-industry">{relatedStudy.industry}</span>
              <h3 className="cs-related-name">{relatedStudy.title}</h3>
              <span className="btn-text">Read Case Study <ArrowRight size={16} /></span>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <FinalCTA 
        title="Have a similar challenge?" 
        subtitle="Let's talk about what you're trying to build and how our engineering team can accelerate your vision."
      />
    </div>
  );
};

export default CaseStudyDetailPage;
