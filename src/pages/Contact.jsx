import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name cannot contain digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Codex Neural",
    "image": "https://www.codexneural.com/logo.svg",
    "url": "https://www.codexneural.com/contact",
    "telephone": "+9779840327185",
    "email": "connect@codexneural.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP"
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with Codex Neural. Let's discuss your next project, AI implementation, or enterprise software needs."
        url="/contact"
        schema={contactSchema}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1 className="contact-title">Initiate <span className="text-gradient">Connection</span></h1>
        <p className="contact-subtitle">
          Ready to build something extraordinary? Let's connect and discuss how we can help bring your vision to life.
        </p>
      </motion.div>
      
      <div className="contact-grid">
        <div className="contact-info-column">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-info-card"
          >
            <div className="info-icon-wrapper">
              <Mail size={20} />
            </div>
            <div className="info-content">
              <span className="info-label">Email</span>
              <a href="mailto:connect@codexneural.com" className="info-link">
                connect@codexneural.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="contact-info-card"
          >
            <div className="info-icon-wrapper">
              <Phone size={20} />
            </div>
            <div className="info-content">
              <span className="info-label">WhatsApp / Phone</span>
              <a href="https://wa.me/9779840327185" target="_blank" rel="noopener noreferrer" className="info-link">
                +977 9840327185
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="contact-info-card"
          >
            <div className="info-icon-wrapper">
              <MapPin size={20} />
            </div>
            <div className="info-content">
              <span className="info-label">Location</span>
              <span className="info-value">Kathmandu, Nepal</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="contact-info-card"
          >
            <div className="info-icon-wrapper">
              <Clock size={20} />
            </div>
            <div className="info-content">
              <span className="info-label">Office Hours</span>
              <span className="info-value">Mon-Fri: 9AM - 6PM NPT</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="contact-form-wrapper"
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(111, 63, 245, 0.1)', color: 'var(--brand-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Mail size={32} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>Signal Sent</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We have received your message and will initialize contact shortly.</p>
              <button onClick={() => setIsSubmitted(false)} className="btn-secondary" style={{ marginTop: '24px' }}>Send another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`} 
                  placeholder="Your Name" 
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`} 
                  placeholder="your@email.com" 
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="Project Consultation" 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`} 
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message}</span>}
              </div>
              <button type="submit" className="btn-primary submit-btn">Send Signal</button>
            </form>
          )}
        </motion.div>
      </div>

      <TransmissionProtocol />
    </div>
  );
};

const TransmissionProtocol = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 0,
      step: '01',
      title: 'Signal Received',
      desc: 'We map out technical requirements via initial payload.',
      icon: <Mail size={32} />
    },
    {
      id: 1,
      step: '02',
      title: 'Discovery Node',
      desc: 'Strategic alignment to define architecture and scope.',
      icon: <Globe size={32} />
    },
    {
      id: 2,
      step: '03',
      title: 'Initialization',
      desc: 'Our engineering team deploys active infrastructure.',
      icon: <MapPin size={32} />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="transmission-visual"
    >
      <h2 className="transmission-title">Transmission <span>Protocol</span></h2>
      
      {/* SVG Data Spine */}
      <div className="data-spine-container">
        <svg className="data-spine" preserveAspectRatio="none">
          {/* Base horizontal track for Desktop */}
          <line x1="16%" y1="50%" x2="84%" y2="50%" className="spine-path" strokeDasharray="4 4" />
          
          {/* Animated Flow Line - calculates position based on active node */}
          <motion.line 
            x1="16%" y1="50%" 
            x2={`${16 + (activeNode * 34)}%`} y2="50%" 
            className="spine-flow"
            animate={{ x2: `${16 + (activeNode * 34)}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </svg>
      </div>

      <div className="transmission-nodes">
        {nodes.map((node) => (
          <div 
            key={node.id} 
            className={`t-node ${activeNode === node.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveNode(node.id)}
          >
            <div className="t-icon-container">
              {/* Micro-animation ring */}
              {activeNode === node.id && (
                <motion.div 
                  className="micro-anim"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              )}
              <div className="t-icon">{node.icon}</div>
            </div>
            <div className="t-text">
              <div className="t-step">{node.step}</div>
              <h3 className="t-name">{node.title}</h3>
              <p className="t-desc">{node.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
