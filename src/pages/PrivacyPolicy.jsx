import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Mail, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './LegalPage.css';

const PrivacyPolicy = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Codex Neural",
    "url": "https://www.codexneural.com/privacy",
    "description": "Privacy Policy and Data Protection standards of Codex Neural Pvt. Ltd."
  };

  return (
    <div className="legal-page">
      <SEO 
        title="Privacy Policy"
        description="Codex Neural Privacy Policy - Learn how we collect, protect, process, and respect your data in accordance with modern IT industry standards."
        url="/privacy"
        schema={pageSchema}
      />
      <div className="container">
        <motion.div 
          className="legal-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="legal-badge">Governance & Compliance</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-meta">
            <div className="legal-meta-item">
              <Clock size={16} />
              <span>Effective Date: August 18, 2026</span>
            </div>
            <div className="legal-meta-item">
              <Shield size={16} />
              <span>Version: 2.1 (IT Industry Standard)</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="legal-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="legal-card">
            <div className="legal-intro">
              <p>
                At <strong>Codex Neural Pvt. Ltd.</strong> ("Codex Neural", "we", "us", or "our"), data privacy, intellectual property security, and confidentiality are fundamental pillars of our engineering practice. This Privacy Policy details how we collect, utilize, process, store, and safeguard personal and technical data when you visit our website (<strong>codexneural.com</strong>), engage our engineering services, or interact with our digital platforms.
              </p>
            </div>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">01.</span>
                Information We Collect
              </h2>
              <p>We only collect data that is necessary to fulfill our contractual obligations, optimize our digital experience, and communicate regarding technical engagements:</p>
              <ul>
                <li><strong>Directly Provided Information:</strong> Full name, corporate email address, phone number, company name, project specifications, and inquiry details submitted through our contact and consultation forms.</li>
                <li><strong>Technical & System Telemetry:</strong> Anonymized IP addresses, browser fingerprinting attributes, operating systems, referring URLs, and user interaction metrics collected automatically to optimize performance and security.</li>
                <li><strong>Project Artifacts & Code Data:</strong> Non-disclosure governed requirements, architectural diagrams, API schemas, and communication records provided during client discovery and project lifecycles.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">02.</span>
                Purpose & Legal Basis of Processing
              </h2>
              <p>We process information under legitimate business interests, contractual necessity, and explicit consent for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> Architecting, engineering, and deploying custom AI solutions, enterprise web systems, mobile applications, and cloud infrastructures.</li>
                <li><strong>Client Communications:</strong> Responding to discovery requests, project inquiries, security alerts, and contractual notices.</li>
                <li><strong>Security & Threat Prevention:</strong> Detecting unauthorized network access, mitigating DDoS attacks, preventing fraudulent activities, and ensuring infrastructure integrity.</li>
                <li><strong>Regulatory Compliance:</strong> Complying with applicable laws, tax obligations, and statutory corporate auditing standards.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">03.</span>
                Data Protection & Cybersecurity Standards
              </h2>
              <p>We adhere to rigorous industry security benchmarks to protect all data against unauthorized access, loss, or alteration:</p>
              <div className="legal-highlight-box">
                <p>
                  <strong>Security Controls:</strong> All data transmitted through our web services is protected using TLS 1.3 encryption. At rest, data is encrypted using AES-256 standards. Our internal access is governed by strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).
                </p>
              </div>
              <ul>
                <li>Zero-trust access architecture across all development and production repositories.</li>
                <li>Isolated staging environments and strict non-disclosure compliance for all client source code and database dumps.</li>
                <li>Regular automated dependency audits, static application security testing (SAST), and vulnerability scanning.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">04.</span>
                Subprocessors & Third-Party Integrations
              </h2>
              <p>We partner only with vetted cloud infrastructure and enterprise service providers that maintain stringent security certifications (SOC 2, ISO 27001, GDPR compliant):</p>
              <ul>
                <li><strong>Cloud Hosting & CDN:</strong> Vercel Inc., AWS (Amazon Web Services), and Netlify for high-availability edge delivery.</li>
                <li><strong>Form Transmission:</strong> Encrypted mail routing services strictly for transactional inquiry relay to our corporate inbox.</li>
                <li><strong>Analytics:</strong> Privacy-focused, anonymized web performance instrumentation with IP anonymization enabled.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">05.</span>
                Data Retention & Erasure
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or required by law. Client project communications and agreements are archived for statutory accounting and warranty periods (typically up to 5 years), after which they are securely purged using cryptographic erasure.
              </p>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">06.</span>
                Your Privacy Rights (GDPR & Global Standards)
              </h2>
              <p>Depending on your jurisdiction, you maintain comprehensive rights regarding your personal data:</p>
              <ul>
                <li><strong>Right of Access:</strong> Request a copy of all personal data held about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request complete deletion of your personal records where legal retention obligations no longer apply.</li>
                <li><strong>Right to Restrict or Object:</strong> Opt-out of non-essential communications or data processing activities at any time.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">07.</span>
                Policy Updates
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect technological advancements, legal requirements, or evolving service offerings. Significant changes will be noted on this page with an updated revision date.
              </p>
            </section>

            <div className="legal-contact-box">
              <h3>Data Privacy & Security Inquiries</h3>
              <p>If you have any questions regarding this Privacy Policy, data processing practices, or wish to exercise your data subject rights, please contact our Privacy Team:</p>
              <p><strong>Email:</strong> <a href="mailto:connect@codexneural.com">connect@codexneural.com</a></p>
              <p><strong>Physical Address:</strong> Codex Neural Pvt. Ltd., Kathmandu, Nepal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
