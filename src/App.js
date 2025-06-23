  import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksTimeline from './components/HowItWorksTimeline';
import IntegrateSection from './components/IntegrateSection';
import AISection from './components/AISection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import TermsAndConditions from './components/TermsAndConditions';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import ContactUsPage from './pages/ContactUsPage';
import UserDetails from './pages/UserDetails';
import PodcastPage from './pages/PodcastPage';
import DiscoveryCallPage from './pages/DiscoveryCallPage';
import TeamPage from './pages/TeamPage';
import IndustryPage from './pages/IndustryPage';
import StorePage from './pages/StorePage';
import HealthcarePage from './pages/HealthcarePage';
import './components/Loader.css';

const MainContent = () => (
  <div className="fade-in">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksTimeline />
    <IntegrateSection />
    <AISection />
    <BlogSection />
    <TestimonialsSection />
    <FAQSection />
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    const setForceMobile = () => {
      if (window.screen && window.screen.width < 700) {
        document.body.classList.add('force-mobile');
      } else {
        document.body.classList.remove('force-mobile');
      }
    };
    setForceMobile();
    window.addEventListener('resize', setForceMobile);
    return () => window.removeEventListener('resize', setForceMobile);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/fatcamel-termsandconditions" element={<TermsAndConditions />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/discovery-call" element={<DiscoveryCallPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
