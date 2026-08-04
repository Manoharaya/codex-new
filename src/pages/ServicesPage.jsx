import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Monitor, Smartphone, 
  Cloud, PenTool, BrainCircuit, Database, Shield, Zap, Target, 
  Layout, Code2, Server, Settings, HeartPulse, Building2, 
  GraduationCap, ShoppingCart, Factory, Rocket, Truck, Coffee, Home
} from 'lucide-react';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import FinalCTA from '../components/FinalCTA/FinalCTA';
import './ServicesPage.css';

const servicesData = [
  {
    id: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    description: "Transform your operations with intelligent systems that learn, adapt, and automate complex workflows.",
    features: [
      "AI Automation", "AI Assistants", "Generative AI", 
      "Business Intelligence", "Document Processing", "Workflow Automation"
    ],
    cta: "Explore AI Solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-cyan",
    layout: "image-right"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Scalable, secure, and maintainable software engineered specifically for your unique business challenges.",
    features: [
      "Enterprise Software", "CRM", "ERP", 
      "Internal Tools", "Business Portals", "SaaS Platforms"
    ],
    cta: "Explore Custom Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-indigo",
    layout: "image-left"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "High-performance web applications that deliver seamless experiences across all devices and browsers.",
    features: [
      "Responsive applications", "Customer portals", "Admin dashboards", 
      "Business websites", "Progressive Web Apps", "API Integrations"
    ],
    cta: "Explore Web Apps",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-magenta",
    layout: "image-right"
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences designed to engage users and drive business value.",
    features: [
      "Native iOS & Android", "Cross-platform", "Flutter", 
      "React Native", "Enterprise mobile apps", "Customer applications"
    ],
    cta: "Explore Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-purple",
    layout: "image-left"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Robust cloud infrastructure and automated deployment pipelines for maximum reliability and scale.",
    features: [
      "AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", 
      "Monitoring & Alerting", "Scalable infrastructure", "Security & Compliance"
    ],
    cta: "Explore Cloud Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-cyan",
    layout: "image-right"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Intuitive, data-driven interfaces that delight users and reduce friction in digital journeys.",
    features: [
      "User Research", "Wireframes", "UI Design", 
      "Design Systems", "Prototypes", "Usability Testing"
    ],
    cta: "Explore Design Services",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "theme-indigo",
    layout: "image-left"
  }
];

const processData = [
  { id: 1, title: "Discover" },
  { id: 2, title: "Strategy" },
  { id: 3, title: "Design" },
  { id: 4, title: "Development" },
  { id: 5, title: "Testing" },
  { id: 6, title: "Deployment" },
  { id: 7, title: "Growth" }
];

const industriesData = [
  { icon: <HeartPulse size={24} />, name: "Healthcare" },
  { icon: <Building2 size={24} />, name: "Finance" },
  { icon: <GraduationCap size={24} />, name: "Education" },
  { icon: <ShoppingCart size={24} />, name: "Retail" },
  { icon: <Factory size={24} />, name: "Manufacturing" },
  { icon: <Rocket size={24} />, name: "Startups" },
  { icon: <Truck size={24} />, name: "Logistics" },
  { icon: <Coffee size={24} />, name: "Hospitality" },
  { icon: <Home size={24} />, name: "Real Estate" }
];

