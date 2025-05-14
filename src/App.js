import './App.css';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import IntegrationsSection from './components/IntegrationsSection';
import AISection from './components/AISection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Global scroll-based animation for SVGs
  const { scrollY } = useScroll();
  const globalFloat1 = useTransform(scrollY, [0, 1000], [0, 120]);
  const globalFloat2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const globalFloat3 = useTransform(scrollY, [0, 1000], [0, 60]);

  return (
    <div className="App">
      {/* Global Animated SVGs */}
      <motion.svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'fixed', left: 20, top: 120, zIndex: 0, y: globalFloat1, pointerEvents: 'none' }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.6, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, type: "spring" }}>
        <ellipse cx="30" cy="30" rx="26" ry="12" fill="#fffde7" stroke="#ffd600" strokeWidth="2" />
        <circle cx="30" cy="30" r="6" fill="#ffd600" />
      </motion.svg>
      <motion.svg width="48" height="48" viewBox="0 0 48 48" style={{ position: 'fixed', right: 40, top: 200, zIndex: 0, y: globalFloat2, pointerEvents: 'none' }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, type: "spring" }}>
        <rect x="10" y="10" width="28" height="28" rx="10" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" fill="#1976d2" />
      </motion.svg>
      <motion.svg width="54" height="54" viewBox="0 0 54 54" style={{ position: 'fixed', left: 120, bottom: 80, zIndex: 0, y: globalFloat3, pointerEvents: 'none' }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ duration: 1.3, delay: 0.4, type: "spring" }}>
        <ellipse cx="27" cy="40" rx="20" ry="8" fill="#e1bee7" stroke="#8e24aa" strokeWidth="2" />
        <rect x="17" y="10" width="20" height="20" rx="10" fill="#8e24aa" />
      </motion.svg>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <AISection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
