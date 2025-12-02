import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <<< Tambahkan useNavigate
import { useAuth } from '../contexts/AuthContext';
import '../index.css';

const RegisterForm = ({ onRegisterSuccess }) => {
    // Pastikan Anda telah mengimpor useNavigate dari 'react-router-dom'
    const navigate = useNavigate();
    const { register } = useAuth();
    
    // UBAH state 'name' menjadi 'fullname' agar sinkron dengan AuthContext
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => { // <<< Ubah menjadi async
        e.preventDefault();
        setError('');
        setMessage('');

        if (password !== confirmPassword) {
            setError('Kata sandi dan konfirmasi kata sandi tidak cocok.');
            return;
        }

        setLoading(true);

        try {
            // Panggil fungsi register dari AuthContext
            const response = await register(fullname, email, password); 

            if (response.success) {
                setMessage('Registrasi berhasil! Mengarahkan ke halaman masuk...');
                
                // Panggil callback (opsional, jika Anda menggunakannya)
                if (onRegisterSuccess) {
                    onRegisterSuccess(); 
                }

                // Arahkan ke halaman login
                setTimeout(() => {
                    navigate('/loginform'); // Sesuaikan path jika berbeda (e.g., '/login')
                }, 1500);

            } else {
                // Tangani error yang dikembalikan dari AuthContext
                setError(response.message || 'Gagal mendaftar. Silakan cek koneksi Anda.');
            }

        } catch (err) {
            // Ini akan menangani error lain yang mungkin terjadi
            setError('Terjadi kesalahan saat berkomunikasi dengan server.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-form">
            <h2> Daftar Akun </h2>
            {error && <p className="auth-error">{error}</p>}
            {message && <p className="auth-success">{message}</p>}
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    // UBAH value dan onChange ke fullname
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Alamat Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Kata Sandi (min. 6 karakter)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                />
                <input
                    type="password"
                    placeholder="Konfirmasi Kata Sandi"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength="6"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
                </button>
            </form>
            <p className="auth-footer">
                Sudah punya akun? <Link to="/loginform">Masuk di sini</Link>
            </p>
        </div>
    );
};

export default RegisterForm;