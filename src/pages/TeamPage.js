import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaBrain, FaRobot, FaCode, FaChartLine } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TeamPage.css';

// High quality AI/tech team images
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'AI Research Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    expertise: ['Machine Learning', 'Neural Networks', 'Computer Vision'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Zhang',
    role: 'Lead Data Scientist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    expertise: ['Deep Learning', 'NLP', 'Big Data'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'AI Solutions Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    expertise: ['Cloud AI', 'MLOps', 'AI Ethics'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Head of AI Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    expertise: ['AI Infrastructure', 'Scalable Systems', 'DevOps'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Senior ML Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    expertise: ['Reinforcement Learning', 'Generative AI', 'AI Safety'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'AI Product Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=81',
    expertise: ['AI Strategy', 'Product Development', 'Market Analysis'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const stats = [
  { id: 1, value: '25+', label: 'AI Projects Completed' },
  { id: 2, value: '15+', label: 'Years Combined Experience' },
  { id: 3, value: '50+', label: 'Research Papers Published' },
  { id: 4, value: '10+', label: 'Industry Awards Won' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

const expertise = [
  { id: 1, icon: <FaBrain />, title: 'Machine Learning', description: 'Advanced algorithms and predictive models' },
  { id: 2, icon: <FaRobot />, title: 'Computer Vision', description: 'Image and video analysis solutions' },
  { id: 3, icon: <FaChartLine />, title: 'Data Analytics', description: 'Actionable insights from your data' },
  { id: 4, icon: <FaCode />, title: 'AI Integration', description: 'Seamless AI into your workflow' }
];

const TeamPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursor && cursorInner) {
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        cursorInner.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .team-card, .expertise-card');
    const handleMouseEnter = () => {
      cursor?.classList.add('cursor-hover');
      cursorInner?.classList.add('cursor-inner-hover');
    };
    const handleMouseLeave = () => {
      cursor?.classList.remove('cursor-hover');
      cursorInner?.classList.remove('cursor-inner-hover');
    };
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="ai-agency-page">
      {/* Custom Cursor */}
      <div className="cursor"></div>
      <div className="cursor-inner"></div>
      
      <Header />
      <main>
        <motion.section 
          className="ai-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="ai-hero-bg">
            <div className="floating-shape floating-shape-1"></div>
            <div className="floating-shape floating-shape-2"></div>
          </div>
          <motion.div 
            className="ai-hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet Our <span className="gradient-text">AI Experts</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our team of world-class AI researchers, engineers, and strategists are pushing the boundaries of artificial intelligence to create innovative solutions for businesses worldwide.
            </motion.p>
            <motion.div 
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#team" className="btn-primary">
                Meet the Team
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Stats Section */}
        <section className="stats-section">
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Delivering exceptional results through cutting-edge AI solutions
            </motion.p>
          </div>
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="ai-expertise">
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Our Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cutting-edge AI solutions tailored to your needs
            </motion.p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <motion.div 
                key={item.id}
                className="expertise-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Our AI Experts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meet the brilliant minds behind our AI solutions
            </motion.p>
          </div>
          
          <motion.div 
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id} 
                className="team-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 10
                  } 
                }}
              >
                <div className="team-card-image">
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <div className="team-card-expertise">
                    {member.expertise.map((skill, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <div className="team-card-social">
                    <motion.a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaInstagram />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cta-content">
              <div className="cta-badge">
                <span>🚀 New Opportunities</span>
              </div>
              <h3 className="cta-title">
                Ready to build something <span className="gradient-text">amazing</span> with AI?
              </h3>
              <p className="cta-description">
                Join our innovative team or let's collaborate on your next AI project. We're pushing the boundaries of what's possible.
              </p>
              <div className="cta-buttons">
                <motion.a 
                  href="#contact" 
                  className="btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <span className="btn-icon">→</span>
                </motion.a>
                <motion.a 
                  href="#team" 
                  className="btn-secondary"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#4f46e5'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet the Team
                </motion.a>
              </div>
              <div className="cta-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Passion</span>
                </div>
              </div>
            </div>
            <div className="cta-visual">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="cta-illustration">
                <div className="illustration-dots"></div>
                <div className="illustration-main">
                  <div className="illustration-inner">
                    <span>AI</span>
                    <div className="illustration-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
