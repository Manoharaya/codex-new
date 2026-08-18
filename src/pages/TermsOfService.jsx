import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield, CheckCircle2, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './LegalPage.css';

const TermsOfService = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service | Codex Neural",
    "url": "https://www.codexneural.com/terms",
    "description": "Terms of Service and Master Services Agreement provisions for Codex Neural Pvt. Ltd."
  };

  return (
    <div className="legal-page">
      <SEO 
        title="Terms of Service"
        description="Codex Neural Terms of Service - Master service agreements, intellectual property rights, warranties, and enterprise software engineering terms."
        url="/terms"
        schema={pageSchema}
      />
      <div className="container">
        <motion.div 
          className="legal-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="legal-badge">Legal Terms & SLA</span>
          <h1 className="legal-title">Terms of Service</h1>
          <div className="legal-meta">
            <div className="legal-meta-item">
              <Clock size={16} />
              <span>Effective Date: August 18, 2026</span>
            </div>
            <div className="legal-meta-item">
              <Shield size={16} />
              <span>Standard Enterprise Terms v2.1</span>
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
                Welcome to <strong>Codex Neural Pvt. Ltd.</strong> ("Codex Neural", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website (<strong>codexneural.com</strong>), technical consulting, software engineering, AI/ML development, cloud infrastructure, and related professional services ("Services"). By accessing our website or executing a Statement of Work (SOW), you agree to be bound by these Terms.
              </p>
            </div>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">01.</span>
                Scope of IT & Engineering Services
              </h2>
              <p>
                Codex Neural provides enterprise-grade technology services, including custom AI/ML model integration, full-stack software development, cloud infrastructure engineering, DevOps automation, UI/UX design, and technical SEO architecture.
              </p>
              <ul>
                <li>Individual engineering engagements are governed by custom Statements of Work (SOW) or Master Services Agreements (MSA) which outline specific deliverables, milestones, timelines, and payment structures.</li>
                <li>In the event of any conflict between these Terms and an executed SOW/MSA, the provisions of the executed SOW/MSA shall prevail.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">02.</span>
                Intellectual Property & Code Ownership
              </h2>
              <div className="legal-highlight-box">
                <p>
                  <strong>Custom Deliverables Ownership:</strong> Upon full and final settlement of all agreed invoices for a project, all rights, title, and interest in and to custom code, designs, and deliverables created specifically for the client transfer entirely to the client.
                </p>
              </div>
              <ul>
                <li><strong>Pre-Existing & Background IP:</strong> Codex Neural retains all rights to its pre-existing libraries, proprietary frameworks, algorithmic design patterns, and tooling developed independently of the client engagement. Clients receive a perpetual, irrevocable, royalty-free license to use such background IP as embedded in deliverables.</li>
                <li><strong>Open Source Components:</strong> Deliverables may incorporate standard open-source software libraries (e.g., MIT, Apache 2.0 licenses). Such components remain subject to their respective open-source license agreements.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">03.</span>
                Confidentiality & Non-Disclosure
              </h2>
              <p>
                Both parties agree to protect and maintain the strict confidentiality of all proprietary technical, financial, and operational information disclosed during the engagement:
              </p>
              <ul>
                <li>Confidential information shall not be disclosed to any third party without prior written consent.</li>
                <li>All source code, proprietary algorithms, database records, and architecture blueprints are treated as strictly confidential with zero-trust access controls.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">04.</span>
                Client Obligations & Collaboration
              </h2>
              <p>To ensure project success and timely milestone delivery, clients agree to:</p>
              <ul>
                <li>Provide timely access to requisite third-party credentials, APIs, assets, and feedback within agreed review windows.</li>
                <li>Ensure all materials and data supplied to Codex Neural do not infringe on any third-party intellectual property or privacy rights.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">05.</span>
                Warranties & Technical Support
              </h2>
              <p>
                We warrant that all engineering deliverables will be created in a professional, workmanlike manner conforming to prevailing IT industry standards and technical specifications detailed in the applicable SOW.
              </p>
              <ul>
                <li>Deliverables are accompanied by a standard 30-day post-deployment warranty period during which critical functional defects attributable to our code are remediated at no additional charge.</li>
                <li>Except as expressly specified, all services and website materials are provided on an "as-is" basis without warranties of merchantability or fitness for an unspecified purpose.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">06.</span>
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Codex Neural Pvt. Ltd. or its officers, directors, or employees be liable for any indirect, incidental, consequential, special, or punitive damages (including loss of profits, data, or business interruption) arising out of or related to our services or website.
              </p>
              <p>
                Our aggregate total liability for any claims under an engagement shall be strictly capped at the total amount actually paid by the client to Codex Neural under the specific SOW giving rise to the claim in the twelve (12) months preceding the incident.
              </p>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">07.</span>
                Termination & Data Purging
              </h2>
              <p>
                Either party may terminate a project agreement upon written notice if the other party breaches a material obligation and fails to cure such breach within thirty (30) days. Upon termination, client shall pay for all work satisfactorily completed up to the date of termination, and Codex Neural will deliver all completed deliverables and securely purge client staging data.
              </p>
            </section>

            <section className="legal-section">
              <h2>
                <span className="legal-section-number">08.</span>
                Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms and any project engagements shall be governed by and construed in accordance with applicable corporate and commercial laws. The parties shall first attempt in good faith to resolve any dispute through amicable negotiation before initiating formal legal proceedings.
              </p>
            </section>

            <div className="legal-contact-box">
              <h3>Legal & Contractual Inquiries</h3>
              <p>For questions regarding these Terms, Master Service Agreements (MSA), or partnership inquiries, please contact:</p>
              <p><strong>Email:</strong> <a href="mailto:connect@codexneural.com">connect@codexneural.com</a></p>
              <p><strong>Corporate Entity:</strong> Codex Neural Pvt. Ltd., Kathmandu, Nepal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
