import './App.css';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksTimeline from './components/HowItWorksTimeline';
import IntegrateSection from './components/IntegrateSection';
// import IntegrationsSection from './components/IntegrationsSection';
import AISection from './components/AISection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
// import AIServicesSection from './components/AIServicesSection';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from "framer-motion";

import Loader from './components/Loader';
import './components/Loader.css';
import { useState, useEffect } from 'react';

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

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div className="fade-in">
          {/* Global Animated SVGs (uncomment if needed) */}
          {/* <motion.svg ...>...</motion.svg> */}
          <Header />
          <HeroSection />
          <FeaturesSection />
          <HowItWorksTimeline />
          <IntegrateSection />
          {/* <IntegrationsSection /> */}
          <AISection />
          {/* <AIServicesSection /> */}
          <BlogSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
