import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './FeaturedProjects.css';

const projectsData = [
  {
    name: 'AeroSync Cloud Platform',
    industry: 'Logistics & Supply Chain',
    challenge: 'Legacy systems caused 12-hour delays in cross-border shipment tracking and frequent data inconsistencies across global hubs.',
    solution: 'We engineered a real-time, event-driven microservices architecture using Apache Kafka, processing 4M+ events daily with zero data loss.',
    technology: ['Node.js', 'React', 'Kafka', 'AWS ECS', 'PostgreSQL'],
    impact: [
      { label: 'Latency Reduction', value: '99%' },
      { label: 'Operational Efficiency', value: '+40%' }
    ],
    device: 'laptop', // laptop or phone
    alignment: 'left', // text on left or right
    theme: 'theme-indigo', // signature color accent
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    name: 'Nexus Health Portal',
    industry: 'Healthcare',
    challenge: 'Patient data was heavily siloed across 4 different legacy EHR systems, making holistic care impossible and slowing down critical decisions.',
    solution: 'Built a HIPAA-compliant unified data lake and an intuitive practitioner dashboard featuring predictive AI alerts for critical patients.',
    technology: ['Python', 'Next.js', 'AWS HealthLake', 'TensorFlow'],
    impact: [
      { label: 'Unified Records', value: '2.4M' },
      { label: 'Response Time', value: '-25%' }
    ],
    device: 'phone',
    alignment: 'right',
    theme: 'theme-purple',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    name: 'FinFlow Enterprise',
    industry: 'Financial Services',
    challenge: 'Manual reconciliation processes required a team of 40 analysts and resulted in a 3% error rate in monthly compliance reporting.',
    solution: 'Deployed a custom machine learning pipeline that automates ledger reconciliation and flags anomalous transactions with 99.9% accuracy.',
    technology: ['Go', 'Vue.js', 'Snowflake', 'PyTorch'],
    impact: [
      { label: 'Manual Effort', value: '-85%' },
      { label: 'Error Rate', value: '0.1%' }
    ],
    device: 'laptop',
    alignment: 'left',
    theme: 'theme-cyan',
    images: [
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

const ProjectCard = ({ project, index, isMobile }) => {
  return (
    <div className={`editorial-project-wrapper ${project.theme}`}>
      {/* Background Aurora Lighting for emotion */}
      {!isMobile && <div className="project-aurora-bg"></div>}
      
      <div className={`editorial-project-card ${project.alignment === 'right' ? 'reverse-layout' : ''}`}>
        
        {isMobile && (
          <div className="mobile-portfolio-visual">
            <div className="mobile-swipe-carousel">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.name} preview ${i+1}`} className="mobile-carousel-image" />
              ))}
            </div>
            <div className="mobile-swipe-hint">Swipe to view more</div>
          </div>
        )}

        {/* Text Content */}
        <div className="editorial-content">
          <div className="editorial-meta">
            <span className="editorial-index">0{index + 1}</span>
            <span className="editorial-industry">{project.industry}</span>
          </div>
          
          <h2 className="editorial-title">{project.name}</h2>
          
          <div className="editorial-body">
            <div className="editorial-section">
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            
            <div className="editorial-section">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
          
          <div className="editorial-metrics">
            {project.impact.map((metric, i) => (
              <div key={i} className="metric-item">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
          
          <div className="editorial-tech">
            {project.technology.map((tech, i) => (
              <span key={i} className="editorial-tech-tag">{tech}</span>
            ))}
          </div>
          
          <a href="#" className="editorial-cta">
            Read Full Story <ChevronRight size={16} />
          </a>
        </div>
        
        {/* Visual Content (CSS Device Mockups for Desktop) */}
        {!isMobile && (
          <div className="editorial-visual">
            {project.device === 'laptop' ? (
              <div className="device-laptop">
                <div className="laptop-screen">
                  <div className="laptop-ui">
                    <div className="laptop-ui-header"></div>
                    <div className="laptop-ui-body">
                      <div className="laptop-ui-sidebar"></div>
                      <div className="laptop-ui-main">
                        <div className="laptop-ui-card top"></div>
                        <div className="laptop-ui-grid">
                          <div className="laptop-ui-card"></div>
                          <div className="laptop-ui-card"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base">
                  <div className="laptop-trackpad"></div>
                </div>
              </div>
            ) : (
              <div className="device-phone-group">
                <div className="device-phone phone-back">
                  <div className="phone-screen">
                    <div className="phone-ui">
                      <div className="phone-ui-header"></div>
                      <div className="phone-ui-card large"></div>
                      <div className="phone-ui-card small"></div>
                      <div className="phone-ui-card small"></div>
                    </div>
                  </div>
                </div>
                <div className="device-phone phone-front">
                  <div className="phone-screen">
                    <div className="phone-ui dark">
                      <div className="phone-ui-header"></div>
                      <div className="phone-ui-chart"></div>
                      <div className="phone-ui-card medium"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mQuery.addEventListener('change', handleResize);
    return () => mQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <section className="selected-work-section" id="work">
      <div className="container">
        <div className="editorial-header">
          <span className="editorial-subtitle">SELECTED WORK</span>
          <h2 className="editorial-main-title">Stories Behind the Software.</h2>
        </div>
      </div>
      
      <div className={`sticky-stack-container ${isMobile ? 'mobile-linear-stack' : ''}`}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
