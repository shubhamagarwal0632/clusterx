import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p className="subtext">
            Have questions or need assistance? Our team is here to help you with any inquiries or support you may need.
          </p>
          <button className="live-chat-btn">
            Live Chat
            <span className="btn-icon">→</span>
          </button>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="card-icon">
              <FiMail className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>support@info.com</p>
            <a href="mailto:support@info.com" className="card-btn">Contact</a>
          </div>

          <div className="contact-card">
            <div className="card-icon">
              <FiPhone className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>Office: +01 234 567 890</p>
            <a href="tel:+01234567890" className="card-btn">Call</a>
          </div>

          <div className="contact-card">
            <div className="card-icon">
              <FiMapPin className="contact-icon" />
            </div>
            <h3>Office</h3>
            <p>0891 Sygic St, Cellin, Delaware 19209</p>
            <a href="#" className="card-btn">Locate</a>
          </div>
        </div>

        <div className="form-section">
          <div className="quote-box">
            <FaQuoteLeft className="quote-icon" />
            <p className="quote-text">
              "The passage experienced a surge in popularity during the 1960s when Letraset used it in their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software."
              <span className="quote-author">Vincent Obi</span>
            </p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your fullname*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email address*" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Create password*" required />
            </div>
            
            <div className="form-footer">
              <div className="terms">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to Terms & Conditions</label>
              </div>
              <button type="submit" className="register-btn">
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
