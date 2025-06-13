import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onClose, onSuccess, compact = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(); // This will trigger the redirect in the parent component
    }, 1000);
  };

  const formContent = (
    <>
      {!compact && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close form"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      <div
        className={`${styles.formHeader} ${compact ? styles.compactHeader : ''}`}
      >
        <h2 className={styles.formTitle}>Schedule a Discovery Call</h2>
        {!compact && (
          <p className={styles.formSubtitle}>
            Fill in your details and we'll get back to you shortly
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={`${styles.formGroup} ${errors.fullName ? styles.error : ''}`}>
          <label htmlFor="fullName">Full Name*</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.errorInput : ''}
              placeholder="John Doe"
            />
            {errors.fullName && <span className={styles.errorIcon}>!</span>}
          </div>
          {errors.fullName && <p className={styles.errorMessage}>{errors.fullName}</p>}
        </div>

        <div
          className={`${styles.formGroup} ${errors.companyName ? styles.error : ''}`}
        >
          <label htmlFor="companyName">Company Name*</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={errors.companyName ? styles.errorInput : ''}
              placeholder="Acme Inc."
            />
            {errors.companyName && <span className={styles.errorIcon}>!</span>}
          </div>
          {errors.companyName && (
            <p className={styles.errorMessage}>{errors.companyName}</p>
          )}
        </div>

        <div className={`${styles.formGroup} ${errors.email ? styles.error : ''}`}>
          <label htmlFor="email">Email*</label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
              placeholder="you@example.com"
            />
            {errors.email && <span className={styles.errorIcon}>!</span>}
          </div>
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>

        <div className={`${styles.formGroup} ${errors.mobile ? styles.error : ''}`}>
          <label htmlFor="mobile">Mobile Number*</label>
          <div className={styles.inputContainer}>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? styles.errorInput : ''}
              placeholder="1234567890"
            />
            {errors.mobile && <span className={styles.errorIcon}>!</span>}
          </div>
          {errors.mobile && <p className={styles.errorMessage}>{errors.mobile}</p>}
        </div>

        <div className={`${styles.formGroup} ${errors.address ? styles.error : ''}`}>
          <label htmlFor="address">Address*</label>
          <div className={styles.inputContainer}>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.address ? styles.errorInput : ''}`}
              placeholder="Your address"
              rows={3}
            />
            {errors.address && <span className={styles.errorIcon}>!</span>}
          </div>
          {errors.address && <p className={styles.errorMessage}>{errors.address}</p>}
        </div>

        <div className={styles.formFooter}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                Submitting...
              </>
            ) : (
              'Schedule Call'
            )}
          </button>
          <p className={styles.privacyText}>
            By submitting this form, you agree to our{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </>
  );

  if (compact) {
    return formContent;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {formContent}
      </div>
    </div>
  );
};

export default ContactForm;
