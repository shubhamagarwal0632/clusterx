import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HowItWorksSection.css";

import connectIcon from '../assets/howitworks-connect.svg';
import automateIcon from '../assets/howitworks-automate.svg';
import growIcon from '../assets/howitworks-grow.svg';

const steps = [
  { title: "Connect", desc: "Link your business tools in minutes.", icon: connectIcon },
  { title: "Automate", desc: "Set up workflows with our AI assistant.", icon: automateIcon },
  { title: "Grow", desc: "Scale your business with seamless integrations.", icon: growIcon }
];

const sparkleVariants = [
  {
    initial: { opacity: 0, scale: 0.5, y: -20, rotate: 0 },
    animate: { opacity: 1, scale: 1.2, y: -40, rotate: 20 },
    transition: { duration: 1, delay: 0.25, type: "spring", stiffness: 120 }
  },
  {
    initial: { opacity: 0, scale: 0.6, x: 20, rotate: 0 },
    animate: { opacity: 1, scale: 1.1, x: 40, rotate: -30 },
    transition: { duration: 1, delay: 0.35, type: "spring", stiffness: 120 }
  },
  {
    initial: { opacity: 0, scale: 0.7, y: 20, rotate: 0 },
    animate: { opacity: 1, scale: 1.15, y: 40, rotate: 45 },
    transition: { duration: 1, delay: 0.45, type: "spring", stiffness: 120 }
  }
];

const HowItWorksStep = ({ step, index }) => {
  // Use a single ref for both inView and scroll
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, margin: "-100px" });
  const sparkle = sparkleVariants[index % sparkleVariants.length];

  const from = index % 2 === 0 ? -80 : 80;

  return (
    <motion.div
      className="howitworks-step"
      ref={stepRef}
      initial={{ opacity: 0, x: from }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      style={{ willChange: "opacity, transform", position: "relative" }}
    >
      <motion.img
        src={step.icon}
        alt={step.title + " icon"}
        style={{ width: 56, height: 56, marginBottom: 12, zIndex: 2 }}
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1.08, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 + index * 0.13, type: "spring", stiffness: 120 }}
      />
      <motion.span
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          fontSize: 28,
          color: "#ff9a4b",
          zIndex: 1,
          pointerEvents: "none"
        }}
        initial={sparkle.initial}
        animate={isInView ? sparkle.animate : {}}
        transition={sparkle.transition}
      >
        ✨
      </motion.span>
      <span className="howitworks-step-number">{index + 1}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  console.log("HowItWorksSection rendered");
  return (
    <section className="howitworks-section" id="how-it-works">
      <h2>How It Works</h2>
      <div className="howitworks-list">
        {steps.map((step, i) => (
          <HowItWorksStep step={step} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
