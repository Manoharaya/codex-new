import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, PenTool, LayoutTemplate, Palette, Sparkles, Search, Bell, LayoutGrid, CheckSquare, BarChart3, Settings, Plus, MousePointer2, Users, CheckCircle2 } from 'lucide-react';
import './UiUxDesignVisual.css';

const STAGES = [
  { id: 0, label: 'Idea', icon: <Lightbulb size={14} />, desc: 'Problem & Concept' },
  { id: 1, label: 'Wireframe', icon: <PenTool size={14} />, desc: 'Layout & Structure' },
  { id: 2, label: 'Prototype', icon: <LayoutTemplate size={14} />, desc: 'Interaction Flow' },
  { id: 3, label: 'Interface', icon: <Palette size={14} />, desc: 'Visual Design' },
  { id: 4, label: 'Experience', icon: <Sparkles size={14} />, desc: 'Final Product' }
];

const STAGE_DURATIONS = [4000, 4000, 5000, 6000, 5000];

const UiUxDesignVisual = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  
  const [cursorPos, setCursorPos] = useState({ x: 150, y: 250, opacity: 0 });
  const [cursorAction, setCursorAction] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const scrollRef = useRef(null);
  const idleTimerRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Check reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  // Manual scroll handler
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    if (!scrollRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) return; // Mobile or no scrollbar
    
    const progress = scrollTop / maxScroll;
    const stage = Math.min(4, Math.max(0, Math.round(progress * 4)));
    
    if (stage !== activeStage) {
      setActiveStage(stage);
    }
  };

  const scrollToStage = (stage, smooth = true) => {
    setActiveStage(stage);
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      if (maxScroll > 0) {
        isProgrammaticScroll.current = true;
        const targetScroll = (stage / 4) * maxScroll;
        scrollRef.current.scrollTo({ top: targetScroll, behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto' });
        
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, smooth ? 800 : 100);
      }
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const handleStageClick = (id) => {
    pauseAutoPlay();
    scrollToStage(id);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;
    
    const timer = setTimeout(() => {
      if (activeStage === 4) {
        // Loop transition
        setIsLooping(true);
        setTimeout(() => {
          scrollToStage(0, false);
          setTimeout(() => setIsLooping(false), 800);
        }, 1500); // Wait 1.5s showing "DESIGN COMPLETE"
      } else {
        scrollToStage(activeStage + 1);
      }
    }, STAGE_DURATIONS[activeStage]);
    
    return () => clearTimeout(timer);
  }, [isAutoPlaying, activeStage, prefersReducedMotion]);

  // Cursor & Modal interactions
  useEffect(() => {
    let isMounted = true;
    
    setModalOpen(false);
    setSuccessToast(false);
    setCursorAction(false);
    
    const runSequence = async () => {
      if (prefersReducedMotion) return;

      if (activeStage === 2) {
        // Prototype cursor
        setCursorPos({ x: 100, y: 150, opacity: 1 });
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;
        setCursorPos({ x: 28, y: 145, opacity: 1 }); // Approx Sidebar nav item
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;
        setCursorAction(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorAction(false);
      } else if (activeStage === 3) {
        // Interface cursor
        setCursorPos({ x: 200, y: 200, opacity: 1 });
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) return;
        setCursorPos({ x: 380, y: 45, opacity: 1 }); // Primary CTA hover
      } else if (activeStage === 4) {
        // Experience interaction
        setCursorPos({ x: 200, y: 300, opacity: 1 });
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;
        setCursorPos({ x: 380, y: 45, opacity: 1 }); // Create btn
        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) return;
        setCursorAction(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorAction(false);
        setModalOpen(true);
        
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;
        setCursorPos({ x: 260, y: 220, opacity: 1 }); // Modal create
        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) return;
        setCursorAction(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorAction(false);
        setModalOpen(false);
        setSuccessToast(true);
        
        await new Promise(r => setTimeout(r, 400));
        setCursorPos({ x: 350, y: 280, opacity: 1 });
      } else {
        setCursorPos(prev => ({ ...prev, opacity: 0 }));
      }
    };
    
    runSequence();
    return () => { isMounted = false; };
  }, [activeStage, prefersReducedMotion]);

  return (
    <div className="uiux-design-container">
      <div className="design-background-grid" />
      <div className="design-ambient-glow" />
      
      <div className="uiux-status-badge">
        <div className="dot" />
        DESIGN IN PROGRESS
      </div>

      {/* Left Side: Stages */}
      <div className="design-left-panel">
        {STAGES.map((stage) => (
          <button
            key={stage.id}
            className={`design-stage-btn ${activeStage === stage.id ? 'active' : ''}`}
            onClick={() => handleStageClick(stage.id)}
          >
            <div className="stage-btn-header">
              {stage.icon}
              {stage.label}
            </div>
            <AnimatePresence>
              {activeStage === stage.id && (
                <motion.div
                  key={`stage-details-${stage.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="stage-btn-desc mobile-hidden"
                >
                  {stage.desc}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      {/* Right Side: Product Mockup Canvas */}
      <div 
        className="design-right-panel"
        onMouseEnter={pauseAutoPlay}
        onMouseMove={pauseAutoPlay}
        onTouchStart={pauseAutoPlay}
        onWheel={pauseAutoPlay}
      >
        <div className="uiux-scroll-container" ref={scrollRef} onScroll={handleScroll}>
          <div className="uiux-scroll-content">
            <div className="product-mockup-wrapper">
              
              {/* Floating Design System Panel */}
              <div className={`design-system-card ${activeStage >= 3 && !isLooping ? 'visible' : ''}`}>
                <div className="ds-header">DESIGN SYSTEM</div>
                <div className="ds-section">
                  <div className="ds-label">Color</div>
                  <div className="ds-colors">
                    <div className="ds-swatch" style={{ background: 'var(--ux-purple)' }} />
                    <div className="ds-swatch" style={{ background: 'var(--ux-coral)' }} />
                    <div className="ds-swatch" style={{ background: 'var(--ux-cyan)' }} />
                  </div>
                </div>
                <div className="ds-section">
                  <div className="ds-label">Type</div>
                  <div className="ds-val">Sora / Inter</div>
                </div>
                <div className="ds-section">
                  <div className="ds-label">Grid</div>
                  <div className="ds-val">8px Base</div>
                </div>
              </div>

              {/* Inner Progress Indicator */}
              <div className="inner-progress-indicator">
                <span className="inner-prog-num">0{activeStage + 1}</span>
                <span className="inner-prog-label">— {STAGES[activeStage].label.toUpperCase()}</span>
                <div className="inner-prog-bar">
                  <div className="inner-prog-fill" style={{ width: `${((activeStage + 1) / 5) * 100}%` }} />
                </div>
              </div>

              {/* The Main Mockup Container */}
              <div className={`product-mockup stage-${activeStage} ${isLooping ? 'looping' : ''}`}>
                
                {/* Loop Transition Overlay */}
                <AnimatePresence>
                  {isLooping && (
                    <motion.div key="design-complete" className="design-complete-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <CheckCircle2 size={32} color="var(--ux-coral)" />
                      <div className="dc-text">DESIGN COMPLETE</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle Annotations */}
                <AnimatePresence>
                  {activeStage === 3 && !isLooping && (
                    <>
                      <motion.div key="design-annotation" className="design-annotation coral" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ top: '35px', right: '-85px' }}>
                        <div className="anno-line" />
                        PRIMARY ACTION
                      </motion.div>
                      <motion.div className="design-annotation" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} style={{ bottom: '15%', left: '-80px' }}>
                        <div className="anno-line-right" />
                        AUTO LAYOUT
                      </motion.div>
                      <motion.div className="design-annotation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ top: '-30px', left: '120px' }}>
                        <div className="anno-line-down" />
                        TYPE SCALE
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* IDEA STAGE OVERLAYS (Sticky Notes) */}
                <AnimatePresence>
                  {activeStage === 0 && !isLooping && (
                    <motion.div key="idea-layer" className="idea-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="sticky-note purple">
                        <div className="sticky-title">Goal</div>
                        <div className="sticky-text">Create a faster way for teams to track active projects and tasks.</div>
                      </div>
                      <div className="sticky-note peach">
                        <div className="sticky-title">User Needs</div>
                        <div className="sticky-text">- Clear overview<br/>- Quick creation<br/>- Progress tracking</div>
                      </div>
                      <div className="wire-box" style={{ top: '15%', right: '15%', width: '35%', height: 40 }} />
                      <div className="wire-box" style={{ top: '45%', left: '15%', width: '45%', height: 100 }} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* MOCKUP UI (Hidden in Idea stage, visible 1-4) */}
                <div className="mockup-ui-layer">
                  
                  {/* Sidebar */}
                  <div className="pm-sidebar">
                    <div className="pm-logo">
                      <div className="pm-logo-mark" />
                    </div>
                    <div className="pm-nav">
                      <div className="pm-nav-item active"><LayoutGrid size={14} /></div>
                      <div className="pm-nav-item"><CheckSquare size={14} /></div>
                      <div className="pm-nav-item"><BarChart3 size={14} /></div>
                      <div className="pm-nav-item"><Users size={14} /></div>
                    </div>
                    <div className="pm-nav-bottom">
                      <div className="pm-nav-item"><Settings size={14} /></div>
                    </div>
                  </div>

                  {/* Main Area */}
                  <div className="pm-main">
                    
                    {/* Topbar */}
                    <div className="pm-topbar">
                      <div className="pm-search">
                        <Search size={12} className="pm-icon" />
                        <div className="pm-search-placeholder">Search projects...</div>
                      </div>
                      <div className="pm-actions">
                        <div className="pm-icon-btn"><Bell size={14} /></div>
                        <div className="pm-profile">
                          <div className="pm-avatar" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pm-content">
                      <div className="pm-header-row">
                        <div className="pm-greeting">
                          <div className="pm-title">Good morning, Alex</div>
                          <div className="pm-subtitle">Here's what's happening today.</div>
                        </div>
                        <button className={`pm-create-btn ${activeStage >= 3 && cursorPos.x === 380 ? 'hovered' : ''}`}>
                          <Plus size={14} />
                          <span>New Project</span>
                        </button>
                      </div>

                      {/* Stat Cards */}
                      <div className="pm-stats-grid">
                        <div className="pm-stat-card">
                          <div className="pm-stat-icon purple"><LayoutGrid size={12} /></div>
                          <div className="pm-stat-val">12</div>
                          <div className="pm-stat-label">Active Projects</div>
                        </div>
                        <div className="pm-stat-card">
                          <div className="pm-stat-icon cyan"><CheckSquare size={12} /></div>
                          <div className="pm-stat-val">34</div>
                          <div className="pm-stat-label">Tasks Completed</div>
                        </div>
                        <div className="pm-stat-card">
                          <div className="pm-stat-icon indigo"><Users size={12} /></div>
                          <div className="pm-stat-val">8</div>
                          <div className="pm-stat-label">Team Members</div>
                        </div>
                      </div>

                      {/* Project List */}
                      <div className="pm-section-title">Recent Projects</div>
                      <div className="pm-project-list">
                        <div className="pm-project-row lavender">
                          <div className="pm-proj-icon" />
                          <div className="pm-proj-info">
                            <div className="pm-proj-name">Website Redesign</div>
                            <div className="pm-proj-client">Acme Corp</div>
                          </div>
                          <div className="pm-proj-status">In Progress</div>
                          <div className="pm-proj-progress">
                            <div className="pm-progress-bar"><div className="pm-progress-fill" style={{width: '65%'}} /></div>
                          </div>
                        </div>
                        <div className="pm-project-row">
                          <div className="pm-proj-icon cyan" />
                          <div className="pm-proj-info">
                            <div className="pm-proj-name">Mobile App API</div>
                            <div className="pm-proj-client">GlobalTech</div>
                          </div>
                          <div className="pm-proj-status success">Completed</div>
                          <div className="pm-proj-progress">
                            <div className="pm-progress-bar"><div className="pm-progress-fill success" style={{width: '100%'}} /></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* EXPERIENCE STAGE: Modal Overlay */}
                  <AnimatePresence>
                    {modalOpen && (
                      <motion.div key="pm-modal-overlay" className="pm-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="pm-modal" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }}>
                          <div className="pm-modal-title">Create Project</div>
                          <div className="pm-modal-input" />
                          <div className="pm-modal-input small" />
                          <button className={`pm-modal-btn ${cursorPos.x === 260 ? 'hovered' : ''}`}>Create</button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* EXPERIENCE STAGE: Toast */}
                  <AnimatePresence>
                    {successToast && (
                      <motion.div key="pm-toast" className="pm-toast" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}>
                        <CheckCircle2 size={12} color="#10B981" /> Project created
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* The Designer Cursor */}
              {!isLooping && (
                <motion.div 
                  className={`designer-cursor ${cursorAction ? 'clicking' : ''}`}
                  animate={{ x: cursorPos.x, y: cursorPos.y, opacity: cursorPos.opacity }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                  <MousePointer2 size={18} fill="var(--ux-coral)" color="white" />
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxDesignVisual;
