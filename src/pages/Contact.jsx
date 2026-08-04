import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="page-wrapper pt-24 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center py-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-gradient">Talk</span></h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-12">
          Ready to scale your digital infrastructure? Get in touch with our team of experts.
        </p>
        
        <div className="glass-card p-12 max-w-lg mx-auto text-left">
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">Name</label>
              <input type="text" className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
              <input type="email" className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary">Message</label>
              <textarea className="w-full p-3 rounded-md bg-[var(--bg-surface)] border border-[var(--glass-border)] text-[var(--text-primary)] outline-none focus:border-[var(--brand-accent)] transition-colors min-h-[120px]" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn-primary w-full justify-center">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
