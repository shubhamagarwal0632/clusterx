import React from "react";
import { motion, useInView } from "framer-motion";
import "./TestimonialsSection.css";

const videoItems = [
  {
    title: "Seamless Integration",
    description: "Connect with any platform or tool in minutes"
  },
  {
    title: "AI-Powered Automation",
    description: "Let our AI handle repetitive tasks for you"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time"
  },
  {
    title: "Advanced Analytics",
    description: "Get insights and make data-driven decisions"
  }
];

const VideoCard = ({ item, index }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={cardRef}
      className="video-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="video-placeholder">
        {/* Video thumbnail or play button would go here */}
        <div className="play-button">▶</div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What Client Says
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seamlessly integrate across platforms and systems to enhance flexibility, efficiency, and user experience effortlessly.
        </motion.p>
      </div>
      
      <div className="video-grid">
        {videoItems.map((item, index) => (
          <VideoCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
