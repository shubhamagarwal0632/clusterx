import React from "react";
import "./IntegrationCardsSection.css";

const cards = [
  {
    // title: "Slack Integration",
    // desc: "Connect your workflows to Slack for instant updates.",
    // button: "Connect"
  },
  {
    // title: "Google Calendar",
    // desc: "Sync events and reminders with Google Calendar.",
    // button: "Connect"
  },
  {
    // title: "Zoom Meetings",
    // desc: "Automate meeting scheduling and notifications.",
    // button: "Connect"
  }
];

const IntegrationCardsSection = () => (
  <section className="integrationcards-section" id="integrationcards">
    <h2>Integrate Where You Want</h2>
    <div className="integrationcards-grid">
      {cards.map((card, i) => (
        <div className="integrationcard" key={i}>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
          <button className="integrationcard-btn">{card.button}</button>
        </div>
      ))}
    </div>
  </section>
);

export default IntegrationCardsSection;
