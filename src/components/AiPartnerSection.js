import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./AiPartnerSection.css";

const cubeVariants = {
  animate: {
    rotateY: [0, 360],
    rotateX: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "linear"
    }
  }
};

const AiPartnerSection = () => (
  <section className="aipartner-section" id="offers" style={{ position: 'relative', overflow: 'visible' }}>
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        perspective: 600,
        width: 72,
        height: 72,
        zIndex: 1
      }}
      variants={cubeVariants}
      animate="animate"
    >
      {/* Simple 3D Cube SVG */}
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.18))' }}>
        <g>
          <polygon points="36,8 64,24 36,40 8,24" fill="#ff6a2f" opacity="0.8" />
          <polygon points="36,40 64,24 64,56 36,64" fill="#ff9a4b" opacity="0.9" />
          <polygon points="36,40 8,24 8,56 36,64" fill="#ffb97a" opacity="0.95" />
        </g>
      </svg>
    </motion.div>
    <div className="aipartner-label"><span style={{ color: '#ff6a2f', fontWeight: 700 }}>●</span> OFFERS</div>
    <h2>Ai partner, Not a builder</h2>
    <p>AI is not static. With us, you get more than implementation — you get ongoing leverage.</p>
  </section>
);

export default AiPartnerSection;
