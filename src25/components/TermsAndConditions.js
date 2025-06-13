import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import './TermsAndConditions.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={delay}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

const TermsAndConditions = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div 
      ref={containerRef}
      className="terms-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="terms-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <motion.div 
          className="header-content" 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* <Link to="/" className="back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link> */}
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last updated: June 1, 2024</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="terms-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="terms-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99] 
          }}
        >
          <AnimatedSection>
            <div className="terms-section">
              <motion.div 
                className="icon-wrapper"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                    stroke="#FF6A2F" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  />
                  <motion.path 
                    d="M12 8V12L15 15" 
                    stroke="#FF6A2F" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  />
                </svg>
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                FatCamel Reminder Service
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                Our Appointment Reminder & Confirmation Texts service helps you stay on top of your schedule by sending timely reminders and confirmations for your appointments. You can expect to receive messages confirming your upcoming appointments and reminding you of important dates.
              </motion.p>
            </div>
          </AnimatedSection>

          <motion.div 
            className="divider"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <AnimatedSection>
            <div className="terms-section">
              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Opting Out
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                You can cancel the SMS service at any time. Simply text <span className="highlight">"STOP"</span> to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="terms-section">
              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Getting Help
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                If you experience issues with the messaging program, reply with the keyword <span className="highlight">HELP</span> for more assistance, or reach out directly to <a href="mailto:info@fatcamel.io" className="email-link">info@fatcamel.io</a>.
              </motion.p>
              <motion.p 
                className="note"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15 }}
              >
                Carriers are not liable for delayed or undelivered messages.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="terms-section">
              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Message and Data Rates
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                As always, message and data rates may apply for messages sent to you from us and to us from you. You will receive appointment confirmation and reminder messages as scheduled. For questions about your text plan or data plan, contact your wireless provider.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="terms-section">
              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Privacy
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                For privacy-related inquiries, please refer to our <a href="https://fatcamel.io/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">privacy policy</a>.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div 
              className="terms-section thankyou"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.1
              }}
            >
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Thank you for choosing <span className="brand">FatCamel Software Solutions</span> for your appointment reminder needs.
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TermsAndConditions;
