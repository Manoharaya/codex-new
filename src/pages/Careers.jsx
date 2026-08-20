import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Code2, Cloud, Layout, Sparkles, Shield, Zap, 
  CheckCircle2, ArrowRight, MapPin, Clock, Laptop, 
  DollarSign, X, Send, Heart, Award, Terminal, AlertCircle, Coffee, Compass
} from 'lucide-react';
import SEO from '../components/SEO/SEO';
import './Careers.css';

const jobListings = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI & LLM Systems Engineer',
    department: 'AI & DATA',
    location: 'Remote (Global) / Kathmandu',
    type: 'Full-Time',
    experience: '4+ Years',
    excerpt: 'Architect and deploy production-grade agentic AI pipelines, fine-tuned LLMs, and multi-modal models for enterprise clients.',
    tags: ['Python', 'LangChain', 'PyTorch', 'Vector DBs', 'RAG'],
    responsibilities: [
      'Design and deploy autonomous agent workflows and retrieval-augmented generation (RAG) architectures.',
      'Optimize LLM inference latency, token economics, and quantization for real-time applications.',
      'Collaborate with backend engineers to integrate intelligent neural workflows into enterprise infrastructure.'
    ]
  },
  {
    id: 'lead-fullstack-engineer',
    title: 'Lead Full-Stack Systems Engineer',
    department: 'ENGINEERING',
    location: 'Kathmandu / Hybrid / Remote',
    type: 'Full-Time',
    experience: '5+ Years',
    excerpt: 'Lead the architecture of fault-tolerant distributed web applications, high-throughput APIs, and reactive frontend clients.',
    tags: ['React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL'],
    responsibilities: [
      'Architect robust system components handling concurrent transactions with sub-100ms response times.',
      'Mentor junior and mid-level engineers through detailed code reviews and architectural RFCs.',
      'Drive engineering best practices across testing, continuous integration, and observability.'
    ]
  },
  {
    id: 'cloud-devops-architect',
    title: 'Cloud Infrastructure & DevOps Architect',
    department: 'CLOUD & DEVOPS',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '4+ Years',
    excerpt: 'Build immutable multi-region cloud infrastructure, automated GitOps pipelines, and zero-downtime deployment strategies.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD'],
    responsibilities: [
      'Provision and orchestrate infrastructure-as-code across AWS and hybrid environments using Terraform.',
      'Implement zero-trust security postures, automated secret rotation, and automated failover mechanics.',
      'Maintain 99.99% uptime across production clusters with Prometheus and Grafana alerting.'
    ]
  },
  {
    id: 'product-designer-uiux',
    title: 'Senior Product Designer (UI/UX & Design Systems)',
    department: 'DESIGN & PRODUCT',
    location: 'Remote / Kathmandu',
    type: 'Full-Time',
    experience: '3+ Years',
    excerpt: 'Craft breathtaking digital experiences, complex SaaS dashboards, and future-forward brand design systems.',
    tags: ['Figma', 'Design Systems', 'Micro-Animations', 'User Research', 'Prototyping'],
    responsibilities: [
      'Create high-fidelity interactive prototypes with a focus on fluid animations, accessibility, and micro-interactions.',
      'Maintain and expand our core component library across dark and light design paradigms.',
      'Conduct user interviews, usability audits, and translate complex engineering concepts into intuitive flows.'
    ]
  },
  {
    id: 'autonomous-agent-engineer',
    title: 'Autonomous Agent & Automation Engineer',
    department: 'AI & DATA',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '2+ Years',
    excerpt: 'Develop multi-agent collaboration frameworks, tool-calling systems, and automated enterprise workflow orchestrations.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'Docker', 'Automation'],
    responsibilities: [
      'Build autonomous agents that interact with external APIs, databases, and enterprise software suites.',
      'Engineer robust self-healing mechanisms and fallback strategies for asynchronous task executions.',
      'Evaluate agent performance metrics and benchmark reasoning accuracy.'
    ]
  }
];

