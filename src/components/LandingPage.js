import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="company-name">Green Haven</h1>
          <p className="company-description">
            Welcome to Green Haven, your premier destination for beautiful houseplants that bring life and tranquility to your home. 
            We specialize in carefully curated tropical plants, low-maintenance varieties, and stunning statement pieces that transform 
            any space into a lush, vibrant sanctuary. Our expert team ensures each plant is healthy, well-cared for, and ready to thrive 
            in your home environment. Whether you're a seasoned plant parent or just starting your green journey, we have the perfect 
            plants to help you create your own little piece of paradise.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
