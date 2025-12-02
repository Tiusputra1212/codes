import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Diperlukan untuk mendeteksi perubahan URL
import ServicesSection from '../components/ServicesSection.jsx'; 
import Hero from '../components/Hero.jsx';
// Import komponen lain yang digunakan di Homepage (seperti Contexts jika diperlukan)
// import { useAuth } from '../contexts/AuthContext'; 

function HomePage() {
  const location = useLocation();

  // Efek untuk mengelola Scroll Halaman (Top of Page dan Hash Links)
  useEffect(() => {
    const hash = location.hash;
    
    // 1. Logika Scroll ke Atas (untuk tautan "Home")
    // Setiap kali pathname berubah (navigasi ke /) DAN tidak ada hash, 
    // atau ketika tombol 'Home' diklik lagi (dengan mengandalkan location.key untuk navigasi ulang)
    // kita akan memaksanya ke atas.
    if (location.pathname === '/' && (!hash || hash === '')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return; // Hentikan eksekusi selanjutnya jika kita sudah scroll ke atas
    } 
    
    // 2. Logika Scroll ke Hash (#services)
    // Jika ada hash (misalnya #services) yang dimuat
    if (hash) {
      // Hilangkan '#' untuk mendapatkan ID elemen
      const targetId = hash.substring(1); 
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Gulir ke elemen target
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Jika hash ada tapi elemen tidak ditemukan (misalnya, #invalid), tetap gulir ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    
  }, [location.pathname, location.hash]); // Dipicu saat pathname atau hash berubah

  return (
    <> 
      <main>
        {/* Hero component (biasanya bagian paling atas, sehingga scroll ke atas berfungsi baik) */}
        <Hero /> 
        
        {/* ServicesSection (Pastikan komponen ini memiliki id="services") */}
        <ServicesSection /> 
        
        {/* ... Tambahkan komponen lain di sini ... */}
      </main>
    </>
  );
}

export default HomePage;