import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaClock, FaTwitter, FaLinkedin, FaFacebook, FaLink, FaEye, FaComment } from 'react-icons/fa';
import { getBlogPostById, getRelatedPosts } from '../data/blogPosts';
import Header from './Header';
import Footer from './Footer';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = () => {
      try {
        // In a real app, you would fetch from an API:
        // const response = await fetch(`/api/blog-posts/${id}`);
        // const data = await response.json();
        
        // For now, we'll use the sample data
        const data = getBlogPostById(id);
        
        if (!data) {
          throw new Error('Blog post not found');
        }
        
        // Get related posts
        const related = getRelatedPosts(id);
        setRelatedPosts(related);
        
        setBlogPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchBlogPost();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={() => navigate('/blog')} className="back-button">
          Back to Blog
        </button>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="not-found">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/blog')} className="back-button">
          Back to Blog
        </button>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this blog post: ${blogPost.title}`;

  return (
    <div className="blog-post-page">
      <Header />
      <header className="blog-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            <FaArrowLeft className="back-icon" /> Back
          </button>
          
          <div className="author-section">
            <div className="author-info">
              <div className="author-main">
                <div className="author-avatar-container">
                  <img 
                    src={blogPost.authorImage || 'https://via.placeholder.com/50'} 
                    alt={blogPost.authorName}
                    className="author-avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/50';
                    }}
                  />
                </div>
                <div className="author-details">
                  <h4>{blogPost.authorName || 'Gaurav Mitawa'}</h4>
                  <p className="author-role">Founder, CEO</p>
                </div>
              </div>
              <div className="post-date">
                <span>Mar 16 2024</span>
                <button 
                    className="view-profile-button"
                    onClick={() => window.location.href = '/profile'}
                  >
                    View Profile
                  </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="post-content">
          <div className="social-share">
            <div className="share-label">Share</div>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button facebook"
              aria-label="Share on Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blogPost.title)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button twitter"
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button linkedin"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <button 
              className="social-button copy"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                // You might want to add a toast notification here
              }}
              aria-label="Copy link to clipboard"
            >
              <FaLink />
            </button>
          </div>
          
          <div className="content-wrapper">
            <h1 className="post-title">{blogPost.title}</h1>
            
            <div className="featured-image">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x400';
                }}
              />
            </div>
            
            <div className="post-body">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="post-paragraph">{paragraph}</p>
              ))}
            </div>
            
            <div className="blog-meta">
              <span><FaEye className="meta-icon" /> 1.2k views</span>
              <span><FaComment className="meta-icon" /> 45 comments</span>
              <span><FaCalendarAlt className="meta-icon" /> {blogPost.date}</span>
            </div>
            
            <div className="comments-section">
              <div className="comments-header">
                <h2>Comments</h2>
              </div>
              
              <div className="comment-form">
                <img 
                  src="https://via.placeholder.com/40" 
                  alt="User" 
                  className="comment-avatar"
                />
                <textarea 
                  className="comment-input" 
                  placeholder="Write a comment..."
                ></textarea>
              </div>
              
              <div className="recent-posts">
                <h2>Recent Blog Posts</h2>
                <div className="posts-grid">
                  {relatedPosts.slice(0, 6).map(post => (
                    <div key={post.id} className="post-card">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="post-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300x160';
                        }}
                      />
                      <div className="post-details">
                        <h3>{post.title}</h3>
                        <div className="post-meta">
                          <span>{post.date}</span>
                          <a href={`/blog/${post.id}`} className="view-button">View</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="contact-form-section">
                <form className="contact-form">
                  <input 
                    type="text" 
                    placeholder="Enter name" 
                    className="contact-input"
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="contact-input"
                    required 
                  />
                  <textarea 
                    placeholder="Write your message......." 
                    className="contact-message"
                    rows="4"
                    required
                  ></textarea>
                  <button type="submit" className="contact-submit">Send Now</button>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
