import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./FeaturesSection.css";

import featurePeople from '../assets/feature-people.svg';
import featureVisibility from '../assets/feature-visibility.jpg';
import featureManual from '../assets/feature-manual.svg';
import featureScattered from '../assets/feature-scattered.svg';
import featureAi from '../assets/feature-ai.svg';
import featureLightning from '../assets/feature-lightning.svg';

const features = [
  {
    icon: featurePeople,
    title: "Limited by people",
    desc: "Your team is stretched. Hiring won't fix broken systems."
  },
  {
    icon: featureVisibility,
    title: "No real-time visibility",
    desc: "Work stalls, deadlines slip, and you're flying blind."
  },
  {
    icon: featureManual,
    title: "Manual processes everywhere",
    desc: "Repetitive tasks eat up valuable time."
  },
  {
    icon: featureScattered,
    title: "Scattered data",
    desc: "Critical info lives in silos — decisions slow down."
  },
  {
    icon: featureLightning,
    title: "AI moves fast",
    desc: "New tools launch weekly. Your systems fall behind just as fast."
  }
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const badgeRef = useRef(null);
  const [text, setText] = useState('');
  const [inView, setInView] = useState(false);
  const fullText = 'FEATURE';
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Typing effect with continuous loop
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }
    
    return () => {
      clearInterval(typingInterval);
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, []);
  
  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for each feature card
  const item = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotateX: -30,
      transformPerspective: 1000,
      transformOrigin: 'top center'
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Animation for icons
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="features-section" id="industry" ref={ref}>
      <div className="integrate-header-centered" ref={badgeRef}>
        <motion.div 
          className="feature-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }
          } : {}}
        >
          <motion.span 
            className="feature-dot"
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
          <span className="feature-text">
            {text}
            <motion.span 
              className="cursor"
              initial={{ opacity: 0 }}
              animate={{ opacity: text === fullText ? 0 : 1 }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.7,
                repeatType: 'reverse' 
              }}
            />
          </span>
        </motion.div>
      </div>
      
      <motion.h2 
        className="features-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-15% 0px" }}
      >
        Don't let systems slow you down
      </motion.h2>
      
      <motion.div 
        className="features-subheading"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-10% 0px" }}
      >
        As your team scales, inefficiencies compound. You lose time, clarity, and momentum.
      </motion.div>
      
      <motion.div 
        className="features-grid-new"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-5% 0px" }}
      >
        {features.map((f, idx) => (
          <motion.div 
            className="feature-card"
            key={idx}
            variants={item}
            whileHover="hover"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.div 
              className="feature-icon"
              variants={iconVariants}
            >
              <img 
                src={f.icon} 
                alt="" 
                width={28} 
                height={28}
              />
            </motion.div>
            <motion.div 
              className="feature-title"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.1,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true }}
            >
              {f.title}
            </motion.div>
            <motion.div 
              className="feature-desc"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 0.85, 
                y: 0,
                transition: { 
                  delay: 0.2,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true }}
            >
              {f.desc}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
