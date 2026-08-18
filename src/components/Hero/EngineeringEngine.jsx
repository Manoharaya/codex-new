import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EngineeringEngine.css';

export const WorkflowNode = ({ label, active, icon, style }) => (
  <motion.div 
    className={`workflow-node ${active ? 'active' : ''}`}
    style={style}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {icon && <div className="node-icon">{icon}</div>}
    <div className="node-label">{label}</div>
  </motion.div>
);

export const ConnectionLine = ({ active, path, style }) => (
  <svg className={`connection-line ${active ? 'active' : ''}`} style={style}>
    <motion.path 
      d={path} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeDasharray="4 4"
      animate={active ? { strokeDashoffset: [0, -20] } : {}}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </svg>
);

export const DataPacket = ({ animate, style }) => (
  <motion.div 
    className="engine-data-packet" 
    animate={animate}
    style={style}
  >
    <div className="packet-core"></div>
    <div className="packet-halo"></div>
  </motion.div>
);

export const StatusCard = ({ title, status, type, icon }) => (
  <div className={`status-card status-${type}`}>
    {icon && <div className="status-icon">{icon}</div>}
    <div className="status-content">
      <div className="status-title">{title}</div>
      <div className="status-value">{status}</div>
    </div>
  </div>
);

export const ContextLabel = ({ text }) => (
  <motion.div 
    className="context-label"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    key={text}
  >
    {text}
  </motion.div>
);

import AiSolutionsVisual from './AiSolutionsVisual';
import EnterpriseSoftwareVisual from './EnterpriseSoftwareVisual';
import CloudEngineeringVisual from './CloudEngineeringVisual';
import UiUxDesignVisual from './UiUxDesignVisual';
import MobileAppsVisual from './MobileAppsVisual';
import DevOpsVisual from './DevOpsVisual';

const EngineeringEngine = ({ activeService }) => {
  if (!activeService) return null;

  return (
    <div className="engineering-engine premium-glass">
      <div className="engine-header">
        <span className="engine-service-label">{activeService.name}</span>
      </div>
      
      <div className="engine-visualization-area">
        <AnimatePresence mode="wait">
          {activeService.visualType === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <AiSolutionsVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType === 'enterprise' && (
            <motion.div
              key="enterprise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <EnterpriseSoftwareVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType === 'cloud' && (
            <motion.div
              key="cloud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <CloudEngineeringVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType === 'design' && (
            <motion.div
              key="design"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <UiUxDesignVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType === 'mobile' && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <MobileAppsVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType === 'devops' && (
            <motion.div
              key="devops"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <DevOpsVisual activeService={activeService} />
            </motion.div>
          )}
          {activeService.visualType !== 'ai' && activeService.visualType !== 'enterprise' && activeService.visualType !== 'cloud' && activeService.visualType !== 'design' && activeService.visualType !== 'mobile' && activeService.visualType !== 'devops' && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div className="engine-placeholder">
                Engine loaded for: {activeService.visualType}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="engine-footer">
        <ContextLabel text={activeService.context} />
      </div>
    </div>
  );
};

export default EngineeringEngine;
