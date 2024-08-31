// src/components/Logo.js

import React from 'react';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="diamond">
        <div className="segment segment-1"></div>
        <div className="segment segment-2"></div>
        <div className="segment segment-3"></div>
        <div className="segment segment-4"></div>
      </div>
      <div className="text">
        <h1>HTML <span style = {{color:"#c98359"}}>&</span> CSS</h1>
        <p>design and build websites</p>
      </div>
    </div>
  );
};

export default Logo;