const cultureValues = [
  {
    icon: <Terminal size={24} />,
    title: 'Architecture First',
    text: 'We never rush into coding without clarity. We spend the time upfront to architect scalable, maintainable systems built to outlive initial specifications.'
  },
  {
    icon: <Zap size={24} />,
    title: 'High Signal, Zero Noise',
    text: 'We value deep, uninterrupted focus. Our workflow is asynchronous by default, with minimal meetings and radical documentation.'
  },
  {
    icon: <Compass size={24} />,
    title: 'Radical Autonomy',
    text: 'We hire exceptional minds and trust them completely. You manage your schedule, your environment, and how you conquer problems.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Obsession with Craft',
    text: 'Every line of code, every transition curve, and every API response is engineered with relentless pride and aesthetic precision.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Psychological Safety',
    text: 'Failure in exploration is celebrated. We encourage bold experimentation, transparent post-mortems, and collective learning.'
  },
  {
    icon: <Award size={24} />,
    title: 'Compounded Growth',
    text: 'We invest aggressively in your continuous mastery. Get company-funded books, courses, certifications, and global conference passes.'
  }
];

const benefits = [
  { icon: <Laptop size={20} />, title: 'Remote-First Culture', desc: 'Work from anywhere on the planet with flexible hours aligned to your peak flow state.' },
  { icon: <DollarSign size={20} />, title: 'Top-Tier Compensation', desc: 'Competitive international salaries, performance bonuses, and long-term equity upside.' },
  { icon: <Zap size={20} />, title: 'Hardware & Desk Stipend', desc: 'Latest Apple / workstation hardware plus allowance to configure your dream workspace.' },
  { icon: <Brain size={20} />, title: 'Learning & Growth Budget', desc: '$1,500 annual personal budget for courses, books, tooling, and tech conferences.' },
  { icon: <Heart size={20} />, title: 'Health & Wellness', desc: 'Comprehensive health coverage, mental wellness allowance, and gym memberships.' },
  { icon: <Coffee size={20} />, title: 'Unlimited Paid Time Off', desc: 'Generous vacation policy and mandatory minimum time-off to ensure complete recharge.' }
];

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    portfolio: '',
    note: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const filteredJobs = activeCategory === 'ALL' 
    ? jobListings 
    : jobListings.filter(job => job.department === activeCategory);

  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, role: job ? job.title : 'General Engineering Application' }));
    setIsModalOpen(true);
    setStatus({ state: 'idle', message: '' });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Transmitting Application...' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/connect@codexneural.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Job Application: ${formData.role} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          Role: formData.role,
          Candidate_Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not Provided',
          Portfolio_GitHub_LinkedIn: formData.portfolio,
          Cover_Note: formData.note
        })
      });

      if (response.ok) {
        setStatus({
          state: 'success',
          message: 'Application received! Our engineering leadership will review your profile and reach out within 48 hours.'
        });
        setFormData({ name: '', email: '', phone: '', role: '', portfolio: '', note: '' });
      } else {
        throw new Error('Failed to transmit application');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not transmit application directly. Please email your CV directly to connect@codexneural.com.'
      });
    }
  };

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Codex Neural | Engineering the Future",
    "description": "Join Codex Neural. Build high-performance AI systems, enterprise software, and scalable digital infrastructure.",
    "url": "https://www.codexneural.com/careers"
  };

  return (
    <div className="careers-page page-wrapper">
      <SEO 
        title="Careers | Join Our Engineering Collective"
        description="Join Codex Neural. Build high-performance AI systems, enterprise software, and scalable digital infrastructure with radical autonomy."
        url="/careers"
        schema={careersSchema}
      />

      <div className="careers-noise-overlay"></div>

      <div className="container">
        
        {/* 1. Hero */}
        <section className="careers-hero">
          <motion.div 
            className="careers-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="careers-badge-dot"></span>
            WE ARE HIRING BUILDERS & THINKERS
          </motion.div>

          <motion.h1 
            className="careers-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineer the <span className="text-gradient">invisible systems</span> of tomorrow.
          </motion.h1>

          <motion.p 
            className="careers-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are an engineering-led collective architecting intelligent AI solutions, cloud infrastructure, and enterprise software. If you love deep technical craftsmanship and radical autonomy, you belong here.
          </motion.p>

          
        </section>

        

        

        {/* 4. Open Positions */}
        <section className="careers-openings-section" id="open-roles">
          <div className="careers-section-header">
            <span className="careers-section-tag">JOIN THE COLLECTIVE</span>
            <h2 className="careers-section-title">Open Positions</h2>
            <p className="careers-section-desc">Discover active opportunities across our engineering, artificial intelligence, and design disciplines.</p>
          </div>

          {/* Filter Bar */}
          <div className="careers-filter-bar">
            {['ALL', 'AI & DATA', 'ENGINEERING', 'CLOUD & DEVOPS', 'DESIGN & PRODUCT'].map((cat) => (
              <button
                key={cat}
                className={`careers-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="careers-jobs-list">
            {filteredJobs.map((job) => (
              <motion.div 
                key={job.id}
                className="career-job-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenApply(job)}
              >
                <div className="career-job-info">
                  <div className="career-job-meta">
                    <span className="career-job-dept">{job.department}</span>
                    <span className="career-job-pill"><MapPin size={11} style={{ display: 'inline', marginRight: 3 }} />{job.location}</span>
                    <span className="career-job-pill"><Clock size={11} style={{ display: 'inline', marginRight: 3 }} />{job.type}</span>
                    <span className="career-job-pill">{job.experience}</span>
                  </div>

                  <h3 className="career-job-title">{job.title}</h3>
                  <p className="career-job-excerpt">{job.excerpt}</p>

                  <div className="career-job-tags">
                    {job.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="career-job-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="career-job-action">
                  <button 
                    className="btn-primary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenApply(job);
                    }}
                  >
                    Apply Now <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Open Application Pitch */}
        <section className="careers-open-pitch">
          <h3>Don't see your exact role?</h3>
          <p>We are always on the lookout for visionary systems architects, AI researchers, and full-stack craftsmen. Pitch us your superpower.</p>
          <button className="btn-secondary" onClick={() => handleOpenApply(null)}>
            Send Open Application <ArrowRight size={16} />
          </button>
        </section>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="careers-apply-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className="careers-apply-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="careers-modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={22} />
              </button>

              <div style={{ marginBottom: 'var(--space-20)' }}>
                <span className="careers-section-tag">APPLICATION TRANSMISSION</span>
                <h3 style={{ fontSize: 'var(--text-h3)', fontFamily: 'Sora, sans-serif', color: 'var(--text-primary)' }}>
                  {selectedJob ? selectedJob.title : 'Open Role Application'}
                </h3>
                {selectedJob && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-sm)', marginTop: '4px' }}>
                    {selectedJob.location} • {selectedJob.type}
                  </p>
                )}
              </div>

              {status.state === 'success' ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-32) 0' }}>
                  <CheckCircle2 size={48} style={{ color: '#10B981', margin: '0 auto var(--space-16)' }} />
                  <h4 style={{ fontSize: 'var(--text-h4)', color: 'var(--text-primary)', marginBottom: '8px' }}>Transmission Successful</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body)' }}>{status.message}</p>
                  <button className="btn-primary" style={{ marginTop: 'var(--space-24)', marginInline: 'auto' }} onClick={() => setIsModalOpen(false)}>
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  {status.state === 'error' && (
                    <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', color: '#EF4444', marginBottom: 'var(--space-16)', fontSize: 'var(--text-body-sm)' }}>
                      <AlertCircle size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                      {status.message}
                    </div>
                  )}

                  <div className="careers-form-group">
                    <label className="careers-form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleFormChange} 
                      className="careers-form-input" 
                      placeholder="e.g. Elena Rostova" 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
                    <div className="careers-form-group">
                      <label className="careers-form-label">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleFormChange} 
                        className="careers-form-input" 
                        placeholder="elena@domain.com" 
                      />
                    </div>
                    <div className="careers-form-group">
                      <label className="careers-form-label">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleFormChange} 
                        className="careers-form-input" 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">Portfolio, GitHub, or LinkedIn URL *</label>
                    <input 
                      type="url" 
                      name="portfolio" 
                      required 
                      value={formData.portfolio} 
                      onChange={handleFormChange} 
                      className="careers-form-input" 
                      placeholder="https://github.com/username or https://linkedin.com/in/..." 
                    />
                  </div>

                  <div className="careers-form-group">
                    <label className="careers-form-label">Brief Intro & Relevant Work *</label>
                    <textarea 
                      name="note" 
                      required 
                      rows={4} 
                      value={formData.note} 
                      onChange={handleFormChange} 
                      className="careers-form-textarea" 
                      placeholder="Tell us what you've built, the hardest technical problem you solved, and link to your resume/CV (Google Drive / Notion / Dropbox link)."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={status.state === 'submitting'}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-8)' }}
                  >
                    {status.state === 'submitting' ? (
                      <>Transmitting Application...</>
                    ) : (
                      <>Submit Application <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Careers;
