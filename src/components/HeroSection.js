import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HeroSection.css";
import heroAI from '../assets/hero-ai.svg';

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.7, y: -10, rotate: 0 },
  animate: { opacity: 1, scale: 1.3, y: -32, rotate: 36 },
  transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 120 }
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 18, position: 'relative' }}>
          <motion.img
            src={heroAI}
            alt="AI Hero Icon"
            style={{ width: 88, height: 88, zIndex: 2, rotateY, scale }}
            initial={{ opacity: 0, scale: 0.7, y: 30, rotate: -6 }}
            animate={{ opacity: 1, scale: 1.1, y: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 120 }}
          />
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            left: 68,
            fontSize: 36,
            color: "#ff9a4b",
            zIndex: 1,
            pointerEvents: "none"
          }}
          initial={sparkleVariants.initial}
          animate={sparkleVariants.animate}
          transition={sparkleVariants.transition}
        >
          ✨
        </motion.span>
        <div>
          <h1>We help businesses scale with MCPs</h1>
          <p>We design and continuously optimize AI-powered systems that scale with your business — saving 200 hours/month and evolving as fast as AI does.</p>
        </div>
      </div>
      <button className="hero-cta animate-fadein">Get Started</button>
      <div className="hero-video animate-fadein" style={{ marginTop: '1.5rem' }}>
        <iframe
          width="800px"
          height="400px"
          src="https://www.youtube.com/embed/q-Tr00QL1YM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
  );
}

export default HeroSection;
