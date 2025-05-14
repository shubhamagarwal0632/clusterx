import React, { useState } from "react";
import "./Header.css";
import Logo from "./Logo";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header animate-fadein">
      <div className="header-logo"><Logo style={{ height: 32 }} /></div>
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <a href="#industry" onClick={() => setMenuOpen(false)}>Industry</a>
        <a href="#store" onClick={() => setMenuOpen(false)}>Store</a>
        <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
        <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </nav>
      <button className="header-cta">Get Started</button>
      <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6a2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line className="line top" x1="3" y1="7" x2="21" y2="7" />
          <line className="line middle" x1="3" y1="12" x2="21" y2="12" />
          <line className="line bottom" x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
