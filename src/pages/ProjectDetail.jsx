import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import { portfolioData } from '../data/portfolioData';
import './ProjectDetail.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = portfolioData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.shortDescription,
        "image": project.image,
        "creator": {
          "@type": "Organization",
          "name": "Codex Neural"
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
            "name": "Portfolio",
            "item": "https://www.codexneural.com/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://www.codexneural.com/portfolio/${project.id}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${project.title} | Case Study`}
        description={project.shortDescription}
        url={`/portfolio/${project.id}`}
        image={project.image}
        schema={projectSchema}
      />
      
      <main className="project-detail-page">
        {/* Navigation Bar */}
        <div className="project-detail-nav">
          <div className="container">
            <Link to="/portfolio" className="back-link">
              <ArrowLeft size={16} /> Back to Selected Work
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="project-hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="project-hero-content"
            >
              <div className="project-hero-meta">
                <span className="project-number">{project.number}</span>
                <span className="project-location">{project.location}</span>
              </div>
              <h1 className="project-title">{project.title}</h1>
              <p className="project-subtitle">{project.shortDescription}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="project-hero-visual"
            >
              <img src={project.image} alt={project.title} className="project-main-img" />
            </motion.div>
          </div>
        </section>

        {/* Content Structure */}
        <section className="project-content-section">
          <div className="container">
            <div className="project-content-grid">
              
              {/* Left sidebar - Capabilities */}
              <div className="project-sidebar">
                <div className="sidebar-block">
                  <h4>Capabilities</h4>
                  <ul>
                    {project.capabilities.map((cap, idx) => (
                      <li key={idx}>{cap}</li>
                    ))}
                  </ul>
                </div>
                
                {(project.websiteUrl || project.aiPlatformUrl) && (
                  <div className="sidebar-block links-block">
                    <h4>External Links</h4>
                    {project.websiteUrl && (
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="external-link">
                        Visit Website <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.aiPlatformUrl && (
                      <a href={project.aiPlatformUrl} target="_blank" rel="noopener noreferrer" className="external-link">
                        AI Platform <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Right main content */}
              <div className="project-main-content">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="content-block">
                  <h2>01 — Overview</h2>
                  <p>{project.detailOverview}</p>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="content-block">
                  <h2>02 — What We Built</h2>
                  <p>{project.detailWhatWeBuilt}</p>
                  
                  {project.highlightCapabilities && (
                    <div className="highlight-tags">
                      {project.highlightCapabilities.map((cap, idx) => (
                        <span key={idx} className="highlight-tag">{cap}</span>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="content-block">
                  <h2>03 — Collaboration</h2>
                  <p>{project.detailCollaboration}</p>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* Next Step / Internal CTA */}
        <section className="project-next-step">
          <div className="container center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>{project.detailNextStep}</h2>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      
      <FinalCTA />
    </>
  );
};

export default ProjectDetail;
