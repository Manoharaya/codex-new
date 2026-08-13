import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Linkedin, Github, User } from 'lucide-react';
import './Team.css';

const teamData = [
  {
    name: 'Aman Yadav',
    role: 'Advisor & Data Analysis Specialist',
    badges: ['Advisor', 'Data'],
    desc: 'Providing strategic guidance and extracting actionable insights from complex datasets. Driving data-driven decision making and business intelligence.',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Manohar Singh',
    role: 'Founder & CEO',
    badges: ['Founding Member', 'CEO'],
    desc: 'Leading strategic vision and operational excellence. Orchestrating business development, client relations, and day-to-day company operations.',
    linkedin: 'https://www.linkedin.com/in/manohar-cn',
    github: 'https://github.com/Manoharaya'
  },
  {
    name: 'Anuj Pokhrel',
    role: 'CTO & Backend Developer',
    badges: ['Founding Member', 'CTO'],
    desc: 'Architecting scalable backend systems and leading technical strategy. Building robust server infrastructure with focus on security, performance, and reliability.',
    linkedin: 'https://www.linkedin.com/in/anujpokharel2468',
    github: 'https://github.com/Anuj12Pokharel'
  },
  {
    name: 'Rahul Sah',
    role: 'Backend Specialist',
    badges: ['Core Team', 'Backend'],
    desc: 'Specializing in the development of robust, scalable backend architectures. Ensuring high performance and seamless server-side integration.',
    linkedin: 'https://www.linkedin.com/in/rahul-kumar-sah-b77885148/',
    github: 'https://github.com/rahul-4321/'
  },
  {
    name: 'Anjali Singh',
    role: 'Frontend Developer & UI/UX Designer',
    badges: ['Core Team', 'Design'],
    desc: 'Crafting responsive, performant user interfaces with modern frameworks. Designing intuitive user experiences and transforming them into pixel-perfect, interactive implementations.',
    linkedin: 'https://www.linkedin.com/in/anjali-singh-11138b271/',
    github: 'https://github.com/Anjalisingh44'
  },
  {
    name: 'Priti Gupta',
    role: 'SEO Specialist',
    badges: ['Marketing', 'SEO'],
    desc: 'Optimizing digital presence and search visibility. Implementing data-driven SEO strategies to drive organic growth and improve search rankings.',
    linkedin: 'https://www.linkedin.com/in/priti-gupta-1b5a68217',
    github: 'https://github.com/priteegupta'
  },
  {
    name: 'Bibek Sah',
    role: 'Automation Engineer',
    badges: ['Core Team', 'DevOps'],
    desc: 'Building intelligent automation pipelines and CI/CD workflows. Streamlining development processes through infrastructure as code and DevOps practices.',
    linkedin: 'https://www.linkedin.com/in/bibek-shah-8b460b2bb/',
    github: 'https://github.com/bibekshah220'
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
                        {member.linkedin && member.linkedin !== '#' && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${member.name} LinkedIn`}>
                            <Linkedin size={18} />
                          </a>
                        )}
                        {member.github && member.github !== '#' && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${member.name} GitHub`}>
                            <Github size={18} />
                          </a>
                        )}
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
