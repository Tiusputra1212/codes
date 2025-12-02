// src/components/Header.jsx

import React from 'react';
// 💡 Gunakan Link dari react-router-dom
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../index.css';
import { useAuth } from '../contexts/AuthContext';
// Asumsikan path ini benar berdasarkan gambar file
import logo from '../assets/logo.png';

const Header = () => {
  const { currentUser, role, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi untuk smooth scroll ke section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Jika tidak di home page, navigate ke home dulu
      navigate('/');
      // Tunggu sebentar lalu scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di home page, langsung scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <header className="header">
      
      <div className="header-logo">
        <Link to="/"> 
          <img 
            src={logo} 
            alt="Codes Marketplace Logo" 
            className="logo-image"
          />
        </Link>
      </div>
      
      <nav className="header-nav">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link nav-button">Home</button>
        <button onClick={() => scrollToSection('about')} className="nav-link nav-button">Tentang Kami</button>
        <button onClick={() => scrollToSection('services')} className="nav-link nav-button">Layanan</button>
        <button onClick={() => scrollToSection('how-to-order')} className="nav-link nav-button">Proses Pemesanan</button>
      </nav>
    </header>
  );
};

export default Header;