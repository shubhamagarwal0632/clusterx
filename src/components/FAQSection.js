import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./FAQSection.css";

const faqs = [
  {
    question: "What is Clusterx?",
    answer: "Clusterx helps businesses scale with AI-powered integrations and automation."
  },
  {
    question: "How easy is it to integrate?",
    answer: "You can connect your tools in minutes with our seamless integration process."
  },
  {
    question: "Is there support?",
    answer: "Yes, our team is here to help you every step of the way."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const headingRef = useRef(null);

  return (
    <motion.section className="faq-section" id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        ref={headingRef} className="faq-heading"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <motion.div className="faq-item" key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === i ? "-" : "+"}</span>
            </button>
            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
export default FAQSection;
