import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IconCalendar, IconGrid, IconCalendarCheck, IconMic, IconUser, IconClipboard, IconCenter } from "./IntegrateIcons";
import "./IntegrateSection.css";

const icons = [
  <IconCalendar />,      // Top
  <IconGrid />,          // Top-right
  <IconCalendarCheck />, // Bottom-right
  <IconMic />,           // Bottom
  <IconUser />,          // Bottom-left
  <IconClipboard />      // Top-left
];

const IntegrateSection = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [angle, setAngle] = useState(0);
const [paused, setPaused] = useState(false);
  const [containerSize, setContainerSize] = useState(520);
  const requestRef = useRef();

  useEffect(() => {
    if (paused) return;
    let lastTime = performance.now();
    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;
      setAngle(a => (a + (delta * 0.03)) % 360);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [paused]);

  // Pause after 3s, resume after 2s (5s total)
  useEffect(() => {
    const pauseTimeout = setTimeout(() => setPaused(true), 3000); // pause after 3s
    const resumeTimeout = setTimeout(() => setPaused(false), 5000); // resume after 5s (2s pause)
    return () => {
      clearTimeout(pauseTimeout);
      clearTimeout(resumeTimeout);
    };
  }, []);

// Responsive container size calculation
  useEffect(() => {
    function updateSize() {
      if (visualRef.current) {
        setContainerSize(visualRef.current.offsetWidth);
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  // .ring3 is 92% of container, icon is 15% of container
  const iconSize = containerSize * 0.15;
  // For perfect alignment with the outer edge of icons on .ring3 (outermost ring)
  const radius = (containerSize * 1.1 - iconSize) / 2;

  const parentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 80,
      when: "beforeChildren",
      staggerChildren: 0.18
    }
  }
};
const childVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 90 } }
};

return (
    <section
      ref={sectionRef}
      className="integrate-section"
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="integrate-header-centered" variants={childVariants}>
        <div className="integrate-badge" variants={childVariants}>
          <span className="integrate-dot" />
          <span className="integrate-text">INTEGRATIONS</span>
        </div>
        <h2 className="integrate-title-centered" variants={childVariants}>Integrate Wherever You Want</h2>
        <div className="integrate-subtitle-centered" variants={childVariants}>
          Seamlessly integrate across platforms and systems to enhance<br />
          flexibility, efficiency, and user experience effortlessly.
        </div>
      </div>
      {/* Responsive orbiting icons - FIXED version */}
      <div className="integrate-visual" variants={childVariants} ref={visualRef}>
        <div className="integrate-glow" />
        <div className="integrate-center-circle">
          <IconCenter />
        </div>
        {[1,2,3].map(num => (
          <div className={`integrate-ring ring${num}`} key={num}></div>
        ))}
        {icons.map((icon, i) => {
          const baseAngle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
          const rot = ((angle * Math.PI) / 180);
          const totalAngle = baseAngle + rot;
          const x = Math.cos(totalAngle) * radius;
          const y = Math.sin(totalAngle) * radius;
          return (
            <div
              className="integrate-icon"
              key={i}
              style={{
                left: `calc(50% + ${x}px)` ,
                top: `calc(50% + ${y}px)` ,
                width: iconSize,
                height: iconSize,
                transform: 'translate(-50%, -50%)',
                position: 'absolute'
              }}
              // variants={childVariants}
            >
              {icon}
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default IntegrateSection;
