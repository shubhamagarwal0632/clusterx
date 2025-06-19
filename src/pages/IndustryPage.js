import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './IndustryPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import card1 from '../assets/industry card1.png';
import card2 from '../assets/industry card2.png';
import card3 from '../assets/industry card3.png';
import card4 from '../assets/industry card4.png';
import hero1 from '../assets/industry card1.png';
import hero2 from '../assets/industry card2.png';
import hero3 from '../assets/industry card3.png';
import hero4 from '../assets/industry card4.png';

const CaseStudyCard = ({ image, title, description }) => (
  <div className="case-study-card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="read-more-btn">Read more</button>
    </div>
  </div>
);

const IndustryPage = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      image: card1,
      title: 'Medisynapse',
      description: 'Behind the Build: How We Solved Real-World Problems with AI'
    },
    {
      image: card4,
      title: 'Shoporia',
      description: 'Shoporia brings trend, value, and convenience together—shop smarter, live better daily.'
    },
    {
      image: card3,
      title: 'Medisynapse',
      description: 'Shop smarter, live better — curated collections delivered right to your door.'
    },
    {
      image: card2,
      title: 'UrbanNest',
      description: 'Modern spaces. Trusted agents. Your perfect home starts right here.'
    },
    {
      image: card3,
      title: 'Medisynapse',
      description: 'Shop smarter, live better — curated collections delivered right to your door.'
    },
    {
      image: card2,
      title: 'UrbanNest',
      description: 'Modern spaces. Trusted agents. Your perfect home starts right here.'
    }
  ];
  
  // Hero section images - using Unsplash placeholders
  const heroImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="industry-page">
      <Header />
      <div className="industry-page-container">
      <section className="industry-hero">
        <div className="hero-content">
          <h1>We Mould Your Vision with <span className="highlight">Our Perfection</span></h1>
          <p>
            We value the business visions of clients and aim to maximize ROIs. We deliver trending solutions that bring 100% client satisfaction. Yes, it is totally true that we mould your vision with our perfection.
          </p>
        </div>
        <div className="hero-images">
          <div className="image-grid">
            <div className="image-row">
              <div className="image-container">
                <img src={heroImages[0]} alt="" className="hero-img" />
              </div>
              <div className="image-container">
                <img src={heroImages[1]} alt="" className="hero-img" />
              </div>
            </div>
            <div className="image-row">
              <div className="image-container">
                <img src={heroImages[2]} alt="" className="hero-img" />
              </div>
              <div className="image-container">
                <img src={heroImages[3]} alt="" className="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="case-studies-container">
          <h2>Case Studies</h2>
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryPage;
