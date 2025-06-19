import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './StorePage.css';

// Sample data for AI agents
const aiAgents = [
  {
    id: 1,
    name: 'PenPrism',
    description: 'Unlock Creative Power Through Every Stroke with PenPrism Precision Tools.',
    category: 'Content Creation',
    pricing: 'Free + Paid',
    isFeatured: true
  },
  {
    id: 2,
    name: 'CodeCraft',
    description: 'AI-powered coding assistant that helps you write better code faster.',
    category: 'Development',
    pricing: 'Paid',
    isFeatured: true
  },
  {
    id: 3,
    name: 'DataSage',
    description: 'Transform your data into actionable insights with powerful analytics.',
    category: 'Analytics',
    pricing: 'Free + Paid',
    isFeatured: false
  },
  {
    id: 4,
    name: 'DesignGenie',
    description: 'Create stunning designs in minutes with AI-powered design tools.',
    category: 'Design',
    pricing: 'Paid',
    isFeatured: true
  },
  {
    id: 5,
    name: 'MarketMind',
    description: 'AI-powered market research and competitive analysis tool.',
    category: 'Marketing',
    pricing: 'Free',
    isFeatured: false
  },
  {
    id: 6,
    name: 'SupportBot',
    description: '24/7 AI customer support assistant for your business.',
    category: 'Support',
    pricing: 'Free + Paid',
    isFeatured: true
  }
];

const AgentCard = ({ agent }) => (
  <div className="agent-card">
    {agent.isFeatured && <span className="featured-tag">Featured</span>}
    <div className="agent-icon">
      <div className="icon-circle">
        <span>X</span>
      </div>
    </div>
    <h3 className="agent-name">{agent.name}</h3>
    <p className="agent-description">{agent.description}</p>
    <div className="agent-tags">
      <span className="category-tag">{agent.category}</span>
      <span className="pricing-tag">{agent.pricing}</span>
    </div>
    <div className="agent-arrow">
      <span>→</span>
    </div>
  </div>
);

const StorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const placeholderIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  
  const placeholderTexts = [
    'Search AI agents by name...',
    'Search AI agents by category...',
    'Search AI agents by description...'
  ];

  useEffect(() => {
    const typeEffect = () => {
      const currentText = placeholderTexts[placeholderIndexRef.current];
      
      if (isDeletingRef.current) {
        setPlaceholder(prev => prev.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
      } else {
        setPlaceholder(currentText.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
      }

      if (!isDeletingRef.current && charIndexRef.current === currentText.length) {
        isDeletingRef.current = true;
        setTimeout(typeEffect, 1500);
        return;
      }

      if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        placeholderIndexRef.current = (placeholderIndexRef.current + 1) % placeholderTexts.length;
        setTimeout(typeEffect, 1500);
        return;
      }

      const timeout = isDeletingRef.current ? 50 : 100;
      setTimeout(typeEffect, timeout);
    };

    const timer = setTimeout(typeEffect, 1500);
    return () => clearTimeout(timer);
  }, [placeholderTexts]);
  
  // Filter agents based on search query
  const filteredAgents = aiAgents.filter(agent => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      agent.name.toLowerCase().includes(query) ||
      agent.description.toLowerCase().includes(query) ||
      agent.category.toLowerCase().includes(query) ||
      agent.pricing.toLowerCase().includes(query)
    );
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is handled by the filteredAgents, so we just prevent form submission
  };

  return (
    <div className="store-page-container">
      <Header />
      <main className="store-container">
        <section className="hero-section">
          <div className="hero-content">
            
            <h1>
              <span className="gradient-text">ClusterX</span> AI Agents Hub
              <div className="highlight-line"></div>
            </h1>
            <h2>Powering Your <span className="highlight">Next-Gen</span> <span className="gradient-text">Productivity Stack</span></h2>
            <p className="hero-description">
              Discover, deploy, and manage powerful AI agents that transform your workflow. 
              <span className="highlight-line">Boost efficiency with our curated collection of intelligent tools.</span>
            </p>
            
            
            <form onSubmit={handleSearchSubmit} className="search-bar">
              <input 
                type="text" 
                placeholder={placeholder} 
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        <section className="agents-grid">
          {filteredAgents.length > 0 ? (
            filteredAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))
          ) : (
            <div className="no-results">
              <h3>No agents found matching "{searchQuery}"</h3>
              <p>Try adjusting your search or browse our full collection</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
