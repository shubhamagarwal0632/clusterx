import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HeroSection.css";
import heroImage from '../assets/Group 2147225767.png';

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.7, y: -10, rotate: 0 },
  animate: { opacity: 1, scale: 1.3, y: -32, rotate: 36 },
  transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 120 },
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <>
      <section className="hero-section" ref={heroRef}>
        <div className="hero-row">
          <div className="hero-left">
            <div className="hero-content">
              <h1>We Build AI Agents</h1>
              <p>
                We design and continuously optimize AI-powered systems that scale
                with your business — saving 200 hours/month and evolving as fast
                as AI does.
              </p>
              <button className="hero-cta animate-fadein">Work with us</button>
              {/* FAQ/PUQ heading can be placed here if needed */}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-video animate-fadein">
              <iframe
                src="https://www.youtube.com/embed/q-Tr00QL1YM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="trusted-by-text">trusted by thousands from worldwide</div>
<div className="marquee-container">
  <div className="marquee-track">
    <img src={heroImage} alt="Hero AI" className="hero-bottom-image" />
    <img src={heroImage} alt="Hero AI" className="hero-bottom-image" />
  </div>
</div>
    </>
  );
};

export default HeroSection;
