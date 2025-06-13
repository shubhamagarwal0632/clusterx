import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';
import logo from '../assets/logo-clusterx.svg';

const Loader = ({ onAnimationComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [clipPath, setClipPath] = useState('inset(0 100% 0 0)');
  const [position, setPosition] = useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    opacity: 1
  });
  const loaderRef = useRef(null);
  const animationRef = useRef({
    revealTimer: null,
    showTimer: null,
    moveTimer: null,
    completeTimer: null
  });

  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      Object.values(animationRef.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  useEffect(() => {
    // Phase 1: Initial state - start revealing the logo
    setAnimationPhase('revealing');
    
    // Phase 2: After reveal, show the full logo in center
    animationRef.current.revealTimer = setTimeout(() => {
      setClipPath('inset(0 0% 0 0)');
      setAnimationPhase('showing');
      
      // Phase 3: After showing, move to header
      animationRef.current.showTimer = setTimeout(() => {
        setAnimationPhase('moving-to-header');
        
        // Get header logo position
        const headerLogo = document.querySelector('.header-logo');
        if (headerLogo) {
          const rect = headerLogo.getBoundingClientRect();
          
          setPosition({
            top: `${rect.top + window.scrollY}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            transform: 'none',
            opacity: 1
          });

          // Phase 4: Complete the animation after moving to header
          animationRef.current.completeTimer = setTimeout(() => {
            setAnimationPhase('complete');
            // Show the actual header logo
            headerLogo.style.opacity = '1';
            if (onAnimationComplete) onAnimationComplete();
          }, 500);
        } else {
          // If header logo not found, just complete the animation
          setAnimationPhase('complete');
          if (onAnimationComplete) onAnimationComplete();
        }
      }, 1000); // Time to show the logo in center before moving
    }, 800); // Time for reveal animation

    return () => {
      // Clean up timers on unmount or re-render
      Object.values(animationRef.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [onAnimationComplete]);

  // Don't render anything when animation is complete
  if (animationPhase === 'complete') return null;

  // Calculate transition based on animation phase
  const getTransition = () => {
    switch (animationPhase) {
      case 'revealing':
        return 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)';
      case 'moving-to-header':
        return 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
      default:
        return 'none';
    }
  };

  return (
    <div className={`loader-overlay ${animationPhase}`}>
      <div 
        ref={loaderRef}
        className="loader-logo-container"
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
          width: position.width,
          height: position.height,
          transform: position.transform,
          opacity: position.opacity,
          transition: getTransition(),
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div 
          className="logo-mask"
          style={{
            width: '100%',
            height: '100%',
            clipPath: clipPath,
            transition: 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={logo} 
            alt="ClusterX Logo" 
            className="loader-logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: 1,
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
