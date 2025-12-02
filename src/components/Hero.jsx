// src/components/Hero.jsx

import React from 'react';
import '../index.css'; 

// 👇 Pastikan Anda mengimpor logo di sini
import logo from '../assets/logo2.png'; 

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        
        {/* 2. Judul Utama (h1) hanya berisi Logo */}
        <h1 className="hero-title">
          {/* Logo kini ditempatkan di sini */}
          <div className="logo-hero-container">
            <a href="/"> 
              <img 
                src={logo} 
                alt="Codes Marketplace Logo" 
                className="logo-image-hero"
              />
            </a>
          </div>
        </h1>
        
        {/* Sub-teks */}
        <p className="hero-subtitle">
          Platform terpercaya layanan pembuatan program.
        </p>
      </div>
    </div>
  );
};

export default Hero;