import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const bannerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const updateProgress = () => {
      if (!bannerRef.current) return;
      
      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible (0 to 1)
      const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
      const progress = Math.min(1, visibleHeight / rect.height);
      
      // Update the CSS variable directly
      bannerRef.current.style.setProperty('--scroll-progress', progress);
      
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener with debouncing
    const scrollOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, scrollOptions);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll, scrollOptions);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
  <footer className="footer">
    <div className="footer-ai-banner" ref={bannerRef}>
      We Build <span className="footer-ai-glow"> Ai </span> Employees
    </div>
    <div className="footer-main">
      <div className="footer-col footer-brand">
        <div className="footer-logo">Cluster<span className="footer-x">X</span></div>
        <p className="footer-desc">
          Join the pracharwave community and be flexible in managing your contacts. Connect with us on social media for updates, tips, and more!
        </p>
        <div className="footer-contact">
          {/* <a href="tel:+919999999999">+91 99999 99999</a> or  */}
          <a href="mailto:teamclusterx@gmail.com">teamclusterx@gmail.com</a>
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-title">My Account</div>
        <ul>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Order History</a></li>
          <li><a href="#">Shopping Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="footer-title">Helps</div>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="footer-title">Proxy</div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Products Details</a></li>
          <li><a href="#">Track Order</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom-bar">
      <div className="footer-copyright">
        © 2024 Clusterx. All Rights Reserved
      </div>
      <div className="footer-policies">
        <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
  );};
export default Footer;