import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Zap, Shield, Users, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import './About.css';

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.svg.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MANOHAR_LINKEDIN_URL = "#";
const MANOHAR_EMAIL = "mailto:hello@codexneural.com";
const PRITI_LINKEDIN_URL = "#";
const PRITI_EMAIL = "mailto:hello@codexneural.com";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeProfile, setActiveProfile] = useState(null);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Codex Neural",
    "description": "Codex Neural builds intelligent digital systems, software products, and infrastructure for businesses that need technology to perform, scale, and evolve.",
    "url": "https://www.codexneural.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Codex Neural"
    }
  };

  const timeline = [
    { label: "OUR BEGINNING", title: "Solving Complexity", desc: "Started with a clear focus: simplifying complex operational problems through intelligent engineering." },
    { label: "OUR PHILOSOPHY", title: "Engineering Value", desc: "Built a culture focused on measurable business outcomes rather than just shipping code." },
    { label: "TODAY", title: "Intelligent Products", desc: "Delivering modern software, AI systems, and scalable infrastructure to international clients." }
  ];

  const values = [
    { icon: <Zap size={24} />, title: "Innovation", desc: "Always exploring better ways to solve problems and push the boundaries of what's possible." },
    { icon: <Shield size={24} />, title: "Engineering Excellence", desc: "Scalable, secure, maintainable software built with precision and strong technical discipline." },
    { icon: <Users size={24} />, title: "User First", desc: "Every interface begins with understanding the people who use it and the problems they need solved." },
    { icon: <Handshake size={24} />, title: "Long-Term Partnerships", desc: "We believe successful technology is built through collaboration, trust, and continued improvement." }
  ];

  const team = [
    {
      id: "manohar",
      name: "Manohar Singh",
      role: "FOUNDER & CEO",
      image: "/images/manohar.jpg",
      desc: "Leading strategic vision, business development, client relationships, and company operations.",
      linkedin: MANOHAR_LINKEDIN_URL,
      email: MANOHAR_EMAIL
    },
    {
      id: "priti",
      name: "Priti Gupta",
      role: "CO-FOUNDER / CONTENT STRATEGIST",
      image: "/images/priti.jpg",
      desc: "Shaping content strategy, brand communication, digital storytelling, and the way Codex Neural communicates complex technology with clarity.",
      linkedin: PRITI_LINKEDIN_URL,
      email: PRITI_EMAIL
    }
  ];

  return (
    <div className="about-page page-wrapper">
      <SEO 
        title="About Us | Codex Neural"
        description="Codex Neural builds intelligent digital systems, software products, and infrastructure for businesses that need technology to perform, scale, and evolve."
        url="/about"
        schema={pageSchema}
      />

      {/* 1. HERO */}
      <section className="abt-hero">
        <div className="container">
          <div className="abt-hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="abt-hero-content"
            >
              <span className="abt-eyebrow">ABOUT CODEX NEURAL</span>
              <h1 className="abt-headline">Building the systems behind ambitious businesses.</h1>
              <p className="abt-supporting">
                Codex Neural builds intelligent digital systems, software products, and infrastructure for businesses that need technology to perform, scale, and evolve.
              </p>
              <p className="abt-secondary">
                From strategy to engineering, we turn complex requirements into clear, reliable digital solutions.
              </p>
              <div className="abt-hero-actions">
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Explore Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="abt-hero-visual"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Technology engineering and systems" 
                className="abt-img-main"
              />
              <div className="abt-hero-accent-line"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CREDIBILITY STRIP */}
      <section className="abt-credibility">
        <div className="container">
          <div className="abt-cred-strip">
            <span className="abt-cred-item">AI Agent Systems</span>
            <span className="abt-cred-dot"></span>
            <span className="abt-cred-item">International Client Delivery</span>
            <span className="abt-cred-dot"></span>
            <span className="abt-cred-item">Australia + Nepal</span>
            <span className="abt-cred-dot"></span>
            <span className="abt-cred-item">Software & Digital Products</span>
          </div>
        </div>
      </section>

      {/* 2. PEOPLE BEHIND THE TECHNOLOGY */}
      <section className="abt-people-tech">
        <div className="container">
          <div className="abt-split-layout reverse-on-mobile">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="abt-split-text"
            >
              <h2>People Behind Every Intelligent Solution.</h2>
              <p>
                At Codex Neural, we believe that world-class software requires more than just code. It requires a synthesis of robust engineering, intuitive design, thoughtful strategy, and deep business understanding.
              </p>
              <p>
                Our solutions are driven by a cross-functional understanding of how technology must adapt to serve real human needs and business objectives.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="abt-split-visual"
            >
              <div className="abt-image-container">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaboration" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / JOURNEY */}
      <section className="abt-journey">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="abt-timeline-wrapper"
          >
            {timeline.map((item, index) => (
              <div key={index} className="abt-timeline-item">
                <div className="abt-timeline-indicator">
                  <div className="abt-timeline-dot"></div>
                  {index !== timeline.length - 1 && <div className="abt-timeline-line"></div>}
                </div>
                <div className="abt-timeline-content">
                  <span className="abt-timeline-label">{item.label}</span>
                  <h3 className="abt-timeline-title">{item.title}</h3>
                  <p className="abt-timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT DRIVES US FORWARD */}
      <section className="abt-values">
        <div className="container">
          <div className="abt-section-header">
            <h2>What Drives Us Forward.</h2>
          </div>
          <div className="abt-values-grid">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="abt-value-card"
              >
                <div className="abt-value-icon">{val.icon}</div>
                <h3 className="abt-value-title">{val.title}</h3>
                <p className="abt-value-desc">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW WE WORK */}
      <section className="abt-how">
        <div className="container">
          <div className="abt-split-layout">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="abt-split-visual"
            >
              <div className="abt-image-container">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Engineering and Architecture" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="abt-split-text"
            >
              <h2>How We Work.</h2>
              <div className="abt-principles-list">
                <div className="abt-principle">
                  <CheckCircle2 size={24} className="abt-principle-icon" />
                  <div>
                    <h3>Collaboration</h3>
                    <p>Engineering, design, and business strategy work best when they sit at the same table.</p>
                  </div>
                </div>
                <div className="abt-principle">
                  <CheckCircle2 size={24} className="abt-principle-icon" />
                  <div>
                    <h3>Continuous Learning</h3>
                    <p>We continuously improve our tools, frameworks, and architectural thinking as technology evolves.</p>
                  </div>
                </div>
                <div className="abt-principle">
                  <CheckCircle2 size={24} className="abt-principle-icon" />
                  <div>
                    <h3>Innovation</h3>
                    <p>We focus on practical innovation that creates measurable value, not technology for novelty's sake.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. REAL CLIENT / GLOBAL DELIVERY */}
      <section className="abt-global">
        <div className="container">
          <div className="abt-section-header">
            <h2>Built Across Borders.</h2>
            <p>Codex Neural is already delivering digital products and intelligent systems across international markets.</p>
          </div>
          
          <div className="abt-global-cards">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="abt-global-card"
            >
              <div className="abt-global-map-accent"></div>
              <h3>AUSTRALIA</h3>
              <h4>AI & Digital Systems</h4>
              <p>12 AI agents and multiple websites delivered for an Australian client.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="abt-global-card"
            >
              <div className="abt-global-map-accent"></div>
              <h3>NEPAL</h3>
              <h4>Digital Solutions</h4>
              <p>Software and digital solutions delivered for a Nepal-based client.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="abt-team-section">
        <div className="container">
          <div className="abt-section-header center">
            <span className="abt-eyebrow">THE TEAM</span>
            <h2>Meet the Minds Behind Codex Neural.</h2>
          </div>

          <div className="abt-team-grid">
            {team.map((member) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="abt-team-card"
                onMouseEnter={() => setActiveProfile(member.id)}
                onMouseLeave={() => setActiveProfile(null)}
                onClick={() => setActiveProfile(activeProfile === member.id ? null : member.id)}
              >
                <div className="abt-team-photo-wrap">
                  <img src={member.image} alt={member.name} />
                  
                  <AnimatePresence>
                    {(activeProfile === member.id || window.innerWidth <= 768) && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="abt-team-overlay"
                      >
                        <div className="abt-team-socials">
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="abt-social-btn" aria-label="LinkedIn" onClick={(e) => e.stopPropagation()}>
                            <LinkedinIcon size={20} />
                          </a>
                          <a href={member.email} className="abt-social-btn" aria-label="Email" onClick={(e) => e.stopPropagation()}>
                            <Mail size={20} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="abt-team-info">
                  <h3>{member.name}</h3>
                  <span className="abt-team-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="abt-final-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="abt-cta-box"
          >
            <h2>Ready to Build Something Exceptional?</h2>
            <p>
              Whether you're launching an AI startup, modernizing enterprise software, or building your next digital product, we're ready to help.
            </p>
            <div className="abt-cta-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
