import React, { useEffect, useState, useRef } from 'react';
import './Loading.css';

const Loader = () => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const animationFrame = useRef(null);
  const startTime = useRef(null);
  const fullText = 'Cluster';
  const typingSpeed = 100; // Base speed in ms
  
  // Smooth cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Typing animation with requestAnimationFrame for smoother updates
  useEffect(() => {
    if (typedText.length >= fullText.length) {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 800); // Slightly longer pause to appreciate the animation
      return () => clearTimeout(timer);
    }

    
    const startTyping = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      
      // Calculate which character should be shown based on time
      const charsToShow = Math.min(
        Math.floor(elapsed / typingSpeed) + 1,
        fullText.length
      );
      
      setTypedText(fullText.substring(0, charsToShow));
      
      if (charsToShow < fullText.length) {
        animationFrame.current = requestAnimationFrame(startTyping);
      } else {
        startTime.current = null;
      }
    };
    
    // Start the animation
    animationFrame.current = requestAnimationFrame(startTyping);
    
    // Cleanup
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [fullText]);

  // If loading is complete, don't render anything
  if (isComplete) return null;

  return (
    <div className={`loading-overlay ${isComplete ? 'fade-out' : ''}`}>
      <div className="loading-container">
        <div className="typing-container">
          <h1 className="typing-text">
            {typedText.split('').map((char, index) => (
              <span 
                key={index} 
                className="char"
                style={{
                  '--delay': `${index * 0.05}s`,
                  '--char-index': index
                }}
              >
                {char}
              </span>
            ))}
            <span 
              className={`cursor ${cursorVisible ? 'visible' : ''}`}
              style={{
                '--cursor-delay': `${typedText.length * 0.05}s`
              }}
            ></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
