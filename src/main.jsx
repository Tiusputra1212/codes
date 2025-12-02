import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <--- PASTIKAN PATH INI BENAR
import './styles.css'; // Opsional: Pastikan file CSS tidak kosong atau menyebabkan crash

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <-- Komponen App harus ada di sini */}
  </React.StrictMode>,
); 