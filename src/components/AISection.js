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
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
        {/* Floating SVG 1: AI Eye */}
        <motion.svg
          width="38" height="38" viewBox="0 0 38 38"
          style={{ position: 'absolute', left: -180, top: -20, zIndex: 0, y: float1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={headingInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.09, type: "spring" }}
        >
          <ellipse cx="19" cy="19" rx="16" ry="8" fill="#f3e5f5" stroke="#8e24aa" strokeWidth="2" />
          <circle cx="19" cy="19" r="4" fill="#8e24aa" />
        </motion.svg>
        {/* Floating SVG 2: Circuit Board */}
        <motion.svg
          width="36" height="36" viewBox="0 0 36 36"
          style={{ position: 'absolute', left: 10, top: -60, zIndex: 0, y: float2 }}
          initial={{ opacity: 0, rotate: -30 }}
          animate={headingInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.11, type: "spring" }}
        >
          <rect x="4" y="4" width="28" height="28" rx="6" fill="#fffde7" stroke="#ffd600" strokeWidth="2" />
          <circle cx="10" cy="10" r="2" fill="#ffd600" />
          <circle cx="26" cy="26" r="2" fill="#ffd600" />
          <line x1="10" y1="10" x2="26" y2="26" stroke="#ffd600" strokeWidth="2" />
        </motion.svg>
        {/* Floating SVG 3: Data Flow */}
        <motion.svg
          width="44" height="44" viewBox="0 0 44 44"
          style={{ position: 'absolute', right: 0, top: -70, zIndex: 0, y: float3 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={headingInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.13, type: "spring" }}
        >
          <rect x="6" y="18" width="32" height="8" rx="4" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" />
          <circle cx="12" cy="22" r="2" fill="#1976d2" />
          <circle cx="32" cy="22" r="2" fill="#1976d2" />
          <rect x="20" y="14" width="4" height="16" rx="2" fill="#1976d2" />
        </motion.svg>
        {/* Floating SVG 4: AI Brain */}
        <motion.svg
          width="42" height="42" viewBox="0 0 42 42"
          style={{ position: 'absolute', right: -160, top: 10, zIndex: 0, y: float4 }}
          initial={{ opacity: 0, rotate: 30 }}
          animate={headingInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
        >
          <ellipse cx="21" cy="21" rx="16" ry="12" fill="#e0f7fa" stroke="#00acc1" strokeWidth="2" />
          <ellipse cx="21" cy="21" rx="9" ry="6" fill="#00acc1" />
        </motion.svg>
        {/* Floating SVG 5: Cloud Sync */}
        <motion.svg
          width="40" height="40" viewBox="0 0 40 40"
          style={{ position: 'absolute', left: 170, bottom: -10, zIndex: 0, y: float5 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={headingInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.17, type: "spring" }}
        >
          <ellipse cx="20" cy="28" rx="14" ry="8" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
          <ellipse cx="14" cy="24" rx="4" ry="3" fill="#90caf9" />
          <ellipse cx="26" cy="26" rx="5" ry="4" fill="#90caf9" />
          <circle cx="20" cy="24" r="2" fill="#2196f3" />
        </motion.svg>
        {/* Floating SVG 6: AI Chip */}
        <motion.svg
          width="36" height="36" viewBox="0 0 36 36"
          style={{ position: 'absolute', right: 150, bottom: -20, zIndex: 0, y: float6 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={headingInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.19, type: "spring" }}
        >
          <rect x="8" y="8" width="20" height="20" rx="6" fill="#fff6ef" stroke="#ff6a2f" strokeWidth="2" />
          <circle cx="18" cy="18" r="4" fill="#ff6a2f" />
        </motion.svg>
        {/* Floating SVG 7: AI Bot */}
        <motion.svg
          width="38" height="38" viewBox="0 0 38 38"
          style={{ position: 'absolute', left: -90, bottom: -30, zIndex: 0, y: float7 }}
          initial={{ opacity: 0, rotate: -20 }}
          animate={headingInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.21, type: "spring" }}
        >
          <ellipse cx="19" cy="24" rx="10" ry="6" fill="#f3e5f5" stroke="#8e24aa" strokeWidth="2" />
          <rect x="12" y="10" width="14" height="10" rx="5" fill="#8e24aa" />
          <circle cx="19" cy="15" r="2" fill="#fff" />
        </motion.svg>

        {/* Animated SVG - Brain Chip */}
        <motion.svg
          width="48" height="48" viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', left: -120, top: 16, zIndex: 0 }}
          initial={{ opacity: 0, x: -60 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.13, type: "spring", stiffness: 120 }}
        >
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#e0f7fa" stroke="#00bcd4" strokeWidth="2" />
          <rect x="18" y="18" width="12" height="12" rx="3" fill="#00bcd4" />
          <circle cx="24" cy="24" r="2" fill="#fff" />
          <line x1="24" y1="10" x2="24" y2="18" stroke="#00bcd4" strokeWidth="2" />
          <line x1="24" y1="38" x2="24" y2="30" stroke="#00bcd4" strokeWidth="2" />
          <line x1="10" y1="24" x2="18" y2="24" stroke="#00bcd4" strokeWidth="2" />
          <line x1="38" y1="24" x2="30" y2="24" stroke="#00bcd4" strokeWidth="2" />
        </motion.svg>

        {/* Animated SVG - Neural Network */}
        <motion.svg
          width="48" height="48" viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', left: -56, top: 8, zIndex: 1 }}
          initial={{ opacity: 0, x: -40 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, type: "spring", stiffness: 120 }}
        >
          <circle cx="24" cy="24" r="22" stroke="#ff6a2f" strokeWidth="2" fill="#fff6ef" />
          <circle cx="24" cy="14" r="3" fill="#ff6a2f" />
          <circle cx="34" cy="24" r="3" fill="#ff9a4b" />
          <circle cx="24" cy="34" r="3" fill="#ff6a2f" />
          <circle cx="14" cy="24" r="3" fill="#ff9a4b" />
          <line x1="24" y1="14" x2="34" y2="24" stroke="#ff6a2f" strokeWidth="2" />
          <line x1="24" y1="14" x2="14" y2="24" stroke="#ff6a2f" strokeWidth="2" />
          <line x1="24" y1="34" x2="34" y2="24" stroke="#ff9a4b" strokeWidth="2" />
          <line x1="24" y1="34" x2="14" y2="24" stroke="#ff9a4b" strokeWidth="2" />
        </motion.svg>

        <motion.img
          src={mascotIcon}
          alt="AI Mascot"
          style={{ width: 64, height: 64, zIndex: 2 }}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={headingInView ? { opacity: 1, scale: 1.1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, type: "spring", stiffness: 120 }}
        />

        {/* Animated SVG - Chatbot */}
        <motion.svg
          width="48" height="48" viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: -56, top: 8, zIndex: 1 }}
          initial={{ opacity: 0, x: 40 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22, type: "spring", stiffness: 120 }}
        >
          <rect x="8" y="14" width="32" height="20" rx="10" fill="#fff6ef" stroke="#ff9a4b" strokeWidth="2" />
          <ellipse cx="18" cy="24" rx="2" ry="2" fill="#ff6a2f" />
          <ellipse cx="30" cy="24" rx="2" ry="2" fill="#ff6a2f" />
          <rect x="20" y="28" width="8" height="2" rx="1" fill="#ff9a4b" />
          <rect x="18" y="10" width="12" height="4" rx="2" fill="#ff6a2f" />
        </motion.svg>

        {/* Animated SVG - Data Cloud */}
        <motion.svg
          width="48" height="48" viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: -120, top: 16, zIndex: 0 }}
          initial={{ opacity: 0, x: 60 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.27, type: "spring", stiffness: 120 }}
        >
          <ellipse cx="24" cy="30" rx="14" ry="8" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
          <ellipse cx="16" cy="26" rx="4" ry="3" fill="#90caf9" />
          <ellipse cx="32" cy="28" rx="5" ry="4" fill="#90caf9" />
          <circle cx="24" cy="26" r="2" fill="#2196f3" />
        </motion.svg>

        <motion.span
          style={{
            position: "absolute",
            top: 0,
            right: "-18px",
            fontSize: 28,
            color: "#ff9a4b",
            zIndex: 1,
            pointerEvents: "none"
          }}
          initial={sparkleVariants.initial}
          animate={headingInView ? sparkleVariants.animate : {}}
          transition={sparkleVariants.transition}
        >
          ✨
        </motion.span>
      </div>
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: -40 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        AI partner. Not a builder
      </motion.h2>
      <motion.div
        className="ai-box"
        ref={boxRef}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={boxInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }}
      >
        <p>Our AI acts as your partner, helping you automate, integrate, and scale—without the hassle of building from scratch.</p>
      </motion.div>
    </section>
  );
}

export default AISection;
