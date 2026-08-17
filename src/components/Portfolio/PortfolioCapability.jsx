import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Layout, TrendingUp } from 'lucide-react';
import './PortfolioComponents.css';

const capabilities = [
  {
    icon: <BrainCircuit size={32} />,
    title: "AI & AUTOMATION",
    desc: "Autonomous agents, intelligent workflows and AI-powered systems."
  },
  {
    icon: <Code2 size={32} />,
    title: "SOFTWARE & PLATFORMS",
    desc: "Business applications and scalable web platforms."
  },
  {
    icon: <Layout size={32} />,
    title: "DIGITAL EXPERIENCES",
    desc: "Interfaces designed around usability, clarity and business goals."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "DIGITAL GROWTH",
    desc: "Content, creative and social media execution in collaboration with clients."
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PortfolioCapability = () => {
  return (
    <section className="portfolio-capability">
      <div className="container">
        <div className="portfolio-capability-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            More than websites.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our work spans the systems behind digital businesses — from intelligent automation and software platforms to e-commerce and digital experiences.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="portfolio-capability-grid"
        >
          {capabilities.map((cap, idx) => (
            <motion.div variants={fadeUp} key={idx} className="portfolio-cap-block">
              <div className="portfolio-cap-icon text-gradient">
                {cap.icon}
              </div>
              <h3 className="portfolio-cap-title">{cap.title}</h3>
              <p className="portfolio-cap-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCapability;
