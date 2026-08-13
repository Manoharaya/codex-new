import React from 'react';
import { MessageCircle, Globe, Hash } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
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
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/services" className="footer-link">Website Development</a></li>
              <li><a href="/services" className="footer-link">App Development</a></li>
              <li><a href="/services" className="footer-link">Software Engineering</a></li>
              <li><a href="/services" className="footer-link">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
              <li><a href="/portfolio" className="footer-link">Case Studies</a></li>
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
