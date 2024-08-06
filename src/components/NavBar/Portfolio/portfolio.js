import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project">
        <h3>EcoGuide - AI Chatbot for Sustainable Purchasing</h3>
        <p>Developed an AI chatbot using IBM Watson Assistant to offer eco-friendly product information and recycling tips. Integrated into a web interface and optimized through rigorous testing.</p>
        <p>Technologies Used: IBM Watson Assistant, HTML, CSS, JavaScript</p>
      </div>
      <div className="project">
        <h3>Functional Gym E-commerce Website</h3>
        <p>Created an e-commerce site with features for product listings, availability checks, and staff contact. Designed a responsive, user-friendly interface with consistent navigation.</p>
        <p>Technologies Used: HTML, CSS, JavaScript</p>
      </div>
      <div className="project">
        <h3>Food Ordering Website / Web App using React JS</h3>
        <p>Developed a food ordering app with React JS, featuring a Home page, Cart page, and Order page. Added Sign In/Sign Up functionality and integrated an IBM Watson Assistant chatbot for user support.</p>
        <p>Technologies Used: React JS, HTML, CSS, JavaScript, IBM Watson Assistant</p>
      </div>
    </section>
  );
};

export default Portfolio;