const techStackData = [
  {
    category: "Frontend",
    icon: <Layout size={20} />,
    technologies: ["React", "Next.js", "Vue", "Angular", "Tailwind CSS", "TypeScript"]
  },
  {
    category: "Backend",
    icon: <Server size={20} />,
    technologies: ["Node.js", "Python", ".NET", "Java", "Go", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vercel"]
  },
  {
    category: "AI & ML",
    icon: <BrainCircuit size={20} />,
    technologies: ["OpenAI", "Gemini", "LangChain", "Hugging Face", "Vector DBs", "PyTorch"]
  },
  {
    category: "Databases",
    icon: <Database size={20} />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Prisma"]
  }
];

const featuresData = [
  {
    icon: <Target size={24} />,
    title: "Business-first thinking",
    desc: "We align technology with your specific business goals, focusing on ROI and measurable outcomes."
  },
  {
    icon: <Zap size={24} />,
    title: "Scalable architecture",
    desc: "Systems designed to handle growth smoothly, ensuring your software doesn't become a bottleneck."
  },
  {
    icon: <Shield size={24} />,
    title: "Security by design",
    desc: "Enterprise-grade security practices embedded throughout the entire development lifecycle."
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Long-term partnership",
    desc: "We don't just launch and leave. We provide ongoing support, optimization, and strategic guidance."
  }
];

const engagementModels = [
  {
    title: "Dedicated Team",
    desc: "Ideal for long-term partnerships and continuous product development.",
    features: ["Dedicated engineers", "Flexible scaling", "Direct communication", "Full integration"]
  },
  {
    title: "Project Based",
    desc: "Clear scope, fixed delivery. Perfect for well-defined software initiatives.",
    features: ["Fixed timeline", "Defined deliverables", "End-to-end execution", "Milestone tracking"]
  },
  {
    title: "Technology Consulting",
    desc: "Strategic guidance to solve complex architectural or business challenges.",
    features: ["Architecture review", "AI Strategy", "Digital Transformation", "Security audits"]
  }
];


const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      {/* 1. Hero Section */}
      <section className="services-hero">
        <div className="aurora-blob aurora-indigo services-hero-aurora1"></div>
        <div className="aurora-blob aurora-cyan services-hero-aurora2"></div>
        
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-hero-content">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="services-hero-title"
              >
                Engineering <span className="text-gradient">Digital Products</span> That Drive Business Growth
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="services-hero-desc"
              >
                From AI-powered automation to enterprise software, cloud infrastructure, and intuitive digital experiences, CodexNeural helps businesses build technology that delivers measurable impact.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="services-hero-actions"
              >
                <a href="#contact" className="btn-primary">Start Your Project <ArrowRight size={18} /></a>
                <a href="#contact" className="btn-secondary">Schedule a Discovery Call</a>
              </motion.div>
            </div>
            
            <div className="services-hero-visual">
              <motion.div 
                className="ecosystem-layers"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="eco-layer eco-layer-desktop glass-card">
                  <div className="eco-header"><div className="eco-dots"><span></span><span></span><span></span></div></div>
                  <div className="eco-body"><div className="eco-chart"></div></div>
                </div>
                <div className="eco-layer eco-layer-mobile glass-card">
                  <div className="eco-mobile-notch"></div>
                  <div className="eco-mobile-content">
                    <div className="eco-line"></div>
                    <div className="eco-line"></div>
                    <div className="eco-line short"></div>
                  </div>
                </div>
                <div className="eco-layer eco-layer-widget glass-card">
                  <BrainCircuit size={24} className="eco-widget-icon" />
                  <div className="eco-widget-lines">
                    <div className="eco-line"></div>
                    <div className="eco-line short"></div>
                  </div>
                </div>
                <div className="eco-layer eco-layer-cloud glass-card">
                  <Cloud size={20} className="eco-cloud-icon" />
                  <span className="eco-cloud-text">Syncing...</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Introduction */}
      <section className="services-intro">
        <div className="container">
          <motion.div 
            className="intro-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="intro-title">What We Build</h2>
            <p className="intro-desc">
              Every business has different challenges. Our services are designed around solving problems, improving operations, and creating long-term digital value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Service Stories (Alternating Sections) */}
      <div className="service-stories-container">
        {servicesData.map((service, index) => (
          <section key={service.id} id={service.id} className={`service-story-section ${service.theme} ${service.layout}`}>
            <div className="service-story-aurora"></div>
            <div className="container">
              <div className="service-story-grid">
                <div className="service-story-content">
                  <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="story-title"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="story-desc"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul 
                    className="story-features-list"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="story-feature-item">
                        <CheckCircle2 size={18} className="story-feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </motion.ul>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <a href="#contact" className="story-cta-link">
                      {service.cta} <ArrowRight size={16} />
                    </a>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="service-story-visual"
                  initial={{ opacity: 0, scale: 0.95, x: service.layout === 'image-right' ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="story-image-wrapper glass-card">
                    <img src={service.image} alt={service.title} className="story-image" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Process Section (How We Deliver) */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How We Deliver</h2>
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

      {/* 5. Industries Section */}
      <section className="industries-section">
        <div className="aurora-blob aurora-magenta industries-aurora"></div>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Industries We Serve</h2>
          </div>
          
          <div className="industries-grid">
            {industriesData.map((industry, index) => (
              <motion.div 
                key={index}
                className="industry-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h4 className="industry-name">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Ecosystem */}
      <section className="tech-ecosystem-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Technology Ecosystem</h2>
          </div>
          
          <div className="tech-panels-grid">
            {techStackData.map((group, index) => (
              <motion.div 
                key={index}
                className="tech-panel glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="tech-panel-header">
                  {group.icon}
                  <h4 className="tech-panel-title">{group.category}</h4>
                </div>
                <div className="tech-tags">
                  {group.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <motion.div 
              className="why-choose-visual glass-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="CodexNeural Team" 
                className="why-choose-image"
              />
            </motion.div>
            
            <div className="why-choose-content">
              <motion.h2 
                className="why-choose-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose CodexNeural
              </motion.h2>
              
              <div className="features-blocks">
                {featuresData.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="feature-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <h4 className="feature-block-title">{feature.title}</h4>
                      <p className="feature-block-desc">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Engagement Models */}
      <section className="engagement-section">
        <div className="aurora-blob aurora-cyan engagement-aurora"></div>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Client Engagement Models</h2>
          </div>
          
          <div className="engagement-grid">
            {engagementModels.map((model, index) => (
              <motion.div 
                key={index}
                className="engagement-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="engagement-header">
                  <h3 className="engagement-title">{model.title}</h3>
                  <p className="engagement-desc">{model.desc}</p>
                </div>
                <ul className="engagement-features">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle2 size={18} className="engagement-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Featured Success Stories (Reusing Homepage Component) */}
      <FeaturedProjects />

      {/* 10. Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default ServicesPage;
