import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./IntegrationCardsSection.css";

const cards = [
  {
    // title: "Slack Integration",
    // desc: "Connect your workflows to Slack for instant updates.",
    // button: "Connect"
  },
  {
    // title: "Google Calendar",
    // desc: "Sync events and reminders with Google Calendar.",
    // button: "Connect"
  },
  {
    // title: "Zoom Meetings",
    // desc: "Automate meeting scheduling and notifications.",
    // button: "Connect"
  }
];

const IntegrationCardsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

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
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 90 } }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="integrationcards-section"
      id="integrationcards"
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2>Integrate Where You Want</h2>
      <motion.div className="integrationcards-grid" variants={parentVariants}>
        {cards.map((card, i) => (
          <motion.div className="integrationcard" key={i} variants={cardVariants}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button className="integrationcard-btn">{card.button}</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default IntegrationCardsSection;
