import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 
import HomePage from "./pages/HomePage"; 
import Header from './components/Header'; 
// 👇 PERBAIKAN 1: Ubah 'footer' menjadi 'Footer' dan pastikan path benar
// Berdasarkan gambar struktur folder, file Anda adalah 'Footer.jsx' (huruf F besar)
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Kontainer utama aplikasi */}
        <div className="App">
          
          {/* Header (Muncul di semua halaman) */}
          <Header />
          
          <Routes>
            {/* Halaman Beranda (Path: /) */}
            <Route path="/" element={<HomePage />} /> 
            {/* Tambahkan Route lain di sini jika ada halaman lain (e.g., /about, /profile) */}
          </Routes>
          
          {/* 👇 PENEMPATAN: Tambahkan Footer di sini (Muncul di semua halaman) */}
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;