import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import './DiscoveryCallPage.css';

const DiscoveryCallPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSuccess = () => {
    // Redirect to Calendly after successful form submission
    window.open('https://calendly.com/gauravsmitawa/40min', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="discovery-call-page">
      <div className="container">
        <div className="form-container">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
          <ContactForm 
            onClose={() => navigate('/')}
            onSuccess={handleFormSuccess}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCallPage;
