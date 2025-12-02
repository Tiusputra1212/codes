import React, { useState } from 'react';
// 👇 Impor Link dari react-router-dom untuk tombol CTA
import { Link } from 'react-router-dom';
import '../index.css';

// --- Sub-Komponen untuk setiap Kartu Layanan ---
const ServiceCard = ({ title, description, features }) => (
  <div className="service-card">
    <h3>{title}</h3>

    <p className="card-description">{description}</p>

    <ul className="card-features">
      {features.map((feature, index) => (
        <li key={index}>
          <span>✓</span> {feature}
        </li>
      ))}
    </ul>
  </div>
);

// --- Komponen Utama Section (Layanan, Tentang Kami, Proses, Kontak) ---
const ServicesSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    programmingLanguage: '',
    programmingType: '',
    workflow: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, saya ingin memesan program dengan detail berikut:

Nama: ${formData.name}
Bahasa Pemrograman: ${formData.programmingLanguage}
Jenis Program: ${formData.programmingType}
Alur Kerja: ${formData.workflow}

Mohon konfirmasi dan informasi lebih lanjut.`;

    const whatsappUrl = `https://wa.me/6282247011652?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form after submission
    setFormData({
      name: '',
      programmingLanguage: '',
      programmingType: '',
      workflow: ''
    });
  };

  const customSoftwareFeatures = [

  ];

  const programMarketplaceFeatures = [

  ];
  

  return (
    <> 
      {/* ======================================================= */}
      {/* 1. SECTION LAYANAN UTAMA (id="services") */}
      {/* ======================================================= */}
      <section id="services" className="services-section">

        <div className="max-w-7xl mx-auto">

          <h2>
            Layanan Utama Joki Program
          </h2>

          <div className="cards-container">
            <ServiceCard
              title="Jasa Pembuatan Program Kustom"
              description="Solusi perangkat lunak yang disesuaikan untuk kebutuhan tugas atau bisnis Anda, dikerjakan oleh developer ahli."
              features={customSoftwareFeatures}
            />

            <ServiceCard
              title="Proyek Mendesak (Deadline Ketat)"
              description="Penanganan cepat untuk tugas-tugas dengan batas waktu yang sempit tanpa mengorbankan kualitas dan fungsionalitas."
              features={programMarketplaceFeatures}
            />
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2. SECTION TENTANG KAMI (id="about") - JOKI PROGRAM */}
      {/* ======================================================= */}
      <section id="about" className="about-section">
        <div className="max-w-7xl mx-auto">

          <h2>
            Tentang Kami: Jasa Joki Program Profesional
          </h2>

          <p>
            Kami adalah penyedia jasa penyelesaian tugas, proyek, dan assignment program profesional yang mengutamakan kualitas kode, ketepatan waktu, dan kerahasiaan klien.
          </p>

          <div className="about-content">

            {/* Kolom Kiri: Teks & Misi Joki */}
            <div className="about-text">
              <h3>
                Mengapa Memilih Jasa Kami?
              </h3>
              <p>
                Platform kami didukung oleh tim programmer berpengalaman di berbagai bahasa pemrograman. Kami bukan hanya menyelesaikan tugas; kami menyediakan solusi yang teruji dan rapi, memastikan Anda mendapatkan nilai terbaik dan hasil yang sesuai dengan semua instruksi akademik atau bisnis.
              </p>

              <ul className="about-features">
                <li>Kerahasiaan Data: Identitas dan tugas klien terjamin 100% aman.</li>
                <li>Kualitas Kode: Hasil program yang berfungsi penuh, terstruktur, dan berorientasi objek (jika relevan).</li>
                <li>Tepat Waktu: Komitmen ketat terhadap *deadline* yang diberikan.</li>
              </ul>
            </div>

            {/* Kolom Kanan: Visual/Illustrasi */}
            <div className="about-visual">
              <div className="visual-container">
                <span className="emoji">✨</span>
                <h4>
                  Solusi Pemrograman Tanpa Stress
                </h4>
                <p>
                  Fokus pada studi atau bisnis Anda, biarkan kami yang mengurus kodenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 3. SECTION PROSES PEMESANAN (id="how-to-order") - BARU & MENARIK */}
      {/* ======================================================= */}
      <section id="how-to-order" className="how-to-order-section">
        <div className="max-w-7xl mx-auto">

          <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-steps">

              {/* Langkah 1: Klik Pesan */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-left">
                    <div className="step-header">
                      <h4 className="step-title">Pesan & Konsultasi</h4>
                    </div>
                    <p className="step-description">Klik tombol Pesan di bawah atau hubungi kami melalui WhatsApp untuk memulai konsultasi gratis.</p>
                  </div>
                  <div className="step-number">1</div>
                </div>
              </div>

              {/* Langkah 2: Jelaskan Program */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-right">
                    <div className="step-header">
                      <h4 className="step-title">Jelaskan Program Anda</h4>
                    </div>
                    <p className="step-description">Berikan detail lengkap, instruksi, dan *deadline* proyek. Tim kami akan melakukan analisis.</p>
                  </div>
                  <div className="step-number">2</div>
                </div>
              </div>

              {/* Langkah 3: Bayar Uang Muka 50% */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-left">
                    <div className="step-header">
                      <h4 className="step-title">Konfirmasi & DP 50%</h4>
                    </div>
                    <p className="step-description">Setelah harga disepakati, bayar Uang Muka (Down Payment) sebesar 50% untuk memulai pengerjaan.</p>
                  </div>
                  <div className="step-number">3</div>
                </div>
              </div>

              {/* Langkah 4: Tunggu Pengerjaan */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-right">
                    <div className="step-header">
                      <h4 className="step-title">Proses Pengerjaan (1-5 Hari)</h4>
                    </div>
                    <p className="step-description">Developer kami akan mulai mengerjakan kode sesuai spesifikasi. Anda akan menerima pembaruan berkala.</p>
                  </div>
                  <div className="step-number">4</div>
                </div>
              </div>

              {/* Langkah 5: Program Selesai (Notifikasi) */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-left">
                    <div className="step-header">
                      <h4 className="step-title">Pemberitahuan Selesai</h4>
                    </div>
                    <p className="step-description">Kami akan memberitahu Anda bahwa program sudah selesai dan siap untuk ditinjau.</p>
                  </div>
                  <div className="step-number">5</div>
                </div>
              </div>

              {/* Langkah 6: Pelunasan Sisa 50% */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-right">
                    <div className="step-header">
                      <h4 className="step-title">Pembayaran Pelunasan 50%</h4>
                    </div>
                    <p className="step-description">Lakukan pelunasan sisa pembayaran 50% setelah Anda menyetujui hasil pengerjaan.</p>
                  </div>
                  <div className="step-number">6</div>
                </div>
              </div>

              {/* Langkah 7: Serah Terima Program */}
              <div className="process-step">
                <div className="process-step-content">
                  <div className="process-step-left">
                    <div className="step-header">
                      <h4 className="step-title">Serah Terima Program</h4>
                    </div>
                    <p className="step-description">Program, *source code* lengkap, dan dokumentasi akan diberikan kepada Anda. *Support* tersedia 24 jam.</p>
                  </div>
                  <div className="step-number">7</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4. SECTION FORM PEMESANAN (id="order-form") */}
      {/* ======================================================= */}
      <section id="order-form" className="order-form-section">
        <div className="max-w-4xl mx-auto">
          <h2>
            Formulir Pemesanan Program
          </h2>
          <p>
            Isi formulir di bawah ini untuk memulai pemesanan program Anda. Kami akan segera menghubungi Anda melalui WhatsApp.
          </p>

          <form className="order-form" onSubmit={handleOrderSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="programmingLanguage">Bahasa Pemrograman</label>
              <select
                id="programmingLanguage"
                name="programmingLanguage"
                value={formData.programmingLanguage}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih bahasa pemrograman</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="PHP">PHP</option>
                <option value="Ruby">Ruby</option>
                <option value="Go">Go</option>
                <option value="Swift">Swift</option>
                <option value="Kotlin">Kotlin</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="programmingType">Jenis Program</label>
              <select
                id="programmingType"
                name="programmingType"
                value={formData.programmingType}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih jenis program</option>
                <option value="Desktop Application">Aplikasi Desktop</option>
                <option value="Web Application">Aplikasi Web</option>
                <option value="Mobile Application">Aplikasi Mobile</option>
                <option value="Game Development">Pengembangan Game</option>
                <option value="Data Analysis">Analisis Data</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Database">Basis Data</option>
                <option value="API Development">Pengembangan API</option>
                <option value="Automation Script">Script Otomasi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="workflow">Alur Kerja Program</label>
              <textarea
                id="workflow"
                name="workflow"
                value={formData.workflow}
                onChange={handleInputChange}
                placeholder="Jelaskan secara detail alur kerja program yang Anda inginkan, fitur-fitur yang diperlukan, dan spesifikasi lainnya..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Kirim Pesanan
            </button>
          </form>
        </div>
      </section>

    </>
  );
};

// --- Sub-Komponen untuk Tampilan Proses Pemesanan (Timeline) ---
// Komponen ini disembunyikan di sini karena React tidak mengizinkan sub-komponen dalam fungsi utama
const ProcessStep = ({ number, title, description, icon, isLeft }) => (
  <div className="relative md:flex items-center w-full">
    {/* Konten Langkah (Kiri atau Kanan) */}
    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
      <div className="bg-indigo-800 p-6 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.02] border-t-4 border-yellow-400/80">
        <h4 className="text-xl font-bold mb-2 flex items-center">
          <span className="text-yellow-400 text-2xl mr-3">{icon}</span> {title}
        </h4>
        <p className="text-indigo-200">{description}</p>
      </div>
    </div>

    {/* Lingkaran Angka di Tengah */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
      <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full border-4 border-indigo-700 shadow-2xl">
        <span className="text-xl font-bold text-gray-900">{number}</span>
      </div>
    </div>
    
    {/* Spacer untuk Mobile (membuat timeline vertikal) */}
    <div className="md:hidden h-8 w-0.5 bg-indigo-500/50 absolute left-4 z-0"></div>
    <div className="md:hidden absolute left-2 top-0">
        <div className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full border-2 border-indigo-700 shadow-xl">
          <span className="text-md font-bold text-gray-900">{number}</span>
        </div>
    </div>
  </div>
);

export default ServicesSection;