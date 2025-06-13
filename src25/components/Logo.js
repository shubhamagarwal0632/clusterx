import React, { useRef, useEffect } from "react";
import logo from "../assets/logo-clusterx.svg";
import "./Logo.css";

const Logo = ({ style }) => {
  const containerRef = useRef(null);
  const waveRef = useRef(null);
  const wave2Ref = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const wave = waveRef.current;
    const wave2 = wave2Ref.current;
    
    if (!container || !wave || !wave2) return;
    
    // Start the wave animation
    const startWave = () => {
      // Reset positions without transition
      wave.style.transition = 'none';
      wave2.style.transition = 'none';
      wave.style.transform = 'translateX(-100%)';
      wave2.style.transform = 'translateX(-100%)';
      
      // Force reflow
      void wave.offsetWidth;
      
      // Animate the waves across the logo
      const waveDuration = 1.2; // seconds
      const waveDelay = 0.2; // seconds between waves
      
      wave.style.transition = `transform ${waveDuration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
      wave2.style.transition = `transform ${waveDuration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${waveDelay}s`;
      
      wave.style.transform = 'translateX(100%)';
      wave2.style.transform = 'translateX(100%)';
    };
    
    // Initial delay before starting the first wave
    const initialDelay = setTimeout(startWave, 1000);
    
    // Set up the interval for repeating the wave
    const waveInterval = setInterval(startWave, 3000);
    
    // Clean up
    return () => {
      clearInterval(waveInterval);
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <div className="logo-container" style={style} ref={containerRef}>
      <div className="logo-image-container">
        <img 
          src={logo}
          alt="ClusterX Logo"
          className="logo-image"
          height={24}
        />
      </div>
      <div className="logo-wave logo-wave-1" ref={waveRef}></div>
      <div className="logo-wave logo-wave-2" ref={wave2Ref}></div>
    </div>
  );
};

export default Logo;