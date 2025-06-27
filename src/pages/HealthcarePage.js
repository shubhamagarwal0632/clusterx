import React, { useState } from 'react';
import styles from './HealthcarePage.module.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';



const HealthcarePage = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const AccordionItem = ({ id, title, content, isOpen, toggle }) => {
        return (
            <div className={styles['solution-item-hp']}>
                <button className={styles['solution-item-header-hp']} onClick={() => toggle(id)}>
                    {title}
                    <span>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                    <div className={styles['solution-item-content-hp']}>
                        <p>{content}</p>
                    </div>
                )}
            </div>
        );
    };

    const solutionItems = [
        { id: 1, title: 'Integrated AI Approach', content: 'Our platform integrates multiple AI models to address various aspects of clinical workflows, from patient intake to discharge planning.' },
        { id: 2, title: 'Predictive Analytics', content: 'Leveraging historical data, our system predicts patient admissions, resource needs, and potential health risks, allowing for proactive interventions.' },
        { id: 3, title: 'Real-time Decision Support', content: 'Clinicians receive AI-powered insights and recommendations directly within their workflow, enabling faster, more informed decisions.' },
    ];

    return (
        <div className={styles['healthcare-page-new']}>
            {/* Hero Section */}
            <section className={styles['hero-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['grid-hp']}`}>
                    <div className={styles['hero-text-hp']}>
                        <h1><span style={{color: '#FF6B6B'}}>Clusterx:</span> Transforming Clinical Workflows</h1>
                        <p className={styles['subtitle-hp']}>How our AI-powered solutions helped a major hospital network streamline operations and improve patient outcomes.</p>
                        <div className={styles['hero-stats-hp']}>
                            <div className={styles['stat-item-hp']}><strong>Client</strong><span>Healthcare</span></div>
                            <div className={styles['stat-item-hp']}><strong>Year</strong><span>2023</span></div>
                            <div className={styles['stat-item-hp']}><strong>Service</strong><span>AI Development</span></div>
                        </div>
                    </div>
                    <div className={styles['hero-image-container-hp']}>
                        <img src="https://images.unsplash.com/photo-1537368910025-700350796527?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Doctor with tablet" className={styles['hero-image-hp']} />
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className={styles['challenge-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['grid-hp']}`}>
                    <div className={styles['challenge-image-container-hp']}>
                        <img src="https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medical team collaborating" className={styles['challenge-image-hp']} />
                    </div>
                    <div className={styles['challenge-content-hp']}>
                        <h2>The Challenge</h2>
                        <p>A leading hospital network was struggling with inefficient clinical workflows, leading to delays in patient care, physician burnout, and increased operational costs.</p>
                        <div className={styles['challenge-list-hp']}>
                            <div className={styles['challenge-item-hp']}>
                                <h3>Data Overload</h3>
                                <p>Clinicians were overwhelmed by the sheer volume of data from various sources, making it difficult to extract actionable insights.</p>
                            </div>
                            <div className={styles['challenge-item-hp']}>
                                <h3>Physician Burnout</h3>
                                <p>Repetitive administrative tasks were consuming a significant portion of clinicians' time, contributing to stress and burnout.</p>
                            </div>
                            <div className={styles['challenge-item-hp']}>
                                <h3>Patient Flow Inefficiency</h3>
                                <p>Bottlenecks in patient flow, from admission to discharge, resulted in long wait times and suboptimal resource utilization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className={styles['solution-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['grid-hp']}`}>
                    <div className={styles['solution-content-hp']}>
                        <h2>The Solution</h2>
                        <p>Clusterx developed a suite of AI-powered tools to automate administrative tasks, predict patient needs, and provide real-time decision support to clinical staff.</p>
                        <div className={styles['solution-accordion-hp']}>
                            {solutionItems.map(item => (
                                <AccordionItem 
                                    key={item.id} 
                                    {...item} 
                                    isOpen={openAccordion === item.id} 
                                    toggle={toggleAccordion} 
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles['solution-image-container-hp']}>
                        <img src="https://images.unsplash.com/photo-1614926857224-5179b784ca46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI diagnostics" className={styles['solution-image-hp']} />
                        <div className={styles['timeline-box-hp']}>
                            <h4>Implementation Timeline</h4>
                            <p>The project was delivered in 6 months, from initial consultation to full-scale deployment.</p>
                            <a href="#">View Project Timeline <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className={styles['features-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['text-center-hp']}`}>
                    <h2>Key Features</h2>
                    <p className={styles['section-subtitle-hp']}>Our AI solutions are designed to integrate seamlessly into existing hospital systems, providing a powerful yet intuitive user experience for clinical staff.</p>
                    
                    <div className={styles['features-grid-hp']}>
                        {[
                            { id: '01', title: 'Smart Appointments & Triage', description: 'AI-powered scheduling and triage system that optimizes appointments.' },
                            { id: '02', title: 'Real-time Bed Management', description: 'Predictive analytics for bed availability, reducing wait times.' },
                            { id: '03', title: 'AI-powered Diagnosis', description: 'Advanced imaging analysis and diagnostic support for clinicians.' },
                            { id: '04', title: 'EHR Data Automation', description: 'Automated data entry and retrieval from Electronic Health Records.' },
                            { id: '05', title: 'Clinical Trial Matching', description: 'AI algorithms to match eligible patients with clinical trials.' },
                            { id: '06', title: 'Personalized Patient Care', description: 'Data-driven insights to create personalized treatment plans.' },
                        ].map(feature => (
                            <div className={styles['feature-card-hp']} key={feature.id}>
                                <div className={styles['feature-card-id-hp']}>{feature.id}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact & Results Section */}
            <section className={styles['impact-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['text-center-hp']}`}>
                    <h2>Impact & Results</h2>
                    <p className={styles['section-subtitle-hp']}>The implementation of Clusterx's AI solutions resulted in significant improvements across key performance indicators.</p>
                    <div className={styles['impact-grid-hp']}>
                        <div className={styles['impact-card-hp']}>
                            <h2>76%</h2>
                            <h4>Reduction</h4>
                            <p>in administrative tasks for clinicians</p>
                        </div>
                        <div className={styles['impact-card-hp']}>
                            <h2>32%</h2>
                            <h4>Improvement</h4>
                            <p>in patient throughput</p>
                        </div>
                        <div className={styles['impact-card-hp']}>
                            <h2>$2.4M</h2>
                            <h4>Annual Savings</h4>
                            <p>in operational costs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className={styles['conclusion-section-hp']}>
                <div className={`${styles['container-hp']} ${styles['grid-hp']}`}>
                    <div className={styles['conclusion-content-hp']}>
                        <h2>Conclusion</h2>
                        <p>By leveraging the power of AI, Clusterx enabled the hospital network to transform its clinical workflows, leading to a more efficient, effective, and sustainable healthcare delivery system.</p>
                        <ul className={styles['conclusion-list-hp']}>
                            <li className={styles['conclusion-item-hp']}><FaCheckCircle className={styles['check-icon-hp']} /> AI-driven efficiency gains</li>
                            <li className={styles['conclusion-item-hp']}><FaCheckCircle className={styles['check-icon-hp']} /> Enhanced patient care quality</li>
                            <li className={styles['conclusion-item-hp']}><FaCheckCircle className={styles['check-icon-hp']} /> Reduced operational costs</li>
                            <li className={styles['conclusion-item-hp']}><FaCheckCircle className={styles['check-icon-hp']} /> Improved clinician satisfaction</li>
                            <li className={styles['conclusion-item-hp']}><FaCheckCircle className={styles['check-icon-hp']} /> Scalable for future growth</li>
                        </ul>
                        <div className={styles['conclusion-actions-hp']}>
                            <button className={styles['primary-btn-hp']}>View Project</button>
                            <button className={styles['secondary-btn-hp']}>Contact Us</button>
                        </div>
                    </div>
                    <div className={styles['conclusion-image-container-hp']}>
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Happy client" className={styles['conclusion-image-hp']} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthcarePage;
