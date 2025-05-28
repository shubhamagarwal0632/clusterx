import React from "react";
import "./WhyChooseUsSection.css";

// Import images using ES6 imports
import cardig from '../assets/cardig.png';
import founder from '../assets/founder.png';

const blogCards = [
  {
    id: 1,
    image: cardig,
    title: "Web Development",
    date: "Mar 8, 2024",
    description: "Creating dynamic, responsive websites for seamless user experiences.",
    authorImage: founder,
    authorName: "Gaurav Mishra",
    role: "Founder, CEO",
  },
  {
    id: 2,
    image: cardig,
    title: "Web Development",
    date: "Mar 8, 2024",
    description: "Creating dynamic, responsive websites for seamless user experiences.",
    authorImage: founder,
    authorName: "Gaurav Mishra",
    role: "Founder, CEO",
  },
  {
    id: 3,
    image: cardig,
    title: "Web Development",
    date: "Mar 8, 2024",
    description: "Creating dynamic, responsive websites for seamless user experiences.",
    authorImage: founder,
    authorName: "Gaurav Mishra",
    role: "Founder, CEO",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="blog-section">
      <div className="section-header">
        <span className="badge"> <span className="integrate-dot" /> Blog</span>
        <h2>Integrate Wherever You Want</h2>
        <p>
          Seamlessly integrate across platforms and systems to enhance
          flexibility, efficiency, and user experience effortlessly.
        </p>
      </div>

      <div className="cards-container">
        {blogCards.map((card) => (
          <div key={card.id} className="blog-card">
            <img 
              src={card.image} 
              alt="Blog Visual" 
              className="card-image"
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
              }}
            />
            <div className="card-content">
              <div className="card-header">
                <h3>{card.title}</h3>
                <span className="card-date">{card.date}</span>
              </div>
              <p className="card-desc">{card.description}</p>
              <div className="card-footer">
                <button className="read-more">Read more ➤</button>
                <div className="author">
                  <img 
                    src={card.authorImage} 
                    alt="Author" 
                    className="author-image"
                    onError={(e) => {
                      console.error('Error loading author image:', e.target.src);
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = 'https://via.placeholder.com/40?text=👤';
                    }}
                  />
                  <div>
                    <p>{card.authorName}</p>
                    <small>{card.role}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
