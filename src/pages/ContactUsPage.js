import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={`${styles.contactPage} ${styles.contactPageContainer}`}>
      <Header />
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2>Contact Us</h2>
          <p className={styles.subtext}>
            Have questions or need assistance? Our team is here to help you with any inquiries or support you may need.
          </p>
          <button className={styles.liveChatBtn}>
            Live Chat
            <span className={styles.btnIcon}>→</span>
          </button>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <FiMail className={styles.contactIcon} />
            </div>
            <h3>Email</h3>
            <p>teamclusterx@gmail.com</p>
            <a href="mailto:teamclusterx@gmail.com" className={styles.cardBtn}>Contact</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <FiPhone className={styles.contactIcon} />
            </div>
            <h3>Phone</h3>
            <p>Office: +91 96713 81579</p>
            <a href="tel:+919671381579" className={styles.cardBtn}>Call</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <FiMapPin className={styles.contactIcon} />
            </div>
            <h3>Office</h3>
            <p>Bhamashah Techno Hub, Jaipur, Rajasthan (IN)  - 302017</p>
            <a href="#" className={styles.cardBtn}>Locate</a>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.quoteBox}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              "The passage experienced a surge in popularity during the 1960s when Letraset used it in their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software."
              <span className={styles.quoteAuthor}>Vincent Obi</span>
            </p>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your fullname*" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email address*" required />
            </div>
            <div className={styles.formGroup}>
              <input type="password" placeholder="Create password*" required />
            </div>
            
            <div className={styles.formFooter}>
              <div className={styles.terms}>
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to Terms & Conditions</label>
              </div>
              <button type="submit" className={styles.registerBtn}>
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
