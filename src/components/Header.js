import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const industryDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleCTAClick = () => {
    navigate('/discovery-call');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(event.target)) {
        setIndustryDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setResourcesDropdownOpen(false);
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <div className="header-logo" ref={logoRef} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
          <Logo style={{ height: 32 }} />
        </div>
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <div className="dropdown-container" ref={industryDropdownRef}>
          <button 
            className="dropdown-toggle" 
            onClick={(e) => {
              e.preventDefault();
              setIndustryDropdownOpen(!industryDropdownOpen);
              setResourcesDropdownOpen(false);
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
              <a href="#addtech" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">AddTech</div>
                  <div className="dropdown-item-desc">Technology solutions for advertisers</div>
                </div>
              </a>
              <a href="#telecalling" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.25 13.27 7.09 10.5L8.96 8.53C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">Telecalling</div>
                  <div className="dropdown-item-desc">Call center solutions</div>
                </div>
              </a>
              <a href="#healthcare" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#FF6A2F" />
                    <path d="M17 12H7V14H17V12Z" fill="#FF6A2F" />
                    <path d="M13 8H7V10H13V8Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">Healthcare</div>
                  <div className="dropdown-item-desc">Medical services</div>
                </div>
              </a>
              <a href="#fintech" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.86 16.18 8.76 15H6.58C6.68 17.19 8.21 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">FinTech</div>
                  <div className="dropdown-item-desc">Financial technology</div>
                </div>
              </a>
              <a href="#ecommerce" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">E-commerce</div>
                  <div className="dropdown-item-desc">Online retail solutions</div>
                </div>
              </a>
            </div>
          )}
        </div>
        <a href="#store" onClick={() => setMenuOpen(false)}>Store</a>
        <div className="dropdown-container" ref={resourcesDropdownRef}>
          <button 
            className="dropdown-toggle" 
            onClick={(e) => {
              e.preventDefault();
              setResourcesDropdownOpen(!resourcesDropdownOpen);
              setIndustryDropdownOpen(false);
            }}
            aria-expanded={resourcesDropdownOpen}
            aria-haspopup="true"
          >
            Resources
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {resourcesDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/blog" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#FF6A2F" />
                    <path d="M17 12H7V14H17V12Z" fill="#FF6A2F" />
                    <path d="M13 8H7V10H13V8Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">Blog</div>
                  <div className="dropdown-item-desc">Latest articles and news</div>
                </div>
              </a>
              <a href="#templates" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">Templates</div>
                  <div className="dropdown-item-desc">Ready-to-use templates</div>
                </div>
              </a>
              <a href="#ebooks" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <div className="dropdown-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H8V12L10.5 9.75L13 12V4H18V20Z" fill="#FF6A2F" />
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-title">Ebooks</div>
                  <div className="dropdown-item-desc">Downloadable resources</div>
                </div>
              </a>
            </div>
          )}
        </div>
        <a href="#company" onClick={() => {
          setMenuOpen(false);
          setIndustryDropdownOpen(false);
          setResourcesDropdownOpen(false);
        }}>Company</a>
        <a href="/contact" onClick={() => {
          setMenuOpen(false);
          setIndustryDropdownOpen(false);
          setResourcesDropdownOpen(false);
        }}>Contact</a>
        <a href="/podcast" onClick={() => {
          setMenuOpen(false);
          setIndustryDropdownOpen(false);
          setResourcesDropdownOpen(false);
        }}>Podcast</a>
        {/* <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a> */}
        {/* Show CTA inside nav on mobile */}
        <span className="header-cta-mobile">
          <button 
            className="header-cta" 
            onClick={() => {
              setMenuOpen(false);
              handleCTAClick();
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Book a Discovery Call"
          >
            Book a Call
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                marginLeft: '8px',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'translateX(4px)' : 'none'
              }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
