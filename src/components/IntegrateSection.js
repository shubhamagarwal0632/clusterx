import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IconCalendar, IconGrid, IconCalendarCheck, IconMic, IconUser, IconClipboard } from "./IntegrateIcons";
import Group2147225764 from "../assets/Group 2147225764.svg";
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
  const dotRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [text, setText] = useState('');
  const inSectionView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const fullText = 'INTEGRATIONS';

  // Check if dot is in viewport while scrolling
  useEffect(() => {
    let typingInterval;
    let i = 0;
    let isTyping = true;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (isTyping) {
          if (i < fullText.length) {
            setText(fullText.substring(0, i + 1));
            i++;
          } else {
            // Pause at the end of the word
            isTyping = false;
            setTimeout(() => {
              // Start deleting after a pause
              const deleteInterval = setInterval(() => {
                if (i > 0) {
                  setText(fullText.substring(0, i - 1));
                  i--;
                } else {
                  clearInterval(deleteInterval);
                  // Start typing again after a short pause
                  setTimeout(() => {
                    isTyping = true;
                  }, 300);
                }
              }, 50);
            }, 1000);
          }
        }
      }, 80); // Slightly faster typing speed
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          startTyping();
        } else {
          setInView(false);
          // Reset when out of view
          clearInterval(typingInterval);
          setText('');
          i = 0;
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (dotRef.current) {
      observer.observe(dotRef.current);
    }

    return () => {
      clearInterval(typingInterval);
      if (dotRef.current) {
        observer.unobserve(dotRef.current);
      }
    };
  }, []);
  
  const iconTitles = [
    "Calendar",
    "Grid View",
    "Schedule",
    "Voice",
    "Profile",
    "Clipboard"
  ];
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
  // Adjust the radius to bring icons closer to the center
  const radius = (containerSize * 0.9 - iconSize) / 2;

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

  const handleMouseEnter = () => {
    setPaused(true);
    document.querySelector('.integrate-center-circle').style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setPaused(false);
    document.querySelector('.integrate-center-circle').style.animationPlayState = 'running';
  };

  return (
    <section
      ref={sectionRef}
      className="integrate-section"
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="integrate-header-centered" variants={childVariants}>
        <div className="integrate-badge" variants={childVariants}>
          <motion.span 
            ref={dotRef}
            className="integrate-dot"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? {
              y: 0, 
              opacity: 1,
            } : {}}
            transition={{
              y: { 
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.5
              },
              opacity: { duration: 0.4 }
            }}
          />
          <span className="integrate-text">
          INTEGRATIONS
          </span>
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
        <div 
          className="integrate-center-circle"
          style={{
            animationPlayState: paused ? 'paused' : 'running'
          }}
        >
          <img 
            src={Group2147225764} 
            alt="Integration center" 
            className="center-icon" 
          />
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
              key={i}
              className="icon-container"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                position: 'absolute'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="integrate-icon" 
                style={{
                  transform: `rotate(${paused ? 0 : angle}deg)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                {icon}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default IntegrateSection;
