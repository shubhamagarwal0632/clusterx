import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiUser, FiMail, FiMessageSquare, FiSend, FiCheck, FiVideo, FiCheckCircle, FiPhone, FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DiscoveryCallPage.css';
// Using direct URLs for the slideshow images

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const formVariants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const DiscoveryCallPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobileNumber: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const formRef = useRef(null);
  
  // Array of high-quality images for the slideshow
  const discoveryImages = [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', // Team meeting 1
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', // Team meeting 2
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', // Team meeting 3
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', // Video call
    'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'  // Business meeting
  ];
  
  // Auto-advance the slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === discoveryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(timer);
  }, [discoveryImages.length]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^[0-9\s\-+()]*$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid mobile number';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleFormSuccess = () => {
    window.open('https://calendly.com/gauravsmitawa/40min', '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: <FiCalendar size={24} />, text: '40-minute personalized session' },
    { icon: <FiVideo size={24} />, text: 'Video call with our experts' },
    { icon: <FiCheckCircle size={24} />, text: 'No obligation, just insights' },
  ];

  return (
    <div className="discovery-page">
      <Header />
      <motion.div 
        className="discovery-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="discovery-content" ref={formRef}>
          {/* Left Column - Modern Image Section */}
          <motion.div 
            className="discovery-modern-image-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="discovery-image-card">
              <div className="discovery-image-wrapper">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={`slide-${currentImageIndex}`}
                    src={discoveryImages[currentImageIndex]}
                    alt="Professional team in a video call meeting"
                    className="discovery-main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="discovery-image-overlay">
                  <div className="discovery-slide-indicators">
                    {discoveryImages.map((_, index) => (
                      <button
                        key={index}
                        className={`discovery-slide-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="discovery-floating-element discovery-video-call"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="discovery-floating-icon">
                    <FiVideo size={20} />
                  </div>
                  <span>Video Call</span>
                </motion.div>
                
                <motion.div 
                  className="discovery-floating-element discovery-calendar"
                  initial={{ y: 0 }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="discovery-floating-icon">
                    <FiCalendar size={20} />
                  </div>
                  <span>Schedule</span>
                </motion.div>
                
                <div className="discovery-floating-stats">
                  <div className="discovery-stat-item">
                    <div className="discovery-stat-number">500+</div>
                    <div className="discovery-stat-label">Sessions</div>
                  </div>
                  <div className="discovery-stat-item">
                    <div className="discovery-stat-number">98%</div>
                    <div className="discovery-stat-label">Satisfaction</div>
                  </div>
                </div>
              </div>
              
              <div className="discovery-image-content">
                <h3>Let's Build Something Amazing Together</h3>
                <p>Schedule a discovery call with our experts to discuss your project and explore how we can help you achieve your goals.</p>
                <div className="discovery-benefits">
                  <div className="discovery-benefit-item">
                    <FiCheck className="discovery-check-icon" />
                    <span>30-minute free consultation</span>
                  </div>
                  <div className="discovery-benefit-item">
                    <FiCheck className="discovery-check-icon" />
                    <span>No-obligation quote</span>
                  </div>
                  <div className="discovery-benefit-item">
                    <FiCheck className="discovery-check-icon" />
                    <span>Expert advice</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="discovery-form"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.1 }}
          >
            <button 
              className="discovery-back-button" 
              onClick={() => navigate(-1)}
              aria-label="Go back"
              whileHover={{ x: -3 }}
            >
              <FiArrowLeft size={18} />
              Back
            </button>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  className="discovery-success-message"
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <motion.div 
                    className="discovery-success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 200, 
                      damping: 15,
                      delay: 0.2
                    }}
                  >
                    <FiCheck size={32} />
                  </motion.div>
                  <h2>Thank You!</h2>
                  <p>We've received your message and will get back to you shortly.</p>
                  <motion.button 
                    className="discovery-back-to-home" 
                    onClick={() => navigate('/')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back to Home
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  className="discovery-form-wrapper"
                  key="form"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2 variants={itemVariants}>
                    Schedule Your Call
                  </motion.h2>
                  <motion.p className="discovery-form-intro" variants={itemVariants}>
                    Fill in your details and we'll get back to you shortly to confirm your time slot.
                  </motion.p>
                  
                  {errors && Object.keys(errors).length > 0 && (
                    <motion.div 
                      className="discovery-error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {Object.keys(errors).map((key, index) => (
                        <p key={index}>{errors[key]}</p>
                      ))}
                    </motion.div>
                  )}
                  
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="discovery-contact-form"
                    variants={formVariants}
                  >
                    <motion.div className="discovery-form-group" variants={itemVariants}>
                      <label htmlFor="fullName">
                        <FiUser className="discovery-input-icon" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="discovery-form-input"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div className="discovery-form-group" variants={itemVariants}>
                      <label htmlFor="companyName">
                        <FiBriefcase className="discovery-input-icon" />
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                        className="discovery-form-input"
                        placeholder="ABC Corporation"
                      />
                    </motion.div>
                    
                    <motion.div className="discovery-form-group" variants={itemVariants}>
                      <label htmlFor="email">
                        <FiMail className="discovery-input-icon" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="discovery-form-input"
                        placeholder="you@example.com"
                      />
                    </motion.div>
                    
                    <motion.div className="discovery-form-group" variants={itemVariants}>
                      <label htmlFor="mobileNumber">
                        <FiPhone className="discovery-input-icon" />
                        Mobile Number*
                      </label>
                      <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        required
                        className="discovery-form-input"
                        placeholder="+1234567890"
                      />
                    </motion.div>
                    
                    <motion.div className="discovery-form-group" variants={itemVariants}>
                      <label htmlFor="address">
                        <FiMapPin className="discovery-input-icon" />
                        Address*
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        rows="4"
                        required
                        className="discovery-form-textarea"
                        placeholder="Your full address..."
                      ></textarea>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <motion.button 
                        type="submit" 
                        className="discovery-submit-button"
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                      >
                        {isLoading ? (
                          <span className="discovery-button-loader"></span>
                        ) : 'Send Message'}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                  
                  <motion.p className="discovery-privacy-note" variants={itemVariants}>
                    We respect your privacy. Your information is secure and will never be shared with third parties.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default DiscoveryCallPage;
