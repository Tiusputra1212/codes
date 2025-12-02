// src/contexts/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Data simulasi user (seharusnya dari database)
const mockUsers = [
  { id: 1, email: 'admin@codes.com', password: 'password123', role: 'admin', token: 'ADMIN_TOKEN_123' },
  { id: 2, email: 'user@codes.com', password: 'password123', role: 'user', token: 'USER_TOKEN_456' },
];

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // State untuk menyimpan data user yang sedang login
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);

  // Fungsi simulasi LOGIN
  const login = (email, password) => {
    const user = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setRole(user.role);
      // Dalam aplikasi nyata, token ini disimpan
      localStorage.setItem('user_token', user.token); 
      return { success: true, role: user.role };
    } else {
      return { success: false, message: 'Email atau password salah.' };
    }
  };

  // Fungsi registrasi dengan API
  const register = async (fullname, email, password) => {
    try {
      const response = await axios.post('http://localhost/backend/index.php/api/register', {
        fullname,
        email,
        password,
        role: 'user'
      });

      // Asumsi response.data berisi data user yang baru dibuat
      const user = response.data; // { id, email, fullname, role, token }

      setCurrentUser(user);
      setRole(user.role);
      localStorage.setItem('user_token', user.token);

      return { success: true, role: user.role };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Registrasi gagal.' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setRole(null);
    localStorage.removeItem('user_token');
  };

  const value = {
    currentUser,
    role,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};