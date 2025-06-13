import React from 'react';
import './AIServicesSection.css';

const AIServicesSection = () => {
  const services = [
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows."
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed to address your specific business challenges."
    },
    {
      title: "AI Strategy & Consulting",
      description: "Expert guidance to develop and implement an effective AI strategy for your business."
    }
  ];

  return (
    <section className="ai-services">
      <div className="container">
        <div className="section-header">
          <h2>AI Services</h2>
          <p>Transform your business with our comprehensive AI solutions</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
