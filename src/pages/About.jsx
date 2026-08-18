import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Zap, Shield, Users, Handshake, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import './About.css';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MANOHAR_LINKEDIN_URL = "#";
const MANOHAR_EMAIL = "mailto:hello@codexneural.com";
const PRITI_LINKEDIN_URL = "#";
const PRITI_EMAIL = "mailto:hello@codexneural.com";

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

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
    { icon: <Zap size={24} />, title: "Innovation", desc: "Exploring better ways to solve problems and push the boundaries." },
    { icon: <Shield size={24} />, title: "Engineering", desc: "Scalable, secure, maintainable software built with technical discipline." },
    { icon: <Users size={24} />, title: "User First", desc: "Interfaces that understand the people who use them." },
    { icon: <Handshake size={24} />, title: "Partnership", desc: "Successful technology is built through collaboration and trust." }
  ];

  const team = [
    {
      id: "manohar",
      name: "Manohar Singh",
      role: "FOUNDER & CEO",
      image: "/manohar-profile.jpg",
      desc: "Leading strategic vision, business development, client relationships, and company operations.",
      linkedin: "https://www.linkedin.com/in/manohar-cn/",
      email: MANOHAR_EMAIL,
    },
    {
      id: "priti",
      name: "Priti Gupta",
      role: "CO-FOUNDER / STRATEGIST",
      image: "/priti-profile.jpg",
      desc: "Shaping content strategy, brand communication, digital storytelling, and technology clarity.",
      linkedin: "https://www.linkedin.com/in/priti-gupta-1b5a68217/",
      email: PRITI_EMAIL,
    },
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
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="abt-hero-content"
            >
              {/* <motion.span variants={fadeUp} className="abt-eyebrow text-gradient">ABOUT CODEX NEURAL</motion.span> */}
              <motion.h1 variants={fadeUp} className="abt-headline">Building the <span className="text-gradient">systems</span> behind ambitious businesses.</motion.h1>
              <motion.p variants={fadeUp} className="abt-supporting">
                Codex Neural builds intelligent digital systems, software products, and infrastructure for businesses that need technology to perform, scale, and evolve.
              </motion.p>
              <motion.div variants={fadeUp} className="abt-hero-actions">
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="abt-hero-visual"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Technology engineering team" 
                className="abt-img-main"
              />
              <div className="abt-hero-accent-line"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY STRIP */}
      <section className="abt-credibility">
        <div className="abt-cred-marquee-wrapper">
          <div className="abt-cred-strip">
            {[
              "AI Agent Systems",
              "International Client Delivery",
              "Australia + Nepal",
              "Software & Digital Products",
              "E-Commerce Projects Delivered",
              "AI Agent Systems",
              "International Client Delivery",
              "Australia + Nepal",
              "Software & Digital Products",
              "E-Commerce Projects Delivered"
            ].map((item, index) => (
              <div className="abt-cred-card" key={index}>
                <span className="text-gradient">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / JOURNEY */}
      <section className="abt-journey">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="abt-timeline-wrapper"
          >
            {timeline.map((item, index) => (
              <motion.div variants={fadeUp} key={index} className="abt-timeline-item">
                <div className="abt-timeline-indicator">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="abt-timeline-dot"
                  ></motion.div>
                  {index !== timeline.length - 1 && (
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 * index }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                      className="abt-timeline-line"
                    ></motion.div>
                  )}
                </div>
                <div className="abt-timeline-content">
                  <span className="abt-timeline-label text-gradient">{item.label}</span>
                  <h3 className="abt-timeline-title">{item.title}</h3>
                  <p className="abt-timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT DRIVES US FORWARD */}
      <section className="abt-values">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="abt-section-header center"
          >
            <h2>What Drives Us <span className="text-gradient">Forward.</span></h2>
            <p>Our core engineering values.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="abt-values-grid"
          >
            {values.map((val, idx) => (
              <motion.div variants={scaleIn} key={idx} className="abt-value-card">
                <div className="abt-value-icon-wrap">
                  <div className="abt-value-icon">{val.icon}</div>
                </div>
                <h3 className="abt-value-title">{val.title}</h3>
                <p className="abt-value-desc">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. GLOBAL DELIVERY */}
      <section className="abt-global">
        <div className="container">
          <div className="abt-global-layout">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="abt-global-text"
            >
              <h2>Built Across <span className="text-gradient">Borders.</span></h2>
              <p>Codex Neural is already delivering digital products and intelligent systems across international markets.</p>

              <div className="abt-global-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global technology team collaborating" 
                  className="abt-global-img"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="abt-global-cards"
            >
              <motion.div variants={fadeUp} className="abt-global-card">
                <div className="abt-global-map-accent"></div>
                <h3 className="text-gradient">AUSTRALIA</h3>
                <h4>AI & Digital Systems</h4>
                <p>12 AI agents and multiple websites delivered for an Australian client.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="abt-global-card">
                <div className="abt-global-map-accent alt"></div>
                <h3 className="text-gradient">NEPAL</h3>
                <h4>Digital Solutions</h4>
                <p>Software and digital solutions delivered for a Nepal-based client.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="abt-team-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="abt-section-header center"
          >
            <span className="abt-eyebrow text-gradient">THE TEAM</span>
            <h2>Meet the Minds Behind Codex Neural.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="abt-team-grid"
          >
            {team.map((member) => (
              <motion.div 
                variants={fadeUp}
                key={member.id}
                className="abt-team-card-hz"
              >
                <div className="abt-team-left-col">
                  <div className="abt-team-photo-wrap-hz">
                    <img src={member.image} alt={member.name} />
                  </div>
                  
                  <div className="abt-team-socials-inline">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="abt-social-inline-btn" aria-label="LinkedIn">
                      <LinkedinIcon size={20} />
                    </a>
                    <a href={member.email} className="abt-social-inline-btn" aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="abt-team-info-hz">
                  <h3 className="abt-team-name-hz">{member.name}</h3>
                  <span className="abt-team-role-hz">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="abt-final-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40 }}
            viewport={{ once: true }}
            className="abt-cta-box"
          >
            <div className="abt-cta-bg-glow"></div>
            <h2>Ready to Build Something <span className="text-gradient">Exceptional?</span></h2>
            <p>
              Whether you're launching an AI startup, modernizing enterprise software, or building your next digital product, we're ready to help.
            </p>
            <div className="abt-cta-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
