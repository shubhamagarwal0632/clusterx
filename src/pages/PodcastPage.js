import React from 'react';
import './PodcastPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rectangleImage from '../assets/Rectangle 34624330.png';
import micStandImage from '../assets/Group 1261152893.png';
import playIcon1 from '../assets/playicon1.png';
import playIcon2 from '../assets/playicon2.png';
import vector from '../assets/Vector.png';

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
    <>
    <Header />
    <div className="podcastPage">

      <section className="heroSection">
        <div className="heroText">
          <h1>
            Discover Something<span className="highlight">Valuable</span> and Listen Podcast Here.
          </h1>
          <p>
            Dive deep with us each episode unfolds a new chapter in the world of business and innovation. Join our host as they engage with industry leaders, entrepreneurs, and visionaries, uncovering the stories behind their success and the lessons they've learned along the way.
          </p>
          <div className="heroButtons">
            <button className="btnStart">Start Listening</button>
            <button className="btnFree">Free</button>
          </div>
          <div className="userCount">
            <span>5M+</span> Worldwide User
            <div className="userIcons">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="user1" />
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user2" />
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="user3" />
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user2" />
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="user3" />
            </div>
          </div>
        </div>

        <div className="heroImage">
          <img src={playIcon1} alt="Play Icon 1" className="playIcon1" />
          <img src={playIcon2} alt="Play Icon 2" className="playIcon2" />
          <div className="podcastPlayer">
            <img src={vector} alt="Podcast Host" />
            <div className="playerControls">
              {/* <button className="playBtn">▶</button> */}
            </div>
          </div>
          <img src={micStandImage} alt="Mic Stand" className="micStand" />
        </div>
      </section>

      <section className="topPodcastSection">
        <div className="sectionHeader">
          <h2>Top Podcast For This <span className="highlightWeek">Week</span></h2>
          <button className="btnExplore">Explore All Podcast</button>
        </div>

        <div className="podcastCards">
          {podcasts.map(podcast => (
            <div key={podcast.id} className="podcastCard">
              <div className={`badge ${podcast.type === 'Spotify Original' ? 'original' : 'exclusive'}`}>
                {podcast.type}
              </div>
              <img src={podcast.imageUrl} alt={podcast.title} className="podcastImage" />
              <h3>{podcast.title}</h3>
              <p className="host">Host: {podcast.host}</p>
              <p className="description">{podcast.description}</p>
              <div className="cardFooter">
                <span className="duration">{podcast.duration}</span>
                <button className="btnPlay">▶ Play</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    
    <Footer />
    </>
  );
}

export default PodcastPage;
