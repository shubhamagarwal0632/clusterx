import React from "react";
import "./AiPartnerSection.css";

const offers = [
  "Continuous Optimization",
  "Always aligned with latest tech",
  "Weekly calls + expert input",
  "you gain a strategic partner",
  "Evolving roadmap as your needs grow",
];

const AiPartnerSection = () => (
  <section className="aipartner-section" id="offers">
    <div className="aipartner-label"><span style={{ color: '#ff6a2f', fontWeight: 700 }}>●</span> OFFERS</div>
    <h2>Ai partner, Not a builder</h2>
    <p>AI is not static. With us, you get more than implementation you get ongoing leverage.</p>
    <div className="aipartner-offer-card">
      <div className="aipartner-offer-content">
        <h3>Cluserx</h3>
        <ul className="aipartner-offer-list">
          {offers.map((item, idx) => (
            <li key={idx}><span className="aipartner-check">✓</span> {item}</li>
          ))}
        </ul>
      </div>
      <div className="aipartner-vertical-divider">
        <div className="aipartner-divider-dot">|||</div>
      </div>
    </div>
  </section>
);

export default AiPartnerSection;
