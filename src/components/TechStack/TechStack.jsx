import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiDocker,
  SiGooglegemini,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiRedis
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Brain } from 'lucide-react';
import './TechStack.css';

// Shuffled list of technologies with their official brand colors
const shuffledTechs = [
  { name: 'Python', icon: <SiPython size={24} color="#3776AB" /> },
  { name: 'React', icon: <SiReact size={24} color="#61DAFB" /> },
  { name: 'AWS', icon: <FaAws size={24} color="#FF9900" /> },
  { name: 'MongoDB', icon: <SiMongodb size={24} color="#47A248" /> },
  { name: '.NET', icon: <SiDotnet size={24} color="#512BD4" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={24} color="#339933" /> },
  { name: 'Gemini', icon: <SiGooglegemini size={24} color="#8E75B2" /> },
  { name: 'Docker', icon: <SiDocker size={24} color="#2496ED" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={24} className="theme-adapt-icon" /> },
  { name: 'Redis', icon: <SiRedis size={24} color="#DC382D" /> },
  { name: 'Vue', icon: <SiVuedotjs size={24} color="#4FC08D" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={24} color="#4169E1" /> },
  { name: 'OpenAI', icon: <Brain size={24} className="theme-adapt-icon" /> },
  { name: 'Azure', icon: <VscAzure size={24} color="#0089D6" /> },
  { name: 'LangChain', icon: <SiLangchain size={24} className="theme-adapt-icon" /> }
];

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: 'var(--space-48)' }}>
          <span className="section-subtitle">TECHNOLOGY</span>
          <h2 className="section-title">
            Built Using <span className="text-gradient">Modern Technologies.</span>
          </h2>
        </div>
      </div>
      
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {/* First set of technologies */}
          {shuffledTechs.map((tech, i) => (
            <div key={`set1-${i}`} className="tech-marquee-item glass-card">
              <span className="tech-marquee-icon">{tech.icon}</span>
              <span className="tech-marquee-name">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {shuffledTechs.map((tech, i) => (
            <div key={`set2-${i}`} className="tech-marquee-item glass-card">
              <span className="tech-marquee-icon">{tech.icon}</span>
              <span className="tech-marquee-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
