import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Stats.css';

const statsData = [
  { label: 'Projects Delivered', value: 150, suffix: '+' },
  { label: 'Years Combined Experience', value: 40, suffix: '+' },
  { label: 'Client Satisfaction', value: 99, suffix: '%' },
  { label: 'Countries Served', value: 12, suffix: '' }
];

const Counter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // ease out quad
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="stat-number">
      {count}{suffix}
    </span>
  );
};

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="stat-card">
              <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
