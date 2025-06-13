import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./AISection.css";
import mascotIcon from '../assets/ai-mascot.svg';

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.7, y: -10, rotate: 0 },
  animate: { opacity: 1, scale: 1.2, y: -30, rotate: 32 },
  transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 120 }
};

const AISection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { once: true, margin: "-100px" });

  const startDragging = (e) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', stopDragging);
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    
    // Calculate position as percentage (0-100)
    let position = ((x - containerRect.left) / containerRect.width) * 100;
    
    // Keep position within bounds
    position = Math.min(Math.max(position, 10), 90);
    
    setSliderPosition(position);
  };

  const stopDragging = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', stopDragging);
  };

  // Scroll-based animation for floating SVGs
  const { scrollY } = useScroll();
  // Example transforms for various SVGs
  const float1 = useTransform(scrollY, [0, 600], [0, 80]);
  const float2 = useTransform(scrollY, [0, 600], [0, -60]);
  const float3 = useTransform(scrollY, [0, 600], [0, 40]);
  const float4 = useTransform(scrollY, [0, 600], [0, -50]);
  const float5 = useTransform(scrollY, [0, 600], [0, 70]);
  const float6 = useTransform(scrollY, [0, 600], [0, -40]);
  const float7 = useTransform(scrollY, [0, 600], [0, 90]);

  
  return (
    <section className="ai-section" id="resources">
      <div className="integrate-header-centered" >
      <div className="integrate-badge">
          <span className="integrate-dot" />
          <span className="integrate-text">OFFERS</span>
      </div>
      </div>
      <h2 className="ai-heading">Ai partner, Not a builder</h2>
      <div className="ai-subtitle">
        AI is not static. With us, you get more than implementation<br />
        you get ongoing leverage.
      </div>
      <div className="ai-box ai-box-custom" ref={containerRef}>
        <div className="ai-comparison-wrapper">
          <div className="ai-slide ai-slide-1" style={{ width: `${sliderPosition}%` }}>
            <div className="ai-box-content">
              <div className="ai-box-title">Cluserx</div>
              <ul className="ai-feature-list">
                <li>Continuous Optimization</li>
                <li>Always aligned with latest tech</li>
                <li>Weekly calls + expert input</li>
                <li>You gain a strategic partner</li>
                <li>Evolving roadmap as your needs grow</li>
              </ul>
            </div>
          </div>
          
          <div 
            className="ai-divider" 
            onMouseDown={startDragging}
            onTouchStart={startDragging}
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="ai-divider-handle">
              <span className="ai-divider-line"></span>
              <div className="ai-divider-arrow left">❮</div>
              <div className="ai-divider-arrow right">❯</div>
            </div>
          </div>
          
          <div className="ai-slide ai-slide-2" style={{ width: `${100 - sliderPosition}%` }}>
            <div className="ai-box-content">
              <div className="ai-box-title">Why Choose Us</div>
              <ul className="ai-feature-list">
                <li>Proven track record</li>
                <li>Industry-leading expertise</li>
                <li>24/7 dedicated support</li>
                <li>Custom solutions for your needs</li>
                <li>Cutting-edge technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;
