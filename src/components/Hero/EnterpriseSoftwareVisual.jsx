import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Cpu, Database, Server, CheckCircle, Lock, Layout, Shield } from 'lucide-react';
import './EnterpriseSoftwareVisual.css';

const EnterpriseSoftwareVisual = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStage(0); // Idle
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;

        setStage(1); // App initiates
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(2); // API Processing
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(3); // Business Logic
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;

        setStage(4); // Data & Services
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;

        setStage(5); // Return to App / App Updates
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;

        setStage(6); // Result Completed
        await new Promise(r => setTimeout(r, 2500));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="enterprise-wrapper">
      
      {/* Header */}
      <div className="ent-header">
        <div className="ent-label">SOFTWARE ARCHITECTURE</div>
        <div className="ent-status">
          <div className="ent-dot"></div>
          SYSTEM ONLINE
        </div>
      </div>

      {/* Main Architecture */}
      <div className="ent-architecture">
        
        {/* Layer 1: Application Mockup */}
        <motion.div 
          className={`ent-app-mockup ${stage === 1 || stage === 5 ? 'active' : ''}`}
          animate={{ scale: stage === 1 || stage === 5 ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="app-topbar">
            <div className="app-dots">
              <span className="app-dot"></span><span className="app-dot"></span><span className="app-dot"></span>
            </div>
            <Monitor size={12} style={{ marginLeft: '8px' }}/> ENTERPRISE SYSTEM
          </div>
          <div className="app-body">
            <div className="app-sidebar">
              <div className="app-nav-item active"></div>
              <div className="app-nav-item"></div>
              <div className="app-nav-item"></div>
            </div>
            <div className="app-content">
              <div className="app-metrics">
                <div className="app-metric">
                  <div className="metric-lbl">Active Projects</div>
                  <div className="metric-val">24</div>
                </div>
                <div className="app-metric">
                  <div className="metric-lbl">Revenue</div>
                  <div className="metric-val">$84K</div>
                </div>
              </div>
              <div className="app-table">
                <div className="table-row">
                  <span>Data synchronization</span>
                  <span className={`row-status ${stage >= 5 ? 'completed' : 'pending'}`}>
                    {stage >= 5 ? 'Completed ✓' : 'Processing...'}
                  </span>
                </div>
                <div className="table-row">
                  <span>User access log</span>
                  <span className="row-status completed">Verified ✓</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small connector */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
           <motion.div 
             style={{ width: '3px', height: '100%', background: 'var(--brand-accent)', position: 'absolute', left: '-1px' }}
             initial={{ top: '-100%' }}
             animate={stage === 1 ? { top: '100%' } : { top: '-100%' }}
             transition={{ duration: 0.4 }}
           />
        </div>

        {/* Layer 2: API Gateway */}
        <div className={`arch-module ${stage === 2 ? 'active' : ''}`}>
          <Network size={14} className="arch-icon"/>
          API GATEWAY
          <span className="arch-detail">● {stage >= 2 ? '125' : '124'} req/s</span>
        </div>

        {/* Small connector */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
           <motion.div 
             style={{ width: '3px', height: '100%', background: 'var(--brand-accent)', position: 'absolute', left: '-1px' }}
             initial={{ top: '-100%' }}
             animate={stage === 2 ? { top: '100%' } : { top: '-100%' }}
             transition={{ duration: 0.4 }}
           />
        </div>

        {/* Layer 3: Business Logic */}
        <div className={`arch-module ${stage === 3 ? 'active' : ''}`}>
          <Cpu size={14} className="arch-icon"/>
          BUSINESS LOGIC
          <span className="arch-detail">Validation • Policy</span>
        </div>

        {/* Small connector */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
           <motion.div 
             style={{ width: '3px', height: '100%', background: 'var(--brand-accent)', position: 'absolute', left: '-1px' }}
             initial={{ top: '-100%' }}
             animate={stage === 3 ? { top: '100%' } : stage === 4 ? { top: '-100%', bottom: '100%' } : { top: '-100%' }}
             transition={{ duration: 0.4 }}
           />
        </div>

        {/* Layer 4: Data & Services Split */}
        <div className="split-layer">
          <div className={`arch-module ${stage === 4 ? 'active' : ''}`} style={{ marginBottom: 0 }}>
            <Database size={14} className="arch-icon"/>
            DATABASE
          </div>
          <div className={`arch-module ${stage === 4 ? 'active' : ''}`} style={{ marginBottom: 0 }}>
            <Shield size={14} className="arch-icon"/>
            SERVICES
            <span className="arch-detail">Auth</span>
          </div>
        </div>

        {/* Small connector down to infra */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }}></div>

        {/* Layer 5: Infrastructure */}
        <div className="infra-layer">
          <Server size={12} /> INFRASTRUCTURE
        </div>

        {/* Small connector down to result */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
           <motion.div 
             style={{ width: '3px', height: '100%', background: '#20d8ff', position: 'absolute', left: '-1px' }}
             initial={{ top: '-100%' }}
             animate={stage === 5 ? { top: '100%' } : { top: '-100%' }}
             transition={{ duration: 0.4 }}
           />
        </div>

        {/* Layer 6: Result */}
        <div className={`ent-result ${stage >= 6 ? 'active' : ''}`}>
          <CheckCircle size={20} className="res-icon" />
          <div className="res-text">
            <div className="res-title">REQUEST COMPLETED</div>
            <div className="res-sub">Secure &bull; Scalable &bull; Connected</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EnterpriseSoftwareVisual;
