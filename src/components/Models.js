// components/Models.js
import React from 'react';
import '../styles/Models.css'; // Import the CSS file
import car1 from '../images/car1.jpg';

const carsData = [
  {
    id: 1,
    title: 'Ford Model T (1908)',
    description: 'Revolutionizing the automobile industry, the Ford Model T, affectionately called the "Tin Lizzie," brought motoring to the masses through assembly line production, making cars affordable and accessible, while leaving an indelible mark on 20th-century transportation.',
    image: 'car1.jpg',
  },
  {
    id: 2,
    title: 'Rolls-Royce Phantom (1925)',
    description: 'Exuding opulence and craftsmanship, the Rolls-Royce Phantom, often referred to as the "Best Car in the World," epitomized luxury and elegance, catering to the elite with unrivaled engineering and exquisite design, becoming the pinnacle of automotive excellence.',
    image: 'car2.jpg',
  },
  {
    id: 3,
    title: 'Volkswagen Beetle (1938-2003)',
    description: 'The iconic "People\'s Car" that survived a World War and became a symbol of counterculture, representing simplicity, affordability, and sheer resilience on wheels.',
    image: 'car3.jpg',
  },
  {
    id: 4,
    title: 'Ford Mustang (1964-present)',
    description: "Galloping into the hearts of Americans, the Mustang revolutionized the muscle car industry, defining the 'pony car' class and inspiring generations with its power, style, and spirit of freedom.",
    image: 'car4.jpg',
  },
  {
    id: 5,
    title: 'Citroën 2CV (1948-1990)',
    description: 'A humble, utilitarian masterpiece, the 2CV was a symbol of post-war resilience and simplicity, endearing millions with its charm and becoming an icon of French automotive history.',
    image: 'car5.jpg',
  },
  {
    id: 6,
    title: 'Mini Cooper (1959-present)',
    description: 'Pint-sized and packed with personality, the Mini Cooper captured hearts with its British charm, redefining urban mobility and influencing the design of compact cars for decades to come.',
    image: 'car6.jpg',
  },
  // Add more car data as needed
];

const Models = () => {
  return (
    <div className="models-container">
      <h1>Our Models</h1>
      <div className="models-grid">
        {carsData.map((car) => (
          <div key={car.id} className="car-item">
            <img src={require(`../images/${car.image}`)} alt={car.title} />
            <h3>{car.title}</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
