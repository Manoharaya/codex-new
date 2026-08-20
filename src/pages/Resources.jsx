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
    author: { name: 'Manohar Singh', role: 'Chief Architect', avatar: 'https://ui-avatars.com/api/?name=Manohar+Singh&background=6F3FF5&color=fff' },
    excerpt: 'How to move beyond naive prompt-chaining and build autonomous agent graphs with state persistence, error boundaries, and tool fallback strategies for mission-critical apps.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Zero-Downtime Microservices Scaling on Kubernetes & AWS',
    category: 'CLOUD & DEVOPS',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    author: { name: 'Priti Gupta', role: 'DevOps Lead', avatar: 'https://ui-avatars.com/api/?name=Priti+Gupta&background=22D3EE&color=000' },
    excerpt: 'A practical blueprint for configuring HPA, cluster autoscaling, and zero-drop connection draining under unpredictable surge loads in financial infrastructure.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'RAG Optimization: Chunking Strategies for Domain-Specific LLMs',
    category: 'DATA ENGINEERING',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
    author: { name: 'Bikash Sah', role: 'Data Engineer', avatar: 'https://ui-avatars.com/api/?name=Bikash+Sah&background=6F3FF5&color=fff' },
    excerpt: 'Benchmarking indexing speeds, HNSW precision, and cost efficiencies across vector databases to achieve sub-100ms retrieval latency in generative AI applications.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'The Death of Monoliths: When (and Why) to Migrate to Event-Driven Systems',
    category: 'SOFTWARE ARCHITECTURE',
    date: 'Jul 12, 2026',
    readTime: '7 min read',
    author: { name: 'Anuj Pokharel', role: 'Senior Engineer', avatar: 'https://ui-avatars.com/api/?name=Anuj+Pokharel&background=22D3EE&color=000' },
    excerpt: 'Deconstructing real-world anti-patterns when decomposing legacy enterprise systems into resilient, Kafka-backed event streams without losing data integrity.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Micro-Animations in Enterprise UI: Balancing Delight & Latency',
    category: 'UI/UX DESIGN',
    date: 'Jun 15, 2026',
    readTime: '4 min read',
    author: { name: 'Salon', role: 'Design Engineer', avatar: 'https://ui-avatars.com/api/?name=Salon&background=6F3FF5&color=fff' },
    excerpt: 'Engineering 60fps GPU-accelerated motion systems using Framer Motion and WebGL without sacrificing your initial bundle size or core web vitals.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Securing API Gateways in Multi-Tenant SaaS Environments',
    category: 'CYBERSECURITY',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: { name: 'Rahul Sah', role: 'Security Architect', avatar: 'https://ui-avatars.com/api/?name=Rahul+Sah&background=22D3EE&color=000' },
    excerpt: 'Implementing robust JWT claims validation, distributed rate-limiting with Redis, and mutual TLS across federated endpoints to prevent data leakage.',
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
    description: 'We engineered a synchronized swarm of 12 autonomous AI agents for an Australian biotech leader, entirely automating clinical data ingestion, cleansing, and multi-point verification workflows.',
    results: [
      'Deployed 12 autonomous agents handling 250k+ data points daily',
      'Reduced manual review processing time from 48h to under 4 minutes',
      'Achieved 100% data provenance compliance with real-time observability'
    ]
  },
  {
    id: 2,
    client: 'Nexus Global Banking',
    industry: 'Financial Cloud',
    metric: '99.999% Reliability',
    title: 'Cloud Modernization for High-Frequency Transaction Processing',
    description: 'Architected a self-healing, multi-region Kubernetes cloud infrastructure capable of processing volatile, high-frequency transactional flows with absolute zero data loss during traffic spikes.',
    results: [
      'Reduced p99 latency to a sustained 18ms across global edge locations',
      'Automated disaster recovery failover in under 30 seconds',
      'Attained rigorous ISO 27001 & PCI-DSS Level 1 security certifications'
    ]
  },
  {
    id: 3,
    client: 'Giving Heart Co.',
    industry: 'Modern E-Commerce',
    metric: '+48% Conversion',
    title: 'High-Performance Custom E-Commerce Platform Architecture',
    description: 'Engineered a bespoke head-less e-commerce application featuring intuitive gifting flows, seamless multi-currency checkout, and instant GPU-accelerated page transitions.',
    results: [
      'Sub-800ms initial page load speed across all mid-tier mobile devices',
      '48% immediate increase in completed checkout conversions',
      'Eliminated cart abandonment caused by connection latency'
    ]
  }
];

