import React from 'react';
import './Store.css';

const Store = () => {
  return (
    <div className="page-container">
      <h1>TechZone Store</h1>
      <p>Explore our premium collection of futuristic gear and software modules.</p>
      <div className="placeholder-grid">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="placeholder-card">
            <div className="card-image-placeholder"></div>
            <h3>Module 0{i}</h3>
            <p>Advanced neural interface for seamless data transmission.</p>
            <button className="action-btn">Initialize Acquisition</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
