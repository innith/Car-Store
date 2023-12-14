// components/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container " id='home'>
      <div className="image-container">
        <img src={require('../images/hero-img.png') } alt="Hero" className="hero-image" />
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -40 100 100"
      preserveAspectRatio="none"
      className="shape-svg"
    >
      <polygon points="-100,0 -400,-100 600,100" fill="black" />
    </svg>
        <div className="text-overlay">
          <h1>Welcome to Timeless Wheels</h1>
          <p>We produce the finest retro style cars in the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
