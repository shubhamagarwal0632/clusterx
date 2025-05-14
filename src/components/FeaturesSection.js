import React from "react";
import "./FeaturesSection.css";

import featureAutomate from '../assets/feature-automate.svg';
import integrateSVG from '../assets/feature-integrate.svg';
import syncSVG from '../assets/feature-sync.svg';

const features = [
  {
    icon: featureAutomate,
    title: "Automate Workflows",
    desc: "Continuous Optimization"
  },
  {
    icon: integrateSVG,
    title: "Seamless Integrations",
    desc: "Always aligned with latest tech"
  },
  {
    icon: syncSVG,
    title: "Real-Time Sync",
    desc: "Weekly calls + expert input"
  }
];

const FeaturesSection = () => (
  <section className="features-section" id="industry">
    <h2 data-aos="fade-up">Don't let systems slow you down</h2>
    <div className="features-grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
          <div className="feature-icon"><img src={f.icon} alt={f.title + ' icon'} width={48} height={48} /></div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
