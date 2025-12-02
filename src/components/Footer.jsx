// src/components/Footer.jsxs

import React from 'react';
import '../index.css'; // Tetap impor file CSS Anda

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Kolom 1: Informasi Hak Cipta & Logo */}
        <div className="footer-about">
          <h4 className="footer-logo">Codes Marketplace</h4>
          <p className="footer-tagline">
            Platform terpercaya untuk jual beli program & layanan pembuatan program.
          </p>
          <p className="footer-copyright">
            &copy; {currentYear} Codes Marketplace. All rights reserved.
          </p>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="footer-links">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Layanan Kami</a></li>
            <li><a href="/pricing">Harga</a></li>
            <li><a href="/contact">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Legal & Dukungan */}
        <div className="footer-links">
          <h4>Dukungan</h4>
          <ul>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Ketentuan Layanan</a></li>
            <li><a href="/">Kebijakan Privasi</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;