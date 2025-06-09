import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaClock, FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';
import { getBlogPostById, getRelatedPosts } from '../data/blogPosts';
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
      <article className="blog-post">
        <header className="post-header">
          <div className="container">
            <nav className="breadcrumb">
              <button onClick={() => navigate(-1)} className="back-button">
                <FaArrowLeft /> Back
              </button>
            </nav>
            
            <div className="post-meta">
              <span className="category">{blogPost.category}</span>
              <h1 className="post-title">{blogPost.title}</h1>
              
              <div className="author-info">
                <div className="author-avatar">
                  <img 
                    src={blogPost.authorImage} 
                    alt={blogPost.authorName}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/50';
                    }}
                  />
                </div>
                <div className="author-details">
                  <h4>{blogPost.authorName}</h4>
                  <div className="post-details">
                    <span><FaCalendarAlt /> {blogPost.date}</span>
                    <span><FaClock /> {blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              
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
            </div>
          </div>
        </header>
        
        <div className="post-content container">
          <div className="content-wrapper">
            <div className="post-body">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="post-paragraph">{paragraph}</p>
              ))}
            </div>
            
            <div className="post-footer">
              <div className="tags">
                {blogPost.skills && blogPost.skills.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="share-buttons">
                <span>Share:</span>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-button twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-button linkedin"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-button facebook"
                >
                  <FaFacebook />
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    alert('Link copied to clipboard!');
                  }}
                  className="share-button copy"
                  aria-label="Copy link"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
          
          <aside className="sidebar">
            <div className="author-card">
              <div className="author-header">
                <img 
                  src={blogPost.authorImage} 
                  alt={blogPost.authorName}
                  className="author-avatar"
                />
                <div>
                  <h4>{blogPost.authorName}</h4>
                  <p className="author-role">{blogPost.role}</p>
                </div>
              </div>
              <p className="author-bio">
                {blogPost.authorBio || 'No bio available.'}
              </p>
              <button 
                onClick={() => navigate(`/user/${blogPost.authorId}`)}
                className="view-profile-button"
              >
                View Profile
              </button>
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="related-posts">
                <h3>Related Posts</h3>
                <div className="related-posts-list">
                  {relatedPosts.map(post => (
                    <div 
                      key={post.id} 
                      className="related-post"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <h4>{post.title}</h4>
                      <span className="post-date">{post.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
