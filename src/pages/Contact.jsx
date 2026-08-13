import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-wrapper pt-24 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center py-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Initiate <span className="text-gradient">Connection</span></h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-12">
          Ready to build something extraordinary? Let's connect and discuss how we can help bring your vision to life.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="flex flex-col gap-4 justify-center">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[var(--brand-primary)]/10 text-[var(--brand-accent)]">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-xs text-secondary font-mono block mb-1">Email</span>
                <a href="mailto:connect@codexneural.com" className="font-semibold hover:text-[var(--brand-accent)] transition-colors">
                  connect@codexneural.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[var(--brand-primary)]/10 text-[var(--brand-accent)]">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-xs text-secondary font-mono block mb-1">WhatsApp / Phone</span>
                <a href="https://wa.me/9779840327185" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[var(--brand-accent)] transition-colors">
                  +977 9840327185
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[var(--brand-primary)]/10 text-[var(--brand-accent)]">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-xs text-secondary font-mono block mb-1">Location</span>
                <span className="font-semibold block">Kathmandu, Nepal</span>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[var(--brand-primary)]/10 text-[var(--brand-accent)]">
                <Clock size={24} />
              </div>
              <div>
                <span className="text-xs text-secondary font-mono block mb-1">Office Hours</span>
                <span className="font-semibold block">Mon-Fri: 9AM - 6PM NPT</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 text-left">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Name *</label>
                <input type="text" className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Email *</label>
                <input type="email" className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Subject</label>
                <input type="text" className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors" placeholder="Project Consultation" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">Message *</label>
                <textarea className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors min-h-[120px]" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Send Signal</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
