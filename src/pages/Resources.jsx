import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Star, BookOpen, ArrowRight, Download, 
  Clock, Calendar, CheckCircle2, Send, Sparkles, 
  ExternalLink, Search, Bookmark, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import './Resources.css';

const blogsData = [
  {
    id: 1,
    title: 'Architecting Resilient Multi-Agent AI Workflows in Production',
    category: 'AI & LLMS',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    excerpt: 'How to move beyond naive prompt-chaining and build autonomous agent graphs with state persistence, error boundaries, and tool fallback.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Zero-Downtime Microservices Scaling on Kubernetes & AWS',
    category: 'CLOUD & DEVOPS',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    excerpt: 'A practical blueprint for configuring HPA, cluster autoscaling, and zero-drop connection draining under unpredictable surge loads.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'The Death of Monoliths: When and Why to Migrate to Event-Driven Systems',
    category: 'SOFTWARE ARCHITECTURE',
    date: 'Jul 12, 2026',
    readTime: '7 min read',
    excerpt: 'Deconstructing real-world anti-patterns when decomposing legacy enterprise systems into Kafka-backed event streams.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Next-Gen Vector Databases: Pinecone vs Milvus vs pgvector',
    category: 'DATA ENGINEERING',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
    excerpt: 'Benchmarking indexing speeds, HNSW precision, and cost efficiencies across leading high-dimensional vector indices.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Micro-Animations in Enterprise UI: Balancing Delight & Latency',
    category: 'UI/UX DESIGN',
    date: 'Jun 15, 2026',
    readTime: '4 min read',
    excerpt: 'Engineering 60fps GPU-accelerated motion systems using Framer Motion and WebGL without sacrificing initial bundle size.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Securing API Gateways in Multi-Tenant SaaS Environments',
    category: 'CYBERSECURITY',
    date: 'May 28, 2026',
    readTime: '6 min read',
    excerpt: 'Implementing JWT claims validation, distributed rate-limiting with Redis, and mutual TLS across federated endpoints.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const successStoriesData = [
  {
    id: 1,
    client: 'Life Science AI',
    industry: 'BioTech & HealthAI',
    metric: '+340% Efficiency',
    title: 'Scaling an Autonomous Multi-Agent AI Data Pipeline',
    description: 'We engineered a synchronized swarm of 12 autonomous AI agents for an Australian biotech client, automating clinical data ingestion and multi-point verification.',
    results: [
      'Deployed 12 autonomous agents handling 250k+ data points daily',
      'Reduced manual review processing time from 48h to under 4 minutes',
      '100% data provenance compliance and real-time observability'
    ]
  },
  {
    id: 2,
    client: 'Nexus Global Banking',
    industry: 'Financial Cloud',
    metric: '99.999% Reliability',
    title: 'Cloud Modernization for High-Frequency Transaction Processing',
    description: 'Architected an automated multi-region Kubernetes cloud infrastructure capable of processing high-volume transactional flows with zero data loss.',
    results: [
      'Reduced p99 latency to 18ms across global edge locations',
      'Automated disaster recovery failover in under 30 seconds',
      'ISO 27001 & PCI-DSS level 1 security certification attained'
    ]
  },
  {
    id: 3,
    client: 'Giving Heart Co.',
    industry: 'Modern E-Commerce',
    metric: '+48% Conversion',
    title: 'High-Performance Custom E-Commerce Platform Architecture',
    description: 'Engineered a bespoke head-less e-commerce application with intuitive gifting flows, seamless multi-currency checkout, and instant page transitions.',
    results: [
      'Sub-800ms initial page load speed across all mobile devices',
      '48% increase in completed checkout conversions',
      'Zero cart abandonment due to connection latency'
    ]
  }
];

const ebooksData = [
  {
    id: 1,
    badge: 'FREE WHITEPAPER',
    title: 'The Enterprise AI Playbook 2026: From POC to Production',
    pages: '42 Pages • PDF / ePub',
    description: 'A comprehensive technical handbook for engineering leaders on architecting, deploying, and governing agentic AI systems at scale.',
    downloadUrl: '#',
    topics: ['Agentic Workflows', 'LLM Fine-Tuning & Quantization', 'Security & Guardrails', 'Infrastructure Cost Modeling']
  },
  {
    id: 2,
    badge: 'TECHNICAL GUIDE',
    title: 'Next-Gen Cloud Architecture: Resilience & Cost Optimization',
    pages: '36 Pages • PDF',
    description: 'How modern scale-ups reduce cloud spend by up to 40% while improving fault-tolerance across Kubernetes, Serverless, and Multi-Cloud.',
    downloadUrl: '#',
    topics: ['FinOps Cloud Auditing', 'Container Packing & Spot Instances', 'Multi-Region Ingress', 'Automated Failover']
  },
  {
    id: 3,
    badge: 'DESIGN SYSTEM HANDBOOK',
    title: 'Building Scalable UI Design Systems for Complex SaaS',
    pages: '50 Pages • PDF & Figma Kit',
    description: 'A deep dive into token architecture, dark/light contrast engineering, accessible components, and component library governance.',
    downloadUrl: '#',
    topics: ['Design Tokens 2.0', 'Micro-Interactions', 'Component Maintenance', 'React / Tailwind Translation']
  }
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' | 'stories' | 'ebooks'
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ state: 'idle', message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus({ state: 'submitting', message: 'Subscribing...' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/connect@codexneural.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Newsletter Subscriber: ${newsletterEmail}`,
          _template: 'table',
          _captcha: 'false',
          Subscriber_Email: newsletterEmail,
          Source: 'Resources Page Newsletter'
        })
      });

      if (response.ok) {
        setNewsletterStatus({
          state: 'success',
          message: 'Thank you for subscribing! You will receive our latest technical breakdowns monthly.'
        });
        setNewsletterEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setNewsletterStatus({
        state: 'error',
        message: 'Could not subscribe. Please email connect@codexneural.com directly.'
      });
    }
  };

  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Resources, Research & Insights | Codex Neural",
    "description": "Explore technical blogs, AI research, client success stories, and engineering whitepapers published by Codex Neural.",
    "url": "https://www.codexneural.com/resources"
  };

  return (
    <div className="resources-page page-wrapper">
      <SEO 
        title="Resources, Blogs & Success Stories"
        description="Read the latest architectural breakdowns, AI case studies, expert engineering blogs, and downloadable eBooks from Codex Neural."
        url="/resources"
        schema={resourcesSchema}
      />

      <div className="resources-noise-overlay"></div>

      <div className="container">
        
        {/* 1. Hero Section */}
        <section className="resources-hero">
          <motion.div 
            className="resources-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="resources-badge-dot"></span>
            KNOWLEDGE HUB & ENGINEERING INSIGHTS
          </motion.div>

          <motion.h1 
            className="resources-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Insights for the <span className="text-gradient">builders of tomorrow</span>.
          </motion.h1>

          <motion.p 
            className="resources-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest thoughts on AI architectures, cloud engineering, scalable systems design, and verifiable business impact.
          </motion.p>
        </section>

        {/* 2. Top 3 Pillars - Exactly from User Specification */}
        <section className="resources-pillars-grid">
          
          {/* Pillar 1: Blogs */}
          <motion.div 
            className={`resources-pillar-card ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <FileText size={22} />
              </div>
              <h3 className="pillar-title">Blogs</h3>
            </div>
            <p className="pillar-desc">
              Read through some of our latest posts, opinions and updates and keep a close eye on all-things AI
            </p>
            <div className="pillar-action">
              <span>View Articles ({blogsData.length})</span>
              <ChevronRight size={14} />
            </div>
          </motion.div>

          {/* Pillar 2: Success Stories */}
          <motion.div 
            className={`resources-pillar-card ${activeTab === 'stories' ? 'active' : ''}`}
            onClick={() => setActiveTab('stories')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <Star size={22} />
              </div>
              <h3 className="pillar-title">Success Stories</h3>
            </div>
            <p className="pillar-desc">
              Smarter apps and better decisions with data engineering, analytics, ML, and LLM
            </p>
            <div className="pillar-action">
              <span>View Case Studies ({successStoriesData.length})</span>
              <ChevronRight size={14} />
            </div>
          </motion.div>

          {/* Pillar 3: eBooks */}
          <motion.div 
            className={`resources-pillar-card ${activeTab === 'ebooks' ? 'active' : ''}`}
            onClick={() => setActiveTab('ebooks')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="pillar-header">
              <div className="pillar-icon-wrap">
                <BookOpen size={22} />
              </div>
              <h3 className="pillar-title">eBooks</h3>
            </div>
            <p className="pillar-desc">
              Explore the insights from our experts to take a strategic leap into your product development journey
            </p>
            <div className="pillar-action">
              <span>View Whitepapers ({ebooksData.length})</span>
              <ChevronRight size={14} />
            </div>
          </motion.div>

        </section>

        {/* 3. Filter Tabs */}
        <div className="resources-tabs-nav">
          <button 
            className={`resources-tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            <FileText size={16} /> Latest Blogs & Articles
          </button>
          <button 
            className={`resources-tab-btn ${activeTab === 'stories' ? 'active' : ''}`}
            onClick={() => setActiveTab('stories')}
          >
            <Star size={16} /> Verified Success Stories
          </button>
          <button 
            className={`resources-tab-btn ${activeTab === 'ebooks' ? 'active' : ''}`}
            onClick={() => setActiveTab('ebooks')}
          >
            <BookOpen size={16} /> Guides & eBooks
          </button>
        </div>

        {/* 4. Tab Content */}
        <AnimatePresence mode="wait">
          
          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <motion.div 
              key="blogs"
              className="resources-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {blogsData.map((blog) => (
                <article key={blog.id} className="resource-blog-card">
                  <div className="blog-card-media" style={{ backgroundImage: `url(${blog.image})` }}>
                    <span className="blog-category-tag">{blog.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta-row">
                      <span><Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />{blog.date}</span>
                      <span>•</span>
                      <span><Clock size={13} style={{ display: 'inline', marginRight: 4 }} />{blog.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                    <Link to="/contact" className="blog-read-more">
                      Read Full Analysis <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {/* TAB: SUCCESS STORIES */}
          {activeTab === 'stories' && (
            <motion.div 
              key="stories"
              className="resources-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {successStoriesData.map((story) => (
                <div key={story.id} className="resource-story-card">
                  <div className="story-client-header">
                    <span className="story-client-name">{story.client}</span>
                    <span className="story-metric-badge">{story.metric}</span>
                  </div>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-desc">{story.description}</p>
                  
                  <div className="story-results-list">
                    {story.results.map((res, rIdx) => (
                      <div key={rIdx} className="story-result-item">
                        <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
                    Discuss Similar Solution <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB: EBOOKS */}
          {activeTab === 'ebooks' && (
            <motion.div 
              key="ebooks"
              className="resources-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {ebooksData.map((ebook) => (
                <div key={ebook.id} className="resource-ebook-card">
                  <span className="ebook-type-badge">{ebook.badge}</span>
                  <h3 className="ebook-title">{ebook.title}</h3>
                  <p className="ebook-desc">{ebook.description}</p>
                  
                  <div style={{ marginBottom: 'var(--space-16)' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'Space Grotesk, monospace', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                      Key Focus Areas:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {ebook.topics.map((topic, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '11px', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--text-primary)' }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ebook-footer">
                    <span className="ebook-pages-info">{ebook.pages}</span>
                    <a href="mailto:connect@codexneural.com?subject=Request%20eBook:%20" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                      <Download size={13} /> Request Copy
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

        {/* 5. Newsletter Subscription Box */}
        <section className="resources-newsletter-box">
          <Sparkles size={32} style={{ color: 'var(--accent-cyan)', margin: '0 auto var(--space-12)' }} />
          <h3 className="resources-newsletter-title">Stay Ahead of the Neural Curve</h3>
          <p className="resources-newsletter-subtitle">
            Get our monthly technical dispatches, architectural teardowns, and AI systems breakthroughs delivered straight to your inbox.
          </p>

          {newsletterStatus.state === 'success' ? (
            <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-sm)', color: '#10B981', maxWidth: '520px', margin: '0 auto', fontSize: 'var(--text-body-sm)' }}>
              <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              {newsletterStatus.message}
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="resources-newsletter-form">
              <input 
                type="email" 
                required 
                placeholder="Enter your work email..." 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="resources-newsletter-input" 
              />
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={newsletterStatus.state === 'submitting'}
              >
                {newsletterStatus.state === 'submitting' ? 'Subscribing...' : 'Subscribe'} <Send size={15} />
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};

export default Resources;
