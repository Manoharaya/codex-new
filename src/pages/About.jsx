import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Lightbulb, Code2, Users, Handshake, Link, Mail } from 'lucide-react';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import SEO from '../components/SEO/SEO';
import './About.css';

const timelineData = [
  {
    phase: "Our Beginning",
    title: "Solving Complexity",
    desc: "CodexNeural started with a vision of solving business problems through technology. We saw companies struggling with disjointed legacy systems and knew we could engineer better, faster, and more scalable solutions."
  },
  {
    phase: "Our Philosophy",
    title: "Engineering Value",
    desc: "Technology should simplify complexity. Design should improve experiences. Engineering should create long-term value. We refuse to build software just for the sake of writing code."
  },
  {
    phase: "Today",
    title: "Intelligent Products",
    desc: "Building AI-powered products, enterprise software, cloud solutions, and digital experiences for forward-thinking businesses across the globe."
  }
];

const valuesData = [
  {
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
    title: "Innovation",
    desc: "Always exploring better ways to solve problems and pushing the boundaries of what's possible."
  },
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: "Engineering Excellence",
    desc: "Scalable, secure and maintainable software crafted with precision and deep technical expertise."
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "User First",
    desc: "Every interface begins with understanding the end user. Empathy drives our design decisions."
  },
  {
    icon: <Handshake size={32} strokeWidth={1.5} />,
    title: "Long-Term Partnerships",
    desc: "We believe in building relationships, not just delivering projects. Your success is our success."
  }
];

const teamData = [
  {
    name: "Manohar Singh",
    role: "Founder & CEO",
    bio: "Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day company operations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-purple"
  },
  {
    name: "Anuj Pokhrel",
    role: "CTO & Backend Developer",
    bio: "Architecting scalable backend systems and leading technical strategy. Building robust server infrastructure with focus on security, performance, and reliability.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-cyan"
  },
  {
    name: "Aman Yadav",
    role: "Advisor & Data Analysis Specialist",
    bio: "Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-magenta"
  },
  {
    name: "Rahul Sah",
    role: "Backend Specialist",
    bio: "Specializing in the development of robust, scalable backend architectures. Ensuring high performance and seamless server-side integration.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-indigo"
  },
  {
    name: "Anjali Singh",
    role: "Frontend Developer & UI/UX Designer",
    bio: "Crafting responsive, performant user interfaces with modern frameworks. Designing intuitive user experiences and transforming them into pixel-perfect, interactive implementations.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-purple"
  },
  {
    name: "Priti Gupta",
    role: "SEO Specialist",
    bio: "Optimizing digital presence and search visibility. Implementing data-driven SEO strategies to drive organic growth and improve search rankings.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-cyan"
  },
  {
    name: "Bibek Sah",
    role: "Automation Engineer",
    bio: "Building intelligent automation pipelines and CI/CD workflows. Streamlining development processes through infrastructure as code and DevOps practices.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    theme: "theme-indigo"
  }
];

const statsData = [
  { label: 'Projects Delivered', value: 150, suffix: '+' },
  { label: 'Clients Served', value: 85, suffix: '+' },
  { label: 'Years Combined Experience', value: 40, suffix: '+' },
  { label: 'Technologies Used', value: 24, suffix: '' }
];

