import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiFilter, FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../data/blogPosts';
import '../pages/BlogPage.css';

const BlogPage = () => {
  const navigate = useNavigate();
  
  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };
  // Using blogPosts from the shared data file

  return (
    <div className="blog-page">
      <Header />
      
      {/* Hero Section */}
      <header className="blog-hero">
        <div className="blog-hero-content">
          <h1>AI Agency Weekly Roundup</h1>
          <p>Empower big brands to deliver bold concepts, with visually stunning, well-researched designs that drive engagement and inspire remarkable experiences.</p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <main className="blog-container">
        <div className="blog-header">
          <h2 className="section-title">Recent Blog Posts</h2>
          <div className="filter-options">
            <button className="filter-button">
              <FiFilter size={16} />
            </button>
            <button className="sort-button">
              <FiFilter size={16} />
            </button>
          </div>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <div className="blog-meta-top">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <div className="card-footer">
                <button 
                  className="read-more" 
                  onClick={() => handleReadMore(post.id)}
                >
                  Read more ➤
                </button>
                <div className="author" onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/user/${post.authorId || '1'}`);
                }} style={{ cursor: 'pointer' }}>
                  <img 
                    src={post.authorImage} 
                    alt="Author" 
                    className="author-image"
                    onError={(e) => {
                      console.error('Error loading author image:', e.target.src);
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = 'https://via.placeholder.com/40?text=👤';
                    }}
                  />
                  <div>
                    <p>{post.authorName}</p>
                    <small>{post.role || 'Author'}</small>
                  </div>
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
