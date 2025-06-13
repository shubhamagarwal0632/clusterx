import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 20) + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-logo">
          <span className="logo-text">Cluster</span>
          <span className="logo-x">X</span>
        </div>
        <div className="loading-progress">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-text">Loading {progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
