import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/UserDetails.css';
import cardig from '../assets/cardig.png';
import founder from '../assets/founder.png';

// Sample user data - in a real app, this would come from an API
const sampleUsers = {
  '1': {
    id: '1',
    name: 'Sarah Wilson',
    role: 'Senior Developer',
    email: 'sarah.wilson@example.com',
    location: 'San Francisco, CA',
    bio: 'Passionate about creating beautiful and functional web applications. Experienced in React, Node.js, and modern JavaScript frameworks.',
    skills: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML5', 'REST APIs'],
    avatar: founder,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      twitter: 'https://twitter.com/sarahwilson',
      linkedin: 'https://linkedin.com/in/sarahwilson',
      github: 'https://github.com/sarahwilson'
    },
    stats: {
      posts: 24,
      followers: 1432,
      following: 564
    }
  },
  '2': {
    id: '2',
    name: 'John Doe',
    role: 'UI/UX Designer',
    email: 'john.doe@example.com',
    location: 'New York, NY',
    bio: 'Creative UI/UX designer with a passion for creating intuitive and beautiful user experiences. Specialized in user-centered design and prototyping.',
    skills: ['UI/UX Design', 'Figma', 'Sketch', 'User Research', 'Prototyping'],
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    },
    stats: {
      posts: 18,
      followers: 987,
      following: 342
    }
  },
  '3': {
    id: '3',
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    email: 'alex.johnson@example.com',
    location: 'Austin, TX',
    bio: 'Full-stack developer with expertise in both frontend and backend technologies. Enthusiastic about clean code and scalable architecture.',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Docker', 'AWS'],
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
    coverImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      twitter: 'https://twitter.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson'
    },
    stats: {
      posts: 32,
      followers: 2456,
      following: 789
    }
  },
  '4': {
    id: '4',
    name: 'Maria Garcia',
    role: 'Frontend Developer',
    email: 'maria.garcia@example.com',
    location: 'Miami, FL',
    bio: 'Frontend developer passionate about creating responsive and accessible web applications. Love working with React and modern CSS.',
    skills: ['React', 'TypeScript', 'CSS/SCSS', 'GraphQL', 'Jest', 'Accessibility'],
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    socialLinks: {
      twitter: 'https://twitter.com/mariagarcia',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      github: 'https://github.com/mariagarcia'
    },
    stats: {
      posts: 15,
      followers: 876,
      following: 432
    }
  }
};

const UserDetails = () => {
  const { userId } = useParams();
  const user = sampleUsers[userId];

  if (!user) {
    return (
      <div className="user-not-found">
        <Header />
        <div className="container">
          <h2>User not found</h2>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="user-details-page">
      <Header />
      
      {/* Cover Image */}
      <div className="user-cover">
        <img src={user.coverImage} alt={`${user.name}'s cover`} />
      </div>
      
      <div className="user-profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="role">{user.role}</p>
            <p className="location">{user.location}</p>
            
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-value">{user.stats.posts}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.stats.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.stats.following}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
            
            <div className="social-links">
              {user.socialLinks.twitter && (
                <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {user.socialLinks.linkedin && (
                <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {user.socialLinks.github && (
                <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="profile-content">
          {/* About Section */}
          <section className="about-section">
            <h2>About</h2>
            <p>{user.bio}</p>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> {user.email}</p>
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
              {user.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
          
          {/* Recent Activity or Posts Section */}
          <section className="activity-section">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <p>Published a new blog post: <Link to="/blog/1">Getting Started with React Hooks</Link></p>
                <span className="activity-date">2 days ago</span>
              </div>
              <div className="activity-item">
                <p>Updated profile information</p>
                <span className="activity-date">1 week ago</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserDetails;
