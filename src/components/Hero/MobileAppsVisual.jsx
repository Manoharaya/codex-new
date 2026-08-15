import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Smartphone, Network, Server, ArrowDownUp, RefreshCw, Activity, Bell, Search } from 'lucide-react';
import './MobileAppsVisual.css';

const STAGES = [
  { id: 0, label: 'Mobile UI', icon: <Smartphone size={16} />, tooltip: 'User interaction & local state' },
  { id: 1, label: 'API Request', icon: <Network size={16} />, tooltip: 'GraphQL/REST mutation sent' },
  { id: 2, label: 'Backend', icon: <Server size={16} />, tooltip: 'Business logic + database processing' },
  { id: 3, label: 'Response', icon: <ArrowDownUp size={16} />, tooltip: 'Data returned to client' },
  { id: 4, label: 'Updated UI', icon: <RefreshCw size={16} />, tooltip: 'Interface re-renders automatically' }
];

const MobileAppsVisual = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px 0px" });

  const [activeStage, setActiveStage] = useState(0);
  const [hoveredStage, setHoveredStage] = useState(null);
  const [touchPos, setTouchPos] = useState({ x: '50%', y: '80%', opacity: 0, scale: 1 });
  const [showRipple, setShowRipple] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 834);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main automatic animation loop
  useEffect(() => {
    if (!isInView) return; // Pause when out of view

    let isMounted = true;
    let timerId;

    const runLoop = async () => {
      while (isMounted) {
        // Stage 0: Mobile UI (0s - 2s)
        setActiveStage(0);
        // Reset phone UI state internally via activeStage
        if (!prefersReducedMotion) {
          setTouchPos({ x: '50%', y: '75%', opacity: 0, scale: 1 });
          timerId = setTimeout(() => {
            if (!isMounted) return;
            setTouchPos({ x: '50%', y: '45%', opacity: 1, scale: 1 });
          }, 800);
          await new Promise(r => { timerId = setTimeout(r, 1600); });
          if (!isMounted) return;
          setTouchPos(prev => ({ ...prev, scale: 0.8 }));
          setShowRipple(true);
          await new Promise(r => { timerId = setTimeout(r, 200); });
          if (!isMounted) return;
          setTouchPos(prev => ({ ...prev, scale: 1 }));
          await new Promise(r => { timerId = setTimeout(r, 200); });
          if (!isMounted) return;
          setTouchPos(prev => ({ ...prev, opacity: 0 }));
        } else {
          await new Promise(r => { timerId = setTimeout(r, 2000); });
        }

        if (!isMounted) return;

        // Stage 1: API Request (2s - 4s)
        setActiveStage(1);
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        // Stage 2: Backend (4s - 6s)
        setActiveStage(2);
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        // Stage 3: Response (6s - 8s)
        setActiveStage(3);
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        // Stage 4: Updated UI (8s - 11.5s)
        setActiveStage(4);
        await new Promise(r => { timerId = setTimeout(r, 3500); }); // 2s active + 1.5s pause on completed state
        if (!isMounted) return;
      }
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, [isInView, prefersReducedMotion]);

  // Derived visual state allows hover to temporarily emphasize areas, without breaking the underlying activeStage
  const visualStage = hoveredStage !== null ? hoveredStage : activeStage;

  // Signal coordinates based on activeStage (not visualStage, so packet always syncs with logic)
  const getSignalProps = () => {
    if (activeStage === 0 || activeStage === 4) {
      return { 
        left: '45%', top: '50%', opacity: 0, 
        transition: { duration: 0.2 },
        background: 'linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))',
        boxShadow: '0 0 12px var(--brand-cyan), 0 0 24px var(--brand-purple)'
      };
    }
    if (activeStage === 1) {
      return { 
        left: '72%', top: '38%', opacity: 1, 
        transition: { duration: 1.8, ease: "easeInOut" },
        background: 'linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))',
        boxShadow: '0 0 12px var(--brand-cyan), 0 0 24px var(--brand-purple)'
      };
    }
    if (activeStage === 2) {
      return { 
        left: '72%', top: '62%', opacity: 1, 
        transition: { duration: 1.8, ease: "easeInOut" },
        background: 'linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))',
        boxShadow: '0 0 12px var(--brand-cyan), 0 0 24px var(--brand-purple)'
      };
    }
    if (activeStage === 3) {
      // Travels from Backend -> Gateway -> Phone
      return { 
        left: ['72%', '72%', '45%'], 
        top: ['62%', '38%', '50%'], 
        opacity: 1, 
        transition: { duration: 1.8, ease: "easeInOut", times: [0, 0.3, 1] },
        background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-purple))', // reversed gradient for return
        boxShadow: '0 0 12px var(--brand-purple), 0 0 24px var(--brand-cyan)'
      };
    }
    return { left: '45%', top: '50%', opacity: 0, transition: { duration: 0 } };
  };

  const renderConnectionLines = () => {
    if (isMobile) return null;
    return (
      <div className="data-connections-overlay">
        <svg className="data-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M 45 50 C 55 50, 60 38, 72 38" 
            stroke={visualStage >= 1 && visualStage < 4 ? 'var(--brand-cyan)' : 'var(--glass-border)'} 
            strokeWidth="0.15" 
            fill="none" 
            strokeDasharray="0.5 1"
            style={{ opacity: 0.6 }}
          />
          <motion.path 
            d="M 72 38 L 72 62" 
            stroke={visualStage >= 2 && visualStage < 4 ? 'var(--brand-purple)' : 'var(--glass-border)'} 
            strokeWidth="0.15" 
            fill="none" 
            strokeDasharray="0.5 1"
            style={{ opacity: 0.6 }}
          />
          <motion.path 
            d="M 72 62 C 60 62, 55 50, 45 50" 
            stroke={visualStage === 3 ? 'var(--brand-cyan)' : 'var(--glass-border)'} 
            strokeWidth="0.15" 
            fill="none" 
            strokeDasharray="0.5 1"
            style={{ opacity: 0.6 }}
          />
        </svg>
      </div>
    );
  };

  const signalProps = getSignalProps();

  return (
    <div className="mobile-apps-container" ref={containerRef}>
      <div className="mobile-bg-grid" />
      
      <div className="mobile-header-area">
        <div className="live-status-badge">
          <div className="dot" />
          APP ONLINE
        </div>
      </div>

      <div className="mobile-showcase-grid">
        
        {renderConnectionLines()}

        {/* Data Packet Animation */}
        {!isMobile && !prefersReducedMotion && (
          <motion.div 
            className="data-packet"
            initial={false}
            animate={{ 
              left: signalProps.left, 
              top: signalProps.top, 
              opacity: signalProps.opacity,
              background: signalProps.background,
              boxShadow: signalProps.boxShadow
            }}
            transition={signalProps.transition}
          />
        )}

        {/* Zone 1: Process Timeline */}
        <div className="mobile-process-rail" onMouseLeave={() => setHoveredStage(null)}>
          {STAGES.map((stage, idx) => (
            <div 
              key={stage.id}
              className={`mobile-stage-btn ${visualStage === stage.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredStage(stage.id)}
            >
              <span className="m-stage-num">0{idx + 1}</span>
              <div className="m-stage-icon">{stage.icon}</div>
              <span className="m-stage-label">{stage.label}</span>
              <div className="m-stage-tooltip">{stage.tooltip}</div>
            </div>
          ))}
        </div>

        {/* Zone 2: Mobile Phone Hero */}
        <div className={`mobile-phone-zone ${visualStage === 0 || visualStage === 4 ? 'emphasized' : ''}`}>
          <div className="smart-phone-device">
            <div className="dynamic-island">
              <div className="di-camera" />
            </div>
            
            <div className="phone-screen">
              <div className="phone-reflection" />
              
              <div className="app-header">
                <div className="app-greeting">
                  <h4>Good morning, Alex</h4>
                  <p>Your workspace</p>
                </div>
                <div className="app-avatar" />
              </div>
              
              <div className="app-content">
                <div className="app-card" style={visualStage > 0 ? { borderColor: 'var(--brand-purple)' } : {}}>
                  <div className="app-project-hdr">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div className="app-proj-title">Project Alpha</div>
                      <div className="app-proj-status">{activeStage >= 4 ? 'Completed' : 'In Progress'}</div>
                    </div>
                    <div className="app-proj-perc">{activeStage >= 4 ? '100%' : '72%'}</div>
                  </div>
                  <div className="app-prog-bar">
                    <div className="app-prog-fill" style={{ width: activeStage >= 4 ? '100%' : '72%' }} />
                  </div>
                  {activeStage > 0 && activeStage < 4 && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                      style={{ position: 'absolute', inset: 0, background: 'rgba(20,19,26,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', zIndex: 10 }}
                    >
                      <RefreshCw size={24} className="spinner" color="var(--brand-cyan)" />
                    </motion.div>
                  )}
                </div>
                
                <div className="app-stats-row">
                  <div className="app-stat-box">
                    <div className="app-stat-val">12</div>
                    <div className="app-stat-lbl">TASKS</div>
                  </div>
                  <div className="app-stat-box">
                    <div className="app-stat-val">8</div>
                    <div className="app-stat-lbl">TEAM</div>
                  </div>
                </div>

                <div className="app-section-title">Recent Activity</div>
                <div className="app-activity-list">
                  <AnimatePresence mode="popLayout">
                    {activeStage >= 4 && (
                      <motion.div key="act-success" className="activity-item" initial={{ opacity: 0, height: 0, x: -10 }} animate={{ opacity: 1, height: 'auto', x: 0 }} exit={{ opacity: 0, height: 0 }}>
                        <div className="act-dot cyan" />
                        <div className="act-text">
                          <div className="act-title" style={{color: 'var(--brand-cyan)'}}>Deployment successful</div>
                          <div className="act-time">Just now</div>
                        </div>
                      </motion.div>
                    )}
                    <motion.div key="act-api" className="activity-item" layout>
                      <div className="act-dot purple" />
                      <div className="act-text">
                        <div className="act-title">API integration completed</div>
                        <div className="act-time">2 hours ago</div>
                      </div>
                    </motion.div>
                    <motion.div key="act-design" className="activity-item" layout>
                      <div className="act-dot gray" />
                      <div className="act-text">
                        <div className="act-title">Design system updated</div>
                        <div className="act-time">Yesterday</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="app-nav">
                <div className="app-nav-item active">
                  <Activity size={20} strokeWidth={2.5} />
                  <div className="app-nav-dot" />
                </div>
                <div className="app-nav-item"><Search size={20} strokeWidth={2.5} /><div className="app-nav-dot" /></div>
                <div className="app-nav-item"><Bell size={20} strokeWidth={2.5} /><div className="app-nav-dot" /></div>
              </div>

              {!prefersReducedMotion && (
                <motion.div 
                  className="touch-cursor"
                  animate={{ left: touchPos.x, top: touchPos.y, opacity: touchPos.opacity, scale: touchPos.scale }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                >
                  <AnimatePresence>
                    {showRipple && (
                      <motion.div 
                        key="touch-ripple"
                        className="touch-ripple"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Zone 3: Backend Infrastructure */}
        <div className="mobile-backend-zone">
          <div className={`sys-node ${visualStage >= 1 && visualStage <= 3 ? 'active-api' : ''}`}>
            <div className="node-icon-wrap"><Network size={18} /></div>
            <div className="node-info">
              <div className="node-title">API Gateway</div>
              <div className="node-desc">GraphQL / REST</div>
              <div className="node-status"><div className="node-dot" /> Connected</div>
            </div>
          </div>
          
          <div className="processing-indicator" style={{ opacity: visualStage === 2 ? 1 : 0 }}>
            <div className="proc-dot" /><div className="proc-dot" /><div className="proc-dot" />
          </div>

          <div className={`sys-node ${visualStage >= 2 && visualStage <= 3 ? 'active-backend' : ''}`}>
            <div className="node-icon-wrap"><Server size={18} /></div>
            <div className="node-info">
              <div className="node-title">Core Backend</div>
              <div className="node-desc">Processing & DB</div>
              <div className="node-status"><div className="node-dot" /> Healthy</div>
            </div>
          </div>
        </div>

      </div>

      <div className="mobile-footer-statement">Design. Connect. Deliver.</div>
      
    </div>
  );
};

export default MobileAppsVisual;
