import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./IntegrationsSection.css";

import aiBrain from '../assets/ai-brain.svg';
import aiRobot from '../assets/ai-robot.svg';
import featureAutomate from '../assets/feature-automate.svg';
import featureIntegrate from '../assets/feature-integrate.svg';
import featureSync from '../assets/feature-sync.svg';

const integrations = [
  { name: "AI Brain", icon: <img src={aiBrain} alt="AI Brain" width={40} height={40} />, animationType: "fade-up" },
  { name: "AI Robot", icon: <img src={aiRobot} alt="AI Robot" width={40} height={40} />, animationType: "fade-left" },
  { name: "Automate", icon: <img src={featureAutomate} alt="Automate" width={40} height={40} />, animationType: "fade-right" },
  { name: "Integrate", icon: <img src={featureIntegrate} alt="Integrate" width={40} height={40} />, animationType: "scale-in" },
  { name: "Sync", icon: <img src={featureSync} alt="Sync" width={40} height={40} />, animationType: "fade-up" },
  { name: "Chat", icon: "🤖", animationType: "fade-left" },
  { name: "Lightning", icon: "⚡", animationType: "fade-right" },
  { name: "Cloud", icon: "☁️", animationType: "scale-in" }
];

const IntegrationIconMotion = ({ item, index }) => {
  const iconRef = useRef(null);
  const iconInView = useInView(iconRef, { once: true, margin: "-100px" });
  let initial, animate;
  switch (item.animationType) {
    case "fade-left":
      initial = { opacity: 0, x: -40 };
      animate = iconInView ? { opacity: 1, x: 0 } : {};
      break;
    case "fade-right":
      initial = { opacity: 0, x: 40 };
      animate = iconInView ? { opacity: 1, x: 0 } : {};
      break;
    case "scale-in":
      initial = { opacity: 0, scale: 0.8 };
      animate = iconInView ? { opacity: 1, scale: 1 } : {};
      break;
    case "fade-up":
    default:
      initial = { opacity: 0, y: 40 };
      animate = iconInView ? { opacity: 1, y: 0 } : {};
      break;
  }
  return (
    <motion.div
      className="integration-icon"
      ref={iconRef}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7, delay: 0.18 + index * 0.13, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      <span>{item.icon}</span>
      <div>{item.name}</div>
    </motion.div>
  );
};

const IntegrationsSection = () => {
  const headingRef = React.createRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  return (
    <section className="integrations-section" id="store">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={headingInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 160, damping: 18, duration: 0.6 }}
      >
        Integrate Whoever You Want
      </motion.h2>
      <div className="integrations-circle">
        {integrations.map((item, i) => (
          <IntegrationIconMotion item={item} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
