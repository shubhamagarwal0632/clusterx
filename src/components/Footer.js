import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-ai-banner">
      We Build <span className="footer-ai-glow"> Ai </span> Employees
    </div>
    <div className="footer-main">
      <div className="footer-col footer-brand">
        <div className="footer-logo">Cluster<span className="footer-x">X</span></div>
        <p className="footer-desc">
          Join the pracharwave community and be flexible in managing your contacts. Connect with us on social media for updates, tips, and more!
        </p>
        <div className="footer-contact">
          <a href="tel:+919999999999">+91 99999 99999</a> or <a href="mailto:support@xjatin.com">support@xjatin.com</a>
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
);

export default Footer;

