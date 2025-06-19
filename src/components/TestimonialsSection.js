import React from "react";
import { motion, useInView } from "framer-motion";
import "./TestimonialsSection.css";
import videoSource from "../assets/VID-20250610-WA0023.mp4";
import thumbnailImage from "../assets/youtube-placeholder.png";

const videoItems = [
  {
    title: "Seamless Integration",
    description: "Connect with any platform or tool in minutes"
  },
  {
    title: "AI-Powered Automation",
    description: "Let our AI handle repetitive tasks for you"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time"
  },
  {
    title: "Advanced Analytics",
    description: "Get insights and make data-driven decisions"
  }
];

const VideoCard = ({ item, index }) => {
  const cardRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  // Initialize video
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.onloadeddata = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Play failed:", e));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleCardClick = (e) => {
    // Don't toggle play if clicking on the video itself (let video controls handle it)
    if (e.target !== videoRef.current) {
      togglePlay();
    }
  };

  // Auto-play when in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.log("Autoplay prevented:", e));
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Autoplay prevented:", e));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="video-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className={`video-container ${isPlaying ? 'playing' : ''}`}
        onClick={handleCardClick}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video 
          ref={videoRef}
          className="card-video"
          muted 
          loop
          playsInline
          preload="metadata"
          poster={thumbnailImage}
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {!isPlaying && (
          <div className="play-overlay">
            <div className="play-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
          </div>
        )}
        
        <div className={`video-controls ${showControls || !isPlaying ? 'visible' : ''}`}>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="controls-bottom">
            <div className="left-controls">
              <button className="control-button play-pause" onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}>
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <div className="time">0:00</div>
            </div>
            <button className="control-button fullscreen" onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                videoRef.current.requestFullscreen().catch(e => console.log("Fullscreen error:", e));
              }
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What Client Says
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seamlessly integrate across platforms and systems to enhance flexibility, efficiency, and user experience effortlessly.
        </motion.p>
      </div>
      
      <div className="video-grid">
        {videoItems.map((item, index) => (
          <VideoCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
