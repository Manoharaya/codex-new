import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, CheckCircle2, Copy, Heart, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import { motion, useScroll, useSpring } from 'framer-motion';
import './BlogDetail.css';

const blogsData = [
  {
    id: 1,
    title: 'Architecting Resilient Multi-Agent AI Workflows in Production',
    category: 'AI & LLMS',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    author: { name: 'Manohar Singh', role: 'Chief Architect', avatar: 'https://ui-avatars.com/api/?name=Manohar+Singh&background=6F3FF5&color=fff' },
    excerpt: 'How to move beyond naive prompt-chaining and build autonomous agent graphs with state persistence, error boundaries, and tool fallback strategies for mission-critical apps.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        We are no longer just writing code. We are orchestrating <mark class="highlight-word">intelligence</mark>. As organizations push beyond traditional paradigms, engineering teams must build highly distributed, agentic models.
      </div>

      <h2 class="blog-section-heading">The Core Philosophy</h2>
      
      <div class="meaning-grid">
        <div class="meaning-card">
          <div class="meaning-term">Agentic</div>
          <div class="meaning-def">Systems that make autonomous decisions rather than following rigid procedural paths.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Resilience</div>
          <div class="meaning-def">The ability of an AI system to gracefully handle hallucination and self-correct in real-time.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Statefulness</div>
          <div class="meaning-def">Persisting context across multi-step reasoning chains without dropping context windows.</div>
        </div>
      </div>

      <div class="insight-box">
        <span class="insight-label">Key Takeaway</span>
        <div class="insight-content">Naive prompt-chaining is dead. The future belongs to <strong>stateful agent graphs</strong> that employ robust circuit breakers and tool fallbacks.</div>
      </div>

      <h2 class="blog-section-heading">Implementation Blueprint</h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">01</div>
          <div class="step-content">
            <strong>Decouple Reasoning from Action</strong>
            <span>Separate the LLM's thought process from the actual execution of external APIs.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <div class="step-content">
            <strong>Implement Guardrails</strong>
            <span>Use secondary, smaller models strictly for validating the output of the primary reasoning engine.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: 'Zero-Downtime Microservices Scaling on Kubernetes & AWS',
    category: 'CLOUD & DEVOPS',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    author: { name: 'Priti Gupta', role: 'Cloud DevOps Engineer', avatar: 'https://ui-avatars.com/api/?name=Priti+Gupta&background=22D3EE&color=000' },
    excerpt: 'A practical blueprint for configuring HPA, cluster autoscaling, and zero-drop connection draining under unpredictable surge loads in financial infrastructure.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        In cloud-native environments, true <mark class="highlight-word">zero-downtime</mark> is not a feature—it is a complex engineering mandate. Infrastructure must adapt instantaneously without dropping a single active transaction.
      </div>

      <div class="insight-box">
        <span class="insight-label">The Golden Rule</span>
        <div class="insight-content">A well-architected cloud system scales <strong>before</strong> the user notices, and fails over <strong>before</strong> the monitoring alerts trigger.</div>
      </div>

      <h2 class="blog-section-heading">The Anatomy of Scale</h2>
      <div class="meaning-grid">
        <div class="meaning-card">
          <div class="meaning-term">HPA (Horizontal Pod Autoscaling)</div>
          <div class="meaning-def">Scaling pod replicas dynamically. Must be tuned with custom metrics like queue depth, not just CPU.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">PDB (Pod Disruption Budgets)</div>
          <div class="meaning-def">Ensuring that voluntary disruptions (like node upgrades) never take down critical capacity.</div>
        </div>
      </div>

      <h2 class="blog-section-heading">Best Practices for Surge Loads</h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">01</div>
          <div class="step-content">
            <strong>Pre-warming Nodes</strong>
            <span>Utilize dummy pods with low priority to keep standby nodes warm and ready for immediate scheduling.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <div class="step-content">
            <strong>Connection Draining</strong>
            <span>Configure load balancers to gracefully terminate long-lived connections instead of violently dropping them.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: 'RAG Optimization: Chunking Strategies for Domain-Specific LLMs',
    category: 'DATA ENGINEERING',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
    author: { name: 'Bikash Sah', role: 'Data Engineer', avatar: 'https://ui-avatars.com/api/?name=Bikash+Sah&background=6F3FF5&color=fff' },
    excerpt: 'Benchmarking indexing speeds, HNSW precision, and cost efficiencies across vector databases to achieve sub-100ms retrieval latency in generative AI applications.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        Retrieval-Augmented Generation (RAG) is transforming AI, but its intelligence is fundamentally bounded by the <mark class="highlight-word">quality</mark> and <mark class="highlight-word">structure</mark> of the retrieved data.
      </div>

      <h2 class="blog-section-heading">The Science of Chunking</h2>
      <div class="meaning-grid">
        <div class="meaning-card">
          <div class="meaning-term">Fixed-Size</div>
          <div class="meaning-def">Slicing data purely by character count. Fast, but violently breaks semantic context.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Paragraph Boundary</div>
          <div class="meaning-def">Preserves natural language flow but results in highly variable vector payload sizes.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Semantic Chunking</div>
          <div class="meaning-def">Using small embedding models to group related sentences dynamically. High cost, highest precision.</div>
        </div>
      </div>

      <div class="insight-box">
        <span class="insight-label">Vector DB Optimization</span>
        <div class="insight-content">HNSW (Hierarchical Navigable Small World) graphs offer the best latency-recall tradeoff, especially when tuning <strong>m</strong> and <strong>ef_construction</strong> parameters for domain data.</div>
      </div>
    `
  },
  {
    id: 4,
    title: 'The Death of Monoliths: When (and Why) to Migrate to Event-Driven Systems',
    category: 'SOFTWARE ARCHITECTURE',
    date: 'Jul 12, 2026',
    readTime: '7 min read',
    author: { name: 'Anuj Pokharel', role: 'Senior Engineer', avatar: 'https://ui-avatars.com/api/?name=Anuj+Pokharel&background=22D3EE&color=000' },
    excerpt: 'Deconstructing real-world anti-patterns when decomposing legacy enterprise systems into resilient, Kafka-backed event streams without losing data integrity.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        Monolithic architectures eventually reach a breaking point where the <mark class="highlight-word">friction of development</mark> completely outweighs the simplicity of deployment.
      </div>

      <div class="insight-box">
        <span class="insight-label">Mindset Shift</span>
        <div class="insight-content">Event-driven architecture forces you to think about data <strong>over time</strong>, rather than data <strong>at rest</strong>.</div>
      </div>

      <h2 class="blog-section-heading">Migration Patterns</h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">01</div>
          <div class="step-content">
            <strong>Strangler Fig Pattern</strong>
            <span>Gradually intercepting API calls to replace pieces of the monolith with new microservices, avoiding a dangerous "big bang" rewrite.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <div class="step-content">
            <strong>Event Sourcing</strong>
            <span>Storing every state change as an immutable event, providing a perfect audit log and the ability to rebuild database state at any point in time.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">03</div>
          <div class="step-content">
            <strong>CQRS</strong>
            <span>Separating read and write models to optimize for vastly different access patterns and scaling requirements.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: 'Micro-Animations in Enterprise UI: Balancing Delight & Latency',
    category: 'UI/UX DESIGN',
    date: 'Jun 15, 2026',
    readTime: '4 min read',
    author: { name: 'Salon', role: 'Design Engineer', avatar: 'https://ui-avatars.com/api/?name=Salon&background=6F3FF5&color=fff' },
    excerpt: 'Engineering 60fps GPU-accelerated motion systems using Framer Motion and WebGL without sacrificing your initial bundle size or core web vitals.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        In enterprise applications, animation is often wrongly viewed as a luxury. Strategic use of micro-animations improves user comprehension and creates a <mark class="highlight-word">premium feel</mark>.
      </div>

      <h2 class="blog-section-heading">The Pillars of Motion Design</h2>
      <div class="meaning-grid">
        <div class="meaning-card">
          <div class="meaning-term">60fps Mandate</div>
          <div class="meaning-def">Animations must run at 60fps. Anything less feels broken. Stick to 'transform' and 'opacity' properties.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Purposeful</div>
          <div class="meaning-def">Motion should guide the user, indicate loading states, or draw attention to critical actions, never distract.</div>
        </div>
      </div>

      <div class="insight-box">
        <span class="insight-label">Design Philosophy</span>
        <div class="insight-content">Good design is obvious. <strong>Great design is transparent.</strong> Users shouldn't notice the animation; they should just feel that the UI is incredibly responsive.</div>
      </div>

      <h2 class="blog-section-heading">Engineering Implementation</h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">01</div>
          <div class="step-content">
            <strong>Hardware Acceleration</strong>
            <span>Force animations onto the GPU to avoid triggering expensive main-thread layout recalculations.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <div class="step-content">
            <strong>Will-Change Hinting</strong>
            <span>Use the CSS 'will-change' property sparingly to prepare the browser for upcoming heavy animations.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: 'Securing API Gateways in Multi-Tenant SaaS Environments',
    category: 'CYBERSECURITY',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: { name: 'Rahul Sah', role: 'Security Architect', avatar: 'https://ui-avatars.com/api/?name=Rahul+Sah&background=22D3EE&color=000' },
    excerpt: 'Implementing robust JWT claims validation, distributed rate-limiting with Redis, and mutual TLS across federated endpoints to prevent data leakage.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <div class="intro-text">
        In a multi-tenant SaaS architecture, the <mark class="highlight-word">API gateway</mark> is the single most critical security perimeter. It must seamlessly authenticate while maintaining strict tenant isolation.
      </div>

      <div class="insight-box">
        <span class="insight-label">Security Posture</span>
        <div class="insight-content">Security is not a product, but a process. In a SaaS environment, <strong>tenant isolation</strong> is the unbreakable foundation of that process.</div>
      </div>

      <h2 class="blog-section-heading">Defensive Mechanisms</h2>
      <div class="meaning-grid">
        <div class="meaning-card">
          <div class="meaning-term">Edge JWT Validation</div>
          <div class="meaning-def">Aggressively validating token signatures, expirations, and claims before requests ever touch backend services.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Mutual TLS (mTLS)</div>
          <div class="meaning-def">Ensuring communication between internal microservices is encrypted and mutually authenticated, preventing lateral attacks.</div>
        </div>
        <div class="meaning-card">
          <div class="meaning-term">Distributed Rate Limiting</div>
          <div class="meaning-def">Using Redis and Lua scripts for atomic token-bucket operations to prevent noisy neighbors and DDoS attacks.</div>
        </div>
      </div>

      <h2 class="blog-section-heading">Continuous Monitoring</h2>
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">01</div>
          <div class="step-content">
            <strong>Anomaly Detection</strong>
            <span>Employ ML models to baseline normal API usage patterns and instantly flag anomalous data exfiltration attempts.</span>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <div class="step-content">
            <strong>Audit Logging</strong>
            <span>Stream immutable access logs to cold storage for compliance and post-mortem forensic analysis.</span>
          </div>
        </div>
      </div>
    `
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const foundBlog = blogsData.find(b => b.id === parseInt(id)) || blogsData[0];
    setBlog(foundBlog);
    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!blog) return <div className="blog-loading">Loading...</div>;

  return (
    <>
      <SEO 
        title={`${blog.title} | Codex Neural Blog`}
        description={blog.excerpt}
        image={blog.image}
      />
      
      {/* Reading Progress Bar */}
      <motion.div className="reading-progress-bar" style={{ scaleX }} />
      
      <main className="blog-detail-page">
        <article className="blog-article-container">
          
          <Link to="/resources" className="back-link group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Resources
          </Link>

          <header className="blog-detail-header">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-category-tag">{blog.category}</div>
              <h1 className="blog-detail-title">{blog.title}</h1>
              <p className="blog-detail-excerpt">{blog.excerpt}</p>
            </motion.div>
            
            <motion.div 
              className="blog-meta-row-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="blog-author-detail">
                <img src={blog.author.avatar} alt={blog.author.name} />
                <div className="author-info">
                  <span className="author-name">{blog.author.name}</span>
                  <span className="author-role">{blog.author.role}</span>
                </div>
              </div>
              <div className="blog-stats">
                <span><Calendar size={14} style={{ marginRight: '6px' }}/> {blog.date}</span>
                <span className="meta-separator">•</span>
                <span><Clock size={14} style={{ marginRight: '6px' }}/> {blog.readTime}</span>
              </div>
            </motion.div>
          </header>

          <motion.div 
            className="blog-hero-image" 
            style={{ backgroundImage: `url(${blog.image})` }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>

          <div className="blog-content-wrapper">
            <aside className="blog-social-sidebar">
              <div className="social-sticky">
                <p className="share-label">Share</p>
                <button className="social-action" title="Share Article">
                  <Share2 size={18} />
                </button>
                <button className="social-action" onClick={handleCopyLink} title="Copy Link">
                  {isCopied ? <CheckCircle2 size={18} color="#10B981" /> : <LinkIcon size={18} />}
                </button>
                
                <div className="sidebar-divider"></div>
                
                <button 
                  className={`social-action ${isLiked ? 'liked' : ''}`} 
                  onClick={() => setIsLiked(!isLiked)}
                  title="Like Article"
                >
                  <Heart size={18} fill={isLiked ? "var(--brand-purple)" : "none"} color={isLiked ? "var(--brand-purple)" : "currentColor"} />
                </button>
                <button className="social-action" title="Bookmark">
                  <Bookmark size={18} />
                </button>
              </div>
            </aside>

            <motion.div 
              className="blog-markdown-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              
              <div className="blog-tags-footer">
                <span className="tag-label">Tags:</span>
                <span className="blog-bottom-tag">{blog.category}</span>
                <span className="blog-bottom-tag">Engineering</span>
                <span className="blog-bottom-tag">Innovation</span>
              </div>
            </motion.div>
          </div>

          <section className="blog-footer-newsletter premium-glass">
            <div className="newsletter-inner">
              <h3>Enjoyed this technical deep dive?</h3>
              <p>Subscribe to our engineering newsletter to get our latest research and architectural blueprints delivered straight to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="name@company.com" required />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </section>

        </article>
      </main>
    </>
  );
};

export default BlogDetail;