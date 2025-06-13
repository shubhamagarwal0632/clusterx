import React, { useState, useRef, useEffect } from "react";
import "./AiPartnerSection.css";

// Sample images - replace these with your actual image paths
const sliderImages = [
  "https://via.placeholder.com/800x400/ff6a2f/ffffff?text=Image+1",
  "https://via.placeholder.com/800x400/ff9a2f/ffffff?text=Image+2",
  "https://via.placeholder.com/800x400/ffce2f/ffffff?text=Image+3",
  "https://via.placeholder.com/800x400/91ff2f/ffffff?text=Image+4",
  "https://via.placeholder.com/800x400/2fff9a/ffffff?text=Image+5",
];

const offers = [
  "Continuous Optimization",
  "Always aligned with latest tech",
  "Weekly calls + expert input",
  "You gain a strategic partner",
  "Evolving roadmap as your needs grow",
];

const AiPartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const sliderTrackRef = useRef(null);

  const goToSlide = (index) => {
    if (index < 0 || index >= sliderImages.length) return;
    setActiveIndex(index);
    setTranslateX(-index * 100);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < sliderImages.length - 1) {
      goToSlide(activeIndex + 1);
    }
  };

  // Handle mouse/touch start
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  // Handle mouse/touch move
  const handleMove = (clientX) => {
    if (!isDragging || !sliderTrackRef.current) return;
    
    const deltaX = clientX - startX;
    const containerWidth = sliderTrackRef.current.offsetWidth;
    const maxDelta = containerWidth * 0.5; // Allow dragging up to 50% of the container width
    const boundedDelta = Math.max(-maxDelta, Math.min(maxDelta, deltaX));
    
    // Calculate the new translateX based on the drag distance
    setTranslateX(-activeIndex * 100 + (boundedDelta / containerWidth) * 100);
  };

  // Handle mouse/touch end
  const handleEnd = (clientX) => {
    if (!isDragging || !sliderTrackRef.current) return;
    
    const deltaX = clientX - startX;
    const threshold = sliderTrackRef.current.offsetWidth * 0.1; // 10% of container width
    
    // Determine direction and if threshold is crossed
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide if not at first slide
        if (activeIndex > 0) {
          goToSlide(activeIndex - 1);
        } else {
          goToSlide(activeIndex);
        }
      } else {
        // Swipe left - go to next slide if not at last slide
        if (activeIndex < sliderImages.length - 1) {
          goToSlide(activeIndex + 1);
        } else {
          goToSlide(activeIndex);
        }
      }
    } else {
      // Not enough movement, return to current slide
      goToSlide(activeIndex);
    }
    
    setIsDragging(false);
  };

  // Set up event listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Mouse events
    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseMove = (e) => handleMove(e.clientX);
    const onMouseUp = (e) => handleEnd(e.clientX);
    const onMouseLeave = () => isDragging && setIsDragging(false);

    // Touch events
    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onTouchEnd = (e) => handleEnd(e.changedTouches[0].clientX);

    // Add event listeners
    slider.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mouseleave', onMouseLeave);
    
    // Touch events for mobile
    slider.addEventListener('touchstart', onTouchStart, { passive: true });
    slider.addEventListener('touchmove', onTouchMove, { passive: false });
    slider.addEventListener('touchend', onTouchEnd);

    // Clean up
    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mouseleave', onMouseLeave);
      
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, activeIndex, startX]);

  return (
    <section className="aipartner-section" id="offers">
      <div className="aipartner-label"><span style={{ color: '#ff6a2f', fontWeight: 700 }}>●</span> OFFERS</div>
      <h2>Ai partner, Not a builder</h2>
      <p>AI is not static. With us, you get more than implementation you get ongoing leverage.</p>
      
      <div className="image-slider-container">
        <div className="slider-wrapper" ref={sliderRef}>
          <div 
            className="slider-track"
            ref={sliderTrackRef}
            style={{
              transform: `translateX(${translateX}%)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {sliderImages.map((image, index) => {
              let slideClass = 'slider-slide';
              if (index === activeIndex) {
                slideClass += ' active';
              } else if (index < activeIndex) {
                slideClass += ' prev';
              } else {
                slideClass += ' next';
              }
              
              return (
                <div 
                  key={index} 
                  className={slideClass}
                >
                  <img 
                    src={image} 
                    alt={`Slide ${index + 1}`} 
                    className="slider-image"
                    draggable="false"
                  />
                </div>
              );
            })}
          </div>
          
          <div className="slider-pagination">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className={`slider-arrow prev ${activeIndex === 0 ? 'hidden' : ''}`}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          
          <button 
            className={`slider-arrow next ${activeIndex === sliderImages.length - 1 ? 'hidden' : ''}`}
            onClick={handleNext}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>
      
      <div className="aipartner-offer-card">
        <div className="aipartner-offer-content">
          <h3>Clusterx</h3>
          <ul className="aipartner-offer-list">
            {offers.map((item, idx) => (
              <li key={idx}><span className="aipartner-check">✓</span> {item}</li>
            ))}
          </ul>
        </div>
        <div className="aipartner-vertical-divider">
          <div className="aipartner-divider-dot">|||</div>
        </div>
      </div>
    </section>
  );
};

export default AiPartnerSection;
