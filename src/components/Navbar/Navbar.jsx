import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon, Menu, X, ChevronDown, Code, Smartphone, Palette, LineChart, Database, Search } from 'lucide-react';
import './Navbar.css';

const AnimatedLogo = ({ isScrolled }) => {
  return (
    <motion.div
      animate={{ scale: isScrolled ? 0.94 : 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="nav-brand-container"
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        animate="animate"
        className="nav-brand-inner"
        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          width="40" 
          height="40"
          className="nav-logo-svg"
        >
          <defs>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6F3FF5" />
              <stop offset="100%" stopColor="#20D8FF" />
            </linearGradient>
          </defs>

          {/* Developer Body */}
          <motion.path 
            d="M25 70 C25 50, 75 50, 75 70" 
            fill="#6F3FF5" 
            variants={{
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 1.1, ease: 'easeOut' } }
            }}
          />

          {/* Laptop Screen */}
          <motion.rect 
            x="20" y="60" width="60" height="30" rx="3" 
            fill="#20D8FF"
            variants={{
              initial: { scaleY: 0, opacity: 0 },
              animate: { scaleY: 1, opacity: 1, transition: { duration: 0.4, delay: 0.6, ease: 'easeOut' } },
              hover: { stroke: "url(#laptopGrad)", strokeWidth: 3, transition: { duration: 0.3 } }
            }}
            style={{ transformOrigin: "50px 90px" }}
          />

          {/* Laptop Base */}
          <motion.rect 
            x="10" y="90" width="80" height="5" rx="2" 
            fill="#4A67FF" 
            variants={{
              initial: { scaleX: 0, opacity: 0 },
              animate: { scaleX: 1, opacity: 1, transition: { duration: 0.4, delay: 0.3, ease: 'easeOut' } }
            }}
            style={{ transformOrigin: "10px 92.5px" }}
          />

          {/* Person Head / Purple Circle */}
          <motion.circle 
            cx="50" cy="30" r="15" 
            fill="#6F3FF5" 
            variants={{
              initial: { y: -20, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.1 } },
              hover: { y: -2, filter: 'drop-shadow(0 0 10px rgba(111, 63, 245, 0.8))', transition: { duration: 0.3 } }
            }}
          />

          {/* </ > Code */}
          <motion.text 
            x="50" y="82" 
            fontFamily="monospace" fontSize="20" fontWeight="bold" 
            fill="#0B1020" textAnchor="middle" dominantBaseline="middle"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.4, delay: 0.9 } }
            }}
          >
            &lt;/&gt;
          </motion.text>
        </motion.svg>

        <div className="nav-brand-text">
          <motion.span 
            className="nav-brand-main"
            variants={{
              initial: { x: -20, opacity: 0, letterSpacing: '-0.03em' },
              animate: { x: 0, opacity: 1, letterSpacing: '-0.03em', transition: { duration: 0.5, delay: 1.3, ease: 'easeOut' } },
              hover: { letterSpacing: '-0.01em', transition: { duration: 0.3 } }
            }}
            style={{ display: 'block' }}
          >
            CODEX
          </motion.span>
          <motion.span 
            className="nav-brand-sub"
            variants={{
              initial: { y: 10, opacity: 0, letterSpacing: '2px' },
              animate: { y: 0, opacity: 1, letterSpacing: '2px', transition: { duration: 0.5, delay: 1.4, ease: 'easeOut' } },
              hover: { letterSpacing: '3px', transition: { duration: 0.3 } }
            }}
            style={{ display: 'block' }}
          >
            NEURAL
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <nav className="navbar animate-slide-up">
      <div className="container navbar-container">
        <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <AnimatedLogo isScrolled={isScrolled} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          {/* Services Megamenu Trigger */}
          <div className="nav-item has-dropdown">
            <Link to="/services" className="nav-link flex items-center gap-1">
              Services <ChevronDown size={16} className="dropdown-icon" />
            </Link>
            
            <div className="megamenu">
              <div className="megamenu-inner">
                <div className="megamenu-column">
                  <h4 className="megamenu-title">Engineering</h4>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><Code size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Web Development</h5>
                      <p>High-performance enterprise SaaS</p>
                    </div>
                  </Link>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><Smartphone size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Mobile Apps</h5>
                      <p>Native iOS and Android experiences</p>
                    </div>
                  </Link>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><Database size={20} /></div>
                    <div className="megamenu-text">
                      <h5>System Architecture</h5>
                      <p>Scalable cloud infrastructure</p>
                    </div>
                  </Link>
                </div>
                
                <div className="megamenu-column">
                  <h4 className="megamenu-title">Growth & Design</h4>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><Palette size={20} /></div>
                    <div className="megamenu-text">
                      <h5>UI/UX Design</h5>
                      <p>Intuitive user interfaces</p>
                    </div>
                  </Link>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><Search size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Technical SEO</h5>
                      <p>Search engine domination</p>
                    </div>
                  </Link>
                  <Link to="/services" className="megamenu-item">
                    <div className="megamenu-icon"><LineChart size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Digital Marketing</h5>
                      <p>Data-driven growth strategies</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="btn-primary ml-4">
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="mobile-controls mobile-only">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Offcanvas Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.svg" alt="Codex Neural" width="32" height="32" className="nav-logo-img" />
              <div className="nav-brand-text">
                <span className="nav-brand-main">CODEX</span>
              </div>
            </Link>
            <button className="close-btn" onClick={toggleMobileMenu}>
              <X size={28} />
            </button>
          </div>
          
          <div className="sidebar-content">
            <Link to="/" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            <div className="sidebar-accordion">
              <button className={`accordion-trigger ${activeAccordion === 'services' ? 'active' : ''}`} onClick={() => toggleAccordion('services')}>
                Services <ChevronDown size={20} className="accordion-icon" />
              </button>
              <div className={`accordion-content ${activeAccordion === 'services' ? 'open' : ''}`}>
                <Link to="/services" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                <Link to="/services" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>Mobile Apps</Link>
                <Link to="/services" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>System Architecture</Link>
                <Link to="/services" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>UI/UX Design</Link>
                <Link to="/services" className="accordion-link" onClick={() => setIsMobileMenuOpen(false)}>SEO & Marketing</Link>
              </div>
            </div>
            
            <Link to="/portfolio" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
          
          <div className="sidebar-footer">
            <Link to="/contact" className="btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              Get in touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        {/* Sidebar Overlay */}
        <div className={`sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