const Counter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = React.useState(from);
  const nodeRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeOut = progress * (2 - progress);
            setCount(Math.floor(easeOut * (to - from) + from));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={nodeRef} className="about-stat-number">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedValueIndex, setExpandedValueIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mQuery.addEventListener('change', handleResize);
    return () => mQuery.removeEventListener('change', handleResize);
  }, []);

  const handleValueTap = (index) => {
    setExpandedValueIndex(expandedValueIndex === index ? null : index);
  };

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="about-page chapter-about">
      <SEO 
        title="About Us"
        description="CodexNeural is a premium product engineering team built on strategy, innovation, and design. Learn about our story, values, and the people behind every intelligent solution."
        url="/about"
      />

      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="aurora-blob aurora-purple about-hero-aurora1"></div>
        <div className="aurora-blob aurora-cyan about-hero-aurora2"></div>
        
        <div className="container about-hero-container">
          
          {isMobile && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-visual mobile-visual-first"
            >
              <div className="about-hero-image-wrapper glass-card overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Workspace Collaboration" 
                  className="about-hero-image"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          )}

          <div className="about-hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-title"
            >
              People Behind Every <span className="text-gradient">Intelligent Solution.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-subtitle"
            >
              We are engineers, designers, strategists and innovators passionate about building software that creates measurable business value. Every product we build begins with understanding people before writing code.
            </motion.p>
          </div>
          
          {!isMobile && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-visual"
            >
              <div className="about-hero-image-wrapper glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Workspace Collaboration" 
                  className="about-hero-image"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 2. Company Story (Timeline) */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="timeline-wrapper">
            <motion.div className="timeline-progress-bar" style={{ scaleY }}></motion.div>
            
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="timeline-item"
              >
                <motion.div className="timeline-node"
                  initial={isMobile ? { scale: 0 } : false}
                  whileInView={isMobile ? { scale: 1 } : false}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: isMobile ? 0.2 : 0 }}
                ></motion.div>
                <div className="timeline-content">
                  <span className="timeline-phase">{item.phase}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="about-values-section">
        <div className="aurora-blob aurora-magenta about-values-aurora"></div>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle text-gradient">OUR VALUES</span>
            <h2 className="section-title">What Drives Us Forward.</h2>
          </div>
          
          <div className={`values-grid ${isMobile ? 'values-accordion' : ''}`}>
            {valuesData.map((value, index) => {
              const isExpanded = isMobile && expandedValueIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                  className={`value-card glass-card ${isExpanded ? 'active' : ''}`}
                  onClick={() => isMobile && handleValueTap(index)}
                >
                  <div className="value-header-mobile">
                    <motion.div 
                      className="value-icon-wrapper"
                      animate={isExpanded ? { rotate: 5, scale: 1.1, backgroundColor: 'var(--brand-purple)', color: '#fff' } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.icon}
                    </motion.div>
                    {isMobile && <h3 className="value-title-mobile">{value.title}</h3>}
                  </div>
                  
                  {!isMobile && <h3 className="value-title">{value.title}</h3>}
                  
                  {(!isMobile || isExpanded) && (
                    <motion.div 
                      className="value-desc-wrapper"
                      initial={isMobile ? { height: 0, opacity: 0 } : false}
                      animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                    >
                      <p className="value-desc">{value.desc}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Meet Our Team */}
      <section className="about-team-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle text-gradient">THE TEAM</span>
            <h2 className="section-title">Meet the Minds Behind <br/>CodexNeural.</h2>
          </div>
          
          <div className={`team-grid ${isMobile ? 'team-carousel' : ''}`}>
            {teamData.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
                className={`team-card glass-card ${member.theme}`}
              >
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  {!isMobile && (
                    <div className="team-socials">
                      <a href="#" className="social-icon"><Link size={18} /></a>
                      <a href="#" className="social-icon"><Mail size={18} /></a>
                    </div>
                  )}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  {isMobile && (
                    <div className="mobile-team-socials">
                      <a href="#" className="mobile-social-icon"><Link size={16} /></a>
                      <a href="#" className="mobile-social-icon"><Mail size={16} /></a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Statistics */}
      <section className="about-stats-section">
        <div className="container">
          <div className={`about-stats-grid ${isMobile ? 'stats-carousel' : ''}`}>
            {statsData.map((stat, index) => (
              <motion.div 
                key={index} 
                className="about-stat-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
              >
                <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
                <p className="about-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Working Culture Split Layout */}
      <section className="about-culture-section">
        <div className="container">
          <div className="culture-grid">
            
            {isMobile && (
              <motion.div 
                className="culture-visual mobile-culture-visual"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Working Culture" 
                  className="culture-image" 
                />
              </motion.div>
            )}

            {!isMobile && (
              <motion.div 
                className="culture-visual glass-card"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Working Culture" 
                  className="culture-image" 
                />
              </motion.div>
            )}
            
            <div className="culture-content">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="culture-block"
              >
                <h3 className="culture-title">Collaboration</h3>
                <p className="culture-desc">We believe the best products are built when engineering, design, and business strategy sit at the same table.</p>
                {isMobile && (
                  <motion.div 
                    className="culture-accent-divider bg-purple"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  ></motion.div>
                )}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : 0.1 }}
                className="culture-block"
              >
                <h3 className="culture-title">Continuous Learning</h3>
                <p className="culture-desc">Technology moves fast. We allocate dedicated time for our teams to experiment with new frameworks, AI models, and architectural patterns.</p>
                {isMobile && (
                  <motion.div 
                    className="culture-accent-divider bg-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  ></motion.div>
                )}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : 0.2 }}
                className="culture-block"
              >
                <h3 className="culture-title">Innovation</h3>
                <p className="culture-desc">We don't just follow best practices; we aim to set them. Our internal R&D ensures our clients always get cutting-edge solutions.</p>
                {isMobile && (
                  <motion.div 
                    className="culture-accent-divider bg-emerald"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  ></motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <div className="chapter-hero">
        <FinalCTA />
      </div>
    </div>
  );
};

export default About;
