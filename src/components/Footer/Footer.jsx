import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Globe, Hash, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isServicesPage = location.pathname.startsWith('/services');

  return (
    <footer className="footer" id="footer">
      {/* Premium CTA Banner */}
      {!isContactPage && !isServicesPage && (
        <div className="footer-cta-banner">
          <div className="container">
            <div className="footer-cta-content">
              <div className="footer-cta-text">
                <h2>Ready to scale?</h2>
                <p>Let's architect your next digital leap with precision engineering.</p>
              </div>
              <Link to="/contact" className="btn-premium">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.svg" alt="Codex Neural" width="40" height="40" style={{ marginBottom: '16px' }} />
            <div className="nav-brand-text">
              <span className="nav-brand-main">CODEX</span>
              <span className="nav-brand-sub">NEURAL</span>
            </div>
            <p className="footer-desc">
              A distributed collective of systems engineers and designers. We build durable, high-integrity digital infrastructure for long-term value, not short-term hype.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Website Development</Link></li>
              <li><Link to="/services" className="footer-link">App Development</Link></li>
              <li><Link to="/services" className="footer-link">Software Engineering</Link></li>
              <li><Link to="/services" className="footer-link">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><a href="#" className="footer-link">HQ: Kathmandu, Nepal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Transmission</h4>
            <ul className="footer-links">
              <li><a href="mailto:connect@codexneural.com" className="footer-link">connect@codexneural.com</a></li>
              <li><a href="https://wa.me/9779840327185" target="_blank" rel="noopener noreferrer" className="footer-link">+977 9840327185</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} Codex Neural Pvt. Ltd. All rights reserved.</p>
            <div className="legal-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-icon"><MessageCircle size={18} /></a>
            <a href="#" className="social-icon"><Globe size={18} /></a>
            <a href="#" className="social-icon"><Hash size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
