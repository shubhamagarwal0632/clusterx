import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <Link to="/" className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#10131A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
        <h1>Terms & Conditions</h1>
        <p>Last updated: June 1, 2024</p>
      </div>
      
      <div className="terms-content">
        <div className="terms-section">
          <h2>FatCamel Reminder Service</h2>
          <p>Our Appointment Reminder & Confirmation Texts service helps you stay on top of your schedule by sending timely reminders and confirmations for your appointments. You can expect to receive messages confirming your upcoming appointments and reminding you of important dates.</p>
        </div>

        <div className="terms-section">
          <h3>Opting Out</h3>
          <p>You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>
        </div>

        <div className="terms-section">
          <h3>Getting Help</h3>
          <p>If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or reach out directly to <a href="mailto:info@fatcamel.io">info@fatcamel.io</a>.</p>
          <p>Carriers are not liable for delayed or undelivered messages.</p>
        </div>

        <div className="terms-section">
          <h3>Message and Data Rates</h3>
          <p>As always, message and data rates may apply for messages sent to you from us and to us from you. You will receive appointment confirmation and reminder messages as scheduled. For questions about your text plan or data plan, contact your wireless provider.</p>
        </div>

        <div className="terms-section">
          <h3>Privacy</h3>
          <p>For privacy-related inquiries, please refer to our <a href="https://fatcamel.io/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</p>
        </div>

        <div className="terms-section">
          <p>Thank you for choosing FatCamel Software Solutions for your appointment reminder needs.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
