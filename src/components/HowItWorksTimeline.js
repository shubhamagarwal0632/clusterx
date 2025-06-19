import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./HowItWorksTimeline.css";

const steps = [
  {
    title: "Audit & Strategy",
    desc: "We analyze your ops, map out inefficiencies, and define a high-ROI automation strategy.",
    highlight: "You get a clear AI roadmap."
  },
  {
    title: "Build & Deploy",
    desc: "We build your first automation and deploy fast, so you can start seeing value in days, not months.",
    highlight: "Immediate time savings."
  },
  {
    title: "Continuous Optimization",
    desc: "Each week, we review, improve, and adapt your stack based on new opportunities and usage data.",
    highlight: "Stay future-proof."
  },
  {
    title: "Strategic Partnership",
    desc: "You don't just get tech — you get an embedded AI strategist. We meet weekly to align, adapt, and scale.",
    highlight: "AI becomes part of how you think."
  }
];

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};
const stepVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.18, duration: 0.7, type: "spring", stiffness: 60 } })
};
const dotVariants = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: i => ({ scale: 1, opacity: 1, transition: { delay: 0.2 + i * 0.18, duration: 0.5, type: "spring", stiffness: 180 } })
};

const HowItWorksTimeline = () => {
  const [text, setText] = useState('');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const fullText = 'WORKFLOW';
  
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
      }, 100);
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      clearInterval(typingInterval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="howitworks-section" id="how-it-works">
      <div className="howitworks-header-centered" ref={sectionRef}>
        <div className="workflow-badge">
          <motion.span 
            className="workflow-dot"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { 
              y: 0, 
              opacity: 1,
              scale: [1, 1.2, 0.9, 1.1, 1]
            } : {}}
            transition={{
              y: { type: "spring", damping: 10, stiffness: 100, mass: 0.5 },
              opacity: { duration: 0.4 },
              scale: { 
                duration: 0.8,
                times: [0, 0.3, 0.6, 0.8, 1],
                delay: 0.5
              }
            }}
          />
          <span className="workflow-text" style={{color:"white"}}>
          {fullText}
          </span>
        </div>
        <h2 className="howitworks-title-centered">How It Works</h2>
        <div className="howitworks-subtitle-centered">Our signature process is designed to deliver maximum value, fast.</div>
      </div>
      <div className="timeline-2col">
        <motion.div
          className="timeline-line-2col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={lineVariants}
          style={{ transformOrigin: "top center" }}
        />
        {steps.map((step, idx) => (
          <motion.div
            className="timeline-row-2col"
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stepVariants}
          >
            <div className="timeline-left-2col">
              <motion.span
                className="timeline-dot-2col"
                aria-hidden="true"
                custom={idx}
                variants={dotVariants}
              />
              <span className="timeline-title-2col">{step.title}</span>
            </div>
            <div className="timeline-right-2col">
              <div className="timeline-descblock-2col">
                <div className="timeline-desc-2col">{step.desc}</div>
                <div className="timeline-highlight-2col">→ <span>{step.highlight}</span></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
