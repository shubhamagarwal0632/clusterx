import React, { useState, useRef } from 'react';
import { 
  FiArrowRight, 
  FiPlay, 
  FiCheck, 
  FiClock, 
  FiUsers, 
  FiStar, 
  FiShield, 
  FiActivity, 
  FiTrendingUp, 
  FiChevronRight,
  FiCalendar,
  FiPhoneCall 
} from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HealthcarePage.css';
import { motion, AnimatePresence } from 'framer-motion';

const HealthcarePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);
  
  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  // Features data
  const features = [
    {
      icon: <FiActivity className="feature-icon" />,
      title: 'AI-Powered Diagnosis',
      description: 'Advanced AI algorithms for accurate and fast diagnosis',
      color: '#4F46E5',
      delay: 0.1
    },
    {
      icon: <FiUsers className="feature-icon" />,
      title: 'Patient Management',
      description: 'Comprehensive patient records and history tracking',
      color: '#10B981',
      delay: 0.2
    },
    {
      icon: <FiShield className="feature-icon" />,
      title: 'Secure Data',
      description: 'HIPAA compliant data security and privacy',
      color: '#F59E0B',
      delay: 0.3
    },
    {
      icon: <FiClock className="feature-icon" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support',
      color: '#3B82F6',
      delay: 0.4
    }
  ];

  // Stats data with animation values
  const stats = [
    { 
      value: '95%', 
      label: 'Diagnostic Accuracy', 
      icon: <FiCheck />,
      color: '#4F46E5',
      duration: 2.5
    },
    { 
      value: '24/7', 
      label: 'Support', 
      icon: <FiClock />,
      color: '#10B981',
      duration: 1.5
    },
    { 
      value: '500+', 
      label: 'Healthcare Partners', 
      icon: <FiUsers />,
      color: '#F59E0B',
      duration: 2.0
    },
    { 
      value: '4.9', 
      label: 'Rating', 
      icon: <FiStar />,
      color: '#3B82F6',
      duration: 1.8
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      content: 'Clusterx has transformed how we deliver care. The AI-driven insights have improved our diagnosis accuracy by 40% and reduced administrative workload significantly.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Hospital Administrator',
      content: 'The seamless integration with our existing systems was a game-changer. We saw ROI within the first 3 months of implementation.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Pediatrics',
      content: 'The predictive analytics have been incredibly accurate. We\'re able to identify at-risk patients earlier and provide proactive care.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };
  
  const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="healthcare-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-text"
            >
              <h1>Transforming Healthcare with AI</h1>
              <p className="subtitle">
                Revolutionizing patient care through intelligent automation and data-driven insights
                for healthcare providers worldwide.
              </p>
              
              <div className="hero-actions">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="primary-btn"
                >
                  Get Started
                  <FiArrowRight className="btn-icon" />
                </motion.button>
                <button className="secondary-btn">
                  <FiPlay className="btn-icon" /> Watch Demo
                </button>
              </div>
              
              <div className="features-container">
                <div className="section-header">
                  <h2>Our Services</h2>
                  <p>Comprehensive healthcare solutions powered by AI</p>
                </div>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="feature-card"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: feature.delay }}
                      whileHover={{ y: -10 }}
                    >
                      <div 
                        className="feature-icon"
                        style={{ background: `${feature.color}10` }}
                      >
                        {React.cloneElement(feature.icon, { 
                          style: { color: feature.color, fontSize: '1.5rem' } 
                        })}
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <div className="feature-line" style={{ background: feature.color }}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Healthcare professionals" 
                loading="eager"
                className="hero-image"
              />
            </motion.div>
          </div>
          
          {/* Stats Section */}
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="stat-icon"
                    style={{ background: `${stat.color}15` }}
                  >
                    {React.cloneElement(stat.icon, { 
                      style: { color: stat.color, fontSize: '1.5rem' } 
                    })}
                  </div>
                  <div className="stat-content">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="video-showcase">
        <div className="container">
          <motion.div 
            className="video-container"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="video-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Healthcare Technology"
                className="video-thumbnail"
              />
              <button className="play-button" onClick={toggleVideo}>
                <FiPlay className="play-icon" />
              </button>
              <div className="video-overlay"></div>
            </div>
            <div className="video-content">
              <h2>See Clusterx in Action</h2>
              <p>Watch our 2-minute demo to see how Clusterx is transforming healthcare delivery with AI-powered solutions.</p>
              <button className="secondary-button" onClick={toggleVideo}>
                <FiPlay className="play-icon" /> Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
            <p className="section-description">
              Our platform is designed to address the unique challenges of modern healthcare delivery.
            </p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="section challenge-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">The Challenge</span>
            <h2 className="section-title">
              Overcoming Healthcare's Biggest Hurdles
            </h2>
            <p className="section-description">
              Healthcare providers face numerous challenges in delivering quality patient care while managing administrative burdens and operational inefficiencies.
            </p>
          </motion.div>
          
          <div className="section-content">
            <motion.div 
              className="challenge-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Medical team discussing" 
                loading="lazy"
              />
              <div className="experience-badge">
                <span>10+ Years</span>
                <p>In Healthcare Innovation</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="challenge-points"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="point-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="card-icon">
                  <FiCheck />
                </div>
                <div className="card-content">
                  <h3>Faster Diagnosis</h3>
                  <p>Reduce diagnosis time with AI-powered clinical decision support that analyzes patient data in real-time.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="point-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="card-icon">
                  <FiCheck />
                </div>
                <div className="card-content">
                  <h3>Improved Patient Outcomes</h3>
                  <p>Enhance care quality with predictive analytics and personalized treatment recommendations.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="point-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="card-icon">
                  <FiCheck />
                </div>
                <div className="card-content">
                  <h3>Reduced Administrative Burden</h3>
                  <p>Automate documentation and administrative tasks to let healthcare professionals focus on patient care.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section solution-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Solution</span>
            <h2 className="section-title">
              AI-Powered Healthcare Transformation
            </h2>
            <p className="section-description">
              Clusterx delivers cutting-edge AI solutions designed specifically to address the unique challenges of the healthcare industry.
            </p>
          </motion.div>
          
          <div className="section-content">
            <motion.div 
              className="solution-points"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="solution-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="solution-card-inner">
                  <h3>AI-Driven Clinical Insights</h3>
                  <p>Leverage advanced machine learning to analyze complex medical data and provide actionable, real-time clinical insights at the point of care.</p>
                  <a href="#" className="learn-more">
                    Learn more <FiChevronRight className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="solution-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="solution-card-inner">
                  <h3>Seamless Integration</h3>
                  <p>End-to-end integration with existing healthcare systems for seamless workflow automation and minimal disruption to clinical operations.</p>
                  <a href="#" className="learn-more">
                    Learn more <FiChevronRight className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="solution-card highlight-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="solution-card-inner">
                  <h3>Ready to Transform Your Practice?</h3>
                  <p>Discover how Clusterx can revolutionize your healthcare delivery.</p>
                  <motion.button 
                    className="cta-button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Implement AI Solution
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="solution-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581093450232-9b52c48e9f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Medical technology" 
                loading="lazy"
              />
              <div className="solution-badge">
                <FiActivity className="badge-icon" />
                <span>AI-Powered Analytics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Hear from healthcare professionals who have transformed their practice with Clusterx.
            </p>
          </motion.div>
          
          <div className="testimonials-container">
            <div className="testimonial-content">
              <div className="testimonial-text">
                <div className="quote-icon">"</div>
                <p>{testimonials[activeTestimonial].content}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4>{testimonials[activeTestimonial].name}</h4>
                    <p>{testimonials[activeTestimonial].role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={i < testimonials[activeTestimonial].rating ? 'star filled' : 'star'} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="testimonial-image">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Happy healthcare professional"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        {/* Decorative Shapes */}
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
        
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1 }
              }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Healthcare Practice?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
              viewport={{ once: true }}
            >
              Join thousands of healthcare providers revolutionizing patient care with Clusterx AI solutions.
              Experience the future of healthcare technology today.
            </motion.p>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="cta-button primary-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
                <FiArrowRight className="ml-2" />
              </motion.button>
              
              <motion.button 
                className="cta-button secondary-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-10 text-sm text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.4 }
              }}
              viewport={{ once: true }}
            >
              No credit card required • Cancel anytime • 24/7 Support
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleVideo}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={toggleVideo}>
                &times;
              </button>
              <div className="video-wrapper">
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                  title="Clusterx Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HealthcarePage;
