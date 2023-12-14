import React from 'react';
import '../styles/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        At Timeless Wheels, we are passionate about bringing back the beauty and
        elegance of retro style cars. Our cars are designed with a blend of
        classic aesthetics and modern engineering, making them stand out on the
        road.
      </p>
      <div className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Timeless and Classic Designs</li>
          <li>High-Quality Craftsmanship</li>
          <li>Advanced Engineering and Performance</li>
          <li>Customization Options</li>
          <li>Excellent Customer Support</li>
        </ul>
      </div>
      <div className="company-points">
        <h2>Why Choose Timeless Wheels?</h2>
        <p>
          Timeless Wheels is dedicated to preserving the legacy of iconic retro cars while infusing them with modern innovations. Our cars are a testament to the artistry of automotive history, crafted with attention to detail and precision. We take pride in providing our customers with not just a car, but a time-honored masterpiece that reflects their individuality.
        </p>
      </div>
    </div>
  );
};

export default About;
