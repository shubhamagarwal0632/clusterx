import React from 'react';
import './PodcastLandingPage.css';

const podcastData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/200x200?text=Podcast+1',
    title: 'The Future of AI',
    host: 'Jane Doe',
    hostAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/200x200?text=Podcast+2',
    title: 'Tech Trends 2024',
    host: 'John Smith',
    hostAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/200x200?text=Podcast+3',
    title: 'Startup Stories',
    host: 'Alice Lee',
    hostAvatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/200x200?text=Podcast+4',
    title: 'Design Matters',
    host: 'Bob Brown',
    hostAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

const avatars = [
  'https://randomuser.me/api/portraits/men/11.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/13.jpg',
  'https://randomuser.me/api/portraits/women/14.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
];

const PodcastLandingPage = () => {
  return (
    <div className="podcast-landing-page">
      {/* Header */}
      <header className="pl-header">
        <div className="pl-logo">Podify</div>
        <nav className="pl-nav">
          <a href="#">Home</a>
          <a href="#">Podcasts</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="pl-cta">Sign Up</button>
      </header>

      {/* Hero Section */}
      <section className="pl-hero">
        <div className="pl-hero-content">
          <h1>
            Listen to <span className="highlight">Inspiring</span> Podcasts<br />
            Anytime, <span className="highlight">Anywhere</span>
          </h1>
          <p className="pl-hero-desc">
            Discover, listen, and share the best podcasts from around the world. Join millions of listeners today!
          </p>
          <div className="pl-hero-buttons">
            <button className="pl-listen-btn">Start Listening</button>
            <button className="pl-free-btn">Free</button>
          </div>
          <div className="pl-social-proof">
            <div className="pl-avatars">
              {avatars.map((src, idx) => (
                <img key={idx} src={src} alt="Listener avatar" className="pl-avatar" />
              ))}
            </div>
            <span className="pl-listeners">5M+ listeners</span>
          </div>
        </div>
        <div className="pl-hero-player">
          <img src="https://via.placeholder.com/300x300?text=Podcast+Player" alt="Podcast Player" className="pl-player-img" />
          <button className="pl-play-btn">▶</button>
        </div>
      </section>

      {/* Podcast Cards Section */}
      <section className="pl-podcasts-section">
        <div className="pl-section-header">
          <h2>Popular Podcasts</h2>
          <button className="pl-filter-btn">Filter</button>
        </div>
        <div className="pl-podcast-grid">
          {podcastData.map((podcast) => (
            <div key={podcast.id} className="pl-podcast-card">
              <img src={podcast.image} alt={podcast.title} className="pl-podcast-img" />
              <div className="pl-podcast-info">
                <h3>{podcast.title}</h3>
                <div className="pl-host-info">
                  <img src={podcast.hostAvatar} alt={podcast.host} className="pl-host-avatar" />
                  <span>{podcast.host}</span>
                </div>
                <button className="pl-card-play-btn">▶</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PodcastLandingPage; 