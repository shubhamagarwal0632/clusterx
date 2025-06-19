import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./WhyChooseUsSection.css";

// Import images using ES6 imports
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpg";
import blogimage from "../assets/blogimage.jpg";
import profile1 from "../assets/photo1.jpeg";
import profile2 from "../assets/photo2.jpeg";
import profileimage from "../assets/photoimage.jpeg";

const blogCards = [
  {
    id: 1,
    image: blog1,
    title: "AI Agents",
    date: "Mar 8, 2024",
    description:
      "Automate workflows, answer queries, and take action — all without human intervention.",
    authorImage: profile1,
    authorName: "Sarah Johnson",
    role: "AI Specialist",
  },
  {
    id: 2,
    image: blog2,
    title: "AI Voice Agents",
    date: "Jan 8, 2025",
    description: "Voice-powered agents that talk to your customers, 24/7.",
    authorImage: profile2,
    authorName: "Michael Chen",
    role: "Voice Tech Lead",
  },
  {
    id: 3,
    image: blogimage,
    title: "AI Business Consultation",
    date: "Oct 8, 2024",
    description: "Let AI analyze your data and guide smarter decisions.",
    authorImage: profileimage,
    authorName: "Emily Rodriguez",
    role: "Business Consultant",
  },
];

const WhyChooseUsSection = () => {
  const [text, setText] = useState("");
  const [inView, setInView] = useState(false);
  const badgeRef = useRef(null);
  const fullText = "BLOG";

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
          setText("");
          i = 0;
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
  return (
    <section className="blog-section">
      <div className="section-header" ref={badgeRef}>
        <div className="blog-badge">
          <motion.span
            className="integrate-dot"
            initial={{ y: -20, opacity: 0 }}
            animate={
              inView
                ? {
                    y: 0,
                    opacity: 1,
                    scale: [1, 1.2, 0.9, 1.1, 1],
                  }
                : {}
            }
            transition={{
              y: { type: "spring", damping: 10, stiffness: 100, mass: 0.5 },
              opacity: { duration: 0.4 },
              scale: {
                duration: 0.8,
                times: [0, 0.3, 0.6, 0.8, 1],
                delay: 0.5,
              },
            }}
          />
          <span className="integrate-text">BLOG</span>
        </div>
        <h2>Integrate Wherever You Want</h2>
        <p>
          Seamlessly integrate across platforms and systems to enhance
          flexibility, efficiency, and user experience effortlessly.
        </p>
      </div>

      <div className="cards-container">
        {blogCards.map((card) => (
          <div key={card.id} className="blog-card">
            <img
              src={card.image}
              alt="Blog Visual"
              className="card-image"
              onError={(e) => {
                console.error("Error loading image:", e.target.src);
                e.target.onerror = null; // Prevent infinite loop
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Image+Not+Found";
              }}
            />
            <div className="card-content">
              <div className="card-header">
                <h3>{card.title}</h3>
                <span className="card-date">{card.date}</span>
              </div>
              <p className="card-desc">{card.description}</p>
              <div className="card-footer">
                <button className="read-more">Read more ➤</button>
                <div className="author">
                  <img
                    src={card.authorImage}
                    alt="Author"
                    className="author-image"
                    onError={(e) => {
                      console.error(
                        "Error loading author image:",
                        e.target.src
                      );
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = "https://via.placeholder.com/40?text=👤";
                    }}
                  />
                  <div>
                    <p>{card.authorName}</p>
                    <small>{card.role}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
