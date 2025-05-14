import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./TestimonialsSection.css";

const testimonials = [
  { name: "Jane Doe", feedback: "Clusterx transformed our workflow!" },
  { name: "John Smith", feedback: "Seamless integrations and great support." },
  { name: "Alice Lee", feedback: "The AI partner is a game changer for us." }
];

const TestimonialCard = ({ t }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      <p>"{t.feedback}"</p>
      <div className="testimonial-name">- {t.name}</div>
    </motion.div>
  );
};

const TestimonialCardMotion = ({ t, index }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={cardInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.18 + index * 0.13, ease: "easeOut" }}
    >
      <TestimonialCard t={t} />
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  return (
    <section className="testimonials-section" id="company">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, rotateX: 60 }}
        animate={headingInView ? { opacity: 1, rotateX: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        What Clients Say
      </motion.h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <TestimonialCardMotion t={t} index={i} key={i} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
