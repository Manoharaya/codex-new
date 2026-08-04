import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { 
  BrainCircuit, 
  Code2, 
  Globe, 
  Smartphone, 
  Cloud, 
  PenTool,
  ArrowRight
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <BrainCircuit size={32} strokeWidth={1.5} />,
    title: 'AI Solutions',
    desc: 'Integrate intelligent automation and predictive analytics into your business workflows.'
  },
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: 'Custom Software Development',
    desc: 'Scalable, enterprise-grade software engineered specifically for your complex operational needs.'
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'Web Applications',
    desc: 'High-performance, secure web applications built on modern JavaScript and Python stacks.'
  },
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    title: 'Mobile Applications',
    desc: 'Native and cross-platform mobile experiences designed for speed and user engagement.'
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    title: 'Cloud & DevOps',
    desc: 'Robust cloud infrastructure deployment, CI/CD pipelines, and continuous monitoring.'
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: 'UI/UX Design',
    desc: 'Data-driven interface design focused on reducing friction and increasing user retention.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const defaultTiltOptions = {
	reverse: false,  
	max: 5, /* Restrained tilt */
	perspective: 1000,   
	scale: 1.01, /* Restrained scale */
	speed: 1000,   
	transition: true,   
	axis: null,   
	reset: true,    
	easing: "cubic-bezier(.03,.98,.52,.99)",    
}

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header"
        >
          <motion.span variants={itemVariants} className="section-subtitle">WHAT WE BUILD</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            We Build Digital Products That <br /> Solve Real Business Problems.
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="services-grid"
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card-wrapper">
              <Tilt options={defaultTiltOptions} style={{ height: '100%' }}>
                <div className="glass-card service-card">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <a href="#" className="service-link mt-auto">
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
