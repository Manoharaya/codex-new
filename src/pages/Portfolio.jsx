import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, ChevronRight, Monitor, Smartphone, 
  Cloud, BrainCircuit, Database, Layout, Code2, Server, Globe, Quote
} from 'lucide-react';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import SEO from '../components/SEO/SEO';
import './Portfolio.css';

const categories = ["All", "AI", "Enterprise", "Web", "Mobile", "Cloud", "UI/UX"];

const featuredProjects = [
  {
    id: "healthcare-ai",
    title: "NovaHealth Diagnostics",
    industry: "Healthcare",
    essence: "Reducing manual patient data operations from hours to minutes through intelligent AI automation.",
    challenge: "NovaHealth was overwhelmed by manual patient intake and diagnostic sorting. Their staff spent 60% of their time on administrative data entry rather than patient care, leading to massive bottlenecks and potential critical errors in diagnostic routing.",
    solution: "We engineered an intelligent, HIPAA-compliant ecosystem powered by custom LLMs and OCR. The system automatically ingests, categorizes, and routes patient documents, while an intuitive clinical dashboard provides doctors with instant, AI-summarized patient histories.",
    technologies: ["React", "Python", "OpenAI", "AWS HIPAA", "PostgreSQL"],
    metrics: [
      { value: "400%", label: "Processing Speed", trend: "up" },
      { value: "60%", label: "Admin Time Saved", trend: "up" },
      { value: "99.9%", label: "Data Accuracy", trend: "up" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    theme: "theme-purple"
  },
  {
    id: "finance-platform",
    title: "Nexus Global Banking",
    industry: "Finance",
    essence: "Transforming a fragmented legacy banking platform into a unified, scalable cloud-first ecosystem.",
    challenge: "Nexus Global was operating on a 15-year-old monolithic architecture that was slow to scale and difficult to maintain. Customer experience was suffering due to app crashes, slow load times, and a deeply fragmented user interface across different banking products.",
    solution: "We orchestrated a complete digital transformation. We broke down the monolith into microservices, built a unified design system, and deployed a blazing-fast React Native mobile application alongside a Next.js web portal, completely revitalizing their digital presence.",
    technologies: ["Next.js", "React Native", "Go", "Docker", "Azure"],
    metrics: [
      { value: "3x", label: "Faster Load Times", trend: "up" },
      { value: "85%", label: "Mobile Adoption", trend: "up" },
      { value: "0", label: "Downtime (YTD)", trend: "up" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    theme: "theme-blue"
  },
  {
    id: "logistics-cloud",
    title: "AeroFleet Logistics",
    industry: "Enterprise",
    essence: "Engineering a real-time global supply chain tracker capable of processing millions of data points daily.",
    challenge: "AeroFleet struggled with supply chain visibility. Their global fleet generated massive amounts of telemetry data, but their existing systems couldn't process or visualize it in real-time, resulting in severe logistical delays and wasted fuel.",
    solution: "We built a high-performance cloud architecture capable of ingesting millions of IoT data points per second. We paired this with a stunning WebGL-powered tracking dashboard that gives dispatchers real-time, predictive insights into global fleet movements.",
    technologies: ["Vue.js", "Node.js", "AWS IoT", "MongoDB", "WebGL"],
    metrics: [
      { value: "2M+", label: "Events/Second", trend: "up" },
      { value: "15%", label: "Fuel Saved", trend: "up" },
      { value: "30%", label: "Delivery Speed", trend: "up" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    theme: "theme-emerald"
  }
];

const galleryProjects = [
  { id: 1, title: "Lumina Workspace", industry: "Enterprise", category: "Web", type: "landscape", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Pulse Fitness", industry: "Consumer", category: "Mobile", type: "portrait", image: "https://images.unsplash.com/photo-1526502619081-cf14a1dd50b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "OmniCart API", industry: "Retail", category: "Cloud", type: "landscape", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Vanguard AI", industry: "Security", category: "AI", type: "landscape", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Aura Design System", industry: "SaaS", category: "UI/UX", type: "portrait", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Vertex Real Estate", industry: "Real Estate", category: "Web", type: "landscape", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const processData = [
  { id: 1, title: "Research" },
  { id: 2, title: "Strategy" },
  { id: 3, title: "Design" },
  { id: 4, title: "Development" },
  { id: 5, title: "Testing" },
  { id: 6, title: "Launch" },
  { id: 7, title: "Optimization" }
];

const testimonials = [
  {
    quote: "CodexNeural didn't just write code; they fundamentally transformed how our business operates. Their engineering talent and business acumen are unmatched.",
    name: "Sarah Jenkins",
    role: "VP of Engineering, Nexus Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The AI solution they delivered reduced our operational bottlenecks by 60%. They are a true premium technology partner.",
    name: "Dr. Marcus Chen",
    role: "Chief Medical Officer, NovaHealth",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const techGroups = [
  { category: "Frontend", icon: <Layout size={24} />, desc: "React, Next.js, Vue, Angular. Building blazing fast, accessible user interfaces." },
  { category: "Backend", icon: <Server size={24} />, desc: "Node.js, Python, Go, Java. Architecting secure, scalable microservices." },
  { category: "AI & ML", icon: <BrainCircuit size={24} />, desc: "OpenAI, LLMs, LangChain. Integrating intelligent automation into products." },
  { category: "Cloud & DevOps", icon: <Cloud size={24} />, desc: "AWS, Azure, Docker, CI/CD. Ensuring high availability and rapid deployment." },
  { category: "Databases", icon: <Database size={24} />, desc: "PostgreSQL, MongoDB, Redis. Designing robust data architectures." }
];

const recognitionStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Industries Served" },
  { value: "30+", label: "Technologies Mastered" },
  { value: "18", label: "Countries Reached" }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGallery = activeCategory === "All" 
    ? galleryProjects 
    : galleryProjects.filter(p => p.category === activeCategory);

  return (
    <div className="portfolio-page chapter-portfolio">
      <SEO 
        title="Portfolio"
        description="Behind every application is a business challenge, a thoughtful design process, and an engineering team focused on measurable outcomes. Explore some of the digital experiences we've crafted."
        url="/portfolio"
      />
      {/* 1. Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-grid">
            <div className="portfolio-hero-content">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="portfolio-hero-title"
              >
                Every Product <span className="text-gradient">Tells a Story.</span> Every Solution Solves a Problem.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="portfolio-hero-desc"
              >
                Behind every application is a business challenge, a thoughtful design process, and an engineering team focused on measurable outcomes. Explore some of the digital experiences we've crafted.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="portfolio-hero-actions"
              >
                <a href="#featured" className="btn-primary">Explore Projects <ArrowRight size={18} /></a>
                <a href="#contact" className="btn-secondary">Start Your Project</a>
              </motion.div>
            </div>
            
            <div className="portfolio-hero-visual">
              <motion.div 
                className="editorial-collage"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Workspace" className="collage-img collage-workspace glass-card" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="collage-img collage-dashboard glass-card" />
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mobile UI" className="collage-img collage-mobile glass-card" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Navigation Chips */}
      <section className="portfolio-nav-section" id="featured">
        <div className="container">
          <div className="filter-chips">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Work (Storytelling Sticky Scroll) */}
      <section className="featured-story-section">
        <div className="container">
          <motion.div 
            className="featured-story-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Featured Case Studies</h2>
            <p className="section-subtitle">
              Deep dives into our most impactful partnerships, detailing the business challenges, technical solutions, and measurable outcomes.
            </p>
          </motion.div>
        </div>

        <div className="sticky-story-container">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`story-project-wrapper ${project.theme}`}>
              <div className="story-aurora-bg"></div>
              <div className="container">
                <motion.div 
                  className="story-project-card glass-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  
                  {/* Essence Statement */}
                  <div className="story-essence">
                    <Quote className="essence-quote-icon" size={32} />
                    <h2 className="essence-text">"{project.essence}"</h2>
                  </div>

                  <div className="story-project-content-grid">
                    {/* Left: Mockup & Tech */}
                    <div className="story-visual-side">
                      <div className="story-mockup-wrapper">
                        <img src={project.image} alt={project.title} className="story-mockup-img" />
                      </div>
                      <div className="story-tech-chips">
                        {project.technologies.map(tech => (
                          <span key={tech} className="tech-chip">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Story & Metrics */}
                    <div className="story-narrative-side">
                      <div className="story-meta">
                        <span className="story-industry">{project.industry}</span>
                        <h3 className="story-title">{project.title}</h3>
                      </div>
                      
                      <div className="story-text-block">
                        <h4 className="story-subtitle">The Challenge</h4>
                        <p>{project.challenge}</p>
                      </div>
                      
                      <div className="story-text-block">
                        <h4 className="story-subtitle">The Solution</h4>
                        <p>{project.solution}</p>
                      </div>
                      
                      <div className="story-metrics">
                        {project.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="story-metric-item">
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a href="#contact" className="btn-primary story-cta">
                        View Complete Case Study <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial 1 */}
      <section className="interstitial-testimonial">
        <div className="container">
          <div className="testimonial-block glass-card">
            <h3 className="testimonial-quote">"{testimonials[0].quote}"</h3>
            <div className="testimonial-author">
              <img src={testimonials[0].image} alt={testimonials[0].name} className="author-img" />
              <div className="author-info">
                <span className="author-name">{testimonials[0].name}</span>
                <span className="author-role">{testimonials[0].role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Masonry Project Gallery */}
      <section className="portfolio-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More Digital Experiences</h2>
          </div>
          
          <motion.div layout className="masonry-gallery">
            <AnimatePresence>
              {filteredGallery.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`gallery-item ${project.type}`}
                >
                  <img src={project.image} alt={project.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <span className="gallery-industry">{project.industry}</span>
                      <h3 className="gallery-title">{project.title}</h3>
                      <span className="gallery-category">{project.category}</span>
                    </div>
                    <div className="gallery-overlay-action">
                      <span className="gallery-link">View Project <ArrowUpRight size={20} /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. Development Process */}
      <section className="portfolio-process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Engineering Process</h2>
          </div>
          
          <div className="process-timeline-container">
            <div className="process-line"></div>
            <div className="process-steps">
              {processData.map((step, index) => (
                <React.Fragment key={step.id}>
                  <motion.div 
                    className="process-step"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="process-step-number">{step.id}</div>
                    <div className="process-step-title">{step.title}</div>
                  </motion.div>
                  {index < processData.length - 1 && (
                    <div className="process-arrow">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial 2 */}
      <section className="interstitial-testimonial">
        <div className="container">
          <div className="testimonial-block glass-card">
            <h3 className="testimonial-quote">"{testimonials[1].quote}"</h3>
            <div className="testimonial-author">
              <img src={testimonials[1].image} alt={testimonials[1].name} className="author-img" />
              <div className="author-info">
                <span className="author-name">{testimonials[1].name}</span>
                <span className="author-role">{testimonials[1].role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technologies Grouped Panels */}
      <section className="tech-panels-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Powered By</h2>
          </div>
          
          <div className="tech-groups-grid">
            {techGroups.map((group, index) => (
              <motion.div 
                key={index}
                className="tech-group-panel glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="tech-group-icon-wrapper">{group.icon}</div>
                <h4 className="tech-group-title">{group.category}</h4>
                <p className="tech-group-desc">{group.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Recognition Stats */}
      <section className="recognition-section">
        <div className="container">
          <div className="recognition-grid">
            {recognitionStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="recognition-stat"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="recognition-value">{stat.value}</span>
                <span className="recognition-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="portfolio-final-cta chapter-hero">
        <FinalCTA 
          title="Ready to Create Your Success Story?" 
          desc="Whether you're launching a startup, modernizing enterprise software, or exploring AI-powered solutions, let's build something exceptional together." 
        />
      </section>
    </div>
  );
};

export default Portfolio;
