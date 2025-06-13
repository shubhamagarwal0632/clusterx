import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG React components for each integration icon in your image
// You can swap these for your own SVGs if you prefer

export const IconCalendar = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <rect x="8" y="11" width="16" height="11" rx="2" fill="#FF6600" />
    <rect x="10" y="13" width="2" height="2" rx="1" fill="#fff" />
    <rect x="14" y="13" width="2" height="2" rx="1" fill="#fff" />
    <rect x="18" y="13" width="2" height="2" rx="1" fill="#fff" />
    <rect x="22" y="13" width="2" height="2" rx="1" fill="#fff" />
    <rect x="10" y="17" width="2" height="2" rx="1" fill="#fff" />
    <rect x="14" y="17" width="2" height="2" rx="1" fill="#fff" />
    <rect x="18" y="17" width="2" height="2" rx="1" fill="#fff" />
    <rect x="22" y="17" width="2" height="2" rx="1" fill="#fff" />
    <rect x="12" y="8" width="2" height="4" rx="1" fill="#FF6600" />
    <rect x="18" y="8" width="2" height="4" rx="1" fill="#FF6600" />
  </svg>
);

export const IconGrid = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <rect x="9" y="9" width="5" height="5" rx="1.5" fill="#FF6600" />
    <rect x="18" y="9" width="5" height="5" rx="1.5" fill="#FF6600" />
    <rect x="9" y="18" width="5" height="5" rx="1.5" fill="#FF6600" />
    <rect x="18" y="18" width="5" height="5" rx="1.5" fill="#FF6600" />
  </svg>
);

export const IconCalendarCheck = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <rect x="8" y="11" width="16" height="11" rx="2" fill="#FF6600" />
    <path d="M12 17l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="12" y="8" width="2" height="4" rx="1" fill="#FF6600" />
    <rect x="18" y="8" width="2" height="4" rx="1" fill="#FF6600" />
  </svg>
);

export const IconMic = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <rect x="12" y="10" width="8" height="12" rx="4" fill="#FF6600" />
    <rect x="14" y="22" width="4" height="2" rx="1" fill="#FF6600" />
    <path d="M16 24v2" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconUser = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <circle cx="16" cy="14" r="4" fill="#FF6600" />
    <rect x="10" y="20" width="12" height="4" rx="2" fill="#FF6600" />
  </svg>
);

export const IconClipboard = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <rect x="11" y="10" width="10" height="12" rx="2" fill="#FF6600" />
    <rect x="14" y="8" width="4" height="4" rx="2" fill="#fff" />
  </svg>
);

export const IconCenter = ({ onAnimationComplete }) => {
  const dotRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'INTEGRATIONS';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          let i = 0;
          const typingInterval = setInterval(() => {
            if (i < fullText.length) {
              setText(fullText.substring(0, i + 1));
              i++;
            } else {
              if (onAnimationComplete) onAnimationComplete();
              clearInterval(typingInterval);
            }
          }, 50);
          
          observer.disconnect();
          return () => clearInterval(typingInterval);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (dotRef.current) {
      observer.observe(dotRef.current);
    }
    
    return () => {
      observer.disconnect();
      setText('');
    };
  }, []);

  return (
    <div className="integrate-center-container">
      <motion.div
        ref={dotRef}
        className="integrate-dot"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{
          y: { type: "spring", damping: 10, stiffness: 100, mass: 0.5 },
          opacity: { duration: 0.4 }
        }}
      />
      <div className="integrate-text">
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
        >
          |
        </motion.span>
      </div>
      <svg width="88" height="88" fill="none" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r="44" fill="#FF6600" />
        <path d="M32 32l24 24M56 32L32 56" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const Group2147225764 = () => (
  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="44" cy="44" r="44" fill="#FF6600"/>
    <path d="M32 32L56 56M32 56L56 32" stroke="white" stroke-width="4" stroke-linecap="round"/>
  </svg>
);