const ebooksData = [
  {
    id: 1,
    badge: 'LLM & AI SYSTEMS',
    title: 'Multi-Agent State Graph Architecture Blueprint',
    pages: 'System Diagram • Python • LangChain',
    description: 'A complete reference architecture detailing our setup for orchestrating 12 independent AI agents with real-time state persistence and tool fallback.',
    downloadUrl: '/blueprints/multi-agent-blueprint.md',
    topics: ['Stateful Graphs', 'Redis Persistence', 'Semantic Routing', 'Vector DBs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    badge: 'CLOUD DEVOPS',
    title: 'Zero-Downtime E-Commerce Cluster Topology',
    pages: 'Architecture Diagram • Terraform • Helm',
    description: 'High-res topology map demonstrating how we scale e-commerce infrastructure to 50k RPS with instant HPA triggers and Multi-AZ failover.',
    downloadUrl: '/blueprints/k8s-cluster-topology.md',
    topics: ['HPA Configs', 'Ingress NGINX', 'Pod Disruption', 'PostgreSQL HA'],
    image: '/blueprints/cloud_cluster.jpg'
  },
  {
    id: 3,
    badge: 'DATA PIPELINES',
    title: 'Real-Time Event Streaming Data Pipeline',
    pages: 'System Diagram • Kafka • ClickHouse',
    description: 'Detailed schema and data flow blueprint for migrating legacy batch processing into a sub-10ms latency event-driven architecture.',
    downloadUrl: '/blueprints/event-streaming-pipeline.md',
    topics: ['Kafka Topics', 'ClickHouse', 'Debezium CDC', 'Event Sourcing'],
    image: '/blueprints/data_pipeline.jpg'
  },
  {
    id: 4,
    badge: 'SECURITY',
    title: 'Zero-Trust Multi-Tenant API Gateway',
    pages: 'Architecture Diagram • Redis • Lua',
    description: 'Actionable blueprint for implementing mTLS, distributed rate limiting, and aggressive JWT edge validation across federated SaaS endpoints.',
    downloadUrl: '/blueprints/zero-trust-gateway.md',
    topics: ['mTLS', 'Distributed Limiting', 'Identity Federation', 'Edge Compute'],
    image: '/blueprints/security_gateway.jpg'
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
              <h3 className="pillar-title">Blueprints</h3>
            </div>
            <p className="pillar-desc">Download production-grade system architectures, topology maps, and deployment configurations.</p>
            <div className="pillar-action">
              <span>View Blueprints ({ebooksData.length})</span>
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
            <BookOpen size={16} /> Architecture Blueprints
          </button>
        </div>

        {/* 4. Tab Content */}
        <AnimatePresence mode="wait">
          
          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <motion.div 
              key="blogs"
              className="blog-reader-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Post Hero */}
              {blogsData.length > 0 && (
                <article className="featured-blog-card">
                  <div className="featured-media" style={{ backgroundImage: `url(${blogsData[0].image})` }}>
                    <span className="blog-category-tag featured-tag">{blogsData[0].category}</span>
                  </div>
                  <div className="featured-content">
                    <div className="blog-meta-row">
                      <span><Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />{blogsData[0].date}</span>
                      <span>•</span>
                      <span><Clock size={13} style={{ display: 'inline', marginRight: 4 }} />{blogsData[0].readTime}</span>
                    </div>
                    <h2 className="featured-title">{blogsData[0].title}</h2>
                    <p className="featured-excerpt">{blogsData[0].excerpt}</p>
                    
                    <div className="author-row">
                      <img src={blogsData[0].author.avatar} alt={blogsData[0].author.name} className="author-avatar" />
                      <div className="author-info">
                        <span className="author-name">{blogsData[0].author.name}</span>
                        <span className="author-role">{blogsData[0].author.role}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${blogsData[0].id}`} className="btn-primary" style={{ marginTop: 'var(--space-24)', alignSelf: 'flex-start' }}>
                      Read Full Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              )}

              <div className="resources-grid" style={{ marginTop: 'var(--space-48)' }}>
                {blogsData.slice(1).map((blog) => (
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
                      
                      <Link to={`/blog/${blog.id}`} className="blog-read-more" style={{ marginBottom: 'var(--space-16)' }}>
                        Read Article <ArrowRight size={14} />
                      </Link>

                      <div className="author-row-small" style={{ marginTop: 'auto', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={blog.author.avatar} alt={blog.author.name} style={{ width: 32, height: 32, borderRadius: '50%' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{blog.author.name}</span>
                          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{blog.author.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
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
                  <div className="blueprint-preview-wrapper">
                    <div className="blueprint-preview" style={{ backgroundImage: `url(${ebook.image})` }}>
                    </div>
                  </div>
                  
                  <div className="ebook-content-wrapper">
                    <span className="ebook-type-badge">{ebook.badge}</span>
                    <h3 className="ebook-title">{ebook.title}</h3>
                    <p className="ebook-desc">{ebook.description}</p>
                    
                    <div style={{ marginBottom: 'var(--space-16)' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
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
                      <a href={ebook.downloadUrl} download target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                        <Download size={13} /> Download
                      </a>
                    </div>
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
