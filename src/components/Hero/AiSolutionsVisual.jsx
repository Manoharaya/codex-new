import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Database, Cloud, Brain, CheckCircle, Zap } from 'lucide-react';
import './AiSolutionsVisual.css';

const AiSolutionsVisual = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStage(0);
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(1); // Inputs active
        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) return;

        setStage(2); // Data traveling
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(3); // Engine: Understand
        await new Promise(r => setTimeout(r, 700));
        if (!isMounted) return;

        setStage(4); // Engine: Reason
        await new Promise(r => setTimeout(r, 700));
        if (!isMounted) return;

        setStage(5); // Engine: Decide
        await new Promise(r => setTimeout(r, 700));
        if (!isMounted) return;

        setStage(6); // AI Decision appears
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(7); // Business Rules validate
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;

        setStage(8); // Action Completed
        await new Promise(r => setTimeout(r, 2500));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="ai-system-wrapper">
      
      {/* Header */}
      <div className="ai-sys-header">
        <div className="ai-micro-label">INTELLIGENT WORKFLOW</div>
        <div className="ai-sys-status">
          <div className="status-dot-pulse"></div>
          AI PIPELINE ACTIVE
        </div>
      </div>

      {/* Main Flow Architecture */}
      <div className="ai-architecture">
        
        {/* Layer 1: Inputs */}
        <div className="ai-inputs-layer">
          <motion.div className="ai-source-chip" animate={{ borderColor: stage >= 1 ? 'rgba(111, 63, 245, 0.4)' : 'transparent' }}>
            <div className="chip-icon"><FileText size={14}/></div>
            <div className="chip-info">
              <span className="chip-type">PDF DOCUMENT</span>
              <span className="chip-val">invoice.pdf</span>
            </div>
            <div className={`chip-indicator ${stage >= 1 ? 'active' : ''}`}></div>
          </motion.div>

          <motion.div className="ai-source-chip" animate={{ borderColor: stage >= 1 ? 'rgba(32, 216, 255, 0.4)' : 'transparent' }}>
            <div className="chip-icon"><Database size={14}/></div>
            <div className="chip-info">
              <span className="chip-type">CRM SYSTEM</span>
              <span className="chip-val">Customer Data</span>
            </div>
            <div className={`chip-indicator ${stage >= 1 ? 'active' : ''}`}></div>
          </motion.div>

          <motion.div className="ai-source-chip" animate={{ borderColor: stage >= 1 ? 'rgba(111, 63, 245, 0.4)' : 'transparent' }}>
            <div className="chip-icon"><Cloud size={14}/></div>
            <div className="chip-info">
              <span className="chip-type">LIVE API</span>
              <span className="chip-val">Order Stream</span>
            </div>
            <div className={`chip-indicator ${stage >= 1 ? 'active' : ''}`}></div>
          </motion.div>

          {/* SVG Connections for Desktop */}
          <svg className="desktop-connections" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            <path className="conn-path" d="M 16.6 100 C 16.6 150, 50 120, 50 200" />
            <path className="conn-path" d="M 50 100 L 50 200" />
            <path className="conn-path" d="M 83.3 100 C 83.3 150, 50 120, 50 200" />
            
            {stage === 2 && (
              <>
                <circle cx="0" cy="0" r="3" fill="var(--brand-accent)" filter="drop-shadow(0 0 4px var(--brand-accent))">
                  <animateMotion dur="0.6s" repeatCount="1" path="M 16.6 100 C 16.6 150, 50 120, 50 200" fill="freeze" />
                </circle>
                <circle cx="0" cy="0" r="3" fill="var(--brand-accent)" filter="drop-shadow(0 0 4px var(--brand-accent))">
                  <animateMotion dur="0.6s" repeatCount="1" path="M 50 100 L 50 200" fill="freeze" />
                </circle>
                <circle cx="0" cy="0" r="3" fill="var(--brand-accent)" filter="drop-shadow(0 0 4px var(--brand-accent))">
                  <animateMotion dur="0.6s" repeatCount="1" path="M 83.3 100 C 83.3 150, 50 120, 50 200" fill="freeze" />
                </circle>
              </>
            )}
          </svg>
        </div>

        {/* Layer 2: AI Engine */}
        <motion.div 
          className={`ai-engine-module ${stage >= 3 && stage <= 5 ? 'processing' : ''}`}
        >
          <div className="engine-mod-header">
            <span className="engine-mod-title"><Brain size={16} className="mod-icon"/> AI ENGINE</span>
            {stage >= 3 && stage <= 5 && <span className="engine-mod-status"><Zap size={12}/> PROCESSING</span>}
          </div>
          
          <div className="engine-mod-body">
            <div className="engine-stages-list">
              <div className={`e-stage ${stage === 3 ? 'active' : stage > 3 ? 'done' : ''}`}>
                <span className="e-dot"></span> UNDERSTAND
              </div>
              <div className={`e-stage ${stage === 4 ? 'active' : stage > 4 ? 'done' : ''}`}>
                <span className="e-dot"></span> REASON
              </div>
              <div className={`e-stage ${stage === 5 ? 'active' : stage > 5 ? 'done' : ''}`}>
                <span className="e-dot"></span> DECIDE
              </div>
            </div>

            <div className="engine-core-visual">
              <div className="core-ring r1"></div>
              <div className="core-ring r2"></div>
              <div className="core-ring r3"></div>
              <div className={`core-particle ${stage >= 3 && stage <= 5 ? 'spin' : ''}`}></div>
            </div>
          </div>
        </motion.div>

        {/* Short connector */}
        <div className="vert-connector"><div className={`pulse-drop ${stage === 6 ? 'drop' : ''}`}></div></div>

        {/* Layer 3: Decision & Rules (Side by Side on Desktop, Stacked on Mobile) */}
        <div className="ai-logic-layer">
          <motion.div 
            className="logic-card decision-card"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: stage >= 6 ? 1 : 0.3, 
              borderColor: stage >= 6 ? 'rgba(111, 63, 245, 0.4)' : 'rgba(255,255,255,0.05)'
            }}
          >
            <div className="logic-card-header">AI DECISION</div>
            <div className="decision-val">Customer qualifies</div>
            <div className="decision-conf">Confidence 94%</div>
          </motion.div>

          {/* Horizontal connector on Desktop */}
          <svg className="horiz-connector desktop-only"><line x1="0" y1="50%" x2="100%" y2="50%"/></svg>
          <div className="vert-connector mobile-only"><div className={`pulse-drop ${stage === 7 ? 'drop' : ''}`}></div></div>

          <motion.div 
            className="logic-card rules-card"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: stage >= 7 ? 1 : 0.3,
              borderColor: stage >= 7 ? 'rgba(32, 216, 255, 0.4)' : 'rgba(255,255,255,0.05)'
            }}
          >
            <div className="logic-card-header">BUSINESS RULES</div>
            <div className="rules-list">
              <span className={`rule-item ${stage >= 7 ? 'check' : ''}`}>Validation</span>
              <span className={`rule-item ${stage >= 7 ? 'check' : ''}`}>Policy</span>
              <span className={`rule-item ${stage >= 7 ? 'check' : ''}`}>Routing</span>
            </div>
          </motion.div>
        </div>

        {/* Short connector */}
        <div className="vert-connector"><div className={`pulse-drop ${stage === 8 ? 'drop' : ''}`}></div></div>

        {/* Layer 4: Action Completed */}
        <motion.div 
          className="action-card"
          initial={{ opacity: 0.3, scale: 0.98 }}
          animate={{ 
            opacity: stage === 8 ? 1 : 0.3,
            scale: stage === 8 ? 1 : 0.98,
            boxShadow: stage === 8 ? '0 10px 40px rgba(32, 216, 255, 0.15)' : 'none'
          }}
        >
          <div className="action-icon-wrapper">
            <CheckCircle size={20} className="action-success-icon" />
          </div>
          <div className="action-details">
            <div className="action-title">ACTION COMPLETED</div>
            <div className="action-subtitle">Customer record updated &bull; Workflow triggered</div>
          </div>
        </motion.div>

      </div>

      {/* Editorial Footer */}
      <div className="ai-editorial-footer">
        FROM DATA TO INTELLIGENT ACTION.
      </div>

    </div>
  );
};

export default AiSolutionsVisual;
