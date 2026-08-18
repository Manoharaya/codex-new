import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Brain, Code, Cloud, Layout, Smartphone, Terminal, Bell, BarChart2, CheckCircle2, Activity, Server, Home as HomeIcon, Settings, PieChart, Users, Zap, ShieldCheck, Database, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from './EngineData';
import EngineeringEngine from './EngineeringEngine';
import './Hero.css';

const checkpoints = {
  frontend: { text: "User Request", x: "70%", y: "85%" },
  backend:  { text: "Business Logic", x: "85%", y: "25%" },
  ai:       { text: "AI Processing", x: "25%", y: "12%" },
  db:       { text: "Data Stored", x: "85%", y: "55%" },
  cloud:    { text: "Deployment & Scaling", x: "15%", y: "80%" },
  response: { text: "Live Response", x: "35%", y: "45%" }
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle services every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveServiceId((currentId) => {
        const currentIndex = servicesData.findIndex((s) => s.id === currentId);
        const nextIndex = (currentIndex + 1) % servicesData.length;
        return servicesData[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, activeServiceId]);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section className="hero">
      <div className="hero-noise-overlay"></div>
      
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
              Engineering the <span className="text-gradient">invisible system</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              We build infrastructure that survives growth. Complexity is not a feature; clarity is the only metric. Intelligence requires architecture, not just code.
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
              className="hero-services-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="services-section-title">WHAT WE ENGINEER</h3>
              <div 
                className="hero-badges-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {servicesData.map((service) => (
                  <button 
                    key={service.id} 
                    className={`service-pill-badge ${activeServiceId === service.id ? 'active' : ''}`}
                    onClick={() => setActiveServiceId(service.id)}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    onFocus={() => setActiveServiceId(service.id)}
                    aria-pressed={activeServiceId === service.id}
                    tabIndex={0}
                  >
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-text">{service.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Side: Visuals */}
          <div 
            className="hero-visual-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <EngineeringEngine activeService={activeService} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
