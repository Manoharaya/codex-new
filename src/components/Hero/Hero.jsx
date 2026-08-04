import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Brain, Code, Cloud, Layout, Smartphone, Terminal, Bell, BarChart2, CheckCircle2, Activity, Server, Home as HomeIcon, Settings, PieChart, Users, Zap, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const serviceBadges = [
  { text: "AI Solutions", icon: <Brain size={14} /> },
  { text: "Enterprise Software", icon: <Code size={14} /> },
  { text: "Cloud Engineering", icon: <Cloud size={14} /> },
  { text: "UI/UX Design", icon: <Layout size={14} /> },
  { text: "Mobile Apps", icon: <Smartphone size={14} /> },
  { text: "DevOps", icon: <Terminal size={14} /> }
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    // Only apply on desktop devices where hover is supported
    if (window.matchMedia('(hover: none)').matches) return;
    
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; 
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  // Parallax offsets (max movement defined per layer)
  const dashboardOffset = { x: mousePos.x * -12, y: mousePos.y * -12 };
  const mobileOffset = { x: mousePos.x * -24, y: mousePos.y * -24 };
  const analyticsOffset = { x: mousePos.x * 30, y: mousePos.y * 30 };
  const aiWidgetOffset = { x: mousePos.x * 40, y: mousePos.y * 40 };
  const cloudOffset = { x: mousePos.x * -18, y: mousePos.y * -18 };
  const notifyOffset = { x: mousePos.x * 20, y: mousePos.y * 20 };

  return (
    <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-noise-overlay"></div>
      <div className="hero-grid-bg"></div>
      
      {/* Background Floating Elements (Organic Lighting) */}
      <div className="aurora-blob aurora-purple" style={{ width: '600px', height: '600px', top: '-10%', right: '-5%' }}></div>
      <div className="aurora-blob aurora-cyan" style={{ width: '500px', height: '500px', bottom: '-10%', left: '-5%' }}></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Left Side: Content */}
          <div className="hero-text-section">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Engineering <span className="text-gradient">Intelligent Software</span> for Businesses That Refuse to Stay Ordinary.
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              CodexNeural designs and develops AI-powered applications, scalable cloud platforms, enterprise software, and digital products that help businesses automate, innovate, and grow.
            </motion.p>
            
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/contact" className="btn-primary hero-btn-primary">
                Start Your Project
                <ArrowRight size={18} className="btn-arrow" />
              </Link>
              <Link to="/portfolio" className="btn-secondary hero-btn-secondary">
                <PlayCircle size={18} />
                View Our Work
              </Link>
            </motion.div>

            <motion.div 
              className="hero-badges-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {serviceBadges.map((badge, index) => (
                <div key={index} className="service-pill-badge">
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Side: Visuals */}
          <div className="hero-visual-section">
            
            {/* Main SaaS Dashboard */}
            <motion.div 
              className="mockup-dashboard premium-glass"
              style={{ transform: `translate(${dashboardOffset.x}px, ${dashboardOffset.y}px) rotateX(2deg) rotateY(-2deg)` }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mockup-header">
                <div className="window-controls">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-search"></div>
              </div>
              <div className="mockup-body">
                  <div className="mockup-sidebar">
                  <div className="sidebar-item active"><HomeIcon size={14} /></div>
                  <div className="sidebar-item"><PieChart size={14} /></div>
                  <div className="sidebar-item"><Database size={14} /></div>
                  <div className="sidebar-item"><Settings size={14} /></div>
                </div>
                <div className="mockup-main">
                  <div className="mockup-top-metrics">
                    <div className="metric-box">
                      <span className="metric-title">Active Users</span>
                      <span className="metric-val">24.5k</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-title">Avg Latency</span>
                      <span className="metric-val">12ms</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-title">Sys Load</span>
                      <span className="metric-val">14%</span>
                    </div>
                  </div>
                  <div className="mockup-chart-area">
                    <div className="chart-bars">
                      <div className="bar" style={{height: '40%'}}></div>
                      <div className="bar" style={{height: '60%'}}></div>
                      <div className="bar" style={{height: '30%'}}></div>
                      <div className="bar" style={{height: '80%'}}></div>
                      <div className="bar" style={{height: '50%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile App Mockup */}
            <motion.div 
              className="mockup-mobile premium-glass"
              style={{ transform: `translate(${mobileOffset.x}px, ${mobileOffset.y}px) rotate(-3deg)` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-notch"></div>
              <div className="mobile-header">
                <span className="mobile-time">9:41</span>
                <div className="mobile-icons"><Activity size={10} /><ShieldCheck size={10} /></div>
              </div>
              <div className="mobile-card large">
                <Brain size={48} className="mobile-hero-icon" />
                <div className="mobile-card-text">AI Neural Model Running</div>
              </div>
              <div className="mobile-grid">
                <div className="mobile-card small">
                  <Zap size={20} className="mobile-small-icon" />
                  <div className="mobile-small-text">99% Fast</div>
                </div>
                <div className="mobile-card small">
                  <Users size={20} className="mobile-small-icon" />
                  <div className="mobile-small-text">Online</div>
                </div>
              </div>
              <div className="mobile-tab-bar">
                <span className="tab-dot active"></span>
                <span className="tab-dot"></span>
                <span className="tab-dot"></span>
              </div>
            </motion.div>

            {/* Analytics Widget */}
            <motion.div 
              className="mockup-widget analytics-widget premium-glass"
              style={{ transform: `translate(${analyticsOffset.x}px, ${analyticsOffset.y}px) rotate(2deg)` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="widget-icon-wrapper cyan"><BarChart2 size={16} /></div>
              <div className="widget-content">
                <div className="widget-title">Revenue</div>
                <div className="widget-value">+$14,200</div>
              </div>
            </motion.div>

            {/* AI Assistant Widget */}
            <motion.div 
              className="mockup-widget ai-widget premium-glass"
              style={{ transform: `translate(${aiWidgetOffset.x}px, ${aiWidgetOffset.y}px) rotate(-1deg)` }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ai-orb"></div>
              <div className="widget-lines">
                <div className="line full"></div>
                <div className="line half"></div>
              </div>
            </motion.div>

            {/* Cloud Infrastructure Card */}
            <motion.div 
              className="mockup-widget cloud-widget premium-glass"
              style={{ transform: `translate(${cloudOffset.x}px, ${cloudOffset.y}px) rotate(3deg)` }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="widget-icon-wrapper green"><Server size={16} /></div>
              <div className="widget-content">
                <div className="widget-title">Cluster Status</div>
                <div className="widget-value ok">Healthy</div>
              </div>
            </motion.div>

            {/* Notification Card */}
            <motion.div 
              className="mockup-widget notify-widget premium-glass"
              style={{ transform: `translate(${notifyOffset.x}px, ${notifyOffset.y}px) rotate(-2deg)` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="widget-icon-wrapper purple"><Bell size={16} /></div>
              <div className="widget-content">
                <div className="widget-title">New Deployment</div>
                <div className="widget-subtitle">Production updated</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
