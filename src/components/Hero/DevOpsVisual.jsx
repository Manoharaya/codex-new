import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  GitBranch, Box, ShieldCheck, CloudLightning, Activity, 
  Server, Layout, Database, CheckCircle2, AlertTriangle, PlayCircle
} from 'lucide-react';
import './DevOpsVisual.css';

const PIPELINE_NODES = [
  { id: 0, label: 'SOURCE', icon: <GitBranch size={20} /> },
  { id: 1, label: 'BUILD', icon: <Box size={20} /> },
  { id: 2, label: 'TEST', icon: <ShieldCheck size={20} /> },
  { id: 3, label: 'DEPLOY', icon: <CloudLightning size={20} /> },
  { id: 4, label: 'MONITOR', icon: <Activity size={20} /> }
];

const DevOpsVisual = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px 0px" });
  
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredNode, setHoveredNode] = useState(null);
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

  // Main automatic loop
  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;
    let timerId;

    const runLoop = async () => {
      while (isMounted) {
        setActiveStep(0); // SOURCE (0-2s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(1); // BUILD (2-4s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(2); // TEST (4-6s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(3); // DEPLOY (6-8s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(4); // MONITOR (8-10s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(5); // INCIDENT (10-12s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;

        setActiveStep(6); // RECOVERY (12-14s)
        await new Promise(r => { timerId = setTimeout(r, 2000); });
        if (!isMounted) return;
      }
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, [isInView]);

  const visualStep = activeStep;

  // Packet coordinates
  const getPacketProps = () => {
    if (isMobile) {
      // Mobile vertical routing
      if (visualStep === 0) return { top: '15%', left: '20px', opacity: 1 };
      if (visualStep === 1) return { top: '28%', left: '20px', opacity: 1 };
      if (visualStep === 2) return { top: '41%', left: '20px', opacity: 1 };
      if (visualStep === 3) return { top: '54%', left: '20px', opacity: 1 };
      if (visualStep >= 4) return { top: '67%', left: '20px', opacity: 1 };
    } else {
      // Desktop horizontal routing
      if (visualStep === 0) return { left: '15%', top: '25%', opacity: 1, scale: 1 };
      if (visualStep === 1) return { left: '32.5%', top: '25%', opacity: 1, scale: 1 };
      if (visualStep === 2) return { left: '50%', top: '25%', opacity: 1, scale: 1 };
      if (visualStep === 3) return { left: '67.5%', top: '25%', opacity: 1, scale: 1 };
      if (visualStep === 4) return { left: ['67.5%', '85%', '50%'], top: ['25%', '25%', '65%'], opacity: [1, 1, 0], scale: [1, 1, 0.5], transition: { duration: 1.5, ease: "easeInOut" } };
      return { left: '15%', top: '25%', opacity: 0, scale: 0 };
    }
    return { left: '15%', top: '25%', opacity: 0 };
  };

  const packetProps = getPacketProps();

  const renderHoverCard = (nodeId) => {
    if (hoveredNode !== nodeId) return null;

    let content = null;
    switch(nodeId) {
      case 0: content = <><div className="hc-title">Source Control</div><div className="hc-list"><div className="hc-item">Main branch</div><div className="hc-item">Commit #482</div></div></>; break;
      case 1: content = <><div className="hc-title">Build Process</div><div className="hc-list"><div className="hc-item">Container image</div><div className="hc-item"><CheckCircle2 size={12} color="var(--do-cyan)"/> Build successful</div></div></>; break;
      case 2: content = <><div className="hc-title">Test Suite</div><div className="hc-list"><div className="hc-item"><CheckCircle2 size={12} color="var(--do-cyan)"/> Unit tests</div><div className="hc-item"><CheckCircle2 size={12} color="var(--do-cyan)"/> Integration</div><div className="hc-item"><CheckCircle2 size={12} color="var(--do-cyan)"/> Security scan</div></div></>; break;
      case 3: content = <><div className="hc-title">Deployment</div><div className="hc-list"><div className="hc-item">Production</div><div className="hc-item">US-East</div><div className="hc-item">3 Instances</div></div></>; break;
      case 4: content = <><div className="hc-title">Telemetry</div><div className="hc-list"><div className="hc-item">Tracing active</div><div className="hc-item">Logs forwarded</div></div></>; break;
    }

    return (
      <motion.div 
        key={`hover-card-${nodeId}`}
        className="do-hover-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        {content}
      </motion.div>
    );
  };

  return (
    <div className="devops-container" ref={containerRef}>
      <div className="devops-bg-grid" />
      
      <div className="devops-header">
        {/* <div className="do-title">DEVOPS</div> */}
        <div className="do-status">
          <div className="dot" />
          PIPELINE HEALTHY
        </div>
      </div>

      <div className="pipeline-row" onMouseLeave={() => setHoveredNode(null)}>
        {!isMobile && (
          <div className="do-svg-overlay">
            <svg width="100%" height="100%">
              <line x1="15%" y1="25%" x2="85%" y2="25%" stroke="var(--glass-border)" strokeWidth="1" strokeDasharray="4 4" />
              <motion.line 
                x1="15%" y1="25%" x2="85%" y2="25%" 
                stroke="var(--do-cyan)" strokeWidth="2" 
                initial={{ strokeDasharray: "0 1000" }}
                animate={{ strokeDasharray: `${Math.min(visualStep * 25, 100)}% 1000` }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>
          </div>
        )}

        {!isMobile && !prefersReducedMotion && (
          <motion.div 
            className="do-packet"
            initial={false}
            animate={{ left: packetProps.left, top: packetProps.top, opacity: packetProps.opacity, scale: packetProps.scale }}
            transition={packetProps.transition || { duration: 1.8, ease: "easeInOut" }}
          />
        )}

        {PIPELINE_NODES.map((node) => (
          <div 
            key={node.id} 
            className={`pl-node ${visualStep === node.id || hoveredNode === node.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredNode(node.id)}
          >
            <div className="pl-icon-wrap">{node.icon}</div>
            <div className="pl-label">{node.label}</div>
            
            <AnimatePresence>
              {visualStep === node.id && (
                <motion.div key={`status-${node.id}`} className="pl-status-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {node.id === 0 && 'commit #482'}
                  {node.id === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{color: 'var(--text-primary)'}}>Building...</span>
                      <div className="build-progress"><motion.div className="build-fill" initial={{width: 0}} animate={{width: '100%'}} transition={{duration: 1.8}}/></div>
                    </div>
                  )}
                  {node.id === 2 && '148 tests passed'}
                  {node.id === 3 && 'Deploying...'}
                  {node.id === 4 && 'Monitoring active'}
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>{renderHoverCard(node.id)}</AnimatePresence>
          </div>
        ))}
      </div>

      <div className="production-env">
        <div className="prod-title">PRODUCTION ENVIRONMENT</div>
        
        <div className="prod-nodes">
          <div className="prod-card" style={visualStep === 5 ? { borderColor: 'rgba(239, 68, 68, 0.4)', boxShadow: '0 0 20px rgba(239, 68, 68, 0.15)' } : {}}>
            <div className="prod-card-hdr" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Server size={14}/> API</div>
            <div className="prod-card-status">
              <div className={`card-dot ${visualStep === 5 ? 'issue' : ''}`} />
              <AnimatePresence mode="wait">
                <motion.span key={visualStep === 5 ? 'issue' : 'healthy'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                  {visualStep === 5 ? <span style={{color: 'var(--do-red)'}}>⚠ High latency</span> : 'Healthy'}
                </motion.span>
              </AnimatePresence>
            </div>
            {visualStep === 6 && (
              <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
                <div className="recovery-pulse" />
              </div>
            )}
            {visualStep === 6 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: -30 }} exit={{ opacity: 0 }}
                style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: '10px', color: 'var(--do-cyan)', fontWeight: 'bold' }}
              >
                Auto recovery ✓
              </motion.div>
            )}
          </div>

          <div className="prod-card">
            <div className="prod-card-hdr" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Layout size={14}/> WEB APP</div>
            <div className="prod-card-status"><div className="card-dot" /> Healthy</div>
          </div>

          <div className="prod-card">
            <div className="prod-card-hdr" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Database size={14}/> DATABASE</div>
            <div className="prod-card-status"><div className="card-dot" /> Healthy</div>
          </div>
        </div>

        <div className="monitoring-metrics">
          <div className="metric">
            <div className="m-val">
              {visualStep === 5 ? <span style={{color: 'var(--do-red)'}}>480ms</span> : '12ms'}
            </div>
            <div className="m-lbl">Latency</div>
          </div>
          <div className="metric">
            <div className="m-val">99.99%</div>
            <div className="m-lbl">Uptime</div>
          </div>
          <div className="metric">
            <div className="m-val">24.5k</div>
            <div className="m-lbl">Requests</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DevOpsVisual;
