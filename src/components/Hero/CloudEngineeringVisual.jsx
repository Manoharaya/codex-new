import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, Box, ShieldCheck, CloudLightning, 
  Database, Server, AppWindow, Cpu, Activity, 
  CheckCircle2, Layers
} from 'lucide-react';
import './CloudEngineeringVisual.css';

const PipelineStep = ({ label, icon: Icon, state }) => {
  const isActive = state === 'active';
  const isCompleted = state === 'completed';
  
  return (
    <div className={`pipeline-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
      <div className="pipeline-icon-wrapper">
        <Icon size={16} />
        {isCompleted && <CheckCircle2 className="step-check" size={14} />}
      </div>
      <span className="step-label">{label}</span>
    </div>
  );
};

const ServiceModule = ({ name, icon: Icon, healthy, instances, scaling, type = 'supporting' }) => {
  return (
    <motion.div 
      className={`service-module ${healthy ? 'healthy' : ''} ${scaling ? 'scaling' : ''} service-${type}`}
      animate={scaling ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="service-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon size={16} className="service-icon" />
          <span className="service-name">{name}</span>
        </div>
        {type === 'primary' && healthy && (
          <div className="service-traffic">
            <span className="traffic-value">{scaling ? '+48%' : '1.2k/min'}</span>
          </div>
        )}
      </div>
      <div className="service-body">
        <div className={`service-status ${healthy ? 'healthy' : ''}`}>
          <div className="dot" />
          <span>{healthy ? 'Healthy' : 'Pending'}</span>
        </div>
        <div className="service-instances">
          <Layers size={10} />
          <AnimatePresence mode="popLayout">
            <motion.span 
              key={instances}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {instances}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {scaling && (
          <motion.div 
            key="scale-badge"
            className="scale-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            SCALING
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CloudEngineeringVisual = () => {
  const [phase, setPhase] = useState(0);
  const [graphBars, setGraphBars] = useState(Array(8).fill(20));
  
  useEffect(() => {
    let interval;
    if (phase >= 4) {
      interval = setInterval(() => {
        setGraphBars(prev => {
          const newBars = [...prev.slice(1), Math.max(10, Math.min(100, prev[prev.length - 1] + (Math.random() * 40 - 20)))];
          return newBars;
        });
      }, 500);
    } else {
      setGraphBars(Array(8).fill(20));
    }
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    let isMounted = true;
    
    const runSequence = async () => {
      while (isMounted) {
        setPhase(0); // Source ready
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;
        
        setPhase(1); // Build
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        setPhase(2); // Test
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        setPhase(3); // Deploy
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        setPhase(4); // Monitor (Healthy)
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        
        setPhase(5); // Traffic spike / Scaling
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break;
        
        setPhase(6); // Scaled
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    
    runSequence();
    
    return () => { isMounted = false; };
  }, []);

  const getStepState = (stepPhase) => {
    if (phase > stepPhase) return 'completed';
    if (phase === stepPhase) return 'active';
    return 'pending';
  };

  const isHealthy = phase >= 4;
  const isScaling = phase === 5;
  const isTrafficActive = phase >= 4;
  const apiInstances = phase >= 6 ? 4 : 3;
  const workerInstances = phase >= 6 ? 3 : 2;

  let cpuValue = "12%";
  if (phase === 5) cpuValue = "84%";
  else if (phase >= 6) cpuValue = "42%";

  return (
    <div className="cloud-engineering-container">
      {/* Header */}
      <div className="cloud-header">
        <span className="cloud-label">INFRASTRUCTURE OPERATIONS</span>
        <div className="cloud-status-badge">
          <div className={`status-dot ${isHealthy ? 'animating' : ''}`} />
          {isHealthy ? 'INFRASTRUCTURE HEALTHY' : 'DEPLOYING'}
        </div>
      </div>

      {/* Deployment Pipeline */}
      <div className="cloud-pipeline">
        <PipelineStep label="SOURCE" icon={GitBranch} state={getStepState(0)} />
        <div className="pipeline-connector">
          <div className="pipeline-connector-fill" style={{ width: phase > 0 ? '100%' : '0%' }} />
        </div>
        <PipelineStep label="BUILD" icon={Box} state={getStepState(1)} />
        <div className="pipeline-connector">
          <div className="pipeline-connector-fill" style={{ width: phase > 1 ? '100%' : '0%' }} />
        </div>
        <PipelineStep label="TEST" icon={ShieldCheck} state={getStepState(2)} />
        <div className="pipeline-connector">
          <div className="pipeline-connector-fill" style={{ width: phase > 2 ? '100%' : '0%' }} />
        </div>
        <PipelineStep label="DEPLOY" icon={CloudLightning} state={getStepState(3)} />
      </div>

      {/* Cloud Environment */}
      <div className={`cloud-environment ${phase === 4 ? 'deploy-pulse' : ''}`}>
        <div className="env-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Server size={14} /> CLOUD REGION - PRODUCTION
          </div>
          {isHealthy && (
            <div className="env-telemetry-mini">
              <div className="dot pulse"></div>
              <span>18ms <span className="divider">•</span> 99.98% uptime</span>
            </div>
          )}
        </div>
        <div className="env-services-grid">
          <ServiceModule name="API Gateway" icon={Activity} healthy={isHealthy} instances={apiInstances} scaling={isScaling} type="primary" />
          <ServiceModule name="Web Application" icon={AppWindow} healthy={isHealthy} instances={2} type="supporting" />
          <ServiceModule name="Primary Database" icon={Database} healthy={isHealthy} instances={1} type="supporting" />
          <ServiceModule name="Background Workers" icon={Cpu} healthy={isHealthy} instances={workerInstances} scaling={isScaling} type="secondary" />
        </div>
      </div>

      {/* Observability */}
      <div className="observability-section">
        <div className="telemetry-panel">
          <div className="telemetry-item">
            <span className="telemetry-label">CPU</span>
            <span className={`telemetry-value ${isScaling ? 'highlight' : ''}`}>{cpuValue}</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">LATENCY</span>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span className="telemetry-value" style={{ width: '48px' }}>{isScaling ? '124ms' : '18ms'}</span>
              <div className="telemetry-graph">
                {graphBars.map((h, i) => (
                  <div 
                    key={i} 
                    className={`graph-bar ${isTrafficActive ? 'active' : ''} ${isScaling ? 'highlight' : ''}`} 
                    style={{ height: `${h}%` }} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="telemetry-item mobile-hidden">
            <span className="telemetry-label">UPTIME</span>
            <span className="telemetry-value">99.98%</span>
          </div>
        </div>
        <div className="health-panel">
          <span className={`health-title ${isHealthy ? 'healthy' : ''}`}>
            <CheckCircle2 size={14} /> {isHealthy ? 'ALL SYSTEMS HEALTHY' : 'PENDING'}
          </span>
          <span className="health-subtitle">
            {isHealthy ? '4 services • 99.98% uptime' : 'Waiting for deployment...'}
          </span>
        </div>
      </div>

    </div>
  );
};

export default CloudEngineeringVisual;
