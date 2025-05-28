import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';
import logo from '../assets/logo-clusterx.svg'; // Make sure you have this logo in your assets

const Loader = ({ onAnimationComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('expanding');
  const [position, setPosition] = useState({ 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%) scale(1)',
    width: '200px',
    height: '200px'
  });
  const loaderRef = useRef(null);

  useEffect(() => {
    // Initial animation - expand the logo
    const expandTimer = setTimeout(() => {
      setAnimationPhase('moving');
      
      // Get header logo position
      const headerLogo = document.querySelector('.header-logo');
      if (headerLogo && loaderRef.current) {
        const headerRect = headerLogo.getBoundingClientRect();
        const loaderRect = loaderRef.current.getBoundingClientRect();
        
        // Calculate final position
        const finalPosition = {
          top: `${headerRect.top + window.scrollY}px`,
          left: `${headerRect.left + window.scrollX}px`,
          width: `${headerRect.width}px`,
          height: `${headerRect.height}px`,
          transform: 'scale(1)'
        };
        
        setPosition(finalPosition);
      }
    }, 1000); // Time for initial expansion (reduced from 1500ms)


    // Complete the animation and notify parent
    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
      // Add a small delay before notifying completion
      const notifyTimer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 300);
      
      return () => clearTimeout(notifyTimer);
    }, 1800); // Total animation time (reduced from 2500ms)


    return () => {
      clearTimeout(expandTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  if (animationPhase === 'complete') return null;

  return (
    <div className={`loader-overlay ${animationPhase}`}>
      <div 
        ref={loaderRef}
        className="loader-logo-container"
        style={position}
      >
        <img 
          src={logo} 
          alt="ClusterX Logo" 
          className="loader-logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
