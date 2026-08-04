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
              We engineer digital products that solve complex business problems.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">AI Solutions</a></li>
              <li><a href="#" className="footer-link">Enterprise Software</a></li>
              <li><a href="#" className="footer-link">Cloud Engineering</a></li>
              <li><a href="#" className="footer-link">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Documentation</a></li>
              <li><a href="#" className="footer-link">Case Studies</a></li>
              <li><a href="#" className="footer-link">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">hello@codexneural.com</a></li>
              <li><a href="#" className="footer-link">+1 (555) 123-4567</a></li>
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
