import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DiscoveryCallPage.css';
import { FiArrowLeft, FiCalendar, FiClock, FiVideo, FiCheckCircle } from 'react-icons/fi';

const DiscoveryCallPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    <div className={`discovery-call-page ${isVisible ? 'visible' : ''}`}>
      <Header />
      <div className="discovery-container">
        <div className="discovery-content">
          {/* <div className="discovery-hero">
            <h1>Let's Build Something <span className="highlight">Amazing</span> Together</h1>
            <p className="subtitle">Schedule a discovery call to discuss your project and explore how we can help bring your vision to life.</p>
            
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The discovery call helped us clarify our project requirements and set realistic expectations. Highly recommended!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">AS</div>
                  <div className="author-info">
                    <div className="author-name">Alex Smith</div>
                    <div className="author-role">CTO, TechStart</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="form-section">
            <div className="form-container">
              <button 
                className="back-button" 
                onClick={() => navigate(-1)}
                aria-label="Go back"
              >
                <FiArrowLeft size={18} />
                Back
              </button>
              
              <h2>Schedule Your Call</h2>
              <p className="form-intro">Fill in your details and we'll get back to you shortly to confirm your time slot.</p>
              
              <ContactForm 
                onClose={() => navigate('/')}
                onSuccess={handleFormSuccess}
                compact={true}
              />
              
              <p className="privacy-note">
                We respect your privacy. Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscoveryCallPage;
