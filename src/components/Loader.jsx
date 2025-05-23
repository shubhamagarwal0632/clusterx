import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-spinner"></div>
    <div className="loader-brand">
      <span className="loader-animated-text">c</span>
      <span className="loader-animated-text">l</span>
      <span className="loader-animated-text">u</span>
      <span className="loader-animated-text">s</span>
      <span className="loader-animated-text">t</span>
      <span className="loader-animated-text">e</span>
      <span className="loader-animated-text">r</span>
      <span className="loader-animated-text">x</span>
    </div>
  </div>
);

export default Loader;
