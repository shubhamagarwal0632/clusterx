import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./AISection.css";
import mascotIcon from '../assets/ai-mascot.svg';

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.7, y: -10, rotate: 0 },
  animate: { opacity: 1, scale: 1.2, y: -30, rotate: 32 },
  transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 120 }
};

const AISection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { once: true, margin: "-100px" });

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
      <div className="ai-box ai-box-custom">
        <div className="ai-box-content">
          <div className="ai-box-title">Cluserx</div>
          <ul className="ai-feature-list">
            <li>Continuous Optimization</li>
            <li>Always aligned with latest tech</li>
            <li>Weekly calls + expert input</li>
            <li>you gain a strategic partner</li>
            <li>Evolving roadmap as your needs grow</li>
          </ul>
        </div>
        <div className="ai-vertical-divider">
          <div className="ai-divider-badge">
            <span className="ai-divider-lines"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;
