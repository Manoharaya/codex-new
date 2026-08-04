import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Briefcase, Code, Globe, User } from 'lucide-react';
import './Team.css';

const teamData = [
  {
    name: 'Aman Yadav',
    role: 'Advisor & Data Analysis Specialist',
    badges: ['Advisor', 'Data'],
    desc: 'Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.'
  },
  {
    name: 'Manohar Singh',
    role: 'Founder & CEO',
    badges: ['Founding Member', 'CEO'],
    desc: 'Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day company operations.'
  },
  {
    name: 'Anuj Pokhrel',
    role: 'CTO & Lead Architect',
    badges: ['Core Team', 'Engineering'],
    desc: 'Architecting scalable solutions and overseeing technical strategy. Ensuring high performance and robust systems architecture.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
};

const defaultTiltOptions = {
	reverse: false,  
	max: 10,     
	perspective: 1000,   
	scale: 1.02,    
	speed: 1000,   
	transition: true,   
	axis: null,   
	reset: true,    
	easing: "cubic-bezier(.03,.98,.52,.99)",    
}

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="section-header text-center"
        >
          <motion.span variants={itemVariants} className="section-subtitle">ABOUT US</motion.span>
          <motion.h2 variants={itemVariants} className="section-title text-gradient">
            THE NEURAL NETWORK
          </motion.h2>
          <motion.p variants={itemVariants} className="section-desc">
            We architect the invisible systems that power the visible world.
            <br />
            <span className="font-mono text-sm mt-4 inline-block">// ORCHESTRATING DIGITAL RESILIENCE</span>
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="team-grid"
        >
          {teamData.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt options={defaultTiltOptions}>
                <div className="team-card interactive-card">
                  <div className="team-image-placeholder">
                    <User size={64} opacity={0.2} />
                  </div>
                  <div className="team-card-content">
                    <div className="team-badges">
                      {member.badges.map((badge, i) => (
                        <span key={i} className="team-badge">{badge}</span>
                      ))}
                    </div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-desc">
                      <p>{member.desc}</p>
                      <div className="team-socials">
                        <a href="#" className="social-link"><Briefcase size={18} /></a>
                        <a href="#" className="social-link"><Code size={18} /></a>
                        <a href="#" className="social-link"><Globe size={18} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
