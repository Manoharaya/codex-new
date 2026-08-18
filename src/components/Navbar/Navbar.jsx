import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sun, Moon, Menu, X, ChevronDown, Code, Smartphone, Palette, LineChart, Database, Search, Brain, Layout, Hexagon, Cloud, Terminal, PenTool, Share2, FileText } from 'lucide-react';
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
          width="48" 
          height="48"
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
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change automatically
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

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

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return location.pathname === path;
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring', damping: 25, stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      x: '100%',
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
  };

  return (
    <nav className="navbar animate-slide-up">
      <div className="container navbar-container">
        <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <AnimatedLogo isScrolled={isScrolled} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          
          {/* Services Megamenu Trigger */}
          <div className="nav-item has-dropdown">
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services <ChevronDown size={16} className="dropdown-icon" />
            </Link>
            
            <div className="megamenu">
              <div className="megamenu-inner">
                <div className="megamenu-column">
                  <h4 className="megamenu-title">Engineering</h4>
                  <Link to="/services/ai-solutions" className="megamenu-item">
                    <div className="megamenu-icon"><Brain size={20} /></div>
                    <div className="megamenu-text">
                      <h5>AI Solutions</h5>
                      <p>Neural networks & ML</p>
                    </div>
                  </Link>
                  <Link to="/services/software-development" className="megamenu-item">
                    <div className="megamenu-icon"><Code size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Enterprise Software</h5>
                      <p>Scalable business platforms</p>
                    </div>
                  </Link>
                  <Link to="/services/web-development" className="megamenu-item">
                    <div className="megamenu-icon"><Layout size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Website Development</h5>
                      <p>High-performance web apps</p>
                    </div>
                  </Link>
                  <Link to="/services/app-development" className="megamenu-item">
                    <div className="megamenu-icon"><Smartphone size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Mobile Apps</h5>
                      <p>Native iOS and Android</p>
                    </div>
                  </Link>
                  <Link to="/services/blockchain-web3" className="megamenu-item">
                    <div className="megamenu-icon"><Hexagon size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Blockchain & Web3</h5>
                      <p>Decentralized infrastructure</p>
                    </div>
                  </Link>
                </div>
                
                <div className="megamenu-column">
                  <h4 className="megamenu-title">Infrastructure</h4>
                  <Link to="/services/cloud-engineering" className="megamenu-item">
                    <div className="megamenu-icon"><Cloud size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Cloud Engineering</h5>
                      <p>AWS, Azure & GCP</p>
                    </div>
                  </Link>
                  <Link to="/services/devops" className="megamenu-item">
                    <div className="megamenu-icon"><Terminal size={20} /></div>
                    <div className="megamenu-text">
                      <h5>DevOps</h5>
                      <p>CI/CD & automated pipelines</p>
                    </div>
                  </Link>

                  <h4 className="megamenu-title" style={{ marginTop: 'var(--space-24)' }}>Design</h4>
                  <Link to="/services/ui-ux-design" className="megamenu-item">
                    <div className="megamenu-icon"><Palette size={20} /></div>
                    <div className="megamenu-text">
                      <h5>UI/UX Design</h5>
                      <p>Intuitive user interfaces</p>
                    </div>
                  </Link>
                  <Link to="/services/graphic-design" className="megamenu-item">
                    <div className="megamenu-icon"><PenTool size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Graphic Design</h5>
                      <p>Brand identity & illustration</p>
                    </div>
                  </Link>
                </div>
                
                <div className="megamenu-column">
                  <h4 className="megamenu-title">Growth</h4>
                  <Link to="/services/technical-seo" className="megamenu-item">
                    <div className="megamenu-icon"><Search size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Search Engine Optimization</h5>
                      <p>Technical search dominance</p>
                    </div>
                  </Link>
                  <Link to="/services/digital-marketing" className="megamenu-item">
                    <div className="megamenu-icon"><Share2 size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Social Media Marketing</h5>
                      <p>Data-driven audience growth</p>
                    </div>
                  </Link>
                  <Link to="/services/content-writing" className="megamenu-item">
                    <div className="megamenu-icon"><FileText size={20} /></div>
                    <div className="megamenu-text">
                      <h5>Content Writing</h5>
                      <p>High-converting copy</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/resources" className={`nav-link ${isActive('/resources') ? 'active' : ''}`}>Resources</Link>
          <Link to="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>Careers</Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="btn-primary" style={{ marginLeft: '16px' }}>
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="mobile-controls mobile-only">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Open Navigation Menu">
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Offcanvas Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
              <AnimatedLogo isScrolled={true} />
            </Link>
            <div className="sidebar-header-actions">
              <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="close-btn" onClick={toggleMobileMenu} aria-label="Close Navigation Menu">
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="sidebar-content">
            <Link to="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Home</span>
            </Link>
            <Link to="/about" className={`sidebar-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span>About</span>
            </Link>
            
            <div className="sidebar-accordion">
              <button 
                type="button"
                className={`accordion-trigger ${activeAccordion === 'services' || isActive('/services') ? 'active' : ''}`} 
                onClick={() => toggleAccordion('services')}
                aria-expanded={activeAccordion === 'services'}
              >
                <span>Services</span>
                <ChevronDown size={20} className="accordion-icon" />
              </button>
              <div className={`accordion-content ${activeAccordion === 'services' ? 'open' : ''}`}>
                <div className="mobile-megamenu-group">
                  <span className="mobile-group-label">Engineering</span>
                  <Link to="/services/ai-solutions" className={`accordion-link ${isActive('/services/ai-solutions') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Brain size={16} /></div>
                    <span>AI Solutions</span>
                  </Link>
                  <Link to="/services/software-development" className={`accordion-link ${isActive('/services/software-development') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Code size={16} /></div>
                    <span>Enterprise Software</span>
                  </Link>
                  <Link to="/services/web-development" className={`accordion-link ${isActive('/services/web-development') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Layout size={16} /></div>
                    <span>Website Development</span>
                  </Link>
                  <Link to="/services/app-development" className={`accordion-link ${isActive('/services/app-development') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Smartphone size={16} /></div>
                    <span>Mobile Apps</span>
                  </Link>
                  <Link to="/services/blockchain-web3" className={`accordion-link ${isActive('/services/blockchain-web3') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Hexagon size={16} /></div>
                    <span>Blockchain & Web3</span>
                  </Link>
                </div>

                <div className="mobile-megamenu-group">
                  <span className="mobile-group-label">Infrastructure</span>
                  <Link to="/services/cloud-engineering" className={`accordion-link ${isActive('/services/cloud-engineering') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Cloud size={16} /></div>
                    <span>Cloud Engineering</span>
                  </Link>
                  <Link to="/services/devops" className={`accordion-link ${isActive('/services/devops') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Terminal size={16} /></div>
                    <span>DevOps</span>
                  </Link>
                </div>

                <div className="mobile-megamenu-group">
                  <span className="mobile-group-label">Design</span>
                  <Link to="/services/ui-ux-design" className={`accordion-link ${isActive('/services/ui-ux-design') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Palette size={16} /></div>
                    <span>UI/UX Design</span>
                  </Link>
                  <Link to="/services/graphic-design" className={`accordion-link ${isActive('/services/graphic-design') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><PenTool size={16} /></div>
                    <span>Graphic Design</span>
                  </Link>
                </div>

                <div className="mobile-megamenu-group">
                  <span className="mobile-group-label">Growth</span>
                  <Link to="/services/technical-seo" className={`accordion-link ${isActive('/services/technical-seo') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Search size={16} /></div>
                    <span>Search Engine Optimization</span>
                  </Link>
                  <Link to="/services/digital-marketing" className={`accordion-link ${isActive('/services/digital-marketing') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><Share2 size={16} /></div>
                    <span>Social Media Marketing</span>
                  </Link>
                  <Link to="/services/content-writing" className={`accordion-link ${isActive('/services/content-writing') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="accordion-link-icon"><FileText size={16} /></div>
                    <span>Content Writing</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/resources" className={`sidebar-link ${isActive('/resources') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Resources</span>
            </Link>
            <Link to="/careers" className={`sidebar-link ${isActive('/careers') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Careers</span>
            </Link>
            <Link to="/contact" className={`sidebar-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Contact</span>
            </Link>
          </div>
          
          <div className="sidebar-footer">
            <Link to="/contact" className="btn-primary sidebar-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Get in touch</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        {/* Sidebar Overlay */}
        <div 
          className={`sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-hidden={!isMobileMenuOpen}
        ></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
