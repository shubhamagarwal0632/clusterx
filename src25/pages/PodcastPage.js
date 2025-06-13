import React from 'react';
import './PodcastPage.css';
import rectangleImage from '../assets/Rectangle 34624330.png';
import micStandImage from '../assets/Group 1261152893.png';

const podcasts = [
  {
    id: 1,
    type: 'Spotify Original',
    title: 'Podcasts Der Podcast',
    host: 'Kane Williams',
    description: 'Design Dialogue: From Inspiration to Illustration. Innovate with Us.',
    duration: '20:35',
    imageUrl: rectangleImage,
  },
  {
    id: 2,
    type: 'Spotify Exclusive',
    title: 'Herren Gedeck',
    host: 'Jane Cooper',
    description: 'Design Dialogue: From Inspiration to Illustration. Innovate with Us.',
    duration: '25:10',
    imageUrl: rectangleImage,
  },
  {
    id: 3,
    type: 'Spotify Original',
    title: 'Sara',
    host: 'Jensen Bell',
    description: 'Design Dialogue: From Inspiration to Illustration. Innovate with Us.',
    duration: '18:20',
    imageUrl: rectangleImage,
  },
  // Add more podcast objects as needed
];

function PodcastPage() {
  return (
    <div className="podcast-page">
        <div className="logo">ClusterX</div>
        <nav className="nav">
          <a href="#industry">Industry</a>
          <a href="#store">Store</a>
          <a href="#resources">Resources</a>
          <a href="#company">Company</a>
        </nav>
        <div className="header-buttons">
          <button className="btn-free-call">Book a free Call</button>
          <button className="btn-contact">Contact Us</button>
        </div>

      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Discover Something <span className="highlight">Valuable</span> and Listen Podcast Here.
          </h1>
          <p>
            Dive deep with us each episode unfolds, unlocking hidden treasures of knowledge, offering fresh insights, and sparking meaningful conversations.
          </p>
          <div className="hero-buttons">
            <button className="btn-start">Start Listening</button>
            <button className="btn-free">Free</button>
          </div>
          <div className="user-count">
            <span>5M+</span> Worldwide User
            <div className="user-icons">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user1" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user2" />
              <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="user3" />
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user4" />
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="user5" />
              <span className="more-users">+</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="podcast-player">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Podcast Host" />
            <div className="player-controls">
              <button className="play-btn">▶</button>
              {/* Add waveform or other player UI elements */}
            </div>
            <div className="user-bubbles">
              {/* <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user1" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user2" /> */}
            </div>
            <img src={micStandImage} alt="Mic Stand" className="mic-stand" />
          </div>
        </div>
      </section>

      <section className="top-podcast-section">
        <div className="section-header">
          <h2>Top Podcast For This <span className="highlight-week">Week</span></h2>
          <button className="btn-explore">Explore All Podcast</button>
        </div>

        <div className="podcast-cards">
          {podcasts.map(podcast => (
            <div key={podcast.id} className="podcast-card">
              <div className={`badge ${podcast.type === 'Spotify Original' ? 'original' : 'exclusive'}`}>
                {podcast.type}
              </div>
              <img src={podcast.imageUrl} alt={podcast.title} className="podcast-image" />
              <h3>{podcast.title}</h3>
              <p className="host">Host: {podcast.host}</p>
              <p className="description">{podcast.description}</p>
              <div className="card-footer">
                <span className="duration">{podcast.duration}</span>
                <button className="btn-play">▶ Play</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PodcastPage;
