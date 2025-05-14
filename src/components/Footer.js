import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">Clusterx</div>
      <div className="footer-links">
        <a href="#industry">Industry</a>
        <a href="#store">Store</a>
        <a href="#resources">Resources</a>
        <a href="#company">Company</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="footer-bottom">
        <span>We Build <span className="footer-ai">AI</span> Employees</span>
        <span>© {new Date().getFullYear()} Clusterx. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;

