import React from 'react';
import './PodcastPlayer.css';

const PodcastPlayer = () => {
  return (
    <div className="mic-player">
      {/* Top Left Audio Waveform */}
      <div className="audio-indicator">
        <button className="audio-play-btn">▶</button>
        <div className="waveform">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="waveform-bar" style={{
              height: `${10 + Math.random() * 20}px`,
              animationDelay: `${i * 0.1}s`
            }} />
          ))}
        </div>
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="User" 
          className="user-avatar small"
        />
      </div>

      {/* Main Mic Shape */}
      <div className="mic-shape">
        <div className="mic-outer-glow">
          <div className="mic-inner">
            {/* Podcast Host Image */}
            <div className="host-image-container">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Podcast Host" 
                className="host-image"
              />
              <div className="play-btn-container">
                <button className="main-play-btn">▶</button>
                <div className="waveform-small">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="waveform-small-bar" style={{
                      height: `${5 + Math.random() * 10}px`
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mic-stand"></div>
      </div>

      {/* Right Side User Avatar */}
      <img 
        src="https://randomuser.me/api/portraits/women/44.jpg" 
        alt="Co-host" 
        className="user-avatar right"
      />
    </div>
  );
};

export default PodcastPlayer;
