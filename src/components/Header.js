import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/discoverycall');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIndustryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Add animation class to header when component mounts
    if (headerRef.current) {
      headerRef.current.classList.add('animate-in');
    }
    
    // Add a small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.style.opacity = '1';
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (headerRef.current) {
        headerRef.current.classList.remove('animate-in');
      }
    };
  }, []);

  return (
    <header className="header animate-fadein" ref={headerRef}>
      <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
        <div className="header-logo" ref={logoRef} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
          <Logo style={{ height: 32 }} />
        </div>
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <div className="dropdown-container" ref={dropdownRef}>
          <button 
            className="dropdown-toggle" 
            onClick={(e) => {
              e.preventDefault();
              setIndustryDropdownOpen(!industryDropdownOpen);
            }}
            aria-expanded={industryDropdownOpen}
            aria-haspopup="true"
          >
            Industry
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {industryDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/blog" className="dropdown-item" onClick={() => setMenuOpen(false)}>Blog</a>
              <div className="dropdown-divider"></div>
              <a href="/podcast" className="dropdown-item" onClick={() => setMenuOpen(false)}>Podcast</a>
              <div className="dropdown-divider"></div>
              <a href="#templates" className="dropdown-item" onClick={() => setMenuOpen(false)}>Templates</a>
              <div className="dropdown-divider"></div>
              <a href="#social-videos" className="dropdown-item" onClick={() => setMenuOpen(false)}>Social videos</a>
              <a href="/contact" className="dropdown-item" onClick={() => setMenuOpen(false)}>Contact</a>
            
            </div>
          )}
        </div>
        <a href="#store" onClick={() => setMenuOpen(false)}>Store</a>
        <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
        <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
        {/* <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a> */}
        {/* Show CTA inside nav on mobile */}
        <span className="header-cta-mobile">
          <button 
            className="header-cta" 
            onClick={() => {
              setMenuOpen(false);
              handleCTAClick();
            }}
          >
            Contact us
          </button>
        </span>
      </nav>
      </div>
      {/* Show CTA outside nav only on desktop */}
      <span className="header-cta-desktop">
        <button 
          className="header-cta"
          onClick={handleCTAClick}
        >
          Discovery call
        </button>
      </span>
      <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff6a2f" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <line className="line top" x1="3" y1="7" x2="21" y2="7" />
          <line className="line middle" x1="3" y1="12" x2="21" y2="12" />
          <line className="line bottom" x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
